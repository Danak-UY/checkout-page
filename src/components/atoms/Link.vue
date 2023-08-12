<script setup lang="ts">
defineProps<{ label: string; url: string; external?: boolean }>();
</script>

<template>
  <a
    :href="url"
    class="focus:outline-gold font-bold hover:text-slate-700 focus:outline focus:outline-offset-2"
    :target="external ? '_blank' : '_self'"
  >
    {{ label }}
  </a>
</template>
