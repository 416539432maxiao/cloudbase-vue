<template>
  <div class="flex flex-col gap-3 w-full">
    <DataTableHeader 
      :columns="[
        { label: '排名 / 姓名', align: 'left', widthClass: 'w-56' },
        { label: '当前守护伙伴', align: 'left', widthClass: 'flex-1' },
        { label: '荣誉纪录', align: 'left', widthClass: 'w-32' },
        { label: '累计经验', align: 'right', widthClass: 'w-32' }
      ]"
    />
    
    <div class="flex flex-col gap-3 relative">
      <DataTableRow v-for="(item, index) in list" :key="item.id" class="cursor-pointer group">
        <!-- Rank & Name -->
        <div class="flex items-center gap-4 w-56">
          <div class="flex items-center justify-center w-8 font-outfit font-black text-xl italic" 
               :class="getRankColor(index + 1)">
            <template v-if="index === 0">🥇</template>
            <template v-else-if="index === 1">🥈</template>
            <template v-else-if="index === 2">🥉</template>
            <template v-else>{{ index + 1 }}</template>
          </div>
          <div class="flex items-center gap-3">
            <Avatar3D :text="item.avatarText" :variant="item.avatarVariant || 'primary'" size="sm" />
            <span class="font-outfit font-bold text-slate-800 text-[15px] group-hover:text-indigo-600 transition-colors">{{ item.name }}</span>
          </div>
        </div>
        
        <!-- Pet info -->
        <div class="flex-1 flex items-center font-outfit font-semibold text-sm">
          <span :class="['px-3 py-1.5 rounded-[12px] border font-bold', item.petColorTheme]">
            {{ item.petInfo }}
          </span>
        </div>
        
        <!-- Badges -->
        <div class="w-32 flex items-center justify-start gap-1.5 font-outfit font-bold text-[13px] text-slate-500">
          <span class="text-base leading-none">🎖️</span>
          <span>{{ item.badges }} 徽章</span>
        </div>
        
        <!-- Points / XP -->
        <div class="w-32 flex items-center justify-end font-outfit font-black text-[18px]" :class="getPointsColor(index + 1)">
          {{ item.points }}
        </div>
      </DataTableRow>
    </div>
  </div>
</template>

<script setup>
defineProps({
  list: {
    type: Array, // [{ id, name, avatarText, avatarVariant, petInfo, petColorTheme, badges, points }]
    required: true
  }
})

const getRankColor = (rank) => {
  if (rank === 1) return 'text-amber-500 drop-shadow-sm scale-125'
  if (rank === 2) return 'text-slate-400 drop-shadow-sm scale-110'
  if (rank === 3) return 'text-[#DEB887] drop-shadow-sm scale-110'
  return 'text-slate-300'
}

const getPointsColor = (rank) => {
  if (rank === 1) return 'text-amber-500'
  if (rank === 2) return 'text-slate-500'
  if (rank === 3) return 'text-[#B45309]'
  return 'text-rose-500'
}
</script>
