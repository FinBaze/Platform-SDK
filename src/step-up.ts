export type StepUpAlgorithm = 'ES256' | 'EdDSA' | 'RS256';

export type StepUpChallengeInput = {
  /** `stepUp.id` of `step_up.required`, or `stepUpChallenge.id`. */
  id: string;
  nonce: string;
  action: string;
};

export type SignStepUpParams = {
  challenge: StepUpChallengeInput;
  /** Your platform's public id (`plt_…`): the `iss` claim. */
  issuer: string;
  /** The `externalUserId` of the user who confirmed: the `sub` claim. */
  subject: string;
  /** Private key as PEM (PKCS#8) or a JWK. Its public half must be in the JWKS you registered. */
  privateKey: string | Record<string, unknown>;
  algorithm?: StepUpAlgorithm;
  /** Key id in the JWKS, sent as `kid`. */
  keyId?: string;
  /** How the user confirmed, for example `['face']`, `['pin']`, `['fpt']`, `['otp']`. At least one. */
  amr: string[];
  /** Seconds the assertion lives. FinBaze accepts at most a few minutes. Default 120. */
  ttlSeconds?: number;
  now?: Date;
};

const b64url = (input: Buffer | string) =>
  (typeof input === 'string' ? Buffer.from(input) : input).toString('base64url');

/**
 * Signs the assertion FinBaze asks for when a high-risk action needs the user's confirmation.
 * Returns the value of the `FinBaze-Step-Up` header: `<challengeId>.<jws>`. Node only (uses `node:crypto`).
 */
export async function signStepUp(params: SignStepUpParams): Promise<string> {
  if (params.amr.length === 0) throw new Error('amr needs at least one method');
  const alg = params.algorithm ?? 'ES256';
  const { createPrivateKey, sign } = await import('node:crypto');
  const key =
    typeof params.privateKey === 'string'
      ? createPrivateKey(params.privateKey)
      : createPrivateKey({ key: params.privateKey as never, format: 'jwk' });

  const iat = Math.floor((params.now ?? new Date()).getTime() / 1000);
  const header = { alg, typ: 'JWT', ...(params.keyId ? { kid: params.keyId } : {}) };
  const claims = {
    iss: params.issuer,
    sub: params.subject,
    aud: 'finbaze',
    iat,
    exp: iat + (params.ttlSeconds ?? 120),
    challenge_id: params.challenge.id,
    nonce: params.challenge.nonce,
    action: params.challenge.action,
    amr: params.amr,
  };
  const signingInput = `${b64url(JSON.stringify(header))}.${b64url(JSON.stringify(claims))}`;
  const signature =
    alg === 'EdDSA'
      ? sign(null, Buffer.from(signingInput), key)
      : alg === 'ES256'
        ? sign('sha256', Buffer.from(signingInput), { key, dsaEncoding: 'ieee-p1363' })
        : sign('sha256', Buffer.from(signingInput), key);
  return `${params.challenge.id}.${signingInput}.${b64url(signature)}`;
}
