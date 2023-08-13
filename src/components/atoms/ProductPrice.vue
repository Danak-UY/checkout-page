<script setup lang="ts">
import { formatPrice } from "../../helpers/formatters";

const props = defineProps<{
  currentPrice: number;
  prevPrice?: number;
}>();

const { currentPrice, prevPrice } = props;

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
