<script setup lang="ts">
const props = defineProps<{
  alt: string;
  target: string;
  url: string;
}>();
</script>

<template>
  <NuxtLink class="button-link" :to="props.url" v-bind="$attrs">
    <slot>Placeholder Link Text</slot>
  </NuxtLink>
</template>

<style lang="postcss" scoped>
.button-link {
  @apply rounded px-3 py-2 text-current hover:bg-current;
}
</style>
