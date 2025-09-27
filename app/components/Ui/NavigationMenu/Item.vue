<script lang="ts" setup>
import type { NavigationMenuItemProps } from "reka-ui";
import type { HTMLAttributes } from "vue";

import { NavigationMenuItem } from "reka-ui";

const props = defineProps<
  NavigationMenuItemProps & {
    class?: HTMLAttributes["class"];
  }
>();

const styles = tv({ base: "relative" });
</script>

<template>
  <NavigationMenuItem
    :class="styles({ class: props.class })"
    data-slot="navigation-menu-item"
    v-bind="props">
    <slot />
  </NavigationMenuItem>
</template>
