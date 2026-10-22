export class FinbazeError extends Error {
  /** From the `X-Request-Id` response header, when the API sets one. */
  requestId?: string;

  constructor(message: string, opts?: { requestId?: string }) {
    super(message);
    this.name = 'FinbazeError';
    this.requestId = opts?.requestId;
  }
}

export type FinbazeGraphQLErrorDetail = {
  message: string;
  path?: ReadonlyArray<string | number>;
  extensions?: { code?: string; [key: string]: unknown };
};

export class FinbazeGraphQLError extends FinbazeError {
  readonly status: number;
  readonly errors: ReadonlyArray<FinbazeGraphQLErrorDetail>;

  constructor(
    errors: ReadonlyArray<FinbazeGraphQLErrorDetail>,
    status: number,
    opts?: { requestId?: string },
  ) {
    super(errors[0]?.message ?? `GraphQL request failed with HTTP ${status}`, opts);
    this.name = 'FinbazeGraphQLError';
    this.errors = errors;
    this.status = status;
  }

  /** `extensions.code` of the first error, e.g. `FEATURE_DISABLED`, `EMBED_FEATURE_DISABLED`, `BAD_USER_INPUT`. */
  get code(): string | undefined {
    const first = this.errors[0]?.extensions;
    const nested = (first?.originalError as { code?: string } | undefined)?.code;
    return first?.code ?? nested;
  }

  /** The argument a `BAD_USER_INPUT` error is about. */
  get param(): string | undefined {
    const value = this.errors[0]?.extensions?.param;
    return typeof value === 'string' ? value : undefined;
  }

  get docUrl(): string | undefined {
    const value = this.errors[0]?.extensions?.docUrl;
    return typeof value === 'string' ? value : undefined;
  }
}

export class FinbazeAuthenticationError extends FinbazeError {
  constructor(message: string, opts?: { requestId?: string }) {
    super(message, opts);
    this.name = 'FinbazeAuthenticationError';
  }
}

export class FinbazeRateLimitError extends FinbazeError {
  readonly retryAfterSeconds?: number;

  constructor(message: string, opts?: { retryAfterSeconds?: number; requestId?: string }) {
    super(message, opts);
    this.name = 'FinbazeRateLimitError';
    this.retryAfterSeconds = opts?.retryAfterSeconds;
  }
}

export class FinbazeSignatureVerificationError extends FinbazeError {
  constructor(message: string) {
    super(message);
    this.name = 'FinbazeSignatureVerificationError';
  }
}
