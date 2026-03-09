<template>
  <button
    :class="[
      'relative flex items-center justify-center transition-all active:translate-y-[4px] active:shadow-none',
      sizeClasses[size],
      variantClasses[variant]
    ]"
    @click="$emit('click')"
  >
    <slot>
      <component v-if="icon" :is="LucideIcons[icon]" :size="iconSize" />
    </slot>
  </button>
</template>

<script setup>
import * as LucideIcons from 'lucide-vue-next'

const props = defineProps({
  icon: {
    type: String,
    default: null
  },
  variant: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'md'
  }
})

defineEmits(['click'])

const variantClasses = {
  primary: 'bg-[#F59E0B] text-white shadow-[0_4px_0_#D97706] border-2 border-[#FDE68A]', // based on the design spec avatar add btn
  secondary: 'bg-[#F1F5F9] text-[#64748B] shadow-[0_3px_0_#CBD5E1] border-2 border-[#E2E8F0]', // based on headerClose btn
  danger: 'bg-negative text-white shadow-[0_4px_0_#991B1B]',
}

const sizeClasses = {
  sm: 'w-10 h-10 rounded-xl', // w:40 h:40, r:12
  md: 'w-12 h-12 rounded-2xl', // w:48, h:48
  lg: 'w-14 h-14 rounded-[20px]',
}

const iconSize = computed(() => {
  if (props.size === 'sm') return 20;
  if (props.size === 'md') return 24;
  return 28;
})
</script>
