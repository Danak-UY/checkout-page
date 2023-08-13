<script setup lang="ts">
import { Product as ProductDTO } from "../../models/Product";
import { Total as TotalDTO } from "../../models/Total";

import Product from "../molecules/Product.vue";
import SubTotal from "../molecules/SubTotal.vue";

const { products } = defineProps<{
  products: ProductDTO[];
  totals: TotalDTO[];
  onChangeUnits: (id: string, quantity: number) => void;
}>();
</script>

<template>
  <div class="bg-gray-100 rounded-xl p-8 min-h-[34rem] flex flex-col">
    <div class="flex flex-col gap-8 max-h-[34rem] overflow-y-auto">
      <Product
        v-if="products.length > 0"
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :image="product.image"
        :name="product.name"
        :currentPrice="product.currentPrice"
        :prevPrice="product.prevPrice"
        :quantity="product.quantity"
        :onChangeUnits="(units) => onChangeUnits(product.id, units)"
      />
    </div>

    <div class="mt-auto">
      <SubTotal :totals="totals" />
    </div>
  </div>
</template>
