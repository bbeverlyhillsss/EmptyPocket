<template>
  <section id="what-we-provide" class="container mx-auto px-4 py-24">
    <div class="max-w-3xl mb-16 space-y-4">
      <h2 class="text-4xl font-black tracking-tight text-foreground">Core Functionality</h2>
      <p class="text-lg text-muted-foreground leading-relaxed">
        Everything you need to get a clear overview of your financial health and take back
        control of your money.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <FeatureCard
        v-for="feature in homeFeatures"
        :key="feature.name"
        v-bind="feature"
      />
    </div>
  </section>
</template>

<script setup lang="ts">

import FeatureCard from '@/components/FeatureCard.vue'


import { homeFeatures } from '@/constants/content'
</script>