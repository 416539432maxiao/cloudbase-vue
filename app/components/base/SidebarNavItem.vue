<template>
  <button
    :class="[
      'flex items-center gap-3 px-4 py-3 rounded-2xl transition-all cursor-pointer font-outfit w-full text-left',
      active 
        ? 'bg-white border-2 border-indigo-200 shadow-[0_3px_0_#C7D2FE] text-indigo-700 font-bold' 
        : 'bg-transparent border-2 border-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-700 font-semibold'
    ]"
    @click="$emit('click')"
  >
    <div :class="active ? 'text-indigo-600' : 'text-slate-400'">
      <slot name="icon">
        <component v-if="icon" :is="LucideIcons[icon]" :size="20" stroke-width="2.5" />
      </slot>
    </div>
    <span class="text-[16px]">{{ label }}</span>
  </button>
</template>

<script setup>
import * as LucideIcons from 'lucide-vue-next'

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
