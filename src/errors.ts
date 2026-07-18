export class FinbazeError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'FinbazeError';
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
  ) {
    super(errors[0]?.message ?? `GraphQL request failed with HTTP ${status}`);
    this.name = 'FinbazeGraphQLError';
    this.errors = errors;
    this.status = status;
  }

  get code(): string | undefined {
    return this.errors[0]?.extensions?.code;
  }
}

export class FinbazeAuthenticationError extends FinbazeError {
  constructor(message: string) {
    super(message);
    this.name = 'FinbazeAuthenticationError';
  }
}
