<script setup lang="ts">
import Input from "../atoms/Input.vue";
import Button from "../atoms/Button.vue";
import Checkbox from "../atoms/Checkbox.vue";
import SubTitle from "../atoms/SubTitle.vue";
</script>

<template>
  <form class="flex flex-col">
    <div class="mb-16">
      <SubTitle class="mb-4">Contact Information</SubTitle>

      <div class="flex flex-col gap-5">
        <Input
          id="email"
          label="E-mail"
          type="email"
          placeholder="Enter your e-mail"
          icon="envelope"
        />
        <Input
          id="phone"
          label="Phone"
          type="tel"
          placeholder="Enter your phone"
          icon="phone"
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
          icon="envelope"
        />
        <Input
          id="address"
          label="Address"
          type="text"
          placeholder="Enter your address"
          icon="house"
        />
        <Input
          id="city"
          label="City"
          type="text"
          placeholder="Enter your city"
          icon="envelope"
        />
        <div class="flex gap-8">
          <Input
            id="country"
            label="Country"
            type="text"
            placeholder="Select your country"
            icon="world"
          />
          <Input
            id="postal-code"
            label="Postal code"
            type="text"
            placeholder="Enter your postal code"
            icon="house"
          />
        </div>

        <Checkbox
          id="save-address"
          label="Save this information for next time"
        />
      </div>
    </div>

    <div class="flex justify-end">
      <Button>Continue</Button>
    </div>
  </form>
</template>
