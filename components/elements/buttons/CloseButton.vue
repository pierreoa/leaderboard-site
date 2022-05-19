<script setup lang="ts">
// I think it's best to leave an empty script than omit it :)
</script>

<template>
  <BaseButton class="close-button" v-bind="$attrs">
    <svg-icon class="w-5 h-5" name="close" />
  </BaseButton>
</template>

<style lang="postcss" scoped>
.close-button {
  @apply fill-current bg-gray-100 text-gray-900 hover:bg-gray-200;
}
</style>
