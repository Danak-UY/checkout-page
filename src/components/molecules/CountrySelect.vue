<script setup lang="ts">
import { reactive, onMounted } from "vue";

import { Option } from "../../models/Option";

import getCountryList from "../../services/getCountryList";
import { formatCountriesOptions, sortOptions } from "../../helpers/formatters";

import Select from "../atoms/Select.vue";

defineProps<{
  id: string;
  icon: string;
  label: string;
  placeholder: string;
  onChange: (key: string, value: string) => void;
}>();

const countriesOptions = reactive<Option[]>([]);

onMounted(async () => {
  const jsonCountry = await getCountryList();
  countriesOptions.push(...sortOptions(formatCountriesOptions(jsonCountry)));
});
</script>

<template>
  <Select
    :id="id"
    :label="label"
    :icon="icon"
    :placeholder="placeholder"
    @change="onChange"
    :options="countriesOptions"
  />
</template>
