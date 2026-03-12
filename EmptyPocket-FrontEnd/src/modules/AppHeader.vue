<template>
  <header class="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
    <nav class="container mx-auto px-4 h-16 flex items-center justify-between">
      <div class="flex items-center gap-6">
        <router-link :to="{ name: 'Home' }" class="flex items-center gap-2 group">
          <div class="p-2 bg-primary/20 rounded-lg transition-colors group-hover:bg-primary/30">
            <BanknotesIcon class="size-8 text-primary shrink-0" />
          </div>
          <span
            class="text-xl font-extrabold tracking-tight text-foreground hidden sm:inline-block"
          >
            EmptyPocket
          </span>
        </router-link>

        <div class="h-8 w-px bg-border hidden md:block"></div>

        <div class="flex flex-col justify-center">
          <span class="text-xs text-muted-foreground uppercase font-semibold leading-tight">
            Accumulated
          </span>
          <span class="text-lg font-mono font-bold text-foreground leading-none">
            {{ accumulation.toLocaleString() }} ₴
          </span>
        </div>
      </div>

      <ul class="hidden md:flex items-center gap-2">
        <li v-for="item in headerNavigation" :key="item.routeName">
          <router-link
            :to="{ name: item.routeName }"
            class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md transition-all group"
            active-class="bg-secondary text-primary"
          >
            <component :is="item.icon" class="size-5 group-hover:text-primary transition-colors" />
            <span>{{ item.name }}</span>
          </router-link>
        </li>
      </ul>

      <HeaderAuth />
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { headerNavigation } from '@/constants/navigation'
import { BanknotesIcon } from '@heroicons/vue/24/outline'
import HeaderAuth from '@/components/HeaderAuth.vue'

const accumulation = ref<number>(12540)
</script>
