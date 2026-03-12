<template>

    
    <main class="container mx-auto px-4 py-30 py-12">
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

      <section id="how-it-works" class="container mx-auto px-4 py-24">
        <div class="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 class="text-4xl font-black tracking-tight text-foreground">How It Works</h2>
          <p class="text-lg text-muted-foreground leading-relaxed">
            Three simple steps to stop guessing and start controlling your financial reality.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div
            class="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] h-0.5 bg-border -z-10"
          ></div>

          <div
            class="bg-card border border-border p-8 rounded-xl shadow-sm relative flex flex-col items-center text-center group transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div
              class="size-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-black mb-6 border-4 border-card shadow-sm group-hover:scale-110 transition-transform duration-300"
            >
              1
            </div>
            <h3 class="text-2xl font-bold tracking-tight text-foreground mb-3">Create Account</h3>
            <p class="text-muted-foreground leading-relaxed">
              Sign up in seconds. No complex integrations required—just a clean dashboard waiting
              for your data.
            </p>
          </div>

          <div
            class="bg-card border border-border p-8 rounded-xl shadow-sm relative flex flex-col items-center text-center group transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div
              class="size-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-black mb-6 border-4 border-card shadow-sm group-hover:scale-110 transition-transform duration-300"
            >
              2
            </div>
            <h3 class="text-2xl font-bold tracking-tight text-foreground mb-3">Log Every Penny</h3>
            <p class="text-muted-foreground leading-relaxed">
              Input your expenses honestly. Categorize your transactions to see exactly where your
              cash flows.
            </p>
          </div>

          <div
            class="bg-card border border-border p-8 rounded-xl shadow-sm relative flex flex-col items-center text-center group transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div
              class="size-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-black mb-6 border-4 border-card shadow-sm group-hover:scale-110 transition-transform duration-300"
            >
              3
            </div>
            <h3 class="text-2xl font-bold tracking-tight text-foreground mb-3">Face the Reality</h3>
            <p class="text-muted-foreground leading-relaxed">
              Review detailed charts, identify your financial leaks, and adjust your spending habits
              immediately.
            </p>
          </div>
        </div>
      </section>

      <section id="what-we-provide" class="container mx-auto px-4 py-24">
        <div class="max-w-3xl mb-16 space-y-4">
          <h2 class="text-4xl font-black tracking-tight text-foreground">Core Functionality</h2>
          <p class="text-lg text-muted-foreground leading-relaxed">
            Everything you need to get a clear overview of your financial health and take back
            control of your money.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="feature in features"
            :key="feature.name"
            class="bg-card border border-border p-8 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:border-primary/50 flex flex-col items-start group"
          >
            <div
              class="p-4 bg-primary/10 rounded-xl mb-6 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300"
            >
              <component
                :is="feature.icon"
                class="size-12 text-primary transform group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              />
            </div>

            <h3 class="text-2xl font-bold tracking-tight text-foreground mb-3">
              {{ feature.name }}
            </h3>
            <p class="text-lg text-muted-foreground leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </section>
      <section>SIGNINSIGNOUT</section>
    </main>
    

</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  BanknotesIcon,
  TableCellsIcon,
  UserGroupIcon,
  PhotoIcon,
  CalculatorIcon,
} from '@heroicons/vue/24/outline'

import {
  WalletIcon,
  RectangleGroupIcon,
  ChartPieIcon,
  ArrowPathRoundedSquareIcon,
  PresentationChartLineIcon,
  ShieldCheckIcon,
} from '@heroicons/vue/24/outline'

const features = [
  {
    name: 'Smart Expense Tracking',
    description:
      'Automatically calculate your weekly and monthly expenses. Get a clear overview of where your money goes with real-time updates.',
    icon: WalletIcon,
  },
  {
    name: 'Intelligent Categorization',
    description:
      'Group your transactions into clear, customizable categories. Easily identify your top spending areas and adjust your habits effortlessly.',
    icon: RectangleGroupIcon,
  },
  {
    name: 'Customizable Budgets',
    description:
      'Set realistic spending limits for different categories. Receive timely alerts when you are approaching your monthly caps to stay on track.',
    icon: ChartPieIcon,
  },
  {
    name: 'Subscription Management',
    description:
      'Keep track of all your recurring payments in one organized place. Never get surprised by auto-renewals or forgotten subscriptions again.',
    icon: ArrowPathRoundedSquareIcon,
  },
  {
    name: 'Visual Analytics',
    description:
      'Understand your financial health at a glance with interactive charts. Spot trends and make data-driven decisions for your future.',
    icon: PresentationChartLineIcon,
  },
  {
    name: 'Bank-Grade Security',
    description:
      'Your financial data is securely stored and heavily encrypted. We prioritize your privacy, ensuring your personal information remains strictly yours.',
    icon: ShieldCheckIcon,
  },
]



</script>
