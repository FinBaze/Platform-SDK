import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  // In the monorepo the schema is two levels up; FINBAZE_SCHEMA overrides it.
  schema: process.env.FINBAZE_SCHEMA ?? '../../apps/api/schema.gql',
  documents: ['src/operations/**/*.graphql'],
  ignoreNoDocuments: true,
  generates: {
    './src/generated/': {
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
  },
};

export default config;
