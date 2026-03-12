<template>
    <div class="bg-card border border-border p-8 rounded-xl shadow-sm relative flex flex-col items-center text-center group transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
    <div class="size-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-black mb-6 border-4 border-card shadow-sm group-hover:scale-110 transition-transform duration-300">
      {{ stepNumber }}
    </div>
    <h3 class="text-2xl font-bold tracking-tight text-foreground mb-3">
      {{ title }}
    </h3>
    <p class="text-muted-foreground leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  stepNumber: string | number
  title: string
  description: string
}>()
</script>