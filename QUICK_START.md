# TaskFlow - Quick Start Guide

## New Features

### 1. Green & White Theme
Your TaskFlow system now features a clean, modern green-and-white color scheme that's easy on the eyes and professional.

**Colors:**
- Primary Green: Used for buttons, links, and active elements
- Off-White Background: Clean, bright workspace
- Light Green Accents: Secondary UI elements
- Dark Text: Maximum readability

### 2. Action Steps Feature
Track complex tasks with multi-step workflows. Each task can now have multiple action steps with notes and progress tracking.

## How to Use

### Creating a Task with Action Steps

1. **Click "New Task"** button
2. **Fill in basic info:**
   - Title
   - Description
   - Assign to team member
   - Set priority and due date

3. **Add Action Steps (Optional):**
   - Type step title in "Add an action step" field
   - Example: "Create the letter", "Send the letter"
   - Press Enter or click the + button to add
   - Remove steps with the X button if needed

4. **Logo Placeholder:**
   - You'll see a placeholder box for your company logo
   - (This is where you can insert your own logo later)

5. **Click "Create Task"**

### Managing Action Steps in Task Details

When you open a task, you'll see:

**Action Steps Section with:**
- Progress bar showing % complete
- List of steps with checkboxes
- Each step can be:
  - ✓ Marked complete/incomplete
  - 🗑️ Deleted with the trash icon
  - ⬇️ Expanded to view/add notes

### Adding Notes to Steps

1. **Click the arrow** next to a step to expand it
2. **View existing notes** with:
   - Author name and avatar
   - Time since note was added
   - Full note content

3. **Add a new note:**
   - Type in the "Add Note" textarea
   - Press Ctrl+Enter (or Cmd+Enter on Mac) or click Send button
   - Note appears immediately with your name and timestamp

### Example Workflow

**Task: "Create and send a letter"**

```
📋 Progress: 2/3 complete

✅ Step 1: Create the letter
   💬 "Initial draft completed" - You (2 hours ago)
   💬 "Approved by manager" - Manager (1 hour ago)

✅ Step 2: Print the letter
   💬 "50 copies printed" - You (30 min ago)

⬜ Step 3: Mail the letter
   💬 "Waiting for stamps" - You (just now)
```

## Inserting Your Logo

The app currently shows a placeholder for your logo. Here's how to add your own:

1. **Save your logo** as `logo.png` in the `public` folder
   - Recommended size: 32x32 pixels
   - Format: PNG, SVG, or JPG
   - Should have a transparent background

2. **Open** `/components/app-header.tsx`

3. **Find** the logo section (around line 23)

4. **Replace** the placeholder icon with your logo:
   ```jsx
   // Before:
   <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
     <LayoutDashboard className="h-4 w-4 text-primary-foreground" />
   </div>
   
   // After:
   <img 
     src="/logo.png" 
     alt="Company Logo" 
     className="h-8 w-8 object-contain"
   />
   ```

5. **Save and reload** - your logo will appear in the header!

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Add action step | Enter ↵ |
| Add step note | Ctrl+Enter (Cmd+Enter on Mac) ⌨️ |

## Tips & Tricks

- 💡 Use action steps for complex tasks that need multiple stages
- 📝 Add notes to track progress at each step
- ✓ Check off steps as you complete them to see progress
- 🗑️ Delete steps that are no longer needed
- 📱 All features work on mobile and desktop

## Color Customization

Want to change the green color? Edit `/app/globals.css`:

```css
--primary: 142 71% 45%;  /* Change this to your preferred color */
```

Use HSL format for best results. You can find HSL color values at [color-hex.com](https://www.color-hex.com)

## What's New in This Update

✨ **Complete Redesign:**
- Fresh green-and-white theme
- Modern, clean interface
- Professional appearance

🎯 **Action Steps:**
- Multi-step task tracking
- Step-level progress notes
- Visual progress indicators
- Author attribution

🏷️ **Logo Support:**
- Placeholder for company branding
- Easy logo insertion
- Professional header

## Troubleshooting

**Q: My logo doesn't show up**
- Check that the file path is correct
- Make sure the file is in the `public` folder
- Try a PNG format instead of JPG
- Clear browser cache and reload

**Q: Color looks wrong**
- Clear browser cache (Ctrl+Shift+Delete)
- Try a different browser
- Check that CSS file saved correctly

**Q: Action steps aren't saving**
- Make sure you clicked "Add" button
- Try refreshing the page
- Check browser console for errors

## Support

For more help or issues:
1. Check IMPLEMENTATION_SUMMARY.md for detailed technical info
2. Review the code comments in component files
3. Check browser console (F12) for error messages

---

Enjoy your enhanced TaskFlow system! 🚀
