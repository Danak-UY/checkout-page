<script setup lang="ts">
import Input from "../atoms/Input.vue";
import CountrySelect from "../molecules/CountrySelect.vue";
import Button from "../atoms/Button.vue";
import Checkbox from "../atoms/Checkbox.vue";
import SubTitle from "../atoms/SubTitle.vue";

defineProps<{
  onValueChange: (key: string, value: string) => void;
}>();
</script>

<template>
  <form class="flex flex-col" @submit.prevent>
    <div class="mb-12 md:mb-16">
      <SubTitle class="mb-4">Contact Information</SubTitle>

      <div class="flex flex-col gap-5">
        <Input
          id="email"
          label="E-mail"
          type="email"
          placeholder="Enter your e-mail"
          icon="email"
          :onChange="onValueChange"
        />
        <Input
          id="phone"
          label="Phone"
          type="tel"
          placeholder="Enter your phone"
          icon="phone"
          :onChange="onValueChange"
        />
      </div>
    </div>

    <div class="mb-6">
      <SubTitle class="mb-4">Shipping Address</SubTitle>

      <div class="flex flex-col gap-5">
        <Input
          id="name"
          label="Full name"
          type="text"
          placeholder="Enter your full name"
          icon="user"
          :onChange="onValueChange"
        />

        <Input
          id="address"
          label="Address"
          type="text"
          placeholder="Enter your address"
          icon="house"
          :onChange="onValueChange"
        />

        <Input
          id="city"
          label="City"
          type="text"
          placeholder="Enter your city"
          icon="city"
          :onChange="onValueChange"
        />

        <div class="grid grid-cols-2 gap-8">
          <CountrySelect
            id="country"
            label="Country"
            placeholder="Select your country"
            icon="world"
            :onChange="onValueChange"
          />

          <Input
            id="postal-code"
            label="Postal code"
            type="tel"
            placeholder="Enter your postal code"
            icon="mailbox"
            :onChange="onValueChange"
          />
        </div>

        <Checkbox
          id="save-address"
          label="Save this information for next time"
          :onChange="onValueChange"
        />
      </div>
    </div>

    <div class="flex justify-end">
      <Button class="w-full md:w-auto">Continue</Button>
    </div>
  </form>
</template>
