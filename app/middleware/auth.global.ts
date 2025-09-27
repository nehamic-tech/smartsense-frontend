// import { storeToRefs } from "pinia";

export default defineNuxtRouteMiddleware(async (to) => {
  const auth = useAuthStore();
  const token = useCookie("auth-token");
  const { hydrateStore } = auth;

  // not authenticated can be because the store is refreshed or the user really is not authenticated
  if (!auth.isAuthenticated) {
    // Wait until store is initialized (after login)
    if (token.value != null) {
      await hydrateStore(token.value);
    }
  }

  const authPages = ["/login", "/signup"];

  if (auth.isAuthenticated && authPages.includes(to.path)) {
    return navigateTo("/dashboard");
  }

  const requiresAuth = Boolean(to.meta?.requiresAuth);
  if (requiresAuth && !auth.isAuthenticated) {
    return navigateTo(`/login?redirect=${encodeURIComponent(to.fullPath)}`);
  }
});
