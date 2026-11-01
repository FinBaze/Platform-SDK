import {
  SdkAdvanceTestClockDocument,
  SdkCreateTestClockDocument,
  SdkDeleteTestClockDocument,
  SdkPlatformSandboxSettingsDocument,
  SdkResetPlatformSandboxDocument,
  SdkSeedTestCompanyDocument,
  SdkTestClocksDocument,
  SdkUpdatePlatformSandboxSettingsDocument,
  type SandboxResetMode,
  type TestCompanyTemplate,
} from '../../generated/graphql.js';
import type { FinbazeHttpClient, RequestOptions } from '../../http.js';

/** Simulated time for sandbox companies. Sandbox keys only. */
export class TestClocks {
  constructor(private readonly http: FinbazeHttpClient) {}

  async list() {
    const data = await this.http.request(SdkTestClocksDocument, {});
    return data.testClocks;
  }

  /** `frozenTime` is an ISO 8601 timestamp; the clock moves only through `advance`. */
  async create(params: { name: string; frozenTime: string }, options?: RequestOptions) {
    const data = await this.http.request(SdkCreateTestClockDocument, params, undefined, options);
    return data.createTestClock;
  }

  /**
   * Moves the clock to `to`, day by day, running the per-company jobs. Returns at once with status `advancing`; the
   * webhooks `test_clock.ready` and `test_clock.failed` report the end.
   */
  async advance(id: string, params: { to: string; submitFilings?: boolean; closeFinancialYear?: boolean }, options?: RequestOptions) {
    const { to, ...flags } = params;
    const hasOptions = flags.submitFilings !== undefined || flags.closeFinancialYear !== undefined;
    const data = await this.http.request(SdkAdvanceTestClockDocument, { id, to, options: hasOptions ? flags : undefined }, undefined, options);
    return data.advanceTestClock;
  }

  /** Deletes the clock and its companies. */
  async delete(id: string, options?: RequestOptions) {
    const data = await this.http.request(SdkDeleteTestClockDocument, { id }, undefined, options);
    return data.deleteTestClock;
  }
}

export type SeedTestCompanyParams = {
  template: TestCompanyTemplate;
  /** Your id for the company. Default: a stable id per template, so seeding again returns the same company. */
  externalId?: string;
  testClockId?: string;
  /** Keep the company when the sandbox is reset. */
  preserve?: boolean;
  /** Platform users who get admin access to the company. */
  users?: string[];
};

export class SandboxSettings {
  constructor(private readonly http: FinbazeHttpClient) {}

  async retrieve() {
    const data = await this.http.request(SdkPlatformSandboxSettingsDocument, {});
    return data.platformSandboxSettings;
  }

  /** `sandboxReset` `nightly` resets the sandbox companies every night and seeds `sandboxSeedTemplates` again. */
  async update(settings: { sandboxReset?: SandboxResetMode; sandboxSeedTemplates?: TestCompanyTemplate[] }, options?: RequestOptions) {
    const data = await this.http.request(SdkUpdatePlatformSandboxSettingsDocument, { input: settings }, undefined, options);
    return data.updatePlatformSandboxSettings;
  }
}

/** Test clocks, seeded test companies and the sandbox reset (Wave 5.5). */
export class Sandbox {
  readonly testClocks: TestClocks;
  readonly settings: SandboxSettings;

  constructor(private readonly http: FinbazeHttpClient) {
    this.testClocks = new TestClocks(http);
    this.settings = new SandboxSettings(http);
  }

  /** Creates (or returns again) a ready-made company from a template, optionally on a test clock. */
  async seedTestCompany(params: SeedTestCompanyParams, options?: RequestOptions) {
    const data = await this.http.request(SdkSeedTestCompanyDocument, { input: params }, undefined, options);
    return data.seedTestCompany;
  }

  /** Deletes every sandbox company that is not `preserve`, deletes empty test clocks and seeds the configured templates again. */
  async resetSandbox(options?: RequestOptions) {
    const data = await this.http.request(SdkResetPlatformSandboxDocument, {}, undefined, options);
    return data.resetPlatformSandbox;
  }
}
