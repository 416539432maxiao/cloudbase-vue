<template>
  <Modal3D
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    :show-close="false"
    :close-on-outside-click="false"
  >
    <div class="flex flex-col items-center text-center space-y-4">
      <div class="flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-500 mb-2 border-4 border-white shadow-inner">
        <IconAlertTriangle :size="32" stroke-width="2.5" />
      </div>

      <h3 class="font-outfit text-2xl font-extrabold text-red-500">
        {{ title }}
      </h3>
      
      <p class="font-outfit text-lg font-semibold text-[#312E81]">
        {{ message }}
      </p>

      <div v-if="requireConfirmationText" class="w-full mt-4">
        <p class="text-sm text-text-muted mb-2">
          请输入 <span class="font-bold text-red-500">{{ requireConfirmationText }}</span> 以确认
        </p>
        <input 
          v-model="confirmationInput"
          type="text"
          class="w-full rounded-2xl border-[3px] border-indigo-200 p-3 text-center font-outfit font-bold shadow-[0_4px_0_#F1F5F9] outline-none focus:border-indigo-400 focus:shadow-[0_4px_0_#C7D2FE] transition-all"
          :placeholder="requireConfirmationText"
        />
      </div>
    </div>

    <template #footer>
      <div class="flex w-full flex-col gap-4">
        <Button3D 
          class="w-full"
          variant="danger" 
          :disabled="!isConfirmed" 
          @click="$emit('confirm')"
        >
          {{ confirmText }}
        </Button3D>
        <Button3D 
          class="w-full"
          variant="secondary" 
          @click="$emit('update:modelValue', false)"
        >
          {{ cancelText }}
        </Button3D>
      </div>
    </template>
  </Modal3D>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { AlertTriangle as IconAlertTriangle } from 'lucide-vue-next'
import Modal3D from './Modal3D.vue'
import Button3D from './Button3D.vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    default: '⚠️ 确认删除'
  },
  message: {
    type: String,
    required: true
  },
  requireConfirmationText: {
    type: String,
    default: '' // If set, requires user to type this exact string
  },
  confirmText: {
    type: String,
    default: '确认删除'
  },
  cancelText: {
    type: String,
    default: '取消'
  }
})

defineEmits(['update:modelValue', 'confirm'])

const confirmationInput = ref('')

// Reset input when modal opens/closes
watch(() => props.modelValue, (newVal) => {
  if (!newVal) {
    confirmationInput.value = ''
  }
})

const isConfirmed = computed(() => {
  if (!props.requireConfirmationText) return true
  return confirmationInput.value === props.requireConfirmationText
})
</script>
