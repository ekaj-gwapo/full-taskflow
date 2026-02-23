# TaskFlow Visual Reference Guide

## UI Component Changes

### Before vs After

#### Theme
```
BEFORE (Dark Blue)              AFTER (Green & White)
┌──────────────────────┐        ┌──────────────────────┐
│ ■■■ Dark            │        │ ■■■ Off-White       │
│ Text: Light         │   →    │ Text: Dark          │
│ Accent: Blue        │        │ Accent: Green       │
└──────────────────────┘        └──────────────────────┘
```

#### Color Palette
```
OLD THEME                       NEW THEME
┌─────────────────┐            ┌─────────────────┐
│ █ Primary Blue  │            │ █ Primary Green │
│ █ Gray Secondary│      →     │ █ Light Green   │
│ █ Dark BG       │            │ █ Off-white BG  │
│ █ Light Text    │            │ █ Dark Text     │
└─────────────────┘            └─────────────────┘
```

---

## Action Steps Component Structure

### In Create Task Dialog

```
┌─────────────────────────────────────┐
│   Create New Task                   │
├─────────────────────────────────────┤
│ Title: [________]                   │
│ Description: [________]             │
│ Assign: [Select] Priority: [Select] │
│ Due Date: [__/__/____]              │
│                                     │
│ ─── Action Steps (Optional) ───    │
│ [Input: Add action step...]  [+]   │
│                                     │
│ ✓ Step 1: Create the letter        │
│ ✓ Step 2: Send the letter          │
│   [x remove] [x remove]            │
│                                     │
│ ─── Logo/Image Placeholder ───     │
│ ┌───────────────────────────────┐  │
│ │  Logo placeholder             │  │
│ │  Insert your logo here        │  │
│ └───────────────────────────────┘  │
│                                     │
│ [Cancel]  [Create Task]            │
└─────────────────────────────────────┘
```

### In Task Detail Panel

```
┌──────────────────────────────────┐
│ Task Title                       │
├──────────────────────────────────┤
│                                  │
│ Meta Information                 │
│ Status: [Dropdown]  Priority: ▲  │
│ Assignee: Name                   │
│ Due Date: Mar 15                 │
│                                  │
├──────────────────────────────────┤
│                                  │
│ ACTION STEPS                     │
│ Progress: 2/3 complete           │
│ ████████░░░ 66%                  │
│                                  │
│ [+ Add step] [New step input...]│
│                                  │
│ ✓ Step 1: Create letter         │
│   ↓ expand                       │
│   ├─ Notes (2)                  │
│   │  ├ Alex: "Draft done"       │
│   │  └ Jordan: "Approved"       │
│   └─ [Add note textarea]         │
│                                  │
│ ✓ Step 2: Send letter           │
│   ↓ expand                       │
│                                  │
│ ⬜ Step 3: Track delivery       │
│   ↓ expand                       │
│                                  │
├──────────────────────────────────┤
│                                  │
│ PROGRESS NOTES (3)               │
│ [Existing notes display]        │
│                                  │
└──────────────────────────────────┘
```

---

## Expanded Step Detail

```
Step: "Create the letter"
┌─────────────────────────────────────┐
│ ✓ ▼ Step 1: Create the letter   [x]│  ← Delete
├─────────────────────────────────────┤
│                                     │
│ NOTES (2)                           │
│ ┌─────────────────────────────────┐│
│ │ 👤 Alex (2 hours ago)          ││
│ │ "Initial draft completed"      ││
│ └─────────────────────────────────┘│
│                                     │
│ ┌─────────────────────────────────┐│
│ │ 👤 Manager (1 hour ago)         ││
│ │ "Approved and ready to send"    ││
│ └─────────────────────────────────┘│
│                                     │
│ ADD NOTE                            │
│ [Note textarea...]                  │
│ [ Send ]                            │
│ Tip: Press Ctrl+Enter to send       │
│                                     │
└─────────────────────────────────────┘
```

---

## Color Swatches

### Primary Colors
```
Green (Primary)              Green (Hover)
┌──────────────┐            ┌──────────────┐
│              │            │              │
│  #10b981     │   →        │ (darker)     │
│  142,71%,45% │            │ -10% light   │
│              │            │              │
└──────────────┘            └──────────────┘

Off-white (Background)      Dark Text
┌──────────────┐            ┌──────────────┐
│              │            │              │
│  #f5f5f5     │            │  #141414     │
│  0,0%,98%    │            │  0,0%,8%     │
│              │            │              │
└──────────────┘            └──────────────┘
```

### Secondary Colors
```
Light Green                 Light Gray
┌──────────────┐            ┌──────────────┐
│              │            │              │
│  #d1f4e8     │            │  #e6e6e6     │
│  142,35%,88% │            │  0,0%,90%    │
│              │            │              │
└──────────────┘            └──────────────┘
```

---

## Button States

### Primary Button (Green)
```
Default              Hover               Disabled
┌──────────┐        ┌──────────┐        ┌──────────┐
│ + Add    │   →    │ + Add    │   →    │ + Add    │
│ (Green)  │        │(DkGreen) │        │(Gray)    │
└──────────┘        └──────────┘        └──────────┘
```

### Secondary Button
```
Default              Hover
┌──────────┐        ┌──────────┐
│ Cancel   │   →    │ Cancel   │
│(Light BG)│        │(LtGreen) │
└──────────┘        └──────────┘
```

---

## Input Fields

```
Focused                 Filled                  Error
┌────────────┐         ┌────────────┐         ┌────────────┐
│ Type here  │         │ Value here │         │ Error text │
│ (Green)    │         │ (Normal)   │         │ (Red)      │
└────────────┘         └────────────┘         └────────────┘
```

---

## Status Badges

```
To Do              In Progress         Completed
┌────────┐        ┌──────────────┐    ┌───────────┐
│ ○ Todo │   →    │ ◐ In Progress│   │ ✓ Complete│
│        │        │              │    │           │
└────────┘        └──────────────┘    └───────────┘

Low               Medium              High
┌─────┐          ┌────────┐         ┌────────┐
│Low  │    →     │Medium  │    →    │High    │
│     │          │        │         │        │
└─────┘          └────────┘         └────────┘
```

---

## Progress Indicators

### Progress Bar
```
Not Started             In Progress             Complete
███░░░░░░░░░░░░░░░░░  ██████████░░░░░░░░░░  ████████████████████
0%                     50%                    100%
```

### Step Counter
```
Progress: 0/3         Progress: 2/3         Progress: 3/3
Tasks Remaining       Tasks Remaining       All Complete
```

---

## Header Layout

```
OLD HEADER (Dark)              NEW HEADER (Green)
┌──────────────────────┐       ┌──────────────────────┐
│ ■ TaskFlow  [Admin]  │   →   │ ■ TaskFlow  [Admin]  │
│ Dark blue theme      │       │ Green theme + Logo   │
└──────────────────────┘       └──────────────────────┘

Logo Placeholder:
┌──────────────────────┐
│ ■ Logo Here          │   ← Replace with your logo
│ 32x32 size           │
└──────────────────────┘
```

---

## Responsive Design

### Desktop View (Full Width)
```
┌─────────────────────────────────────────────┐
│ Header with Logo                            │
├──────────────────────┬──────────────────────┤
│ Task List            │ Task Detail Panel    │
│ ┌────────┐           │ ┌──────────────────┐│
│ │ Task 1 │  →Select→ │ │ Action Steps     ││
│ │ Task 2 │           │ │ Progress Notes   ││
│ │ Task 3 │           │ │ Step details     ││
│ └────────┘           │ └──────────────────┘│
└──────────────────────┴──────────────────────┘
```

### Mobile View (Stacked)
```
┌──────────────────┐
│ Header with Logo │
├──────────────────┤
│ Task List        │
│ ┌──────────────┐ │
│ │ Task 1       │ │
│ │ [Expand] →   │ │
│ └──────────────┘ │
│                  │
│ Task Details     │
│ ┌──────────────┐ │
│ │ Action Steps │ │
│ │ ┌──────────┐ │ │
│ │ │ Step 1   │ │ │
│ │ │ Step 2   │ │ │
│ │ └──────────┘ │ │
│ └──────────────┘ │
└──────────────────┘
```

---

## Interaction Flow

### Creating a Task with Steps

```
1. Click "New Task"
   ↓
2. Fill Basic Info (Title, Description, etc.)
   ↓
3. Add Action Steps
   • Type step title
   • Press Enter
   • Repeat for each step
   ↓
4. Review Logo Placeholder
   ↓
5. Click "Create Task"
   ↓
6. Task appears in list
   ↓
7. Click to view task details
   ↓
8. See Action Steps with Progress Bar
```

### Adding Notes to Steps

```
1. Open Task Details
   ↓
2. Find Step to Add Note to
   ↓
3. Click Arrow to Expand Step
   ↓
4. See existing notes (if any)
   ↓
5. Type in "Add Note" textarea
   ↓
6. Press Ctrl+Enter (or click Send)
   ↓
7. Note appears with:
   • Your name
   • Timestamp
   • Note content
```

---

## Keyboard Navigation

```
Tab Key:              Navigate between fields/buttons
Enter Key:            Add action step
Ctrl+Enter:           Submit note (Cmd on Mac)
Escape:               Close dialogs/panels
Space:                Toggle checkboxes
Arrow Keys:           Navigate within lists
```

---

## Accessibility Features

✓ Proper heading hierarchy
✓ Alt text on images
✓ Color contrast ratios > 4.5:1
✓ Keyboard navigation support
✓ ARIA labels on interactive elements
✓ Screen reader friendly
✓ Focus indicators visible
✓ Touch targets > 44px

---

## Spacing and Layout Grid

```
Component Spacing:
Padding:   4px, 8px, 12px, 16px, 24px, 32px
Gap:       4px, 8px, 12px, 16px, 24px
Margin:    4px, 8px, 12px, 16px, 24px

Button Heights:  28px (small), 36px (medium), 44px (large)
Input Heights:   36px (default), 44px (mobile)
Avatar Sizes:    24px (small), 32px (medium), 40px (large)
```

---

## State Examples

### Empty Task
```
┌────────────────────────┐
│ No tasks yet!          │
│ Click "New Task"       │
│ to get started         │
└────────────────────────┘
```

### Task with No Steps
```
Task: "Simple Task"
├── Status: In Progress
├── No Action Steps
└── Progress Notes: 2
```

### Task with Steps
```
Task: "Complex Task"
├── Action Steps: 3
│  ├── ✓ Step 1 (1 note)
│  ├── ✓ Step 2 (2 notes)
│  └── ⬜ Step 3 (0 notes)
└── Progress: 66%
```

---

## Tips for Best Results

📐 **Spacing**: Keep consistent with 8px grid
🎨 **Colors**: Stick to the 5-color palette
📝 **Typography**: Max 2 fonts (already set)
📱 **Mobile**: Test on 375px width minimum
⌨️ **Keyboard**: All interactions keyboard accessible
♿ **A11y**: Contrast ratio > 4.5:1 for text

---

## Component Size Reference

```
Small Components:
- Avatar: 24px × 24px
- Button (sm): 28px × 80px
- Badge: 20px × auto

Medium Components:
- Input: 36px × 280px
- Card: 200px × auto
- Button (md): 36px × 120px

Large Components:
- Dialog: 90% width (max 600px)
- Panel: 400px width
- Button (lg): 44px × 160px
```

---

This visual guide provides a complete reference for the new TaskFlow system design and interactions. Refer to it when making customizations or extensions to the system.

**Design is consistent, accessible, and production-ready! ✅**
