<script lang="ts" setup>
import type { NavigationMenuSubEmits, NavigationMenuSubProps } from "reka-ui";

import { NavigationMenuSub, useForwardPropsEmits } from "reka-ui";

const props = defineProps<NavigationMenuSubProps>();
const emits = defineEmits<NavigationMenuSubEmits>();
const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <NavigationMenuSub data-slot="navigation-menu-sub" v-bind="forwarded">
    <slot />
  </NavigationMenuSub>
</template>
