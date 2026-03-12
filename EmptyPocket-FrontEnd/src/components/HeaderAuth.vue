<template>

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
</template>

<script setup lang="ts">


</script>