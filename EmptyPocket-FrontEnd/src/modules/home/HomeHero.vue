<template>
<div class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        <section class="lg:col-span-3 space-y-6">
          <div class="bg-card border border-border p-8 rounded-xl shadow-sm">
            <h1 class="text-4xl font-black tracking-tight mb-4">
              EmptyPocket <br />
              <span class="text-3xl">Stop wondering where it all went.</span>
            </h1>
            <p class="text-lg text-muted-foreground leaded-relaxed max-w-2xl">
              This isn't just another tracker. It's your financial reality check. We help you face
              the cold truth: from that overpriced morning latte to the debts you've been ignoring.
              Control your cash before it controls you.
            </p>
            <div class="flex items-center gap-10 pt-4">
              <button
                class="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
                Start Counting
              </button>
              <a
                href="#how-it-works"
                class="border border-border px-6 py-3 rounded-lg font-bold text-foreground transition-colors hover:bg-secondary inline-flex items-center justify-center"
              >
                How it works?
              </a>
                            <a
                href="#what-we-provide"
                class="border border-border px-6 py-3 rounded-lg font-bold text-foreground transition-colors hover:bg-secondary inline-flex items-center justify-center"
              >
                What do we provide?
              </a>
              
            </div>
          </div>
        </section>

        <section class="lg:col-span-2">
          <div
            class="bg-card border-2 border-dashed border-border h-[400px] rounded-xl flex flex-col items-center justify-center p-10 text-canter group hover:border-primary transition-colors"
          >
            <div
              class="p-4 bg-secondary rounded-full mb-6 group-hover:scale-110 transition-transform"
            >
              <PhotoIcon class="size-10 text-muted-foreground group-hover:text-primary" />
            </div>
            <h3 class="text-xl font-bold text-foreground mb-2">Visual Insight</h3>
            <p class="text-xm text-muted-foreground italic">
              Examples of your spending patterns, showing where your money goes each month.
            </p>
          </div>
        </section>
      </div>
</template>

<script setup lang="ts">
import { PhotoIcon } from "@heroicons/vue/24/outline";
</script>