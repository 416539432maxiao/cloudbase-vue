<template>
  <div 
    class="flex flex-col gap-4 p-4 rounded-[32px] border-[3px] w-[180px] transition-transform hover:-translate-y-1 cursor-pointer"
    :class="[variantClasses[variant].wrapper]"
  >
    <!-- Info Area (Top) -->
    <div class="flex flex-col gap-2 w-full items-center text-center mt-2">
      <div 
        class="font-outfit font-extrabold text-[16px] truncate w-full px-2"
        :class="[variantClasses[variant].title]"
      >
        {{ name }}
      </div>
      <div 
        class="flex items-center gap-1 px-3 py-1 rounded-full font-bold text-sm"
        :class="[variantClasses[variant].badge]"
      >
        <IconCoins :size="16" />
        {{ price }} 徽章
      </div>
    </div>

    <!-- Image/Icon Container (Middle) -->
    <div class="flex items-center justify-center w-full h-[100px] bg-white rounded-3xl border-2 border-white shadow-sm overflow-hidden mt-1 relative">
       <!-- Use a translucent background behind the image for effect -->
       <div class="absolute inset-0 opacity-20" :class="[variantClasses[variant].imageBg]"></div>
      <img v-if="imageUrl" :src="imageUrl" class="w-full h-full object-cover relative z-10" />
      <div v-else class="flex items-center justify-center relative z-10" :class="[variantClasses[variant].title]">
        <component v-if="icon" :is="LucideIcons[icon]" :size="40" stroke-width="2" />
      </div>
    </div>
    
    <!-- Action Button (Bottom) -->
    <Button3D 
      variant="primary" 
      class="w-full mt-1 !py-2.5 !text-sm !rounded-2xl"
      @click.stop="$emit('redeem')"
      :disabled="inventory <= 0"
    >
      {{ inventory > 0 ? '兑换' : '售罄' }}
    </Button3D>
  </div>
</template>

<script setup>
import { Coins as IconCoins } from 'lucide-vue-next'
import * as LucideIcons from 'lucide-vue-next'
import Button3D from '~/components/base/Button3D.vue'

defineProps({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  inventory: {
    type: Number,
    default: 99
  },
  imageUrl: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: 'Gift'
  },
  variant: {
    type: String,
    default: 'blue' // blue, green, pink, purple
  }
})

defineEmits(['redeem'])

const variantClasses = {
  blue: {
    wrapper: 'bg-blue-50 border-blue-100 shadow-[0_6px_0_#DBEAFE]',
    title: 'text-blue-900',
    badge: 'bg-blue-100 text-blue-900',
    imageBg: 'bg-blue-500'
  },
  green: {
    wrapper: 'bg-green-50 border-green-100 shadow-[0_6px_0_#DCFCE7]',
    title: 'text-green-900',
    badge: 'bg-green-100 text-green-900',
    imageBg: 'bg-green-500'
  },
  pink: {
    wrapper: 'bg-pink-50 border-pink-100 shadow-[0_6px_0_#FCE7F3]',
    title: 'text-pink-900',
    badge: 'bg-pink-100 text-pink-900',
    imageBg: 'bg-pink-500'
  },
  purple: {
    wrapper: 'bg-purple-50 border-purple-100 shadow-[0_6px_0_#EDE9FE]',
    title: 'text-purple-900',
    badge: 'bg-purple-100 text-purple-900',
    imageBg: 'bg-purple-500'
  }
}
</script>
