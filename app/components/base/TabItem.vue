<template>
  <button
    :class="[
      'flex items-center gap-2 px-6 py-2 rounded-[18px] transition-all font-outfit text-sm cursor-pointer whitespace-nowrap',
      active 
        ? 'bg-indigo-500 text-white shadow-[0_4px_0_#4338CA] border-2 border-indigo-600 font-extrabold -translate-y-[2px]' 
        : 'bg-transparent text-slate-500 font-bold border-2 border-transparent hover:text-slate-700 hover:bg-slate-200/50'
    ]"
    @click="$emit('click')"
  >
    <slot name="icon">
      <span v-if="icon" class="text-lg">{{ icon }}</span>
    </slot>
    <span>{{ label }}</span>
  </button>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: null
  }
})

defineEmits(['click'])
</script>
