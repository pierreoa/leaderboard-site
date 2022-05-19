<script setup lang="ts">
// I think it's best to leave an empty script than omit it :)
</script>

<template>
  <div class="card-body" v-bind="$attrs">
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
.card-body {
  @apply p-3;
}
</style>
