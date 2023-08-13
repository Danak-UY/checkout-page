<script setup lang="ts">
import Header from "../organisms/Header.vue";
import Footer from "../organisms/Footer.vue";

defineProps<{
  title: string;
}>();
</script>

<template>
  <div
    class="container flex min-h-screen max-w-5xl flex-col gap-6 p-4 py-8 md:p-8 text-gray-dark"
  >
    <Header :title="title" class="mb-10" />
    <main class="flex-1 mb-20">
      <slot />
    </main>
    <Footer />
  </div>
</template>
