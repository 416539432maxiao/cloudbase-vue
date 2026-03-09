<template>
  <div class="flex flex-col p-4 bg-green-50 rounded-3xl border-2 border-green-200 shadow-[0_4px_8px_rgba(134,239,172,0.3)] w-[260px] min-h-[260px] transition-transform hover:-translate-y-1">
    
    <!-- Header -->
    <div class="flex items-center justify-between w-full mt-1 px-1">
      <div class="font-outfit font-bold text-green-800 text-[16px] truncate">
        {{ groupName }}
      </div>
      <button class="text-green-700 hover:text-green-500 hover:bg-green-100 p-1 rounded-lg transition-colors" title="更多操作" @click.stop="$emit('more')">
         <IconMoreHorizontal :size="18" stroke-width="2.5" />
      </button>
    </div>

    <!-- Members List -->
    <div class="grid grid-cols-2 gap-2 mt-4 flex-1 overflow-y-auto max-h-[160px] px-1 custom-scrollbar content-start">
      <div 
        v-for="member in members" 
        :key="member.id"
        class="flex items-center gap-1.5 bg-white rounded-xl p-1.5 pr-2 shadow-[0_2px_4px_rgba(34,197,94,0.15)] hover:shadow-[0_4px_8px_rgba(34,197,94,0.2)] transition-shadow cursor-pointer overflow-hidden"
        @click.stop="$emit('member-click', member)"
        :title="member.name"
      >
        <div class="flex items-center justify-center w-6 h-6 bg-green-50 text-green-500 rounded-full flex-shrink-0">
          <IconUser :size="14" stroke-width="2.5" />
        </div>
        <div class="font-outfit font-bold text-green-800 text-[12px] truncate flex-1 leading-none py-0.5">
          {{ member.name }}
        </div>
      </div>
      
      <div v-if="members.length === 0" class="col-span-2 text-center text-green-600/50 font-outfit text-sm mt-4 font-bold">
        暂无组员
      </div>
    </div>

    <!-- Add Member Button -->
    <button 
      @click.stop="$emit('add')"
      class="flex items-center justify-center gap-2 w-full h-10 mt-auto bg-green-100 hover:bg-green-200 text-green-600 rounded-full font-outfit font-bold text-[13px] transition-colors active:scale-95 shadow-sm border border-transparent hover:border-green-300"
    >
      <IconPlus :size="16" stroke-width="2.5" />
      添加组员
    </button>
  </div>
</template>

<script setup>
import { MoreHorizontal as IconMoreHorizontal, User as IconUser, Plus as IconPlus } from 'lucide-vue-next'

defineProps({
  groupName: {
    type: String,
    required: true,
    default: '第一小组'
  },
  members: {
    type: Array,
    default: () => [] // Array of { id, name }
  }
})

defineEmits(['more', 'member-click', 'add'])
</script>

<style scoped>
/* Custom scrollbar to make it invisible or very subtle on windows */
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #BBF7D0;
  border-radius: 4px;
}
.custom-scrollbar:hover::-webkit-scrollbar-thumb {
  background-color: #86EFAC;
}
</style>
