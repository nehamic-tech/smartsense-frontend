<script lang="ts" setup>
import type { SignUpSchemaType } from "~/types/form-schemas";

import { SignUpSchema } from "~/types/form-schemas";

const { t } = useI18n();
const router = useRouter();

const title = t("signup.title");
const description = t("signup.description");

useSeoMeta({ title, description });

const { handleSubmit, isSubmitting, meta } = useForm<SignUpSchemaType>({
  validationSchema: SignUpSchema,
});

const submit = handleSubmit(async (values) => {
  try {
    await $fetch("/api/register", {
      method: "POST",
      body: values,
    });

    useSonner.success($t("sonner.success"), {
      description: $t("auth.signup.success"),
    });
    setTimeout(() => {
      router.push("/signup/complete");
    }, 3000);
  }
  catch (error: any) {
    const description = typeof error?.data === "string"
      ? error.data
      : error?.data?.detail || error?.statusMessage || "Please try again.";

    useSonner.error("Registration failed", { description });
  }
});

const { value: acceptTerms } = useField("acceptTerms", undefined, { initialValue: false });
</script>

<template>
  <div class="flex h-screen items-start md:items-center justify-center overflow-auto">
    <div class="w-full md:w-1/2">
      <div class="mx-auto w-full max-w-[600px] px-5">
        <h1 class="text-2xl font-bold tracking-tight lg:text-3xl">
          {{ title }}
        </h1>
        <p class="mt-1 text-muted-foreground">
          {{ description }}
        </p>

        <form class="mt-10" @submit.prevent="submit">
          <fieldset :disabled="isSubmitting" class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <!-- Row 1: name and last_name -->
            <div class="col-span-1">
              <UiVeeInput required :label="$t('signup.frm.name')" name="name" placeholder="" />
            </div>
            <div class="col-span-1">
              <UiVeeInput required :label="$t('signup.frm.lastname')" name="last_name" placeholder="" />
            </div>

            <!-- Row 2: email (span both columns) -->
            <div class="col-span-1 sm:col-span-2">
              <UiVeeInput
                required
                :label="$t('signup.frm.email')"
                type="email"
                name="email"
                placeholder="john@example.com" />
            </div>

            <!-- Row 3: password and confirm_password -->
            <div class="col-span-1">
              <UiVeeInput required :label="$t('signup.frm.password')" type="password" name="password" />
            </div>
            <div class="col-span-1">
              <UiVeeInput required :label="$t('signup.frm.confirm_password')" type="password" name="confirm_password" />
            </div>

            <!-- Row 4: tenant and slug -->
            <div class="col-span-1">
              <UiVeeInput required :label="$t('signup.frm.tenant')" name="tenant" />
            </div>
            <div class="col-span-1">
              <UiVeeInput required :label="$t('signup.frm.slug')" name="slug" />
            </div>

            <!-- Row 5: terms (span both columns) -->
            <div class="col-span-1 sm:col-span-2">
              <div class="flex items-center gap-2">
                <UiCheckbox id="checkbox-terms" v-model="acceptTerms" />
                <UiLabel for="checkbox-terms">
                  <span class="mt-0.5 ml-2">{{ $t('signup.frm.tos') }} <a href="#" class="text-primary underline">{{ $t('signup.frm.tos_link') }}</a></span>
                </UiLabel>
              </div>
            </div>

            <!-- Submit button (span both columns) -->
            <div class="col-span-1 sm:col-span-2">
              <UiButton v-wave :loading="isSubmitting" class="w-full" type="submit" :text="$t('signup.frm.action.ok')" :disabled="!acceptTerms || isSubmitting || !meta.valid" />
            </div>
          </fieldset>
        </form>
        <p class="mt-8 text-sm text-muted-foreground">
          {{ $t("signup.frm.action.login") }}
          <NuxtLink class="font-semibold text-primary underline-offset-2 hover:underline" to="/login">
            {{ $t("signup.frm.action.login_link") }}
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
