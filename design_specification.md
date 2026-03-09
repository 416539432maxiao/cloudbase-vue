# CoolTeacherPoint Design Specification

This document outlines the design standards, tokens, and component architecture for the CoolTeacherPoint system, based on the finalized design.

---

## 1. Design Foundations & Tokens

Design tokens are the visual atoms of our design system. They ensure consistency across the application by centralizing core styles.

### 1.1 Color Palette

The system uses a vibrant and modern palette designed for a "cool" and educational feel.

#### Core Colors
| Token | Value | Role / Usage |
| :--- | :--- | :--- |
| `primary` | `#6366f1` | Brand primary color, used for main actions and branding. |
| `action` | `#FF6B6B` | Emphasis and secondary actions. |
| `backend-color` | `#f8fafc` | Main application background. |
| `background` | `#eef2ff` | Light backdrop for containers and cards. |
| `card` | `#FFFFFF` | Background for individual cards and modals. |

#### Semantic Colors
| Token | Value | Role / Usage |
| :--- | :--- | :--- |
| `positive` | `#bbf7d0` | Success states, points increase. |
| `negative` | `#fc7474` | Error states, points decrease, or danger actions. |
| `text_main` | `#2D3748` | Primary text for maximum legibility. |
| `text_muted` | `#A0AEC0` | Secondary or descriptive text. |

### 1.2 Typography

We use two modern sans-serif fonts to distinguish between primary branding and secondary UI elements.

- **Primary Font**: `Outfit`
  - Used for headers, titles, and branding.
- **Secondary Font**: `Inter`
  - Used for body text, UI components, and technical data.

### 1.3 Layout & Elevation

| Token | Value | Role / Usage |
| :--- | :--- | :--- |
| `radius_large` | `24px` | Corner radius for main containers and cards. |
| `shadow_blur` | `28px` | Soft depth effect for cards and popups. |

---

## 2. Component Library

The component library is categorized into Atomic, Structural, and Composite elements to ensure modularity and ease of maintenance.

### 2.1 Atomic Components (Basic Elements)
- **Button3D (Primary/Secondary/Danger)**: Standard 3D buttons with 5px shadow offset.
- **IconButton3D**: Circular 3D buttons used for navigation or close actions.
- **ScoringPill**: A status-like pill showing icon, label, and score value (+3/-1).
- **StatusBadge**: XP progress bars, level indicators, and type tags.
- **TabNav (Active/Inactive)**: 3D-styled navigation tabs for switching views.
- **ScrollTrack/Thumb**: Custom scrollbar elements matching the 3D aesthetic.

### 2.2 Structural Components (Cards & Inputs)
- **ProductCard**: 3D card for store items with integrated Buy button.
- **PointRuleCard**: List items for scoring rules with edit actions.
- **GroupCard**: Container for student groups with member lists.
- **PetExhibitCard**: Card for displaying pets in the Atlas with rarity/type.
- **StudentCard (Simple)**: Compact avatar + name card for selection lists.
- **PageHeader**: Unified header with title, context info, and action buttons.
- **SearchBar**: 3D-styled input field with search icon.
- **DataTable (Header/Row)**: Standardized components for record logs and lists.

### 2.3 Composite Components (Complex UI)
- **StudentCard (Full)**: Comprehensive card with pet evolution timeline, XP stats, and 3D avatar.
- **Modal3D (Base)**: The foundation for all popups with 3D borders and shadows.
- **ConfirmationModal**: specialized modal for dangerous actions (e.g., Delete Class).
- **Sidebar**: Main navigation container with logo and Nav items.
- **RankList**: Container for high-density ranking displays.
- **StudentSelectModal**: Complex modal for picking students during store redemption.
- **RedemptionHistoryModal**: List-based modal for tracking past awards.
- **GridColumnController**: Interactive tool for adjusting the class layout grid.

### 2.2 StudentCard

Used to display student information, current pet, and progress.

- **Structure**: Vertical frame with `24px` padding.
- **Visuals**:
  - **Fill**: `#F8FAFC` (Light Slate)
  - **Stroke**: `Inside`, `#FFFFFF`, `2px` thickness (Glassmorphism effect).
  - **Elevation**: Multi-layered shadows for extreme depth.
  - **Corner Radius**: `$radius_large` (24px)
- **Sub-components**:
  - **Pet Image Wrapper**: Circular container with `60px` radius and `6px` white stroke.
  - **Timeline**: A linear progress tracker with icons (`lucide:egg`, `lucide:paw-print`, `lucide:cat`).

### 2.3 ScoringPill

A compact card used for awarding points or displaying achievements.

- **Structure**: Vertical layout with `16px` padding and `10px` gap.
- **Visuals**:
  - **Fill**: `#F0FDF4` (Light Green)
  - **Stroke**: `Inside`, `#FFFFFF`, `2px`.
  - **Elevation**: Green shadows (`#86EFAC`) for glow effect.
- **Content**:
  - **Icon**: `lucide-vue-next` icon component strictly (NO EMOJIS).
  - **Label**: Task name (e.g., "课堂表现").
  - **Value**: Positive (`+3`) or negative (`-1`) points.

---

## 3. Page Architecture

The application is structured into three primary functional areas, each represented by a dedicated screen.

### 3.1 Class Homepage

The central hub for classroom interaction.

- **Layout**: Sidebar navigation (left) + Main Content Grid (right).
- **Key Features**:
  - **Student Grid**: Displays all students as `StudentCard` instances.
  - **Quick Scoring Bar**: Fixed or easily accessible bar for awarding common points.
  - **Class Status Header**: Displays class name, total points, and current session info.

### 3.2 Points Store

A gamified marketplace where students can redeem earned points.

- **Layout**: Categorized grid of products.
- **Components**:
  - `ProductCard`: Displays item image, cost, and stock.
  - `RedemptionHistory`: A slide-out panel or modal showing past transactions.

### 3.3 Class & Student Management

The administrative interface for teachers.

- **Layout**: Data-heavy tables and management forms.
- **Components**:
  - `DataTable`: Header and row components for student lists.
  - `Management Modals`: Popups for adding (`Add Student`) or importing students.

---

## 4. Interaction Design

### 4.1 3D Depth System
The "Cool" aesthetic is achieved through consistent use of the **Z-Axis**:
- **Layer 0**: Main background (`#F8FAFC`).
- **Layer 1**: Cards and containers with soft shadows (` shadow_blur: 28px`).
- **Layer 2**: Interactive elements (Buttons, Pills) with hard, colored 3D shadows.

### 4.2 Feedback Loops
- **Positive Action**: Green glow and `+N` points animation using `ScoringPill`.
- **Primary Action**: Deep blue button presses with shadow offset shifts.

---

## 5. Implementation Notes

- **Responsive Design**: The grid should adapt from 6 columns (large screens) to 2-3 columns (tablets).
- **STRICT ICON RULE**: All icons MUST use the `lucide-vue-next` library. **NEVER use browser Emojis** under any circumstance, as they render inconsistently across OS platforms and ruin the professional 3D aesthetic of the component system. When a component requires an icon prop, pass the string name of the Lucide icon (e.g., `"Star"`, `"User"`) and render it using `<component :is="LucideIcons[icon]" />`.
- **Variable Usage**: Hardcoded HEX values should be avoided in favor of the `$variables` defined in Part 1.
