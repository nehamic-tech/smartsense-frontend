<script lang="ts" setup>
const { t } = useI18n();

const title = t("complete.title");
const description = t("complete.description");

useSeoMeta({ title, description });
const COMPANY_NAME = "SmartSense";
</script>

<template>
  <div>
    <div class="relative flex h-screen items-center justify-center">
      <div
        class="absolute inset-0 z-[1] bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [mask-image:radial-gradient(circle,transparent_25%,var(--color-border)_100%)] bg-[size:100px_100px]" />
      <div class="relative z-[2] w-full max-w-[340px] px-5">
        <div
          class="mx-auto mb-6 flex size-14 items-center justify-center rounded-lg border bg-background">
          <Icon class="size-6" name="lucide:mail" />
        </div>

        <div class="flex flex-col items-center text-center">
          <h1 class="text-2xl font-bold tracking-tight lg:text-3xl">
            {{ title }}
          </h1>
          <p class="mt-1 text-muted-foreground">
            {{ description }}
          </p>
        </div>

        <div class="mt-10">
          <UiButton v-wave to="#" class="w-full" type="submit">
            <Icon class="size-5" name="lucide:arrow-left" />
            <span>{{ t("complete.instructions") }}</span>
          </UiButton>
        </div>
        <div class="flex flex-row items-center justify-center gap-3">
          <p class="mt-8 text-center text-sm">
            <NuxtLink class="font-semibold text-primary underline-offset-2 hover:underline" to="/">
              {{ t("complete.home") }}
            </NuxtLink>
          </p>
          <p class="mt-8 text-center text-sm">
            <NuxtLink class="font-semibold text-primary underline-offset-2 hover:underline" to="/login">
              {{ t("complete.login") }}
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
    <footer>
      <UiContainer as="footer" class="">
        <section class="mt-12 flex flex-col justify-between gap-5 border-t pt-8 lg:mt-16 lg:flex-row">
          <NuxtLink to="#" class="flex items-center gap-3">
            <img
              src="/icon.png"
              fit="contain"
              alt="Company Logo"
              title="Company Logo"
              class="h-6 object-contain lg:h-8">
            <span class="text-lg font-semibold">{{ COMPANY_NAME }}</span>
          </NuxtLink>
          <p class="text-muted-foreground">
            &copy; {{ new Date().getFullYear() }} {{ COMPANY_NAME }}. All rights reserved.
          </p>
        </section>
      </UiContainer>
    </footer>
  </div>
</template>
