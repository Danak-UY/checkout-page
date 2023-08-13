<script setup lang="ts">
defineProps<{
  id: string;
  type: string;
  icon: string;
  label: string;
  placeholder: string;
}>();
</script>

<template>
  <span>
    <label
      :for="id"
      class="text-gray-neutral text-xs font-semibold mb-1.5 block w-full"
      >{{ label }}</label
    >

    <input
      :type="type"
      :id="id"
      :placeholder="placeholder"
      class="font-semibold text-base p-4 rounded-xl border border-gray-neutral block w-full focus:border-orange-neutral focus-visible:outline-none"
    />
  </span>
</template>
