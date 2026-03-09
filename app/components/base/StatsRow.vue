<template>
  <div class="flex items-center gap-3">
    <!-- Points / Fire Stat -->
    <div class="flex items-center gap-1">
      <IconFlame class="text-indigo-500" :size="20" stroke-width="2.5" />
      <span class="font-outfit font-extrabold text-base text-slate-800">{{ points }}</span>
    </div>

    <!-- Badges / Medal Stat -->
    <div class="flex items-center gap-1">
      <IconMedal class="text-indigo-500" :size="20" stroke-width="2.5" />
      <span class="font-outfit font-extrabold text-base text-slate-800">{{ badges }}</span>
    </div>
  </div>
</template>

<script setup>
import { Flame as IconFlame, Medal as IconMedal } from 'lucide-vue-next'

defineProps({
  points: {
    type: [Number, String],
    default: 0
  },
  badges: {
    type: [Number, String],
    default: 0
  }
})
</script>
