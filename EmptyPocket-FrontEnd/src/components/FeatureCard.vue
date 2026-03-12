<template>
  <div class="bg-card border border-border p-8 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:border-primary/50 flex flex-col items-start group">
    <div class="p-4 bg-primary/10 rounded-xl mb-6 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
      <component
        :is="icon"
        class="size-12 text-primary transform group-hover:scale-110 transition-transform duration-300"
        aria-hidden="true"
      />
    </div>
    <h3 class="text-2xl font-bold tracking-tight text-foreground mb-3">
      {{ name }}
    </h3>
    <p class="text-lg text-muted-foreground leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  name: string
  description: string
  icon: Component
}>()
</script>