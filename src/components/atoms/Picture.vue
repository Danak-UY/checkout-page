<script setup lang="ts">
const props = defineProps<{
  url: string;
  alt?: string;
}>();

const { url, alt } = props;

const imageAlt = alt ?? "";

const imagePath = `/src/assets/${url}.webp`;
const imageUrl = new URL(imagePath, import.meta.url).href;
</script>

<template>
  <img :src="imageUrl" :alt="imageAlt" class="rounded-xl aspect-square" />
</template>
