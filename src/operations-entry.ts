/**
 * Every operation a platform key or token can reach, typed. A separate entry point so the
 * core bundle does not carry them:
 *
 *   import { operations } from '@finbaze/platform-sdk/operations';
 *   const ops = operations(finbaze);
 *   const company = await ops.platformCompany({ externalId: 'acme-1' });
 */
export { operations } from './operations-generated/index.js';
export * from './operations-generated/types.js';
