<script setup lang="ts">
defineProps<{
  id: string;
  label: string;
  isChecked?: boolean;
}>();
</script>

<template>
  <span>
    <input
      type="checkbox"
      :id="id"
      class="font-semibold text-base p-4 rounded-xl border border-gray-neutral accent-orange-neutral scale-125 mr-2 text-white"
    />

    <label :for="id" class="text-gray-neutral text-xs font-semibold mb-1.5">{{
      label
    }}</label>
  </span>
</template>
