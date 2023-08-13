<script setup lang="ts">
import CostDetailLine from "../atoms/CostDetailLine.vue";
import { Total } from "../../models/Total";

defineProps<{ totals: Total[] }>();
</script>

<template>
  <div>
    <CostDetailLine
      v-for="total in totals"
      :title="total.title"
      :price="total.price"
    />
  </div>
</template>
