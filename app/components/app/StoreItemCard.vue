<template>
  <div class="flex flex-col items-center gap-3 p-4 bg-[#FFFBEB] rounded-3xl border-2 border-[#FEF3C7] shadow-[0_4px_0_rgba(253,230,138,0.2)] w-[162px] min-h-[225px] transition-transform hover:-translate-y-1">

    <!-- Icon Container -->
    <div class="flex items-center justify-center w-14 h-14 bg-[#FEF3C7] rounded-full text-amber-600 flex-shrink-0 mt-2">
      <component v-if="icon" :is="LucideIcons[icon]" :size="28" stroke-width="2.5" />
    </div>
    
    <!-- Content Area -->
    <div class="flex flex-col gap-2 w-full flex-1">
      
      <!-- Name -->
      <div v-if="!isEditing" class="font-outfit font-bold text-[#92400E] text-[15px] truncate w-full text-center">
        {{ name }}
      </div>
      <div v-else class="w-full">
        <input 
          v-model="editName" 
          placeholder="商品名称"
          class="w-full font-outfit font-bold text-[#92400E] text-[13px] text-center bg-white border border-amber-200 rounded px-1 py-1 outline-none focus:border-amber-400 focus:bg-amber-50"
          @click.stop
        />
      </div>
      
      <!-- Price Badge (徽章) -->
      <div v-if="!isEditing" class="flex items-center justify-center gap-1 bg-[#FEF3C7] px-3 py-1 rounded-full w-fit mx-auto mt-1">
        <IconCoins :size="14" class="text-[#D97706]" stroke-width="2.5" />
        <span class="font-outfit font-bold text-[#92400E] text-[13px] leading-none">{{ price }} 徽章</span>
      </div>
      <div v-else class="flex items-center justify-center gap-1 w-full relative">
         <IconCoins :size="14" class="text-[#D97706] absolute left-2" stroke-width="2.5" />
         <input 
          v-model.number="editPrice" 
          type="number"
          placeholder="消耗徽章"
          class="w-full pl-6 pr-1 font-outfit font-bold text-[#92400E] text-[13px] bg-white border border-amber-200 rounded py-1 outline-none focus:border-amber-400 focus:bg-amber-50"
          @click.stop
        />
      </div>

      <!-- Inventory Badge (库存) -->
      <div v-if="!isEditing" class="flex items-center justify-center gap-1 w-full text-[#92400E]/70 text-[13px] font-bold font-outfit mt-1">
        库存: <span class="text-[#92400E]">{{ quantity }}</span>
      </div>
      <div v-else class="flex items-center justify-center gap-1 w-full relative">
         <span class="text-amber-700/70 text-[11px] font-bold absolute left-2">库存</span>
         <input 
          v-model.number="editQuantity" 
          type="number"
          placeholder="数量(库存)"
          class="w-full pl-8 pr-1 font-outfit font-bold text-[#92400E] text-[13px] bg-white border border-amber-200 rounded py-1 outline-none focus:border-amber-400 focus:bg-amber-50"
          @click.stop
        />
      </div>
    </div>

    <!-- Action Menu (Bottom) -->
    <div class="flex items-center justify-center w-full pt-3 border-t border-amber-200/50 mt-auto">
      <template v-if="!isEditing">
        <button class="flex items-center justify-center flex-1 gap-1 py-1 text-[13px] font-bold text-amber-600 hover:text-indigo-600 hover:bg-amber-100 rounded-lg transition-colors" @click.stop="startEdit" title="编辑">
          <IconPencil :size="14" stroke-width="2.5" /> 编辑
        </button>
        <div class="w-px h-4 bg-amber-200/80 mx-1"></div>
        <button class="flex items-center justify-center flex-1 gap-1 py-1 text-[13px] font-bold text-amber-600 hover:text-red-600 hover:bg-amber-100 rounded-lg transition-colors" @click.stop="$emit('delete')" title="删除">
          <IconTrash2 :size="14" stroke-width="2.5" /> 删除
        </button>
      </template>
      <template v-else>
        <button class="flex items-center justify-center flex-1 gap-1 py-1.5 bg-green-500 text-white rounded-lg text-[13px] font-bold shadow-sm hover:bg-green-600 active:scale-95 transition-all" @click.stop="saveEdit" title="保存">
          <IconCheck :size="16" stroke-width="3" />
        </button>
        <button class="flex items-center justify-center flex-1 gap-1 py-1.5 bg-slate-200 text-slate-600 rounded-lg text-[13px] font-bold shadow-sm hover:bg-red-100 hover:text-red-500 active:scale-95 transition-all ml-2" @click.stop="cancelEdit" title="取消">
          <IconX :size="16" stroke-width="3" />
        </button>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { Coins as IconCoins, Pencil as IconPencil, Trash2 as IconTrash2, Check as IconCheck, X as IconX } from 'lucide-vue-next'
import * as LucideIcons from 'lucide-vue-next'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    default: 0
  },
  icon: {
    type: String,
    default: 'Pencil'
  }
})

const emit = defineEmits(['save', 'delete'])

const isEditing = ref(false)
const editName = ref(props.name)
const editPrice = ref(props.price)
const editQuantity = ref(props.quantity)

// Keep local state in sync if props change externally
watch(() => props.name, (newVal) => { editName.value = newVal })
watch(() => props.price, (newVal) => { editPrice.value = newVal })
watch(() => props.quantity, (newVal) => { editQuantity.value = newVal })

const startEdit = () => {
  editName.value = props.name
  editPrice.value = props.price
  editQuantity.value = props.quantity
  isEditing.value = true
}

const saveEdit = () => {
  emit('save', {
    name: editName.value,
    price: editPrice.value,
    quantity: editQuantity.value
  })
  isEditing.value = false
}

const cancelEdit = () => {
  editName.value = props.name
  editPrice.value = props.price
  editQuantity.value = props.quantity
  isEditing.value = false
}
</script>
