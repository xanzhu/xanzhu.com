<template>
  <div class="inline-flex mx-auto space-x-2 px3 py1.5 rounded-full core-border core-theme">
    <div v-for="social in socials" class="children:(dark:text-white text-black)">
      <NuxtLink :to="social.url" :aria-label="social.aria" target="_blank"
        class="dark:hover:text-brand-dark hover:text-brand-light op90 p1">
        <Icon :name="social.icon" class="h5 w5" />
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  post: {
    _path?: string;
    title: string;
  };
}

const { post } = defineProps<Props>();
const { t } = useI18n();

const postPath = post._path;
const postTitle = post.title;
const emailTitle = t('email.share')
const config = useRuntimeConfig();



const socials = [
  {
    url: `https://twitter.com/intent/tweet?url=${config.public.i18n.baseUrl}${postPath}&text=${postTitle}&via=Xanzhu1`,
    icon: "line-md:twitter-x",
    aria: t('share.twitter')
  },
  {
    url: `https://www.linkedin.com/shareArticle?url=${config.public.i18n.baseUrl}${postPath}&title=${postTitle}`,
    icon: "line-md:linkedin",
    aria: t('share.linkedin')
  },
  {
    url: `https://www.reddit.com/submit?url=${config.public.i18n.baseUrl}${postPath}&title=${postTitle}`,
    icon: "line-md:reddit",
    aria: t('share.reddit')
  },
  {
    url: `mailto:?subject=${postTitle}&body=${emailTitle}:${postTitle}`,
    icon: "line-md:email",
    aria: t('share.email')
  }
];
</script>