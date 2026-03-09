<template>
  <div class="relative w-full">
    <div class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none text-slate-400 pb-[3px]">
      <IconSearch :size="20" stroke-width="2.5" />
    </div>
    <input 
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      type="text" 
      class="w-full h-[52px] bg-slate-50 rounded-[26px] border-2 border-slate-200 pl-[52px] pr-5 pb-[3px] text-slate-600 font-outfit text-[16px] shadow-[0_3px_0_#CBD5E1] outline-none transition-all focus:-translate-y-0.5 focus:border-indigo-400 focus:bg-white focus:shadow-[0_5px_0_#A5B4FC] hover:bg-white placeholder:text-slate-400"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup>
import { Search as IconSearch } from 'lucide-vue-next'

defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: '搜索...'
  }
})

defineEmits(['update:modelValue'])
</script>
