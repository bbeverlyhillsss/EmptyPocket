<template>
<div>
    <h4 class="font-bold text-foreground mb-4">{{ title }}</h4>
    <ul class="space-y-3 text-sm text-muted-foreground">
      <li v-for="link in links" :key="link.name">
        <a
          :href="link.href"
          class="hover:text-primary hover:underline underline-offset-4 transition-all"
        >
          {{ link.name }}
        </a>
      </li>
    </ul>
  </div>

</template>


<script setup lang="ts">

interface FooterNavColumn {
    name: string
    href: string
}

defineProps<{
    title: string
    links: FooterNavColumn[]
}>()


</script>