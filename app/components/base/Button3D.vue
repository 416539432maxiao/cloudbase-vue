<template>
  <button
    :class="[
      'relative font-outfit font-bold transition-[background-color,color,box-shadow,transform] duration-150 active:shadow-none',
      sizeClasses[size],
      variantClasses[variant]
    ]"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
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
  primary: 'bg-[#4F46E5] text-white shadow-[0_5px_0_#312E81] active:translate-y-[5px]',
  secondary: 'bg-white text-primary shadow-[0_4px_0_#CBD5E1] border-2 border-slate-100 active:translate-y-[4px]',
  danger: 'bg-negative text-white shadow-[0_5px_0_#991B1B] active:translate-y-[5px]',
  warning: 'bg-amber-500 text-white shadow-[0_5px_0_#D97706] border-2 border-amber-200 active:translate-y-[5px]',
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-lg rounded-xl',
  lg: 'px-8 py-4 text-xl rounded-2xl',
}
</script>
