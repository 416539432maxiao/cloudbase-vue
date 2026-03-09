<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-if="modelValue" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <!-- Backdrop -->
        <div class="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" @click="closeOnOutsideClick && $emit('update:modelValue', false)" />

        <!-- Modal Panel -->
        <div 
          class="relative w-full max-w-md transform overflow-hidden rounded-[28px] bg-indigo-50 border-[3px] border-indigo-200 p-8 text-left shadow-[0_8px_0_#C7D2FE] transition-all"
        >
          <!-- Optional Header Close Button -->
          <div v-if="showClose" class="absolute right-4 top-4">
            <IconButton3D icon="X" variant="secondary" size="sm" @click="$emit('update:modelValue', false)" />
          </div>

          <!-- Title -->
          <div v-if="title" class="mb-6">
            <h3 class="text-center font-outfit text-2xl font-extrabold text-[#312E81]">
              {{ title }}
            </h3>
          </div>

          <!-- Content Slot -->
          <div class="mb-6 space-y-4">
            <slot />
          </div>

          <!-- Footer Slot -->
          <div v-if="$slots.footer" class="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import IconButton3D from '~/components/base/IconButton3D.vue'

defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  showClose: {
    type: Boolean,
    default: true
  },
  closeOnOutsideClick: {
    type: Boolean,
    default: true
  }
})

defineEmits(['update:modelValue'])
</script>
