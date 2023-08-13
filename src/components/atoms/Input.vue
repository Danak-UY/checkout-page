<script setup lang="ts">
import Icon from "./Icon.vue";

const { id, onChange } = defineProps<{
  id: string;
  type: string;
  icon: string;
  label: string;
  placeholder: string;
  onChange: (key: string, value: string) => void;
}>();

const onValueChange = (ev: Event) => {
  const value = (ev.target as HTMLInputElement)?.value || "";
  onChange(id, value);
};
</script>

<template>
  <span>
    <label
      :for="id"
      class="text-gray-neutral text-xs font-semibold mb-1.5 block w-full"
    >
      {{ label }}
    </label>
    <span class="relative block">
      <Icon :name="icon" class="absolute top-1/2 left-3 -translate-y-1/2" />

      <input
        :type="type"
        :id="id"
        :placeholder="placeholder"
        class="font-semibold text-base p-4 pl-11 rounded-xl border border-gray-icon block w-full focus:border-orange-neutral focus-visible:outline-none placeholder:text-gray-light"
        @change="onValueChange"
      />
    </span>
  </span>
</template>
