<script lang="ts" setup>
import type { PrimitiveProps } from "reka-ui";
import type { HTMLAttributes } from "vue";

import { Primitive } from "reka-ui";

const props = withDefaults(
  defineProps<
    PrimitiveProps & {
      /** Custom class(es) to add to parent element */
      class?: HTMLAttributes["class"];
    }
  >(),
  {
    as: "div",
  },
);
const forwarded = reactiveOmit(props, "class");
const styles = tv({
  base: "mt-auto flex flex-col gap-2 p-4",
});
</script>

<template>
  <Primitive data-slot="sheet-footer" :class="styles({ class: props.class })" v-bind="forwarded">
    <slot />
  </Primitive>
</template>
