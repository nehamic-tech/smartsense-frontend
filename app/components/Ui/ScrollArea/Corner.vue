<script lang="ts" setup>
import type { ScrollAreaCornerProps } from "reka-ui";

import { ScrollAreaCorner } from "reka-ui";

const props = defineProps<ScrollAreaCornerProps>();
</script>

<template>
  <ScrollAreaCorner data-slot="scroll-area-corner" v-bind="props">
    <slot />
  </ScrollAreaCorner>
</template>
