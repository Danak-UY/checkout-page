<script setup lang="ts">
import { reactive, onMounted, computed } from "vue";

import { Cart } from "../models/Cart";

import getProductsCart from "../services/getProductsCart";
import { calculateTotal } from "../helpers/cartTotal";

import MainLayout from "../components/templates/MainLayout.vue";
import CheckoutForm from "../components/organisms/CheckoutForm.vue";
import ProductCart from "../components/organisms/ProductCart.vue";

const cart = reactive<Cart>({
  products: [],
  form: {},
});

onMounted(async () => {
  const jsonCart = await getProductsCart();
  cart.products = jsonCart.products;
});

const updateUnits = (id: string, quantity: number) => {
  const product = cart.products.find((p) => p.id === id);
  product.quantity = quantity;
};

const updateForm = (key: string, value: string) => {
  console.log({ key, value });
  cart.form[key] = value;
};

const totals = computed(() => [
  {
    title: "Shipping",
    price: 10,
  },
  {
    title: "Total",
    price: calculateTotal(cart.products),
  },
]);
</script>

<template>
  <MainLayout title="Checkout">
    <div class="grid grid-cols-2">
      <CheckoutForm :onValueChange="updateForm" />

      <aside class="pl-20 w-full">
        <ProductCart
          :products="cart.products"
          :totals="totals"
          :onChangeUnits="updateUnits"
        />
      </aside>
    </div>
  </MainLayout>
</template>
