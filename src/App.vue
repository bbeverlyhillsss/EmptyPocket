<template>
  <header class="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
    <nav class="container mx-auto px-4 h-16 flex items-center justify-between">
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2">
          <div class="p-2 bg-primary/20 rounded-lg">
            <BanknotesIcon class="size-8 text-primary shrink-0" />
          </div>
          <span class="text-xl font-extrabold tracking-tight text-foreground hidden sm:inline-block">
            EmptyPocket
          </span>
        </div>

        <div class="h-8 w-px bg-border hidden md:block"></div>

        <div class="flex flex-col justify-center">
          <span class="text-xs text-muted-foreground uppercase font-semibold leading-tight">Накопичено</span>
          <span class="text-lg font-mono font-bold text-foreground leading-none">
            {{ accumulation.toLocaleString() }} ₴
          </span>
        </div>
      </div>

      <ul class="hidden md:flex items-center gap-2">
        <li>
          <a href="#" class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md transition-all group">
            <TableCellsIcon class="size-5 group-hover:text-primary transition-colors" />
            <span>Main Table</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground hover:text-foreground hover:bg-secondary rounded-md transition-all group">
            <UserGroupIcon class="size-5 group-hover:text-primary transition-colors" />
            <span>Debtors</span>
          </a>
        </li>
      </ul>

      <div>
        <p>sign in sign up</p>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BanknotesIcon, TableCellsIcon, UserGroupIcon } from '@heroicons/vue/24/outline'


const accumulation = ref<number>(12540) 
</script>