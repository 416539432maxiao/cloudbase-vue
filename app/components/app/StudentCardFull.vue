<template>
  <div 
    ref="cardRef"
    class="flex flex-col gap-3 p-6 bg-slate-50 rounded-[32px] border-2 border-white shadow-[0_16px_24px_rgba(203,213,225,0.5),0_4px_8px_rgba(255,255,255,0.8)] w-[276px] cursor-pointer select-none"
    :class="{ 'animate-evolution': isEvolutionActive }"
    :style="cardStyle"
  >
    <!-- Header Row (Pet Name & Level) -->
    <div class="flex items-center justify-between w-full">
      <div class="font-outfit text-base font-bold text-slate-800">
        {{ petName }}
      </div>
      <div class="px-3 py-1 bg-indigo-50 text-indigo-600 font-outfit text-sm font-extrabold rounded-full border-2 border-white shadow-[0_3px_0_#C7D2FE]">
        Lv.{{ level }}
      </div>
    </div>

    <!-- Center Pet Image -->
    <div class="w-full h-[187px] rounded-3xl overflow-hidden relative bg-slate-100 flex-shrink-0">
      <img v-if="currentStageData.imageUrl" :src="currentStageData.imageUrl" class="w-full h-full object-cover" />
      <div v-else class="w-full h-full flex items-center justify-center text-indigo-400">
         <IconCat :size="48" stroke-width="2" />
      </div>
    </div>

    <!-- Student Name & Stats -->
    <div class="flex items-center justify-between mt-1">
      <div class="font-outfit text-lg font-bold text-slate-800">
        {{ studentName }}
      </div>
      <StatsRow :points="points" :badges="badges" />
    </div>

    <!-- Progress Info -->
    <div class="flex items-center justify-between w-full mt-1">
      <div class="font-outfit text-xs font-bold text-slate-400">距下级</div>
      <div class="font-outfit text-xs font-extrabold text-slate-400">{{ currentXp }} / {{ maxXp }}</div>
    </div>

    <!-- Evolution Timeline Component -->
    <EvolutionTimeline 
      :stages="evolutionStages"
      :max-unlocked-index="currentStageIndex"
      v-model="activeDisplayIndex"
    />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useMouseInElement, useMousePressed } from '@vueuse/core'
import { Cat as IconCat, Egg as IconEgg, PawPrint as IconPawPrint, Crown as IconCrown } from 'lucide-vue-next'

const cardRef = ref(null)
const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(cardRef)
const { pressed } = useMousePressed({ target: cardRef })

const isEvolutionActive = ref(false)

const cardStyle = computed(() => {
  if (isEvolutionActive.value) {
    // Disable JS style transforms during CSS animation to avoid conflicts
    return {}
  }

  // Default state: not hovering and not pressing
  if (isOutside.value && !pressed.value) {
    return {
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateY(0)',
      transition: 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)'
    }
  }

  // Hover state: slightly lifted, no tilt
  if (!pressed.value) {
    return {
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1.02, 1.02, 1.02) translateY(-4px)',
      transition: 'transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
    }
  }

  // Pressed state: 3D drag & tilt according to mouse position
  const centerX = elementWidth.value / 2
  const centerY = elementHeight.value / 2
  
  // Max tilt angle (reduced for subtler, more constrained flip)
  const maxRotation = 10
  
  // Calculate angles based on offset from center
  const rotateY = ((elementX.value - centerX) / centerX) * maxRotation
  const rotateX = -((elementY.value - centerY) / centerY) * maxRotation

  return {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(0.95, 0.95, 0.95)`,
    // Smoother and longer transition so quick clicks won't cause harsh jitter
    transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)'
  }
})

const props = defineProps({
  petName: {
    type: String,
    default: '幻影喵'
  },
  studentName: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: true
  },
  points: {
    type: Number,
    default: 0
  },
  badges: {
    type: Number,
    default: 0
  },
  currentXp: {
    type: Number,
    required: true
  },
  maxXp: {
    type: Number,
    required: true
  },
  currentStageIndex: {
    type: Number,
    default: 2
  }
})

// Evolution stages with icons and mock images
const evolutionStages = [
  { icon: IconEgg, imageUrl: 'https://images.unsplash.com/photo-1598331668826-20cecb59b157?w=300&h=300&fit=crop&q=80' },
  { icon: IconPawPrint, imageUrl: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=300&h=300&fit=crop&q=80' },
  { icon: IconCat, imageUrl: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=300&h=300&fit=crop&q=80' },
  { icon: IconCat, imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&h=300&fit=crop&q=80' },
  { icon: IconCrown, imageUrl: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=300&h=300&fit=crop&q=80' }
]

// Separate the actual highest unlocked stage, from the one currently actively clicked/viewed
const activeDisplayIndex = ref(props.currentStageIndex)

// Update active display when highest stage evolves
watch(() => props.currentStageIndex, (newVal) => {
  activeDisplayIndex.value = newVal
})

const currentStageData = computed(() => {
  return evolutionStages[activeDisplayIndex.value] || evolutionStages[0]
})

// Trigger evolution animation when level or stage increases
const triggerEvolution = () => {
  if (isEvolutionActive.value) return
  isEvolutionActive.value = true
  setTimeout(() => {
    isEvolutionActive.value = false
  }, 1200)
}

watch(() => props.level, (newVal, oldVal) => {
  if (newVal > oldVal) triggerEvolution()
})

watch(() => props.currentStageIndex, (newVal, oldVal) => {
  if (newVal > oldVal) triggerEvolution()
})
</script>

<style scoped>
@keyframes evolution-spin {
  0% { 
    transform: perspective(1000px) scale(1) rotateZ(0deg) rotateY(0deg); 
  }
  15% { 
    transform: perspective(1000px) scale(1.03) rotateZ(-4deg) rotateY(0deg); 
  }
  30% { 
    transform: perspective(1000px) scale(1.06) rotateZ(5deg) rotateY(0deg); 
  }
  40% { 
    transform: perspective(1000px) scale(1.1) rotateZ(-3deg) rotateY(0deg); 
  }
  60% { 
    transform: perspective(1000px) scale(1.15) rotateZ(0deg) rotateY(180deg); 
    box-shadow: 0 0 50px 15px rgba(99, 102, 241, 0.4), 0 0 100px 30px rgba(134, 239, 172, 0.3);
  }
  100% { 
    transform: perspective(1000px) scale(1) rotateZ(0deg) rotateY(360deg); 
  }
}

.animate-evolution {
  animation: evolution-spin 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none; /* Disable mouse interactions during animation */
  z-index: 50;
}
</style>
