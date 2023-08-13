<script setup lang="ts">
import Email from "vue-material-design-icons/Email.vue";
import Phone from "vue-material-design-icons/Phone.vue";
import AccountCircle from "vue-material-design-icons/AccountCircle.vue";
import Home from "vue-material-design-icons/Home.vue";
import City from "vue-material-design-icons/City.vue";
import Earth from "vue-material-design-icons/Earth.vue";
import TreasureChest from "vue-material-design-icons/TreasureChest.vue";

const { name } = defineProps<{
  name: string;
}>();

const iconMap: Record<string, any> = {
  email: Email,
  phone: Phone,
  user: AccountCircle,
  house: Home,
  city: City,
  world: Earth,
  mailbox: TreasureChest,
} as const;
</script>

<template>
  <component
    :is="iconMap[name]"
    fillColor="currentColor"
    class="text-gray-icon"
  />
</template>
