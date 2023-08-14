<script setup lang="ts">
import { Total } from "../../models/Total";

import { formatPrice } from "../../helpers/formatters";

defineProps<Total>();
</script>

<template>
  <p
    class="flex justify-between items-center py-3 border-t border-gray-light last-of-type:pb-0"
  >
    <span class="text-sm md:text-lg font-semibold">{{ title }}</span>
    <span
      class="text-sm font-semibold"
      :class="{ 'text-gray-light': !price }"
      >{{ formatPrice(price) }}</span
    >
  </p>
</template>
