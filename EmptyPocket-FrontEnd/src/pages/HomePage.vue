<template>
  <main class="container mx-auto px-4 py-30 py-12">
    <HomeHero />
    <HomeHowItWorks />
    <HomeFeatures />
  </main>
</template>

<script setup lang="ts">
import HomeHero from '@/modules/home/HomeHero.vue'
import HomeHowItWorks from '@/modules/home/HomeHowItWorks.vue'
import HomeFeatures from '@/modules/home/HomeFeatures.vue'
</script>
