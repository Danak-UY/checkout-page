<script setup lang="ts">
import { formatPrice } from "../../helpers/formatters";

const { currentPrice, prevPrice } = defineProps<{
  currentPrice: number;
  prevPrice?: number;
}>();

const currentPriceFormatted = formatPrice(currentPrice);
const prevPriceFormatted = formatPrice(prevPrice);
</script>

<template>
  <p class="flex gap-2 items-center">
    <span class="text-orange-neutral text-base font-semibold">{{
      currentPriceFormatted
    }}</span>

    <del :if="prevPrice" class="text-sm font-semibold">{{
      prevPriceFormatted
    }}</del>
  </p>
</template>
