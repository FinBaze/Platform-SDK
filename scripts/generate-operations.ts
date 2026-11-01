/**
 * Writes one GraphQL operation per root field a platform key or token can reach, selecting
 * scalar fields to depth 2 (connections as `edges { node }` + `pageInfo`). The output
 * (`src/operations-generated/operations.graphql`) is committed so a schema change shows up as a diff;
 * `npm run codegen` turns it into typed documents (`src/operations-generated/types.ts`).
 *
 *   FINBAZE_SCHEMA=../../apps/api/schema.gql FINBAZE_SCOPE_MAP=../../apps/api/dist/scope-map.json tsx scripts/generate-operations.ts
 *
 * The scope map comes from `apps/api/scripts/export-scope-map.ts`.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { pascalCase } from 'change-case-all';
import {
  buildSchema,
  getNamedType,
  isEnumType,
  isInterfaceType,
  isListType,
  isNonNullType,
  isObjectType,
  isScalarType,
  isUnionType,
  type GraphQLField,
  type GraphQLObjectType,
  type GraphQLType,
} from 'graphql';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const schemaPath = process.env.FINBAZE_SCHEMA ?? join(root, '../../apps/api/schema.gql');
const scopeMapPath = process.env.FINBAZE_SCOPE_MAP ?? join(root, '../../apps/api/dist/scope-map.json');

import { existsSync } from 'node:fs';

if (!existsSync(scopeMapPath)) {
  // Without the API build there is nothing to regenerate from; the committed operations.graphql is used as is.
  console.log(`No scope map at ${scopeMapPath}; keeping the committed operations.`);
  process.exit(0);
}

type Entry = { kind: 'query' | 'mutation'; scope: string | null; featureKey: string | null; platformOnly: boolean };
const scopeMap = JSON.parse(readFileSync(scopeMapPath, 'utf8')) as { fields: Record<string, Entry> };
const schema = buildSchema(readFileSync(schemaPath, 'utf8'));

/** Never part of the public SDK, whatever scope they carry. */
const EXCLUDE = /^(admin|firm|enterprise|bookkeeper|internal|superadmin|developer|marketplace|agent|automation|mcp|oauth|billing|public)/i;
/** Fields in these scalar/enum-free shapes are skipped to keep documents small and stable. */
const MAX_DEPTH = 2;

const typeString = (t: GraphQLType): string => (isNonNullType(t) ? `${typeString(t.ofType)}!` : isListType(t) ? `[${typeString(t.ofType)}]` : t.toString());
const hasRequiredArgs = (f: GraphQLField<unknown, unknown>) => f.args.some((a) => isNonNullType(a.type) && a.defaultValue === undefined);

function selection(type: GraphQLObjectType, depth: number): string {
  const lines: string[] = [];
  for (const field of Object.values(type.getFields())) {
    const named = getNamedType(field.type);
    if (hasRequiredArgs(field)) continue;
    if (isScalarType(named) || isEnumType(named)) {
      lines.push(field.name);
    } else if (isObjectType(named) && depth < MAX_DEPTH) {
      // Connections and fields with optional arguments are left to hand-written operations.
      if (field.args.length > 0) continue;
      const inner = selection(named, depth + 1);
      if (inner) lines.push(`${field.name} { ${inner} }`);
    }
  }
  return lines.join(' ');
}

function rootSelection(field: GraphQLField<unknown, unknown>): string {
  const named = getNamedType(field.type);
  if (isScalarType(named) || isEnumType(named)) return '';
  if (isUnionType(named) || isInterfaceType(named)) return '{ __typename }';
  if (!isObjectType(named)) return '';
  const fields = named.getFields();
  if (fields.edges) {
    const edge = getNamedType(fields.edges.type);
    const node = isObjectType(edge) ? getNamedType(edge.getFields().node?.type ?? edge) : null;
    const nodeSelection = node && isObjectType(node) && node !== edge ? selection(node, 1) : '';
    // Relay-style connections have pageInfo; the platform's have hasMore / nextCursor.
    const paging = [fields.pageInfo ? 'pageInfo { hasNextPage endCursor }' : '', fields.hasMore ? 'hasMore' : '', fields.nextCursor ? 'nextCursor' : ''].filter(Boolean).join(' ');
    return `{ edges { node { ${nodeSelection || '__typename'} } } ${paging} }`;
  }
  const body = selection(named, 1);
  return `{ ${body || '__typename'} }`;
}

/** Same casing codegen applies to operation names (`OpTAXFiling` → `OpTaxFiling`). */
const pascal = (s: string) => pascalCase(`Op${s}`).slice(2);
const out: string[] = [];
const names: string[] = [];

for (const [kind, rootType] of [['query', schema.getQueryType()], ['mutation', schema.getMutationType()]] as const) {
  for (const [name, field] of Object.entries(rootType?.getFields() ?? {})) {
    const entry = scopeMap.fields[name];
    if (EXCLUDE.test(name) || !entry || !(entry.platformOnly || entry.scope || /^(embedContext|onboardingRequirements)$/.test(name))) continue;
    const opName = `Op${pascal(name)}`;
    const vars = field.args.map((a) => `$${a.name}: ${typeString(a.type)}${a.defaultValue !== undefined ? '' : ''}`);
    const args = field.args.map((a) => `${a.name}: $${a.name}`);
    const head = `${kind} ${opName}${vars.length ? `(${vars.join(', ')})` : ''}`;
    out.push(`${head} {\n  ${name}${args.length ? `(${args.join(', ')})` : ''} ${rootSelection(field)}\n}\n`);
    names.push(name);
  }
}

const dir = join(root, 'src/operations-generated');
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, 'operations.graphql'), out.join('\n'));
const kinds = new Map<string, 'query' | 'mutation'>();
for (const n of names) kinds.set(n, scopeMap.fields[n]!.kind);
const docName = (n: string) => `Op${pascal(n)}Document`;
const varsName = (n: string) => `Op${pascal(n)}${kinds.get(n) === 'query' ? 'Query' : 'Mutation'}Variables`;
writeFileSync(
  join(dir, 'index.ts'),
  `// Generated by scripts/generate-operations.ts. Do not edit.\n` +
    `import type { GraphQLApi } from '../graphql-client.js';\nimport {\n${names.map((n) => `  ${docName(n)},\n  type ${varsName(n)},`).join('\n')}\n} from './types.js';\n\n` +
    `/** Every operation a platform key or token can reach, typed: \`operations(finbaze).salesInvoices({ ... })\`. */\n` +
    `export function operations(client: { graphql: GraphQLApi }) {\n  return {\n` +
    names
      .map((n) => {
        const field = (kinds.get(n) === 'query' ? schema.getQueryType() : schema.getMutationType())!.getFields()[n]!;
        const required = field.args.some((a) => isNonNullType(a.type) && a.defaultValue === undefined);
        return `    ${n}: (variables${required ? '' : '?'}: ${varsName(n)}) => client.graphql.request(${docName(n)}, variables as ${varsName(n)}),`;
      })
      .join('\n') +
    `\n  };\n}\n`,
);
console.log(`wrote ${names.length} operations`);
