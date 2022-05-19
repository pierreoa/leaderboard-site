<script setup lang="ts">
// I think it's best to leave an empty script than omit it :)
</script>

<template>
  <BaseButton class="sign-up-button" v-bind="$attrs"> Sign Up </BaseButton>
</template>

<style lang="postcss" scoped>
.sign-up-button {
  @apply bg-gray-100 hover:bg-black mx-1 py-1 text-opacity-70 hover:text-white;
}
</style>
