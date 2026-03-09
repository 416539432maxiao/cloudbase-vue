<template>
  <header class="flex items-center justify-between w-full h-[65px] bg-white border-b border-slate-100 px-8 flex-shrink-0 z-10">
    <!-- Title Area -->
    <div class="flex items-center gap-4">
      <h1 class="text-slate-800 font-outfit text-[18px] font-extrabold m-0">
        {{ title }}
      </h1>
      <span v-if="subtitle" class="text-slate-500 font-inter text-[14px] font-extrabold border-l border-slate-200 pl-4 py-1">
        {{ subtitle }}
      </span>
    </div>

    <!-- Center Area (Optional, e.g., SearchBar) -->
    <div class="flex-1 max-w-md mx-8">
      <slot name="center" />
    </div>

    <!-- Actions Area -->
    <div class="flex items-center gap-4">
      <slot name="actions" />
    </div>
  </header>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  }
})
</script>
