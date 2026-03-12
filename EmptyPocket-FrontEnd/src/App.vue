<template>
  <div class="min-h-screen bg-background text-foreground transition-colors">
    <AppHeader v-if="showHeaderFooter" />

    <main class="flex-grow">
      <router-view />
    </main>

    <AppFooter v-if="showHeaderFooter" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from '@/modules/AppHeader.vue'
import AppFooter from '@/modules/AppFooter.vue'

const route = useRoute()
const showHeaderFooter = computed(() => {
  return !['Login', 'Register'].includes(route.name as string)
})
</script>
