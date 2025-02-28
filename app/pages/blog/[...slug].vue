<template>
  <main v-if="post" class="container mx-auto mt-10 sm:mt-10 md:(px-6 mb-0 mt-15)" role="main">
    <article class="text-inherit pb-2 sm:rounded-sm md:(mb-12)" itemtype="https://schema.org/Article" itemscope>
      <BlogArticleHeader :post="post" />
      <div class="flex flex-col-reverse justify-center lg:(flex-row gap10)">
        <div>
          <ContentRenderer :value="post" itemprop="articleBody"
            class="prose text-sm md:text-lg mx-auto 2xl:text-xl px4 md:px0 dark:text-light text-black leading-normal" />
        </div>
        <aside v-if="post.toc" class="mt2">
          <BlogToc :links="post.body?.toc?.links" class="lg:sticky lg:top-30" />
        </aside>
      </div>
      <div class="mt10 flex flex-col items-center justify-center">
        <hr class="core-ui core-border op40 rounded-md w-80%">
        <div v-if="post.path && post.title">
          <h4 class="mt5 text-center font-normal text-lg op90">{{ t('share.title') }}</h4>
          <LazyBlogSocialShare :post="{ _path: post.path, title: post.title }" />
        </div>
      </div>
      <LazyBlogPrevNext :prev="prev" :next="next" />
    </article>
  </main>
</template>
<script setup lang="ts">
import { withLeadingSlash } from 'ufo'
import type { Collections } from '@nuxt/content';
const { locale, t } = useI18n();
const config = useRuntimeConfig();
const route = useRoute();

const path = computed(() => {
  if (route.params.slug) {
    return withLeadingSlash(String(route.params.slug))
  }
  return withLeadingSlash(route.path)
})

const { data: post } = await useAsyncData(
  'page-' + path.value,
  async () => {
    const collection = ('content_' + locale.value) as keyof Collections
    try {
      const content = await queryCollection(collection)
        .path(path.value)
        .select('title', 'description', 'date', 'tag', 'path', 'img', 'toc', 'body')
        .first()

      return content
    } catch (error) {
      console.error('Error fetching content:', error)
      return null
    }
  },
  {
    watch: [locale, path]
  }
)

if (!post.value) throw createError({ statusCode: 404 });

const seoTitle = post.value?.title;
const seoDesc = post.value?.description;
const seoImage = config.public.i18n.baseUrl + post.value?.img;
const titleSuffix = " - Xanzhu"

useSeoMeta({
  title: seoTitle,
  description: seoDesc,
  ogTitle: `${seoTitle}${titleSuffix}`,
  ogDescription: seoDesc,
  twitterTitle: `${seoTitle}${titleSuffix}`,
  twitterDescription: seoDesc,
  twitterImage: seoImage,
  ogType: "article",
  ogImage: seoImage,
});


const { data: prevNext } = await useAsyncData("prev-next", async () => {
  const collection = ('content_' + locale.value) as keyof Collections;

  if (!post.value?.path) {
    return [];
  }

  const result = await queryCollectionItemSurroundings(
    collection,
    post.value.path,
    {
      before: 1,
      after: 1,
      fields: ['path', 'title', 'img', 'alt']
    }
  ).order('date', 'DESC');

  if (Array.isArray(result) && result.length > 0) {
    return result.map(item => {
      if (item) {
        let fullPath = item.path;

        if (locale.value !== "en" && !fullPath.startsWith(`/${locale.value}/`)) {
          fullPath = `/${locale.value}/blog${fullPath}`;
        } else if (!fullPath.includes('/blog/')) {
          fullPath = `/blog${fullPath}`;
        }

        return {
          ...item,
          path: fullPath
        };
      }
      return item;
    });
  }
  return result;
}, {
  watch: [locale, () => post.value?.path]
});

const [prev, next] = prevNext.value && Array.isArray(prevNext.value) && prevNext.value.length > 0 ? prevNext.value : [null, null];
</script>