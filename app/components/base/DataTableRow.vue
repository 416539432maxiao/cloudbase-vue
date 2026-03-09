<template>
  <div class="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl border border-slate-100 shadow-[0_4px_8px_rgba(0,0,0,0.02)] transition-all hover:shadow-md hover:border-slate-200">
    <slot />
  </div>
</template>

<script setup>
// Simply a container for rows, the slot will contain the grid cells which the parent should align using tailwind grid or flex with consistent widths matching the header
</script>
