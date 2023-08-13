<script setup lang="ts">
import { ref } from "vue";

import { Option } from "../../models/Option";

const { id, onChange } = defineProps<{
  id: string;
  icon: string;
  label: string;
  placeholder: string;
  options: Option[];
  onChange: (key: string, value: string) => void;
}>();

const selectedValue = ref("");

const onValueChange = (ev: Event) => {
  const value = (ev.target as HTMLInputElement)?.value || "";

  selectedValue.value = value;
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
      <select
        :id="id"
        :placeholder="placeholder"
        class="font-semibold text-base p-4 rounded-xl text-gray-light bg-white border border-gray-neutral block w-full focus:border-orange-neutral focus-visible:outline-none"
        :class="{ 'text-gray-neutral': selectedValue !== '' }"
        @change="onValueChange"
      >
        <option selected disabled>{{ placeholder }}</option>
        <option
          v-for="option in options"
          :value="option.value"
          class="text-gray-neutral py-2"
        >
          {{ option.label }}
        </option>
      </select>

      <button
        aria-hidden
        tabindex="-1"
        class="absolute top-1/2 right-2 -translate-y-1/2 px-2 aspect-square bg-gray-200 rounded disabled:opacity-50 cursor-pointer disabled:cursor-default pointer-events-none outline-4 outline outline-offset-0 outline-white"
      >
        &#9013;
      </button>
    </span>
  </span>
</template>
