<script setup lang="ts">
import Title from "../atoms/Title.vue";

defineProps<{
  title: string;
}>();
</script>

<template>
  <Title>{{ title }}</Title>
</template>
