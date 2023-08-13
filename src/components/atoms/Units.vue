<script setup lang="ts">
defineProps<{
  units: number;
  onChange: (units: number) => void;
}>();
</script>

<template>
  <div class="border rounded-xl flex gap-6 p-2 items-center border-gray-light">
    <button
      :disabled="units <= 1"
      @click="onChange(units - 1)"
      class="px-2 flex items-center aspect-square bg-gray-200 rounded disabled:opacity-50 cursor-pointer disabled:cursor-default"
    >
      -
    </button>
    <span class="w-2">{{ units }}</span>
    <button
      :disabled="units >= 9"
      @click="onChange(units + 1)"
      class="px-2 flex items-center aspect-square bg-gray-200 rounded disabled:opacity-50 cursor-pointer disabled:cursor-default"
    >
      +
    </button>
  </div>
</template>
