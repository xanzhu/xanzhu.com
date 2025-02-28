<template>
  <section class="mt-10 mx-auto">
    <div class="flex md:justify-center items-center sm:space-x-45 lg:space-x-50 lg:p10">
      <h2 class="text-4xl mx6 md:(text-5xl)">{{ t('home.latest') }}</h2>
      <span class="hidden md:(flex h-2px bg-dark-400 w-30% mx-10) lg:w-40%" />
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4 justify-items-center px6 md:px25 lg:px45 md:max-w-5xl max-w-lg children:(rounded-lg core-border)">
      <article v-for="(feature, index) in features?.slice(0, 3)" :key="index"
        class="group hover:(dark:bg-black bg-white scale-102 shadow-lg) transition ease-linear duration-300 core-theme">
        <div class="col-span-1 p-5 dark:text-white cursor-pointer">
          <NuxtLinkLocale class="group-hover no-underline dark:text-white text-black" :to="feature.path">
            <span class="text-sm op-60 bg-light4 dark:bg-dark8 px4 py1 rounded-md core-border">{{
              feature.tag }}</span>
            <h3 class="text-xl font-semibold group-hover:text-primary">{{ feature.title }}</h3>
            <p class="op70 font-300 group-hover:op-100">{{ feature.description }}</p>
          </NuxtLinkLocale>
        </div>
      </article>

      <div class="hidden lg:(grid row-span-2 col-span-2) relative">
        <NuxtImg src="https://cdn.xanzhu.com/v1/rabbit-r1/graphic.webp" class="object-cover h-full w-full rounded-lg"
          alt="Rabbit R1 Animation Graphic" loading="lazy" format="webp" width="800" height="600"
          sizes="sm:100vw md:50vw lg:800px" />
        <NuxtLink to="https://rabbit.tech"
          class="absolute px3 py1 rounded-md core-border right-2 bottom-2 core-ui text-sm underline-none decoration-none hover:core-theme">
          Rabbit.tech
        </NuxtLink>
      </div>

      <article v-for="(feature, index) in features?.slice(3, 6)" :key="index"
        class="group hover:(dark:bg-black bg-white scale-102 shadow-lg) transition ease-linear duration-300 core-theme">
        <div class="col-span-1 p-5 dark:text-white cursor-pointer">
          <NuxtLinkLocale class="group-hover no-underline dark:text-white text-black" :to="feature.path"
            :aria-label="`Read more about ${feature.title}`">
            <span class="text-sm op-60 bg-light4 dark:bg-dark8 px4 py1 rounded-md core-border">{{
              feature.tag }}</span>
            <h3 class="text-xl font-semibold group-hover:text-primary">{{ feature.title }}</h3>
            <p class="op70 font-300 group-hover:op-100">{{ feature.description }}</p>
          </NuxtLinkLocale>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Collections } from '@nuxt/content';

const route = useRoute();
const { locale, t } = useI18n();

const collection = computed(() => `content_${locale.value}` as keyof Collections);

const { data: features } = await useAsyncData(
  'features',
  async () => {
    const content = await queryCollection(collection.value)
      .where('feature', '=', true)
      .order('date', 'DESC')
      .select('title', 'description', 'date', 'tag', 'path')
      .limit(5)
      .all();

    return content.map((feature) => ({
      ...feature,
      path: locale.value !== "en" ? `/${locale.value}/blog${feature.path}` : `/blog${feature.path}`,
    }));
  },
  {
    watch: [locale, route]
  }
);
</script>