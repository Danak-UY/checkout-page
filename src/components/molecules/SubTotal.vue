<script setup lang="ts">
import CostDetailLine from "../atoms/CostDetailLine.vue";
import { Total } from "../../models/Total";

defineProps<{ totals: Total[] }>();
</script>

<template>
  <CostDetailLine
    v-for="total in totals"
    :key="total.title"
    :title="total.title"
    :price="total.price"
  />
</template>
