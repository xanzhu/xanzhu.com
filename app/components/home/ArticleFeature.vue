<template>
    <div class="mt-10 mx-auto">
        <div class="flex md:justify-center items-center sm:space-x-45 lg:space-x-50 lg:p10">
            <h2 class="text-4xl mx6 md:(text-5xl)">{{ t('home.latest') }}</h2>
            <span class="hidden md:(flex h-2px bg-dark-400 w-30% mx-10) lg:w-40%" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-4 justify-items-center px6 md:px25 lg:px45 md:max-w-5xl max-w-lg children:(rounded-lg core-border)"
            v-if="features">
            <div v-for="(feature, index) in features.slice(0, 3) " :key="index"
                class="group hover:(dark:bg-black bg-white scale-102) transition ease-linear duration-300 core-theme">
                <div class="col-span-1 p-5 dark:text-white cursor-pointer" v-if="features && features[index]">
                    <NuxtLinkLocale class="group-hover no-underline dark:text-white text-black" :to="feature._path">
                        <span class="text-sm op-60 bg-light4 dark:bg-dark8 px4 py1 rounded-md core-border">{{
                            feature.tag }}</span>
                        <h3>{{ feature.title }}</h3>
                        <p class="op70 font-300" v-if="feature.description">{{ feature.description }}</p>
                    </NuxtLinkLocale>
                </div>
            </div>

            <div class="hidden lg:(grid row-span-2 col-span-2) relative">
                <NuxtImg src="https://cdn.xanzhu.com/v1/rabbit-r1/graphic.webp"
                    class="object-cover h-full w-full rounded-lg" alt="Rabbit R1 Animation Graphic" loading="lazy"
                    format="webp" />
                <NuxtLink to="https://rabbit.tech"
                    class="absolute px3 py1 rounded-md core-border right-2 bottom-2 core-ui text-sm underline-none decoration-none hover:core-theme">
                    Rabbit.tech</NuxtLink>
            </div>

            <div v-for="(feature, index) in features.slice(3, 6)" :key="index"
                class="group hover:(dark:bg-black bg-white scale-102) core-theme transition ease-linear duration-300">
                <div class="col-span-1 p-5 dark:text-white cursor-pointer" v-if="features && features[index + 3]">
                    <NuxtLinkLocale class="group-hover no-underline dark:text-white text-black" :to="feature._path">
                        <span class="text-sm op-60 bg-light4 dark:bg-dark8 px4 py1 rounded-md core-border">{{
                            feature.tag }}</span>
                        <h3>{{ feature.title }}</h3>
                        <p class="op70 font-300" v-if="feature.description">{{ feature.description }}</p>
                    </NuxtLinkLocale>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const { locale, t } = useI18n();

const { data: features } = await useAsyncData("feature-articles", async () => {
    let query = locale.value !== "en" ? `${locale.value}/blog` : "/blog";
    return await queryContent(query)
        .sort({ date: -1 })
        .where({ feature: true })
        .only(['title', 'description', 'date', 'tag', '_path'])
        .limit(5)
        .find();
});
</script>