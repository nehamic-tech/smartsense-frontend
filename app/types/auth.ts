export type User = {
  email: string;
  name: string;
  lastName: string;
  slug: string;
  tier: string;
  accountId: string;
  tenantId: string;
};

export type LoginCredentials = {
  email: string;
  password: string;
  tenant: string;
  remember?: boolean;
};

export type LoginResponse = {
  data: {
    token: string;
    validUntil: string;
  };
};

export type JWTPayload = {
  "email": string;
  "name": string;
  "last-name": string;
  "tenant-slug": string;
  "tier": string;
  "account-id": string;
  "tenant-id": string;
};
