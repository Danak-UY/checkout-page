<script setup lang="ts">
import MainLayout from "../components/templates/MainLayout.vue";
import CheckoutForm from "../components/organisms/CheckoutForm.vue";
import ProductCart from "../components/organisms/ProductCart.vue";
</script>

<template>
  <MainLayout title="Checkout">
    <div class="grid grid-cols-2">
      <CheckoutForm />

      <aside class="pl-20 w-full">
        <ProductCart />
      </aside>
    </div>
  </MainLayout>
</template>
