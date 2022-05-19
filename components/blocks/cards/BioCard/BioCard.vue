<script setup lang="ts">
interface Socials {
  icon: string;
  name: string;
  url: string;
}

interface Props {
  socials: Socials[];
  bio: string;
}

// for reference: https://vuejs.org/api/sfc-script-setup.html#typescript-only-features
const props = withDefaults(defineProps<Props>(), {
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget dapibus libero. Morbi ultricies varius accumsan.',
  socials: () => [
    {
      icon: 'dscrd',
      name: 'Discord',
      url: 'https://discord.com/',
    },
    {
      icon: 'twch',
      name: 'Twitch',
      url: 'https://twitch.tv/',
    },
    {
      icon: 'twtr',
      name: 'Twitter',
      url: 'https://twitter.com/',
    },
    {
      icon: 'yt',
      name: 'Youtube',
      url: 'https://youtube.com/',
    },
  ],
});
</script>

<template>
  <div class="bio-card">
    <CardHeader class="bio-card__header">
      <h2>About</h2>
    </CardHeader>
    <CardBody class="bio-card__content">
      <p>{{ props.bio }}</p>
      <div class="bio-card__buttons">
        <SocialButtons :socials="props.socials" />
      </div>
    </CardBody>
  </div>
</template>

<style lang="postcss" scoped>
.bio-card {
  @apply hidden md:flex flex-col border rounded border-gray-300;
  & > div {
    @apply p-5;
  }
  & .bio-card__header {
    @apply border-b border-gray-300;
    & h2 {
      @apply text-xl font-bold;
    }
  }
  & .bio-card__content {
    & p {
      @apply text-black;
    }
  }
  & .bio-card__buttons {
    @apply mt-5;
  }
}
</style>
