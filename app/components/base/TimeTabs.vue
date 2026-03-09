<template>
  <div class="flex items-center gap-2 pb-2">
    <button
      v-for="option in options"
      :key="option.value"
      @click="$emit('update:modelValue', option.value)"
      :class="[
        'flex items-center justify-center px-4 py-1.5 rounded-full font-outfit text-sm font-bold transition-all duration-150',
        modelValue === option.value
          ? 'bg-rose-500 text-white border-2 border-rose-500 shadow-[0_3px_0_#BE123C] -translate-y-[2px] active:translate-y-0 active:shadow-none' // Active: Solid rose with 3D pop
          : 'bg-transparent text-slate-500 border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-[1px]' // Inactive: Outline
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
    required: true, // e.g. [{ label: 'All', value: 'all' }]
  }
})

defineEmits(['update:modelValue'])
</script>
