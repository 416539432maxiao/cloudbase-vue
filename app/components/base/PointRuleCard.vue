<template>
  <div 
    class="flex items-center justify-between w-full min-h-[60px] p-3 bg-white rounded-2xl border border-slate-50 transition-all cursor-pointer hover:-translate-y-0.5"
    :class="[
      type === 'positive' 
        ? 'shadow-[0_2px_0_rgba(134,239,172,0.4)] hover:shadow-[0_4px_0_rgba(134,239,172,0.4)]' 
        : 'shadow-[0_2px_0_rgba(252,165,165,0.4)] hover:shadow-[0_4px_0_rgba(252,165,165,0.4)]'
    ]"
    @click="!isEditing && $emit('click')"
  >
    <div class="flex items-center gap-3 flex-1 min-w-0">
      <!-- Icon Container -->
      <div 
        :class="[
          'flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-xl',
          type === 'positive' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
        ]"
      >
        <component v-if="icon" :is="LucideIcons[icon]" :size="16" stroke-width="2.5" />
      </div>
      
      <!-- Rule Name -->
      <div v-if="!isEditing" class="font-outfit text-sm font-semibold text-slate-800 truncate">
        {{ label }}
      </div>
      <input 
        v-else 
        v-model="editLabel" 
        class="w-full font-outfit text-sm font-semibold text-slate-800 bg-slate-50 border border-slate-200 rounded px-2 py-1 outline-none focus:border-indigo-400 focus:bg-white"
        @click.stop
      />
    </div>
    
    <div class="flex items-center gap-3 flex-shrink-0 ml-4">
      <!-- Point Value -->
      <div v-if="!isEditing"
        :class="[
          'font-outfit text-base font-extrabold',
          type === 'positive' ? 'text-green-500' : 'text-red-500'
        ]"
      >
        {{ type === 'positive' ? '+' : '' }}{{ value }}
      </div>
      <input 
        v-else 
        v-model.number="editValue" 
        type="number"
        class="w-16 font-outfit text-base font-extrabold text-center bg-slate-50 border border-slate-200 rounded px-1 py-1 outline-none focus:border-indigo-400 focus:bg-white"
        :class="type === 'positive' ? 'text-green-500' : 'text-red-500'"
        @click.stop
      />
      
      <!-- Actions -->
      <div v-if="showEdit" class="flex items-center gap-1">
        <template v-if="!isEditing">
          <button class="text-slate-300 hover:text-indigo-500 transition-colors p-1" @click.stop="startEdit">
            <IconPencil :size="16" stroke-width="2.5" />
          </button>
          <button class="text-slate-300 hover:text-red-500 transition-colors p-1" @click.stop="$emit('delete')">
            <IconTrash2 :size="16" stroke-width="2.5" />
          </button>
        </template>
        <template v-else>
          <button class="text-green-500 hover:bg-green-50 rounded p-1 transition-colors" @click.stop="saveEdit">
            <IconCheck :size="16" stroke-width="2.5" />
          </button>
          <button class="text-slate-400 hover:text-red-500 hover:bg-slate-50 rounded p-1 transition-colors" @click.stop="cancelEdit">
            <IconX :size="16" stroke-width="2.5" />
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import * as LucideIcons from 'lucide-vue-next'
import { Pencil as IconPencil, Trash2 as IconTrash2, Check as IconCheck, X as IconX } from 'lucide-vue-next'

const props = defineProps({
  icon: {
    type: String,
    default: 'Star'
  },
  label: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    default: 'positive' // 'positive' | 'negative'
  },
  showEdit: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['click', 'save', 'delete'])

const isEditing = ref(false)
const editLabel = ref(props.label)
const editValue = ref(props.value)

// Keep local state in sync if props change externally
watch(() => props.label, (newVal) => { editLabel.value = newVal })
watch(() => props.value, (newVal) => { editValue.value = newVal })

const startEdit = () => {
  editLabel.value = props.label
  editValue.value = props.value
  isEditing.value = true
}

const saveEdit = () => {
  emit('save', { label: editLabel.value, value: editValue.value })
  isEditing.value = false
}

const cancelEdit = () => {
  editLabel.value = props.label
  editValue.value = props.value
  isEditing.value = false
}
</script>
