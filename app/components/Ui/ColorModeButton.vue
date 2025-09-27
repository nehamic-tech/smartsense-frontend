<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(_isDark) {
    colorMode.preference = _isDark ? "dark" : "light";
  },
});
</script>

<template>
  <ClientOnly v-if="!colorMode?.forced">
    <UiButton
      v-wave
      size="icon" variant="ghost"
      :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
      @click="isDark = !isDark">
      <Icon class="size-4" :name="isDark ? 'i-lucide-moon' : 'i-lucide-sun'" />
    </UiButton>

    <template #fallback>
      <div class="size-8" />
    </template>
  </ClientOnly>
</template>
