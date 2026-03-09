<template>
  <div class="flex items-center justify-between w-full mt-2" @pointerdown.stop @mousedown.stop>
    <template v-for="(stage, index) in stages" :key="index">
      <!-- Node -->
      <div class="flex flex-col items-center relative z-10 w-8">
        <button 
          @click.stop="handleNodeClick(index)"
          :disabled="index > maxUnlockedIndex"
          :class="[
            'w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all border-2 duration-300 z-10',
            index <= maxUnlockedIndex 
              ? index === activeDisplayIndex 
                ? 'bg-green-400 text-white border-white shadow-[0_4px_0_#15803D,0_8px_16px_rgba(34,197,94,0.4)] scale-110 -translate-y-1' // Active: brighter green, deep green 3D shadow, pop up
                : 'bg-green-500 text-white border-white shadow-[0_2px_0_#16A34A] hover:-translate-y-0.5' // Unlocked but not active
              : 'bg-slate-200 text-slate-400 border-slate-300 shadow-[0_2px_4px_rgba(0,0,0,0.05)] cursor-not-allowed opacity-80' // Locked
          ]"
        >
          <component :is="stage.icon" :size="index <= maxUnlockedIndex ? 14 : 16" stroke-width="2.5" />
        </button>
      </div>
      <!-- Connector Line -->
      <div v-if="index < stages.length - 1" class="flex-1 h-1 rounded-full relative overflow-hidden bg-slate-200 shadow-inner -mx-1 z-0">
        <div 
          class="absolute left-0 top-0 h-full bg-green-500 transition-all shadow-[0_1px_0_#16A34A]"
          :style="{ width: index < maxUnlockedIndex ? '100%' : '0%' }"
        />
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  stages: {
    type: Array,
    required: true
  },
  maxUnlockedIndex: {
    type: Number,
    required: true
  },
  modelValue: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const activeDisplayIndex = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

const handleNodeClick = (index) => {
  if (index <= props.maxUnlockedIndex) {
    activeDisplayIndex.value = index
  }
}
</script>
