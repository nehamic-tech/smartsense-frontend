import type { LoginCredentials } from "~/types/auth";
import type { ApplicationError } from "~/types/errors";

import { errorize } from "../../shared/utils/error-handling";

export default defineEventHandler(async (event): Promise<{ token: string | null; error: ApplicationError | null }> => {
  const body = (await readBody(event)) as LoginCredentials;
  const runtime = useRuntimeConfig();

  if (!runtime.apiUrl) {
    return { token: null, error: createError({ statusCode: 500, statusMessage: "Tenant API not configured on server" }) };
  }

  try {
    const payload = {
      email: body.email,
      password: body.password,
      tenantSlug: body.tenant,
    };

    // ✅ Use typed $fetch instead of $fetch.raw
    const response = await $fetch<{ value: { token: string; validUntil: string } }>(
      `${runtime.apiUrl}/iam-api/login/`,
      {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      },
    );

    const data = response.value;

    if (!data?.token || !data.validUntil) {
      throw createError({ statusCode: 500, statusMessage: "Invalid login response" });
    }

    const rememberMe = !!body.remember;
    if (rememberMe) {
      const validUntilDate = new Date(data.validUntil);
      const maxAgeSeconds = Math.floor((validUntilDate.getTime() - Date.now()) / 1000);

      setCookie(event, "auth-token", data.token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: maxAgeSeconds,
        path: "/",
      });
    }
    else {
      setCookie(event, "auth-token", data.token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        path: "/",
      });
    }
    return { token: data.token, error: null };
  }
  catch (err: any) {
    const error = errorize(err.response._data);
    return { token: null, error };
  }
},
);
