<script setup lang="ts">
defineProps<{
  label: string;
  url: string;
  external?: boolean;
  highlight?: boolean;
}>();
</script>

<template>
  <a
    :href="url"
    class="focus:outline-gold hover:text-neutral focus:outline focus:outline-offset-2"
    :class="{ 'font-bold': highlight }"
    :target="external ? '_blank' : '_self'"
  >
    {{ label }}
  </a>
</template>
