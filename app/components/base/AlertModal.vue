<template>
  <Modal3D
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    :show-close="false"
  >
    <div class="flex flex-col items-center text-center space-y-4">
      <h3 class="font-outfit text-2xl font-extrabold text-indigo-600">
        {{ title }}
      </h3>
      
      <p class="font-outfit text-lg font-semibold text-[#312E81]">
        {{ message }}
      </p>
    </div>

    <template #footer>
      <div class="flex w-full flex-col items-center justify-center">
        <Button3D 
          class="w-full sm:w-auto min-w-[120px]"
          variant="primary" 
          @click="$emit('confirm')"
        >
          {{ confirmText }}
        </Button3D>
      </div>
    </template>
  </Modal3D>
</template>

<script setup>
import Modal3D from './Modal3D.vue'
import Button3D from './Button3D.vue'

defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    default: '✨ 操作成功'
  },
  message: {
    type: String,
    required: true
  },
  confirmText: {
    type: String,
    default: '知道了'
  }
})

defineEmits(['update:modelValue', 'confirm'])
</script>
