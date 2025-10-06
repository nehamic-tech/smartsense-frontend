<script lang="ts">
import type { Primitive, PrimitiveProps } from "reka-ui";
import type { HTMLAttributes } from "vue";

import { useForwardProps } from "reka-ui";

export const sideBarGroupStyles = tv({
  base: "relative flex w-full min-w-0 flex-col p-2",
});
</script>

<script setup lang="ts">
const props = defineProps<
  PrimitiveProps & {
    /**
     * Additional classes to apply to the parent element.
     */
    class?: HTMLAttributes["class"];
  }
>();

const forwarded = useForwardProps(reactiveOmit(props, ["class"]));
</script>

<template>
  <Primitive
    data-slot="sidebar-group"
    data-sidebar="group"
    :class="sideBarGroupStyles({ class: props.class })"
    v-bind="forwarded">
    <slot />
  </Primitive>
</template>
