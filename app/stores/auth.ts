// stores/auth.ts
import { jwtDecode } from "jwt-decode";

import type { JWTPayload, LoginCredentials, User } from "~/types/auth";
import type { ApplicationError } from "~/types/errors";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null);
  const error = ref<ApplicationError | null>(null);
  const isAuthenticated = computed(() => !!user.value);
  const isInitialized = ref(false);

  const hydrateUserFromToken = (token: string): User | null => {
    const payloadDecoded = jwtDecode<JWTPayload>(token);

    if (!payloadDecoded)
      return null;

    const user: User = {
      email: payloadDecoded.email,
      name: payloadDecoded.name,
      lastName: payloadDecoded["last-name"],
      slug: payloadDecoded["tenant-slug"],
      tier: payloadDecoded.tier,
      accountId: payloadDecoded["account-id"],
      tenantId: payloadDecoded["tenant-id"],
    };
    return user;
  };

  const login = async (credentials: LoginCredentials): Promise<void> => {
    const response = await $fetch<{ token: string | null; error: ApplicationError | null }>("/api/login", {
      method: "POST",
      body: credentials,
    });

    if (response.error) {
      user.value = null;
      error.value = response.error;
    }
    else {
      error.value = null;
      user.value = hydrateUserFromToken(response.token!);
    }
  };

  const hydrateStore = async (token: string): Promise<void> => {
    isInitialized.value = true;
    error.value = null;
    user.value = hydrateUserFromToken(token);
  };

  const logout = async (): Promise<void> => {
    await $fetch("/api/logout", { method: "POST", credentials: "include" });
    user.value = null;
    error.value = null;
    isInitialized.value = false;
  };

  return {
    error,
    user,
    isAuthenticated,
    isInitialized,
    hydrateStore,
    login,
    logout,
  };
});
