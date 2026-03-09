<template>
  <div class="min-h-screen bg-slate-50 p-8 font-inter pb-32">
    <div class="max-w-5xl mx-auto space-y-12">
      
      <!-- Header -->
      <div class="text-center space-y-4">
        <h1 class="text-4xl font-outfit font-extrabold text-indigo-900 drop-shadow-sm">
          CoolTeacherPoint Component Library
        </h1>
        <p class="text-slate-500 font-medium">1.0 Design System Verification</p>
      </div>

      <!-- 1. Atomic Components -->
      <section class="space-y-6">
        <h2 class="text-2xl font-outfit font-bold text-slate-800 border-b-2 border-slate-200 pb-2">1. Atomic Components</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Button3D -->
          <div class="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-4 items-start">
            <h3 class="text-lg font-bold text-slate-700">Button3D</h3>
            <div class="flex flex-wrap gap-4">
              <Button3D variant="primary">Primary Action</Button3D>
              <Button3D variant="secondary">Secondary Action</Button3D>
              <Button3D variant="danger">Danger Action</Button3D>
              <Button3D variant="warning">
                <div class="flex items-center gap-2">
                  <IconUserPlus :size="16" />
                  <span>单个添加</span>
                </div>
              </Button3D>
            </div>
            <div class="flex flex-wrap gap-4 items-end mt-4">
              <Button3D size="sm">Small</Button3D>
              <Button3D size="md">Medium</Button3D>
              <Button3D size="lg">Large Button</Button3D>
            </div>
          </div>

          <!-- IconButton3D -->
          <div class="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-4 items-start">
            <h3 class="text-lg font-bold text-slate-700">IconButton3D</h3>
            <div class="flex gap-4 items-end">
              <IconButton3D icon="Plus" variant="primary" size="lg" />
              <IconButton3D icon="Check" variant="primary" size="md" />
              <IconButton3D icon="X" variant="secondary" size="md" />
              <IconButton3D icon="Trash2" variant="danger" size="sm" />
            </div>
          </div>

          <!-- Avatar3D (c1H) -->
          <div class="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-4 items-start">
            <h3 class="text-lg font-bold text-slate-700">Avatar3D (c1H)</h3>
            <div class="flex gap-4 items-end">
              <Avatar3D text="陈" variant="success" />
              <Avatar3D text="许" variant="warning" />
              <Avatar3D text="周" variant="primary" />
              <Avatar3D icon="Cat" variant="primary" size="sm" />
              <Avatar3D text="王" variant="success" size="lg" />
            </div>
          </div>

          <!-- ScoringPill -->
          <div class="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-4 items-start">
            <h3 class="text-lg font-bold text-slate-700">ScoringPill</h3>
            <div class="flex gap-6">
              <ScoringPill icon="Star" label="课堂表现" :value="3" type="positive" />
              <ScoringPill icon="AlertTriangle" label="作业未交" :value="1" type="negative" />
            </div>
          </div>

          <!-- StatsRow -->
          <div class="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-4 items-start">
            <h3 class="text-lg font-bold text-slate-700">StatsRow</h3>
            <div class="flex flex-col gap-4">
               <StatsRow :points="120" :badges="5" />
               <StatsRow :points="0" :badges="0" />
            </div>
          </div>

          <!-- StatusBadge & Tabs -->
          <div class="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-8 items-start">
            <div class="w-full">
               <h3 class="text-lg font-bold text-slate-700 mb-4">StatusBadge (XP Bar)</h3>
               <StatusBadge :level="12" :current-xp="2450" :max-xp="3000" status-label="活跃" class="w-64" />
            </div>
            <div class="w-full">
              <h3 class="text-lg font-bold text-slate-700 mb-4">Tab Navigation Family</h3>
              
              <div class="flex flex-col gap-8 bg-slate-50 p-6 rounded-[24px] border border-slate-100 shadow-inner">
                <!-- 1. Main TabBar -->
                <div class="flex flex-col gap-2">
                  <span class="text-sm font-bold text-slate-400">1. Main Page TabBar (Slot Based)</span>
                  <TabBar>
                    <TabItem label="总榜" icon="🚩" :active="activeMainTab === 'total'" @click="activeMainTab = 'total'" />
                    <TabItem label="周榜" icon="🚩" :active="activeMainTab === 'week'" @click="activeMainTab = 'week'" />
                    <TabItem label="月榜" icon="🚩" :active="activeMainTab === 'month'" @click="activeMainTab = 'month'" />
                  </TabBar>
                </div>
                
                <!-- 2. TimeTabs -->
                <div class="flex flex-col gap-2 mt-4 pt-4 border-t border-slate-200">
                  <span class="text-sm font-bold text-slate-400">2. TimeTabs (Filters / Stats, Rose Variant)</span>
                  <TimeTabs :options="timeTabOptions" v-model="activeTimeTab" />
                </div>
                
                <!-- 3. ModalTabs -->
                <div class="flex flex-col gap-2 mt-4 pt-4 border-t border-slate-200">
                  <span class="text-sm font-bold text-slate-400">3. ModalTabs (Switcher inside modals)</span>
                  <div>
                     <ModalTabs :options="modalTabOptions" v-model="activeModalTab" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. Structural Components -->
      <section class="space-y-6">
        <h2 class="text-2xl font-outfit font-bold text-slate-800 border-b-2 border-slate-200 pb-2">2. Structural Components</h2>
        
        <div class="flex flex-col gap-8">
          <!-- Standalone Cards Row -->
          <div class="flex flex-col gap-6">
             <div class="bg-slate-100 p-8 rounded-3xl border border-slate-200 shadow-inner flex flex-col gap-6 items-start">
                 <h3 class="text-xl font-bold text-slate-700 w-full border-b border-slate-200 pb-2">Store Items (Settings vs Display)</h3>
                 
                 <div class="flex flex-wrap gap-12 w-full mt-4 items-start">
                   <!-- Store Settings Item -->
                   <div class="flex flex-col gap-3 items-center">
                     <span class="text-sm font-bold text-slate-400">Settings Page (StoreItemCard)</span>
                     <StoreItemCard name="限定铅笔" :price="60" :quantity="2" icon="Pencil" />
                   </div>
                   
                   <!-- Store Display Items -->
                   <div class="flex flex-col gap-3 items-start flex-1">
                     <span class="text-sm font-bold text-slate-400">Display Page (ProductCard)</span>
                     <div class="flex flex-wrap gap-6">
                        <ProductCard name="蓝莓果冻" :price="60" variant="blue" icon="Candy" />
                        <ProductCard name="青苹果乐园" :price="80" variant="green" icon="Apple" />
                        <ProductCard name="草莓软糖" :price="100" variant="pink" icon="Heart" />
                     </div>
                   </div>
                 </div>
             </div>
             
             <div class="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-6 items-center">
                 <h3 class="text-lg font-bold text-slate-700 w-full border-b border-slate-100 pb-2 text-left">PetExhibitCard</h3>
                 <div class="flex flex-wrap justify-start w-full gap-8 mt-4">
                    <PetExhibitCard name="幻影喵" rarity="epic" icon="Cat" />
                    <PetExhibitCard name="未知宠物" is-locked />
                 </div>
             </div>

             <div class="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-6 items-start">
                 <h3 class="text-lg font-bold text-slate-700 w-full border-b border-slate-100 pb-2 text-left">GroupCard (班级树卡片)</h3>
                 <div class="flex flex-wrap justify-start w-full gap-8 mt-4">
                    <GroupCard group-name="第一小组" :members="testGroupMembers1" />
                    <GroupCard group-name="猛虎小队" :members="testGroupMembers2" />
                    <GroupCard group-name="空空如也的小组" :members="[]" />
                 </div>
             </div>

             <!-- Podium Showcase -->
             <div class="bg-slate-50 p-6 rounded-[40px] border border-slate-200 flex flex-col items-center overflow-x-auto">
                 <h3 class="text-2xl font-outfit font-black text-slate-400 mb-8 uppercase tracking-widest text-center">Top 3 Players</h3>
                 <div class="px-8 pb-4">
                    <Podium3D :winners="testPodiumWinners" />
                 </div>
             </div>
          </div>

          <!-- List Items Row -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div class="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-4">
                <h3 class="text-lg font-bold text-slate-700">PointRuleCard</h3>
                <div class="space-y-4">
                  <PointRuleCard icon="Lightbulb" label="主动提问" :value="2" type="positive" />
                  <PointRuleCard icon="Moon" label="上课睡觉" :value="2" type="negative" />
                </div>
             </div>
             
             <div class="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-4">
                <h3 class="text-lg font-bold text-slate-700">Student Cards</h3>
                <div class="space-y-3">
                   <StudentCardSimple name="王小明" subtitle="学号: 01" />
                   <StudentCardSimple name="李华" subtitle="学号: 02">
                     <template #action>
                        <Button3D size="sm" variant="secondary">选择</Button3D>
                     </template>
                   </StudentCardSimple>
                </div>
                
                <h4 class="text-sm font-bold text-slate-500 mt-2 pt-4 border-t border-slate-100">StudentCardMinimal (Card4)</h4>
                <div class="flex flex-wrap gap-4">
                  <StudentCardMinimal name="陈奕迅" subtitle="学号: 04" avatar-variant="success" />
                  <StudentCardMinimal name="周杰伦" subtitle="学号: 05" avatar-variant="primary" />
                </div>
             </div>
          </div>
        </div>
      </section>

      <!-- 3. Composite Components -->
      <section class="space-y-6">
        <h2 class="text-2xl font-outfit font-bold text-slate-800 border-b-2 border-slate-200 pb-2">3. Composite Components (Cards & Modals)</h2>
        
        <!-- Big Cards Container -->
        <div class="flex flex-wrap gap-8 justify-center bg-indigo-50/50 p-8 rounded-[40px] border border-indigo-100">
           
           <div class="flex flex-col gap-4 items-center">
             <StudentCardFull 
               student-name="马天宇" 
               pet-name="幻影喵"
               :level="testLevel" 
               :points="120"
               :badges="15"
               :current-xp="3" 
               :max-xp="5"
               :current-stage-index="testLevel > 1 ? 2 : 1"
             />
             <Button3D @click="testLevel++" variant="secondary" size="sm">模拟宠物升级</Button3D>
           </div>
           
           <!-- Modal Triggers -->
           <div class="flex flex-col gap-4 justify-center bg-white p-6 rounded-3xl shadow-sm border border-slate-100 h-fit">
              <h3 class="text-lg font-bold text-slate-700 text-center">Interactive Previews</h3>
              <Button3D @click="showBaseModal = true">Open Base Modal</Button3D>
              <Button3D variant="danger" @click="showConfirmModal = true">Open Confirm Modal</Button3D>
              <div class="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-4">
                 <h3 class="text-lg font-bold text-slate-700">EvolutionTimeline (Standalone)</h3>
                 <div class="w-full max-w-sm mx-auto p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-inner flex flex-col gap-6">
                    <EvolutionTimeline 
                      :stages="testTimelineStages"
                      :max-unlocked-index="testTimelineUnlocked"
                      v-model="testTimelineActive"
                    />
                    <div class="flex justify-between items-center bg-white p-2 rounded-xl border border-slate-100 shadow-sm">
                      <Button3D size="sm" variant="secondary" @click="testTimelineUnlocked = Math.max(0, testTimelineUnlocked - 1)">➖ 锁定阶段</Button3D>
                      <span class="text-xs font-bold text-slate-400">控制解锁进度</span>
                      <Button3D size="sm" variant="primary" @click="testTimelineUnlocked = Math.min(testTimelineStages.length - 1, testTimelineUnlocked + 1)">➕ 解锁阶段</Button3D>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <!-- 4. Layout & Navigation Components -->
      <section class="space-y-6">
        <h2 class="text-2xl font-outfit font-bold text-slate-800 border-b-2 border-slate-200 pb-2">4. Layout & Navigation Components</h2>
        
        <div class="space-y-8">
          <!-- Standalone SearchBar -->
          <div class="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-4 items-start">
             <h3 class="text-lg font-bold text-slate-700">SearchBar</h3>
             <SearchBar placeholder="单独演示 SearchBar 组件..." v-model="searchQuery"/>
             <span class="text-sm text-slate-400 mt-2">v-model绑定值: {{ searchQuery }}</span>
          </div>

          <!-- PageHeader & SearchBar -->
          <div class="bg-slate-100 rounded-3xl border border-slate-200 overflow-hidden shadow-card">
             <div class="bg-indigo-50 p-2 text-center text-xs text-indigo-400 font-bold border-b border-indigo-100 uppercase tracking-widest">
               PageHeader (TopBar) + SearchBar Slot
             </div>
             <PageHeader title="道具商店" subtitle="当前积分: 1200">
               <template #center>
                  <SearchBar placeholder="搜索您需要的道具或卡片..." />
               </template>
               <template #actions>
                  <Button3D size="sm" variant="secondary">兑换记录</Button3D>
               </template>
             </PageHeader>
          </div>

          <!-- Sidebar Preview -->
          <div class="bg-slate-100 rounded-3xl border border-slate-200 overflow-hidden shadow-card flex min-h-[400px]">
             <!-- Sidebar Element -->
             <Sidebar class="h-full border-r-0 rounded-l-3xl shadow-lg">
                <SidebarNavItem label="班级主页" icon="Home" active />
                <SidebarNavItem label="积分商城" icon="Store" />
                <SidebarNavItem label="班级管理" icon="Users" />
                
                <template #bottom>
                  <div class="flex items-center gap-3 p-2 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors">
                    <div class="w-10 h-10 rounded-full bg-indigo-200 overflow-hidden flex items-center justify-center">
                       <IconUser class="text-indigo-600" />
                    </div>
                    <div class="flex flex-col">
                      <span class="font-bold text-sm text-slate-700">李老师</span>
                      <span class="text-xs text-slate-500">管理员</span>
                    </div>
                  </div>
                </template>
             </Sidebar>
             <div class="flex-1 flex flex-col pt-8 px-8 items-center justify-center text-center space-y-4">
                 <div class="text-slate-400">
                    <IconArrowLeft :size="48" />
                 </div>
                 <h3 class="text-xl font-outfit font-bold text-slate-600">Sidebar Component</h3>
                 <p class="text-slate-500 text-sm max-w-sm">This is how the Sidebar looks. In the real app, it combines with the PageHeader inside the <code>MainDashboard</code> layout.</p>
             </div>
          </div>
          
          <!-- DataTable Preview -->
          <div class="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 space-y-6">
             <h3 class="text-lg font-bold text-slate-700">DataTable Components (Base vs Composite)</h3>
             
             <!-- RankList Showcase -->
             <div class="flex flex-col gap-4">
                <span class="text-sm font-bold text-slate-400">Composite: RankList (班级神兽排行榜)</span>
                <RankList :list="testRankList" />
             </div>

             <div class="flex flex-col gap-4 mt-8 pt-8 border-t border-slate-100">
                <span class="text-sm font-bold text-slate-400">Base: DataTableHeader & DataTableRow (自由组合)</span>
                <div class="flex flex-col gap-2 bg-slate-50/50 p-4 rounded-3xl border border-slate-100">
                  <!-- Header -->
                  <DataTableHeader 
                    :columns="[
                      { label: '学生', align: 'left', widthClass: 'w-48' },
                      { label: '段位', align: 'center', widthClass: 'w-32' },
                      { label: '积分', align: 'right', widthClass: 'w-24' },
                      { label: '操作', align: 'right', widthClass: 'flex-1' }
                    ]" 
                  />
                  
                  <!-- Rows -->
                  <DataTableRow>
                    <div class="w-48 flex items-center gap-3">
                      <Avatar3D text="王" variant="primary" size="sm" />
                      <span class="font-bold text-slate-700 text-sm font-outfit">王小明</span>
                    </div>
                    <div class="w-32 flex justify-center">
                      <span class="px-2 py-1 bg-amber-100 text-amber-700 rounded-md font-bold text-xs">黄金</span>
                    </div>
                    <div class="w-24 text-right font-extrabold text-indigo-600">
                      2,450
                    </div>
                    <div class="flex-1 flex justify-end gap-2">
                       <IconButton3D icon="Plus" size="sm" variant="primary" />
                       <IconButton3D icon="Minus" size="sm" variant="danger" />
                    </div>
                  </DataTableRow>
                  
                  <DataTableRow>
                    <div class="w-48 flex items-center gap-3">
                      <Avatar3D text="李" variant="success" size="sm" />
                      <span class="font-bold text-slate-700 text-sm font-outfit">李华</span>
                    </div>
                    <div class="w-32 flex justify-center">
                      <span class="px-2 py-1 bg-slate-200 text-slate-700 rounded-md font-bold text-xs">白银</span>
                    </div>
                    <div class="w-24 text-right font-extrabold text-indigo-600">
                      1,200
                    </div>
                    <div class="flex-1 flex justify-end gap-2">
                       <IconButton3D icon="Plus" size="sm" variant="primary" />
                       <IconButton3D icon="Minus" size="sm" variant="danger" />
                    </div>
                  </DataTableRow>
                </div>
             </div>
          </div>
        </div>
      </section>

      <!-- 5. Performance & Layout Testing -->
      <section class="space-y-6">
        <h2 class="text-2xl font-outfit font-bold text-slate-800 border-b-2 border-slate-200 pb-2">5. Performance & Layout Testing (6x6 Grid)</h2>
        <div class="bg-slate-200 p-8 rounded-[40px] border border-slate-300 shadow-inner overflow-x-auto w-full">
           <div class="grid md:grid-cols-3 lg:grid-cols-6 gap-6 min-w-max pb-4">
              <StudentCardFull 
                v-for="i in 36" 
                :key="i"
                :student-name="`集卡玩家 ${i}`" 
                :pet-name="`测试幻兽 ${i}`"
                :level="(i % 5) + 1" 
                :points="i * 12"
                :badges="i * 3"
                :current-xp="i % 5" 
                :max-xp="5"
                :current-stage-index="i % 5"
              />
           </div>
        </div>
      </section>

      <!-- 6. Modals Collection -->
      <section class="space-y-6">
        <h2 class="text-2xl font-outfit font-bold text-slate-800 border-b-2 border-slate-200 pb-2">6. Modals Collection 🧩</h2>
        <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-wrap gap-6 items-center">
           <Button3D variant="secondary" @click="showBaseModal = true">基础弹窗 (Modal3D_Base)</Button3D>
           <Button3D variant="danger" @click="showConfirmModal = true">确认警告 (confirmInst)</Button3D>
           <Button3D variant="success" @click="showAlertModal = true">成功提示 (alertInst)</Button3D>
        </div>
      </section>

      <!-- Modal Instances -->
      <!-- [1] Modal3D_Base (Custom Slot) -->
      <Modal3D v-model="showBaseModal" title="🎉 升级啦">
        <div class="text-center py-4">
          <div class="text-6xl mb-4">🦅</div>
          <p class="text-lg text-slate-600 font-medium">恭喜 <span class="font-bold text-indigo-600">幻影喵</span> 进化到完全体阶段！</p>
        </div>
        <template #footer>
          <Button3D class="w-full" @click="showBaseModal = false">太棒了</Button3D>
        </template>
      </Modal3D>

      <!-- [2] confirmInst (High Risk Confirmation) -->
      <ConfirmationModal 
        v-model="showConfirmModal" 
        message="删除操作不可撤回！请输入班级名称 “三年二班” 以确认删除："
        require-confirmation-text="三年二班"
        @confirm="handleConfirmDelete"
      />

      <!-- [3] alertInst (Success Feedback) -->
      <AlertModal 
        v-model="showAlertModal"
        title="✨ 操作成功"
        message="该班级已成功删除，所有关联数据已同步更新。"
        @confirm="showAlertModal = false"
      />

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { User as IconUser, ArrowLeft as IconArrowLeft, UserPlus as IconUserPlus, Egg as IconEgg, PawPrint as IconPawPrint, Cat as IconCat, Crown as IconCrown } from 'lucide-vue-next'

const showBaseModal = ref(false)
const showConfirmModal = ref(false)
const showAlertModal = ref(false)
const searchQuery = ref('')
const testLevel = ref(1)

// Tab States
const activeMainTab = ref('total')

const activeTimeTab = ref('all')
const timeTabOptions = [
  { label: '全部', value: 'all' },
  { label: '本周', value: 'week' },
  { label: '本月', value: 'month' }
]

const activeModalTab = ref('add')
const modalTabOptions = [
  { label: '➕ 加分', value: 'add' },
  { label: '➖ 减分', value: 'deduct' }
]

// Standalone Timeline State
const testTimelineStages = [
  { icon: IconEgg },
  { icon: IconPawPrint },
  { icon: IconCat },
  { icon: IconCat },
  { icon: IconCrown }
]
const testTimelineUnlocked = ref(2)
const testTimelineActive = ref(2)

// GroupCard Default Students
const testGroupMembers1 = [
  { id: 1, name: '赵小刚' },
  { id: 2, name: '钱多' },
  { id: 3, name: '孙悟空' },
]

const testGroupMembers2 = [
  { id: 4, name: '李白' },
  { id: 5, name: '杜甫' }
]

// Podium Data
const testPodiumWinners = [
  { name: '张小明', avatarText: '张', score: 2580 }, // 1st
  { name: '陈小伟', avatarText: '陈', score: 2210 }, // 2nd
  { name: '李小华', avatarText: '李', score: 1980 }  // 3rd
]

// RankList Data
const testRankList = [
  { id: 1, name: '张小明', avatarText: '张', avatarVariant: 'warning', petInfo: '🐾 幻影喵 Lv.12 (进化期)', petColorTheme: 'bg-indigo-50 text-indigo-600 border-indigo-200', badges: 12, points: 2450 },
  { id: 2, name: '李华', avatarText: '李', avatarVariant: 'success', petInfo: '🌿 史莱姆 Lv.10 (幼年期)', petColorTheme: 'bg-emerald-50 text-emerald-600 border-emerald-200', badges: 8, points: 2120 },
  { id: 3, name: '王五', avatarText: '王', avatarVariant: 'primary', petInfo: '🔥 机械龙 Lv.8 (孵化期)', petColorTheme: 'bg-rose-50 text-rose-600 border-rose-200', badges: 5, points: 1980 },
  { id: 4, name: '王小红', avatarText: '红', avatarVariant: 'danger', petInfo: '🐆 逐风豹 Lv.15 (成长阶段)', petColorTheme: 'bg-indigo-50 text-indigo-600 border-indigo-200', badges: 5, points: 1750 },
  { id: 5, name: '刘小芳', avatarText: '芳', avatarVariant: 'primary', petInfo: '🦉 智慧之影 Lv.14 (成长阶段)', petColorTheme: 'bg-indigo-50 text-indigo-600 border-indigo-200', badges: 4, points: 1620 },
  { id: 6, name: '陈大明', avatarText: '陈', avatarVariant: 'success', petInfo: '🧊 霜冻龙 Lv.12 (进化期)', petColorTheme: 'bg-emerald-50 text-emerald-600 border-emerald-200', badges: 3, points: 1580 }
]

const handleConfirmDelete = () => {
  alert('已确认删除！')
  showConfirmModal.value = false
}
</script>
