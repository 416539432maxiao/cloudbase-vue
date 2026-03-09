<template>
  <div class="flex flex-col gap-3 p-4 bg-white rounded-[32px] border-2 border-slate-100 shadow-[0_8px_16px_#E2E8F0,0_-4px_8px_#FFFFFF] w-[200px] transition-transform hover:-translate-y-2 cursor-pointer">
    <!-- Image Area -->
    <div class="w-[168px] h-[160px] rounded-3xl overflow-hidden bg-slate-50 relative group">
      <img v-if="imageUrl" :src="imageUrl" class="w-full h-full object-cover transition-transform group-hover:scale-110" />
      <div v-else class="w-full h-full flex items-center justify-center text-indigo-400 bg-gradient-to-br from-indigo-50 to-indigo-100">
        <component v-if="icon" :is="LucideIcons[icon]" :size="48" stroke-width="2" />
      </div>
      
      <!-- Lock Overlay for locked pets -->
      <div v-if="isLocked" class="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] flex items-center justify-center">
        <IconLock class="text-white drop-shadow-md" :size="32" />
      </div>
    </div>
    
    <!-- Info Area -->
    <div class="flex flex-col gap-1 w-full items-center text-center mt-1">
      <div class="font-outfit font-extrabold text-slate-800 text-lg truncate w-full px-2" :class="{'opacity-50': isLocked}">
        {{ isLocked ? '未知神兽' : name }}
      </div>
      <div 
        :class="[
          'flex items-center gap-1 px-3 py-1 rounded-full font-bold text-xs mt-1',
          rarityClasses[rarity] || 'bg-blue-50 text-blue-600'
        ]"
      >
        {{ rarityLabel }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Lock as IconLock } from 'lucide-vue-next'
import * as LucideIcons from 'lucide-vue-next'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  rarity: {
    type: String,
    default: 'common' // common, rare, epic, legendary
  },
  imageUrl: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: 'PawPrint'
  },
  isLocked: {
    type: Boolean,
    default: false
  }
})

const rarityClasses = {
  common: 'bg-slate-100 text-slate-600',
  rare: 'bg-blue-50 text-blue-600',
  epic: 'bg-purple-50 text-purple-600',
  legendary: 'bg-amber-100 text-amber-600 shadow-sm'
}

const rarityLabel = computed(() => {
  if (props.isLocked) return '???'
  const labels = {
    common: '普通',
    rare: '稀有',
    epic: '史诗',
    legendary: '传说'
  }
  return labels[props.rarity] || '普通'
})
</script>
