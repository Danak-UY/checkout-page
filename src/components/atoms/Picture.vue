<script setup lang="ts">
const { url, alt } = defineProps<{
  url: string;
  alt?: string;
}>();

const imageAlt = alt ?? "";
const imagePath = `/src/assets/${url}.webp`;
const imageUrl = new URL(imagePath, import.meta.url).href;
</script>

<template>
  <img
    :src="imageUrl"
    :alt="imageAlt"
    class="rounded-xl aspect-square bg-gray-200"
  />
</template>
