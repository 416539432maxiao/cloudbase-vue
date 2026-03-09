<template>
  <div class="flex items-center p-5 gap-4 bg-white rounded-3xl border-2 border-indigo-50 shadow-[0_8px_16px_rgba(165,180,252,0.3)] w-[182px] cursor-pointer hover:-translate-y-1 transition-transform">
    <!-- Avatar -->
    <Avatar3D :text="name" :variant="avatarVariant" size="md" />
    
    <!-- Info -->
    <div class="flex flex-col gap-1 overflow-hidden">
      <div class="font-outfit text-[18px] font-bold text-slate-800 truncate leading-tight">
        {{ name }}
      </div>
      <div class="font-outfit text-[12px] font-normal text-slate-400 truncate leading-tight">
        {{ subtitle }}
      </div>
    </div>
  </div>
</template>

<script setup>
import Avatar3D from '~/components/base/Avatar3D.vue'

defineProps({
  name: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  avatarVariant: {
    type: String,
    default: 'success' // success, primary, warning
  }
})
</script>
