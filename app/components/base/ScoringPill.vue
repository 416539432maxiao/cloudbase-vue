<template>
  <div
    :class="[
      'flex flex-col items-center gap-[10px] w-[140px] p-4 rounded-[24px] cursor-pointer',
      'border-2 border-white transition-all duration-150 ease-out select-none',
      // Style logic including 3D press (active) state
      type === 'positive' 
        ? 'bg-green-50 shadow-[0_4px_0_#86EFAC,0_6px_20px_rgba(134,239,172,0.2)] hover:-translate-y-1 hover:shadow-[0_5px_0_#86EFAC,0_8px_24px_rgba(134,239,172,0.3)] active:translate-y-[3px] active:scale-[0.97] active:shadow-[0_1px_0_#86EFAC,0_0_0_rgba(134,239,172,0)]' 
        : 'bg-rose-50 shadow-[0_4px_0_#FDA4AF,0_6px_20px_rgba(253,164,175,0.2)] hover:-translate-y-1 hover:shadow-[0_5px_0_#FDA4AF,0_8px_24px_rgba(253,164,175,0.3)] active:translate-y-[3px] active:scale-[0.97] active:shadow-[0_1px_0_#FDA4AF,0_0_0_rgba(253,164,175,0)]'
    ]"
    @click="$emit('click')"
  >
    <!-- Icon -->
    <div class="flex items-center justify-center text-slate-700">
      <component v-if="icon" :is="LucideIcons[icon]" :size="24" stroke-width="2.5" />
    </div>
    
    <!-- Text Content -->
    <div class="flex flex-col items-center gap-1">
      <div class="font-outfit font-semibold text-[14px] text-text-main text-center">
        {{ label }}
      </div>
      <div 
        :class="[
          'font-outfit font-bold text-[16px]',
          type === 'positive' ? 'text-positive' : 'text-negative'
        ]"
      >
        {{ type === 'positive' ? '+' : '' }}{{ value }}
      </div>
    </div>
  </div>
</template>

<script setup>
import * as LucideIcons from 'lucide-vue-next'

defineProps({
  icon: { type: String, default: 'Star' },
  label: { type: String, required: true },
  value: { type: Number, required: true },
  type: { type: String, default: 'positive' } // positive | negative
})

defineEmits(['click'])
</script>
