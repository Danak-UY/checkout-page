<script setup lang="ts">
import { formatPrice } from "../../helpers/formatters";
import { Total } from "../../models/Total";

const props = defineProps<Total>();

const { price } = props;
const priceFormatted = formatPrice(price);
</script>

<template>
  <p
    class="flex justify-between items-center py-3 border-t border-gray-light last-of-type:pb-0"
  >
    <span class="text-lg font-semibold">{{ title }}</span>

    <span class="text-sm font-semibold">{{ priceFormatted }}</span>
  </p>
</template>
