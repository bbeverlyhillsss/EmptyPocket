<template>
  <div class="min-h-screen bg-background text-foreground transition-colors">
    <header class="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <nav class="container mx-auto px-4 h-16 flex items-center justify-between">
        <div class="flex items-center gap-6">
          <div class="flex items-center gap-2">
            <div class="p-2 bg-primary/20 rounded-lg">
              <BanknotesIcon class="size-8 text-primary shrink-0" />
            </div>
            <span
              class="text-xl font-extrabold tracking-tight text-foreground hidden sm:inline-block"
            >
              EmptyPocket
            </span>
          </div>

          <div class="h-8 w-px bg-border hidden md:block"></div>

          <div class="flex flex-col justify-center">
            <span class="text-xs text-muted-foreground uppercase font-semibold leading-tight"
              >Accumulated</span
            >
            <span class="text-lg font-mono font-bold text-foreground leading-none">
              {{ accumulation.toLocaleString() }} ₴
            </span>
          </div>
        </div>

        <ul class="hidden md:flex items-center gap-2">
          <li>
            <a
              href="#"
              class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md transition-all group"
            >
              <TableCellsIcon class="size-5 group-hover:text-primary transition-colors" />
              <span>Main Table</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground hover:text-foreground hover:bg-secondary rounded-md transition-all group"
            >
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
    <main class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        <section class="lg:col-span-3 space-y-6">
          <div class="bg-card border border-border p-8 rounded-xl shadow-sm">
            <h1 class="text-4xl font-black tracking-tight mb-4">
              EmptyPocket: <br />
              <span class="text-3xl">Stop wondering where it all went.</span>
            </h1>
            <p class="text-lg text-muted-foreground leaded-relaxed max-w-2xl">
              This isn't just another tracker. It's your financial reality check. We help you face
              the cold truth: from that overpriced morning latte to the debts you've been ignoring.
              Control your cash before it controls you.
            </p>
            <div class="flex items-center gap-10 pt-4">
              <!-- кнопки через роуты функциональные -->
              <button
                class="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
                Start Counting
              </button>
              <button
                class="border border-border px-6 py-3 rounded-lg font-bold text-foreground transition-color hover:bg-secondary"
              >
                How it works?
              </button>
            </div>
          </div>
        </section>
        <!--  -->
        <section class="lg:col-span-2">
          <div
            class="bg-card border-2 border-dashed border-border h-[400px] rounded-xl flex flex-col items-center justify-center p-10 text-canter group hover:border-primary transition-colors"
          >
            <div class="p-4 bg-secondary rounded-full mb-6 group-hover:scale-110 transition-transform">
              <PhotoIcon class="size-10 text-muted-foreground group-hover:text-primary" />
            </div>
            <h3 class="text-xl font-bold text-foreground mb-2">Visual Insight</h3>
            <p class="text-xm text-muted-foreground italic">
              A scrollable gallery of your financial "crimes" will appear here soon. Imagine
              beautiful charts showing exactly how broke you are.
            </p>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BanknotesIcon, TableCellsIcon, UserGroupIcon, PhotoIcon } from '@heroicons/vue/24/outline'

const accumulation = ref<number>(12540)
</script>
