<template>
  <section id="how-it-works" class="py-24">
    <div class="max-w-3xl mx-auto text-center mb-16 space-y-4">
      <h2 class="text-4xl font-black tracking-tight text-foreground">How It Works</h2>
      <p class="text-lg text-muted-foreground leading-relaxed">
        Three simple steps to stop guessing and start controlling your financial reality.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
      <div class="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] h-0.5 bg-border -z-10"></div>

      <StepCard
        v-for="step in howItWorksSteps"
        :key="step.stepNumber"
        v-bind="step"
      />
    </div>
  </section>
</template>

<script setup lang="ts">

import StepCard from '@/components/StepCard.vue'


import { howItWorksSteps } from '@/constants/content'
</script>