import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: '../../apps/api/schema.gql',
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
