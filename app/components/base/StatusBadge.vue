<template>
  <div class="flex flex-col gap-1 w-full">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <!-- Level Badge -->
        <div class="flex items-center justify-center px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-lg border border-indigo-200 shadow-sm font-outfit text-xs font-bold">
          Lv.{{ level }}
        </div>
        
        <!-- Status Label (Optional) -->
        <span v-if="statusLabel" class="text-xs font-semibold text-slate-500 font-inter">
          {{ statusLabel }}
        </span>
      </div>

      <!-- XP Text -->
      <div class="font-outfit text-xs font-bold text-slate-600">
        {{ currentXp }} / {{ maxXp }}
      </div>
    </div>

    <!-- Progress Bar -->
    <div class="relative w-full h-3 bg-slate-100 rounded-full overflow-hidden shadow-inner flex items-center">
      <div 
        class="absolute left-0 top-0 h-full bg-gradient-to-r from-green-400 to-green-500 transition-all duration-500 rounded-full"
        :style="{ width: progressPercentage + '%' }"
      />
      <!-- Shine effect on progress bar -->
      <div 
        class="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none"
        :style="{ width: progressPercentage + '%' }"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  level: {
    type: Number,
    required: true
  },
  currentXp: {
    type: Number,
    required: true
  },
  maxXp: {
    type: Number,
    required: true
  },
  statusLabel: {
    type: String,
    default: ''
  }
})

const progressPercentage = computed(() => {
  if (props.maxXp <= 0) return 0
  const ratio = props.currentXp / props.maxXp
  return Math.min(Math.max(ratio * 100, 0), 100)
})
</script>
