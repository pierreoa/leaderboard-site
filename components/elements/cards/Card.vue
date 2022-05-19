<script setup lang="ts">
// I think it's best to leave an empty script than omit it :)
</script>

<template>
  <div class="card" v-bind="$attrs">
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
.card {
  @apply rounded border border-gray-300;
}
</style>
