<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  value: [string, number];
}>();

const emit = defineEmits<{ (e: 'input', value: any): void }>();

const model = computed({
  get(): any {
    return props.value;
  },
  set(value: any): void {
    emit('input', value);
  },
});
</script>

<template>
  <input v-model="model" class="input" />
</template>

<style lang="postcss" scoped>
.input {
  @apply border border-gray-300 rounded px-3 py-2 focus:outline-none;
}
</style>
