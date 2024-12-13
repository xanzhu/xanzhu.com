<template>
    <div class="w-full max-w-7xl mx-auto px-4 py-12 bg-zinc-950">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <a v-for="(brand, index) in brands" :key="brand.name" :href="brand.url" target="_blank"
                rel="noopener noreferrer" :class="[
                    'relative group',
                    index === brands.length - 1 && brands.length % 2 !== 0 ?
                        'col-span-2 md:col-span-3 lg:col-span-4 max-w-xs mx-auto w-full' : ''
                ]">
                <!-- Card with glow effect -->
                <div class="relative h-full">
                    <!-- Glow overlay -->
                    <div class="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 
                      opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                    <!-- Card content -->
                    <div class="relative flex items-center justify-center p-8 h-full
                      bg-zinc-900 border border-zinc-800
                      group-hover:border-blue-500/50
                      transition-all duration-300 ease-out
                      backdrop-blur-sm
                      before:absolute before:inset-0 
                      before:bg-gradient-to-r before:from-transparent before:via-zinc-800/5 before:to-transparent
                      before:opacity-0 before:group-hover:opacity-100 before:transition-opacity before:duration-500">

                        <!-- Brand logo placeholder -->
                        <div
                            class="flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-500">
                            <span
                                class="text-xl font-medium text-zinc-500 group-hover:text-zinc-100 transition-colors duration-300">
                                {{ brand.name }}
                            </span>
                        </div>

                        <!-- Icon with modern styling -->
                        <Icon name="lucide:external-link" class="absolute top-3 right-3 w-4 h-4 
                                text-zinc-700 group-hover:text-blue-400
                                opacity-0 group-hover:opacity-100 
                                transition-all duration-300" />
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script setup>
const brands = [
    { name: "Certnz", url: "https://www.cert.govt.nz/individuals/" },
    { name: "NetSafe", url: "https://netsafe.org.nz/" },
    { name: "Bitwarden", url: "https://bitwarden.com/" },
    { name: "Samsung", url: "https://www.samsung.com/nz/" },
    { name: "Brand5", url: "#" },
]
</script>