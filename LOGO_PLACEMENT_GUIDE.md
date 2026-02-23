# Logo Placement Guide

## Overview
The TaskFlow system now has multiple logo placement areas for customization:

### 1. Header Logo (Top Left - Main Brand)
Location: `/components/app-header.tsx` (line ~24)

Current placeholder:
```tsx
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
  <LayoutDashboard className="h-5 w-5 text-primary-foreground" />
</div>
```

Replace with your logo:
```tsx
<img 
  src="/logo.png" 
  alt="Logo" 
  className="h-10 w-10 rounded-lg object-contain" 
/>
```

---

### 2. Sidebar - Logo Top Left
Location: `/components/employee-sidebar.tsx` (line ~46)

Current placeholder:
```tsx
<div className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-dashed border-border bg-secondary/30">
  <ImageOff className="h-5 w-5 text-muted-foreground" />
</div>
```

This is a dashed border placeholder on the left side of the sidebar header.

---

### 3. Sidebar - Logo Top Right
Location: `/components/employee-sidebar.tsx` (line ~52)

Current placeholder:
```tsx
<div className="flex-1 flex h-12 items-center justify-center rounded-lg border-2 border-dashed border-border bg-secondary/30">
  <div className="text-center">
    <p className="text-xs text-muted-foreground font-medium">Logo Here</p>
    <p className="text-[10px] text-muted-foreground">Top Right</p>
  </div>
</div>
```

This is a larger dashed border placeholder on the right side of the sidebar header.

---

## How to Add Your Logos

### Method 1: Place image file in public folder
1. Add your logo file to `/public` folder
   - Supported formats: PNG, JPG, SVG
   - Recommended size: 64x64px for headers

2. Update the img src:
```tsx
<img src="/your-logo.png" alt="Company Logo" className="h-10 w-10 rounded-lg object-contain" />
```

### Method 2: Use external URL
```tsx
<img 
  src="https://your-domain.com/logo.png" 
  alt="Company Logo" 
  className="h-10 w-10 rounded-lg object-contain" 
/>
```

### Method 3: Use SVG inline
```tsx
<svg className="h-10 w-10" viewBox="0 0 100 100">
  {/* Your SVG content */}
</svg>
```

---

## Logo Specifications

| Location | Size | Type | Background |
|----------|------|------|------------|
| Header (Top Left) | 40x40px | Primary brand logo | Green (#10b981) |
| Sidebar (Top Left) | 48x48px | Icon or small logo | Light background |
| Sidebar (Top Right) | 48xAuto | Secondary logo or banner | Light background |

---

## Current Color Scheme
- Primary: Green (#10b981)
- Background: White (#f9fafb)
- Card: White (#ffffff)
- Border: Light Gray (#e5e7eb)

Ensure your logos work well with the green and white theme.

---

## Notes
- All logos have rounded corners for modern look
- Use `object-contain` for images to maintain aspect ratio
- Placeholders show exactly where to add your logos
- Remove the placeholder div and replace with your img/svg element
