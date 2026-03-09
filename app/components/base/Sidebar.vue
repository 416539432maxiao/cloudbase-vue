<template>
  <aside class="flex flex-col w-[240px] h-full bg-white border-r border-slate-100 flex-shrink-0 z-20 overflow-y-auto">
    <!-- Logo -->
    <div class="flex items-center gap-3 h-[80px] px-6 border-b border-slate-50 flex-shrink-0">
      <div class="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-bold text-sm shadow-sm ring-2 ring-indigo-200">
        C
      </div>
      <div class="text-slate-800 font-outfit text-xl font-extrabold tracking-tight">
        CoolTeacher
      </div>
    </div>

    <!-- Navigation Area -->
    <nav class="flex-1 flex flex-col gap-2 p-4">
      <slot />
    </nav>
    
    <!-- Bottom Fix Area (e.g. User Profile, Settings) -->
    <div v-if="$slots.bottom" class="p-4 border-t border-slate-50 mt-auto">
      <slot name="bottom" />
    </div>
  </aside>
</template>

<script setup>
// Sidebar layout container
</script>
