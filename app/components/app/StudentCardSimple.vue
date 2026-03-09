<template>
  <div class="flex items-center gap-4 bg-white p-3 rounded-2xl shadow-sm border border-slate-100 transition-all hover:bg-slate-50 cursor-pointer" @click="$emit('click')">
    <div class="flex items-center justify-center w-12 h-12 rounded-[20px] bg-indigo-50 text-indigo-600 font-outfit font-extrabold text-xl shadow-inner border border-indigo-100">
      {{ avatarText }}
    </div>
    <div class="flex flex-col flex-1 overflow-hidden">
      <div class="font-outfit font-bold text-slate-800 text-lg truncate">{{ name }}</div>
      <div v-if="subtitle" class="text-sm text-slate-500 font-inter truncate">{{ subtitle }}</div>
    </div>
    <div v-if="$slots.action" class="pl-2">
      <slot name="action" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  }
})

defineEmits(['click'])

const avatarText = computed(() => {
  return props.name ? props.name.charAt(0).toUpperCase() : '👤'
})
</script>
