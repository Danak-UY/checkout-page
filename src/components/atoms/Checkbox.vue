<script setup lang="ts">
defineProps<{
  id: string;
  label: string;
  isChecked?: boolean;
}>();
</script>

<template>
  <span class="flex items-center">
    <input
      type="checkbox"
      :id="id"
      class="appearance-none mr-1 relative bg-white border-gray-icon checked:border-0 rounded-lg border-2 text-white h-8 w-8 scale-[60%] cursor-pointer transition-all inline-flex text-center justify-center items-center checked:bg-orange-neutral checked:after:border-b-[4px] checked:after:border-white checked:after:border-r-[4px] checked:after:rotate-45 after:-mt-1 checked:after:rounded-sm after:h-5 after:w-3 after:absolute after:text-xl after:text-white"
    />

    <label :for="id" class="text-gray-neutral text-xs font-semibold">{{
      label
    }}</label>
  </span>
</template>
