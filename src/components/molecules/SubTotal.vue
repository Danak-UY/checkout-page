<script setup lang="ts">
import CostDetailLine from "../atoms/CostDetailLine.vue";
import { Total } from "../../models/Total";

const props = defineProps<{ totals: Total[] }>();

console.log(props.totals);
</script>

<template>
  <CostDetailLine
    v-for="total in totals"
    :title="total.title"
    :price="total.price"
  />
</template>
