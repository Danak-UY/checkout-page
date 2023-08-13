<script setup lang="ts">
import ProductoPrice from "../atoms/ProductPrice.vue";
import Picture from "../atoms/Picture.vue";
import ProductTitle from "../atoms/ProductTitle.vue";
import Units from "../atoms/Units.vue";
import { Product } from "../../models/Product";

interface ProductProps extends Product {
  onChangeUnits: (quantity: number) => void;
}

defineProps<ProductProps>();
</script>

<template>
  <article class="flex gap-5">
    <Picture :url="image" class="max-w-[8rem]" />
    <div class="flex flex-col grow items-start">
      <ProductTitle>{{ name }}</ProductTitle>
      <ProductoPrice :currentPrice="currentPrice" :prevPrice="prevPrice" />

      <div class="mt-auto">
        <Units :units="quantity" :onChange="onChangeUnits" />
      </div>
    </div>
  </article>
</template>
