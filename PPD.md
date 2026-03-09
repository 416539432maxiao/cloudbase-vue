宠物积分管理系统技术方案 (Technical Specification)


1. 项目背景
本系统为基于 Nuxt 3 开发的轻量化宠物养成积分系统。通过 Serverless（无服务器） 架构实现低成本运行




2. 技术栈概览
框架: Nuxt 3 (设置为 ssr: false 静态模式)
部署: 腾讯云 CloudBase 静态网站托管 (CDN 加速)
数据库: CloudBase 云数据库 (JSON 文档型)
UI 组件: shadcn-vue (手动还原 Pencil 设计稿)
动效库: canvas-confetti (庆贺) + @vueuse/motion (宠物微动效)




3. 核心架构与数据流
静态部署：Nuxt 代码打包后上传至 CloudBase 静态托管，通过 CDN 节点加速。
数据交互：前端通过 TCB JS-SDK 直接与云数据库通信。
身份校验：利用 TCB 的匿名登录或自定义登录，结合数据库“安全规则”保护数据。




6. 静态部署方案 (SSG)
6.1 打包配置 nuxt.config.ts
6.2 部署步骤
生成静态文件：npm run generate
部署至 CloudBase：使用 tcb hosting deploy .output/public 或控制台手动上传。









