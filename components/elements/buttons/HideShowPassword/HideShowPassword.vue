<script setup lang="ts">
import { reactive } from 'vue';

const state = reactive({
  hidden: true,
});

function toggleHidden() {
  state.hidden = !state.hidden;
}
</script>

<template>
  <BaseButton
    id="hide-show-password"
    data-testid="hide-show-password-button"
    class="button"
    v-bind="$attrs"
    @click="toggleHidden"
    @keyup.enter="toggleHidden"
  >
    <svg-icon
      v-show="state.hidden"
      class="w-5 h-5"
      name="eye-hidden"
      data-testid="hidden-eye-icon"
    />
    <svg-icon
      v-show="!state.hidden"
      class="w-5 h-5"
      name="eye-visible"
      data-testid="visible-eye-icon"
    />
  </BaseButton>
</template>

<style lang="postcss" scoped>
.button {
  @apply hidden sm:inline bg-white;
}
</style>
