<script lang="ts" setup>
import { useRoute } from "#imports";

import type { LoginSchemaType } from "~/types/form-schemas";

import { useAuthStore } from "~/stores/auth";
import { LoginSchema } from "~/types/form-schemas";

useSeoMeta({
  title: "Log in",
  description: "Enter your email & password to log in.",
});

const authStore = useAuthStore();
const route = useRoute();
const redirectTo = (route.query.redirect as string) ?? "/dashboard";

const { handleSubmit, isSubmitting } = useForm<LoginSchemaType>({
  validationSchema: LoginSchema,
});

const submit = handleSubmit(async (values) => {
  await authStore.login(values);

  const error = authStore.error;
  if (!error) {
    useSonner.success($t("sonner.success"), {
      description: $t("login.sonner.success"),
    });
    await navigateTo(redirectTo);
  }
  else {
    useSonner.error($t("sonner.error"), {
      description: $t("login.sonner.error"),
    });
  }
});
</script>

<template>
  <div class="flex h-screen items-center justify-between">
    <div class="w-full md:w-1/2">
      <div class="mx-auto w-full max-w-[330px] px-5">
        <h1 class="text-2xl font-bold tracking-tight lg:text-3xl">
          Log in
        </h1>
        <p class="mt-1 text-muted-foreground">
          Enter your email & password to log in.
        </p>
        <form class="mt-10" @submit="submit">
          <fieldset :disabled="isSubmitting" class="grid gap-3">
            <UiVeeInput label="Email" type="email" name="email" placeholder="john@example.com" />
            <UiVeeInput label="Password" type="password" name="password" />
            <UiVeeInput label="Tenant" type="text" name="tenant" placeholder="acme" />
            <div class="flex items-start justify-between">
              <UiVeeCheckbox label="Remember me" name="remember" />
              <NuxtLink class="text-sm font-medium text-primary underline underline-offset-2" to="#">
                Forgot password?
              </NuxtLink>
            </div>
            <UiButton v-wave :loading="isSubmitting" class="w-full" type="submit" text="Log in" />
          </fieldset>
        </form>

        <p class="mt-6 text-sm text-muted-foreground">
          Don't have an account?
          <NuxtLink class="font-semibold text-primary underline-offset-2 hover:underline" to="/signup">
            Create account
          </NuxtLink>
        </p>
      </div>
    </div>
    <div class="hidden h-screen md:block md:w-1/2 lg:w-1/2">
      <NuxtImg
        src="https://images.unsplash.com/photo-1512551980832-13df02babc9e?q=60&w=2864&auto=format&fit=crop"
        alt="Login form image"
        class="size-full object-cover"
        format="webp"
        quality="80"
        loading="lazy" />
    </div>
  </div>
</template>
