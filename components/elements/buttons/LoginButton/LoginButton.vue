<script setup lang="ts">
// I think it's best to leave an empty script than omit it :)
</script>

<template>
  <BaseButton class="login-button" v-bind="$attrs"> Log In </BaseButton>
</template>

<style lang="postcss" scoped>
.login-button {
  @apply mx-1 py-1 hover:bg-gray-100;
}
</style>
