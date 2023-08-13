<script setup lang="ts">
import MainLayout from "../components/templates/MainLayout.vue";
import CheckoutForm from "../components/organisms/CheckoutForm.vue";
</script>

<template>
  <MainLayout title="Checkout">
    <div class="flex gap-8">
      <CheckoutForm class="w-3/5" />
    </div>
  </MainLayout>
</template>
