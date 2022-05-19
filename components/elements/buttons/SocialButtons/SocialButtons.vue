<script setup lang="ts">
const props = defineProps<{
  // TODO: someone come back and type
  socials: any[];
}>();
</script>

<template>
  <div class="social-buttons">
    <a
      v-for="social in props.socials"
      :key="social.name"
      class="social-button"
      :alt="social.name"
      :href="social.url"
    >
      {{ social.icon }}
    </a>
  </div>
</template>

<style lang="postcss" scoped>
.social-buttons {
  @apply my-1;
  @apply grid auto-cols-fr grid-cols-4 gap-3;
}

.social-button {
  @apply flex content-center items-center justify-center justify-items-center;
  @apply rounded bg-gray-100;
  @apply p-2;
}
</style>
