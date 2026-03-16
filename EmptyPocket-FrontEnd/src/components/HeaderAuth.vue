<template>
  <div class="flex items-center gap-3">
    <BaseButton :to="{ name: 'Login' }" variant="outline" size="sm"> Sign in </BaseButton>

    <BaseButton :to="{ name: 'Register' }" variant="primary" size="sm"> Sign up </BaseButton>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/UI/BaseButton.vue'
</script>
