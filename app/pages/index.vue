<template>
    <main class="flex flex-col justify-center">
        <!-- <section class="relative min-h-screen flex justify-center">
            <UiSvg loadSVG="beta02" class="hidden md:flex" />
            <HomeHero class="z1" />
        </section> -->
        <HomeHero />
        <LazyHomeCompany />
        <LazyHomeArticleFeature class="min-h-screen" />
        <LazyHomePagesCard class="my-20" />
        <LazyHomeThreatCard />
    </main>
</template>
<script setup lang="ts">
const seoImage = 'https://images.pexels.com/photos/5708251/pexels-photo-5708251.jpeg';
useLangMeta('Home.Seo', seoImage, 'prefix');

// URL Validation | Redirection for "/?<example>" (Temp Fix)
definePageMeta({
    validate(route) {
        if (route.fullPath.includes('?')) {
            throw createError({ statusCode: 404 });
        }
        return true;
    },
})
</script>