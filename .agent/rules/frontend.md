---
trigger: always_on
---

# Frontend Development Rules for CoolTeacherPoint

This file establishes strict guidelines and constraints for developing the frontend of the CoolTeacherPoint project. Any AI assistant or developer working on this project MUST adhere to these rules.

## 1. Technology Stack
- **Framework:** Nuxt 3 (configured with `future.compatibilityVersion: 4` for Nuxt 4 directory structure adoption). All source files reside strictly inside the `app/` directory.
- **Styling:** Tailwind CSS (configured dynamically through `~/assets/css/main.css`).
- **Icons:** `lucide-vue-next` (Lucide Icons for Vue 3).
- **Utilities:** VueUse (`@vueuse/nuxt`), VueUse Motion (`@vueuse/motion/nuxt`).

## 2. Design System & Aesthetics
- **Source of Truth:** `/design_specification.md` must be checked before creating or modifying any UI components.
- **Pencil Specs:** The exact design parameters are stored in `coolteacherpointdesin.pen`. When in doubt, query the `.pen` file.
- **Style:** 3D aesthetic featuring soft multi-layer box shadows, large border radii (typically 24px-32px), and explicit z-axis interactions on hover/click.
- **Typography:**
  - `Outfit` for headers, titles, metrics, and branding.
  - `Inter` for body text, form inputs, and secondary UI info.

## 3. Strict Coding Constraints
- **NO EMOJIS (CRITICAL RULE):** Never use browser or OS-native emojis (e.g., 🌟, 🎫, 🎁) for UI elements. They render inconsistently and break the application's visual language. Use ONLY components from `lucide-vue-next` dynamically via `<component :is="LucideIcons[iconName]" />` or explicit imports.
- **Auto-Imports:** Nuxt is configured with `components: { pathPrefix: false }`. Nested components in `app/components/` do not require prefixing (e.g., use `<Button3D>` instead of `<BaseButton3D>`).
- **CSS Variables:** Avoid hardcoded HEX colors when possible. Rely on Tailwind's configuration (`primary`, `action`, `positive`, `negative`, `card`).
- **Composition API:** Ensure all Vue components utilize `<script setup>` syntax for concise and reactive state management.
