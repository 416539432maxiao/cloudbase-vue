<template>
  <div class="flex h-screen w-full bg-slate-50 overflow-hidden text-slate-800 antialiased selection:bg-indigo-100 selection:text-indigo-900">
    <slot name="sidebar" />
    <div class="flex flex-col flex-1 h-full min-w-0 overflow-hidden relative shadow-[-16px_0_24px_rgba(0,0,0,0.02)]">
      <slot name="header" />
      <main class="flex-1 overflow-x-hidden overflow-y-auto p-8 relative scroll-smooth">
        <div class="max-w-[1400px] mx-auto w-full h-full pb-16">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
// Main layout structure coordinating Sidebar and PageHeader
</script>
