<script lang="ts" setup>
import type { ScrollAreaRootProps } from "reka-ui";
import type { HTMLAttributes } from "vue";

import { ScrollAreaRoot } from "reka-ui";

const props = withDefaults(
  defineProps<
    ScrollAreaRootProps & {
      /** Orientation for scrolling */
      orientation?: "vertical" | "horizontal";
      /** Custom class(es) to add to the parent */
      class?: HTMLAttributes["class"];
    }
  >(),
  {
    orientation: "vertical",
  },
);
const forwarded = reactiveOmit(props, "class");
const styles = tv({
  base: "relative",
});
</script>

<template>
  <ScrollAreaRoot
    data-slot="scroll-area"
    v-bind="forwarded"
    :class="styles({ class: props.class })">
    <UiScrollAreaViewport>
      <slot />
    </UiScrollAreaViewport>
    <UiScrollAreaScrollbar :orientation="orientation" />
    <UiScrollAreaCorner />
  </ScrollAreaRoot>
</template>
