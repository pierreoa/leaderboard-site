<script setup lang="ts">
interface Props {
  onClick: (payload: MouseEvent | KeyboardEvent) => void;
}

// for reference: https://vuejs.org/api/sfc-script-setup.html#typescript-only-features
const props = withDefaults(defineProps<Props>(), {
  onClick: (payload: MouseEvent | KeyboardEvent) =>
    // eslint-disable-next-line no-console
    console.log('follow', payload),
});
</script>

<template>
  <button
    class="follow-button"
    v-bind="$attrs"
    @click="props.onClick"
    @keyup.enter="props.onClick"
  >
    Follow
  </button>
</template>

<style lang="postcss" scoped>
.follow-button {
  @apply px-3 py-2 text-center border border-current rounded border-gray-300 hover:bg-gray-100;
}
</style>
