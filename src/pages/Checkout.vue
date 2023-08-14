<script setup lang="ts">
import { reactive, onMounted, computed } from "vue";

import { Cart } from "../models/Cart";

import getProductsCart from "../services/getProductsCart";
import { calculateTotal, calculateShipping } from "../helpers/cartTotal";

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
  product!.quantity = quantity;
};

const updateForm = (key: string, value: string) => {
  console.log({ key, value });
  cart.form[key] = value;
};

const totals = computed(() => {
  const shippingPrice = calculateShipping(cart.form.country ?? "");
  const totalPrice = calculateTotal(cart.products, shippingPrice);
  return [
    {
      title: "Shipping",
      price: shippingPrice,
    },
    {
      title: "Total",
      price: totalPrice,
    },
  ];
});
</script>

<template>
  <MainLayout title="Checkout">
    <div
      class="grid auto-rows-auto md:grid-rows-1 md:grid-cols-2 gap-12 md:gap-8 lg:gap-0"
    >
      <CheckoutForm :onValueChange="updateForm" />

      <aside class="lg:pl-20 w-full order-first md:order-none">
        <ProductCart
          :products="cart.products"
          :totals="totals"
          :onChangeUnits="updateUnits"
        />
      </aside>
    </div>
  </MainLayout>
</template>
