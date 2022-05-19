<script setup lang="ts">
// I think it's best to leave an empty script than omit it :)
</script>

<template>
  <!-- https://v3-migration.vuejs.org/breaking-changes/listeners-removed.html#listeners-removed -->
  <ButtonLink class="nav-link" v-bind="$attrs">
    <slot />
  </ButtonLink>
</template>

<style lang="postcss" scoped>
.nav-link {
  @apply w-full mt-2 lg:mt-0 lg:mx-1 py-1 hover:bg-gray-100;
}
</style>
