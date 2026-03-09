<template>
  <div class="flex items-end justify-center gap-1.5 h-[380px] pt-5 w-full">
    
    <!-- 2nd Place (Silver) -->
    <div class="flex flex-col items-center justify-end w-[190px] h-[330px]">
      <div v-if="silver" class="flex flex-col items-center justify-end gap-1.5 w-full h-full pb-3 px-2">
        <div class="flex items-center justify-center w-16 h-16 rounded-[32px] bg-slate-300 text-white font-outfit font-extrabold text-[26px] shadow-[0_6px_16px_rgba(148,163,184,0.3)] mb-1">
          {{ silver.avatarText }}
        </div>
        <IconMedal class="text-slate-400 drop-shadow-sm" :size="24" stroke-width="2.5" />
        <div class="font-outfit font-bold text-[15px] text-slate-800">{{ silver.name }}</div>
        <div class="font-outfit font-semibold text-xs text-slate-500">{{ silver.score }} XP</div>
      </div>
      <div v-else class="flex flex-col items-center justify-end w-full h-full pb-3 px-2"></div>
      
      <!-- Podium Block Silver -->
      <div class="flex flex-col w-full h-[100px]">
        <div class="w-full h-[14px] bg-slate-200 rounded-t-[10px]"></div>
        <div class="flex items-center justify-center w-full h-[76px] bg-slate-400">
          <span class="font-outfit font-black text-white text-[32px]">2</span>
        </div>
        <div class="w-full h-[10px] bg-slate-500 rounded-b-[4px]"></div>
      </div>
    </div>

    <!-- 1st Place (Gold) -->
    <div class="flex flex-col items-center justify-end w-[220px] h-[380px] cursor-pointer group" @click="handleGoldClick" title="点击第一名再次撒花！">
      <div v-if="gold" class="flex flex-col items-center justify-end gap-2 w-full h-full pb-3 px-2 relative transition-transform group-active:scale-95 group-active:translate-y-2">
        <div class="absolute top-0 -mt-2 -translate-y-4">
          <IconCrown class="text-amber-400 drop-shadow-[0_2px_4px_rgba(251,191,36,0.5)]" :size="36" stroke-width="2.5" fill="currentColor" />
        </div>
        <div class="flex items-center justify-center w-20 h-20 rounded-[40px] bg-amber-500 border-[3px] border-amber-200 text-white font-outfit font-extrabold text-[32px] shadow-[0_8px_24px_rgba(245,158,11,0.5)] mb-1">
          {{ gold.avatarText }}
        </div>
        <IconMedal class="text-amber-500 drop-shadow-sm" :size="32" stroke-width="2.5" />
        <div class="font-outfit font-extrabold text-[17px] text-slate-800">{{ gold.name }}</div>
        <div class="font-outfit font-bold text-[13px] text-amber-600">{{ gold.score }} XP</div>
      </div>
      <div v-else class="flex flex-col items-center justify-end w-full h-full pb-3 px-2"></div>
      
      <!-- Podium Block Gold -->
      <div class="flex flex-col w-full h-[150px]">
        <div class="w-full h-[18px] bg-amber-200 rounded-t-[12px]"></div>
        <div class="flex items-center justify-center w-full h-[116px] bg-amber-500">
          <span class="font-outfit font-black text-white text-[48px]">1</span>
        </div>
        <div class="w-full h-[16px] bg-amber-600 rounded-b-[6px]"></div>
      </div>
    </div>

    <!-- 3rd Place (Bronze) -->
    <div class="flex flex-col items-center justify-end w-[190px] h-[290px]">
      <div v-if="bronze" class="flex flex-col items-center justify-end gap-1.5 w-full h-full pb-3 px-2">
        <div class="flex items-center justify-center w-[60px] h-[60px] rounded-[30px] bg-[#CD7C41] text-white font-outfit font-extrabold text-[24px] shadow-[0_5px_12px_rgba(120,53,15,0.3)] mb-1">
          {{ bronze.avatarText }}
        </div>
        <IconMedal class="text-[#DEB887] drop-shadow-sm" :size="20" stroke-width="2.5" />
        <div class="font-outfit font-bold text-[14px] text-slate-800">{{ bronze.name }}</div>
        <div class="font-outfit font-semibold text-[11px] text-amber-700">{{ bronze.score }} XP</div>
      </div>
      <div v-else class="flex flex-col items-center justify-end w-full h-full pb-3 px-2"></div>
      
      <!-- Podium Block Bronze -->
      <div class="flex flex-col w-full h-[60px]">
        <div class="w-full h-[10px] bg-[#DEB887] rounded-t-[8px]"></div>
        <div class="flex items-center justify-center w-full h-[40px] bg-[#B45309]">
          <span class="font-outfit font-black text-white text-[22px]">3</span>
        </div>
        <div class="w-full h-[10px] bg-[#92400E] rounded-b-[4px]"></div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { Medal as IconMedal, Crown as IconCrown } from 'lucide-vue-next'
import confetti from 'canvas-confetti'

const props = defineProps({
  winners: {
    type: Array,
    required: true
  }
})

// winners[0] = 1st, winners[1] = 2nd, winners[2] = 3rd
const gold = computed(() => props.winners[0] || null)
const silver = computed(() => props.winners[1] || null)
const bronze = computed(() => props.winners[2] || null)

// Fire a ceremonial confetti explosion when the podium is displayed
const triggerConfetti = () => {
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti({
      ...defaults, particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
    });
    confetti({
      ...defaults, particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
    });
  }, 250);
}

// Optionally trigger it on component mount
onMounted(() => {
  // Let the DOM settle first
  setTimeout(() => {
    triggerConfetti()
  }, 300)
})

const handleGoldClick = () => {
  triggerConfetti()
}
</script>
