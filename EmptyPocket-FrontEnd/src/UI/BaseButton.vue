<template>
<component
    :is="tag"
    :to="to"
    :href="href"
    :type="tag === 'button' ? type : undefined"
    :disabled="disabled"
    class="inline-flex items-center justify-center transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer rounded-lg"
    :class="[
      
      variant === 'primary' && 'bg-primary text-primary-foreground shadow-sm hover:opacity-90',
      
      
      variant === 'outline' && 'border border-border text-foreground hover:bg-secondary',
      
      
      variant === 'ghost' && 'text-muted-foreground hover:text-foreground',

      
      variant === 'ghost' ? 'font-medium' : 'font-bold',

      
      size === 'sm' && (variant === 'ghost' ? 'px-3 py-2 text-sm' : 'px-4 py-2 text-sm'),
   
      size === 'md' && 'px-6 py-3 text-sm md:text-base'
    ]"
  >
    <slot />
  </component>
</template>


<script setup lang="ts">

import { computed } from 'vue'

interface BaseButton {
    to?: string | object
    href?: string
    variant?: 'primary' | 'outline' | 'secondary' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    type?: 'button' | 'submit'
    disabled?: boolean
}

const props = withDefaults(defineProps<BaseButton>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
})

const tag = computed(() => {
  if (props.disabled) return 'button' 
  if (props.to) return 'router-link'
  if (props.href) return 'a'
  return 'button'
})


</script>