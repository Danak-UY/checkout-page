<script setup lang="ts">
import ProductoPrice from "../atoms/ProductPrice.vue";
import Picture from "../atoms/Picture.vue";
import ProductTitle from "../atoms/ProductTitle.vue";
import { Product } from "../../models/Product";

defineProps<Product>();
</script>

<template>
  <article class="flex gap-5">
    <Picture :url="image" class="max-w-[8rem]" />
    <div class="flex flex-col grow">
      <ProductTitle>{{ name }}</ProductTitle>
      <ProductoPrice :currentPrice="currentPrice" :prevPrice="prevPrice" />

      <div class="mt-auto">Unidades</div>
    </div>
  </article>
</template>
