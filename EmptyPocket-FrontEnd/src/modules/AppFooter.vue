<template>
  <footer class="border-t border-border bg-card mt-24">

    <div class="container mx-auto px-4 py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
        <div class="md:col-span-1">
          <div class="flex items-center gap-2 mb-4">
            <div class="p-1.5 bg-primary/20 rounded-lg">
              <BanknotesIcon class="size-6 text-primary shrink-0" />
            </div>
            <span class="text-xl font-extrabold tracking-tight text-foreground"> EmptyPocket </span>
          </div>
          <p class="text-sm text-muted-foreground leading-relaxed">
            Smart financial tracking tool. We help you get a clear overview of your expenses and
            take control of your financial future.
          </p>
        </div>

        <FooterNavColumn
          v-for="column in footerNav"
          :key="column.title"
          :title="column.title"
          :links="column.links"
        />
      </div>

      <div
        class="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
      >
        <p>&copy; 2026 EmptyPocket. All rights reserved.</p>

        <div
          class="flex items-center gap-1.5 bg-background px-3 py-1 rounded-full border border-border"
        >
          <ShieldCheckIcon class="size-4 text-primary" />
          <span class="font-medium">Data securely encrypted</span>
        </div>
      </div>
    </div>

  </footer>
</template>

<script setup lang="ts">
import { BanknotesIcon, ShieldCheckIcon } from '@heroicons/vue/24/outline'
import FooterNavColumn from '@/components/FooterNavColumn.vue'
import { footerNav } from '@/constants/navigation'
</script>
