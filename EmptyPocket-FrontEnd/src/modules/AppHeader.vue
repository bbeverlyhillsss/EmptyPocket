<template>

  <header class="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
    <nav class="container mx-auto px-4 h-16 flex items-center justify-between">
      
      <div class="flex items-center gap-6">
        <router-link :to="{ name: 'Home' }" class="flex items-center gap-2 group">
          <div class="p-2 bg-primary/20 rounded-lg transition-colors group-hover:bg-primary/30">
            <BanknotesIcon class="size-8 text-primary shrink-0" />
          </div>
          <span class="text-xl font-extrabold tracking-tight text-foreground hidden sm:inline-block">
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
        <li>
          <router-link
            :to="{ name: 'MainTable' }"
            class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md transition-all group"
            active-class="bg-secondary text-primary"
          >
            <TableCellsIcon class="size-5 group-hover:text-primary transition-colors" />
            <span>Main Table</span>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'Debtors' }"
            class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md transition-all group"
            active-class="bg-secondary text-primary"
          >
            <UserGroupIcon class="size-5 group-hover:text-primary transition-colors" />
            <span>Debtors</span>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'Calculations' }"
            class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md transition-all group"
            active-class="bg-secondary text-primary"
          >
            <CalculatorIcon class="size-5 group-hover:text-primary transition-colors" />
            <span>Calculations</span>
          </router-link>
        </li>
      </ul>

      <div class="flex items-center gap-3">
        <router-link
          :to="{ name: 'Login' }"
          class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-2"
        >
          Sign in
        </router-link>
        <router-link
          :to="{ name: 'Register' }"
          class="bg-primary text-primary-foreground text-sm font-bold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
        >
          Sign up
        </router-link>
      </div>

    </nav>
  </header> 

</template>


<script setup lang=ts> 
import { ref } from 'vue'
import {
  BanknotesIcon,
  TableCellsIcon,
  UserGroupIcon,
  CalculatorIcon,
} from '@heroicons/vue/24/outline'

const accumulation = ref<number>(12540)

</script>