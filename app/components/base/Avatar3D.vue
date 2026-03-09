<template>
  <div 
    :class="[
      'flex items-center justify-center font-outfit font-bold text-white shrink-0',
      sizeClasses[size],
      variantClasses[variant]
    ]"
  >
    <slot>
      <span v-if="text">{{ text.charAt(0).toUpperCase() }}</span>
      <component v-else-if="icon" :is="LucideIcons[icon]" :size="iconSize" stroke-width="2.5" />
    </slot>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import * as LucideIcons from 'lucide-vue-next'

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'primary' // 'primary'(indigo), 'success'(green), 'warning'(amber)
  },
  size: {
    type: String,
    default: 'md' // 'sm', 'md', 'lg'
  }
})

// Design from c1H: Solid backgrounds with y:4 shadow
const variantClasses = {
  primary: 'bg-indigo-500 shadow-[0_4px_0_#4F46E5]', // #6366F1 with #4F46E5 shadow
  success: 'bg-emerald-500 shadow-[0_4px_0_#059669]', // #10B981 with #059669 shadow
  warning: 'bg-amber-500 shadow-[0_4px_0_#D97706]', // #F59E0B with #D97706 shadow
}

const sizeClasses = {
  sm: 'w-8 h-8 rounded-full text-sm',
  md: 'w-12 h-12 rounded-full text-xl', // w:48 h:48 (c1H match)
  lg: 'w-16 h-16 rounded-full text-3xl',
}

const iconSize = computed(() => {
  if (props.size === 'sm') return 16
  if (props.size === 'md') return 24
  return 32
})
</script>
