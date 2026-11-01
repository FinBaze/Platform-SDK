import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  // In the monorepo the schema is two levels up; FINBAZE_SCHEMA overrides it.
  schema: process.env.FINBAZE_SCHEMA ?? '../../apps/api/schema.gql',
  ignoreNoDocuments: true,
  generates: {
    './src/generated/': {
      documents: ['src/operations/**/*.graphql'],
      preset: 'client',
      presetConfig: {
        fragmentMasking: false,
      },
      config: {
        useTypeImports: true,
        scalars: {
          DateTime: 'string',
          ConnectionCursor: 'string',
          JSON: 'Record<string, unknown>',
          JSONObject: 'Record<string, unknown>',
        },
      },
    },
    // Every platform-reachable operation (scripts/generate-operations.ts), kept out of the core bundle.
    './src/operations-generated/types.ts': {
      documents: ['src/operations-generated/operations.graphql'],
      plugins: ['typescript-operations', 'typed-document-node'],
      config: {
        useTypeImports: true,
        // Only the enums and inputs the operations use: keeps the file (and the bundle) a fraction of the schema.
        onlyOperationTypes: true,
        scalars: {
          DateTime: 'string',
          ConnectionCursor: 'string',
          JSON: 'Record<string, unknown>',
          JSONObject: 'Record<string, unknown>',
        },
      },
    },
  },
};

export default config;
