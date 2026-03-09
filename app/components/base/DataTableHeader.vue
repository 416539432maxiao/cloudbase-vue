<template>
  <div class="flex items-center gap-4 bg-slate-50 px-6 py-3 rounded-xl border border-slate-200">
    <!-- Flexible slots based on columns array provided -->
    <template v-for="(col, index) in columns" :key="index">
      <div 
        :class="[
          'font-inter font-bold text-[13px] text-slate-500',
          col.align === 'center' ? 'text-center' : col.align === 'right' ? 'text-right' : 'text-left',
          col.widthClass || 'flex-1'
        ]"
      >
        {{ col.label }}
      </div>
    </template>
  </div>
</template>

<script setup>
defineProps({
  columns: {
    type: Array, // Array of { label: 'Name', align: 'left'|'center'|'right', widthClass: 'w-24' }
    required: true
  }
})
</script>
