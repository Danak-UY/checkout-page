<script setup lang="ts">
import AttributionFooter from "../organisms/AttributionFooter.vue";
</script>

<template>
    <div class="container flex min-h-screen max-w-5xl flex-col gap-6 p-4 py-8 md:p-8">
        <main class="flex-1">
            <slot></slot>
        </main>
        <AttributionFooter />
    </div>
</template>
