<template>
  <div class="inline-flex items-center gap-2 bg-slate-50/80 p-1.5 rounded-2xl border border-slate-100 shadow-inner">
    <button
      v-for="option in options"
      :key="option.value"
      @click="$emit('update:modelValue', option.value)"
      :class="[
        'flex items-center justify-center px-6 h-10 rounded-xl font-outfit text-[15px] font-bold transition-all duration-200 ease-out select-none',
        modelValue === option.value
          ? 'bg-indigo-500 text-white shadow-[0_2px_8px_rgba(99,102,241,0.3)] scale-100' // Active: Solid indigo, slightly raised via shadow but mostly flat
          : 'bg-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-200/50 scale-[0.98]' // Inactive: Transparent, sinks slightly
      ]"
    >
      {{ option.label }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    required: true
  },
  options: {
    type: Array,
    required: true, // [{ label: '加分', value: 'add' }, { label: '减分', value: 'deduct' }]
  }
})

defineEmits(['update:modelValue'])
</script>
