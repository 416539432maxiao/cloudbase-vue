<template>
  <div class="p-8 flex flex-col items-center justify-center min-h-[80vh] gap-8">
    <div class="text-center space-y-4">
      <h1 class="text-5xl font-outfit font-extrabold text-primary animate-bounce">
        CoolTeacherPoint
      </h1>
      <p class="text-xl text-text-muted font-medium">
        宠物养成 + 积分激励，开启趣味班级管理
      </p>
    </div>

    <!-- 3D Style Test Card -->
    <div class="bg-card p-8 rounded-large shadow-card border-2 border-white flex flex-col items-center gap-6 max-w-sm w-full transition-transform hover:scale-105 duration-300">
      <div class="w-32 h-32 rounded-full border-4 border-primary flex items-center justify-center bg-background overflow-hidden shadow-inner">
        <span class="text-6xl">🥚</span>
      </div>
      
      <div class="text-center">
        <h3 class="text-2xl font-bold text-text-main">神秘宠物蛋</h3>
        <p class="text-sm text-text-muted">期待你的第一次喂养...</p>
      </div>

      <button class="w-full bg-primary text-white font-outfit font-bold py-3 px-6 rounded-xl shadow-[0_5px_0_#312E81] active:shadow-none active:translate-y-[5px] transition-all">
        开始激活
      </button>
    </div>

    <div class="flex gap-4">
      <div class="px-4 py-2 bg-positive text-green-800 rounded-full font-bold text-sm shadow-sm ring-1 ring-white">
        +3 课堂表现
      </div>
      <div class="px-4 py-2 bg-negative text-red-100 rounded-full font-bold text-sm shadow-sm ring-1 ring-white">
        -1 迟到
      </div>
    </div>
  </div>
</template>

<script setup>
// Index page for layout/style verification
</script>
