<script setup lang="ts">
interface NavLinks {
  name: string;
  to: string;
}

interface Props {
  navLinks: NavLinks[];
}

// for reference: https://vuejs.org/api/sfc-script-setup.html#typescript-only-features
const props = withDefaults(defineProps<Props>(), {
  navLinks: () => [
    {
      name: 'Games',
      to: '#',
    },
    {
      name: 'About',
      to: '#',
    },
  ],
});
</script>

<template>
  <nav class="nav-link-container">
    <NavLink
      v-for="navLink in props.navLinks"
      v-bind="navLink"
      :key="navLink.name"
    >
      {{ navLink.name }}
    </NavLink>
  </nav>
</template>

<style lang="postcss" scoped>
.nav-link-container {
  @apply flex flex-col lg:flex-row items-center w-auto space-y-2 lg:space-y-0 text-center text-black;
}
</style>
