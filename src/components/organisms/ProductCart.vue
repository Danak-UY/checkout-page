<script setup lang="ts">
import Product from "../molecules/Product.vue";
import SubTotal from "../molecules/SubTotal.vue";

const calculatedTotal = [
  {
    title: "Shipping",
    price: 10,
  },
  {
    title: "Total",
    price: 10,
  },
];
</script>

<template>
  <div class="bg-gray-100 rounded-xl p-8 min-h-[32rem] flex flex-col">
    <div class="flex flex-col gap-8 max-h-[32rem] overflow-y-auto">
      <Product
        id="123"
        image="vintage-backpack"
        name="Vintage backbag"
        :currentPrice="12.33"
        :prevPrice="22.33"
        :quantity="1"
      />
      <Product
        id="123"
        image="levi-shoes"
        name="Levu Shoes"
        :currentPrice="12.33"
        :prevPrice="22.33"
        :quantity="1"
      />
    </div>

    <SubTotal :totals="calculatedTotal" class="mt-auto" />
  </div>
</template>
