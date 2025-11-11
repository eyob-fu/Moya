# Personal Recipe Box - Design Guidelines

## Design Approach
**Reference-Based Approach** drawing from editorial food publications and modern recipe platforms (NYT Cooking, Bon Appétit, Notion's organization patterns). This application prioritizes visual storytelling and emotional connection through food photography while maintaining functional organization.

## Core Design Principles
1. **Editorial Warmth**: Evoke the tactile, inviting feel of a well-loved cookbook
2. **Visual Hierarchy Through Photography**: Let generated food images drive engagement
3. **Scannable Organization**: Clear categorization and search for quick recipe access
4. **Dual-Mode Interface**: Browse mode vs. focused cooking mode with distinct layouts

---

## Typography System

**Primary Font**: Serif font family (Playfair Display or Lora) for headings - elegant, editorial
**Secondary Font**: Sans-serif (Inter or Open Sans) for body text - readable at all sizes

**Type Scale**:
- Recipe titles: text-4xl to text-5xl, font-bold
- Section headings: text-2xl to text-3xl, font-semibold
- Category labels: text-sm, uppercase tracking-wide
- Body/instructions: text-base to text-lg, leading-relaxed
- Step numbers in cooking mode: text-6xl to text-8xl, ultra-light weight

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20 (focus on 4, 8, 16 for consistency)

**Grid Patterns**:
- Recipe gallery: Masonry-style grid (2-3 columns desktop, 1 column mobile)
- Category cards: 3-4 columns on desktop, 2 on tablet, 1 on mobile
- Step-by-step mode: Full-width single column with max-w-3xl centering

**Container Widths**:
- Browse mode: max-w-7xl for recipe grids
- Recipe detail: max-w-4xl for comfortable reading
- Cooking mode: max-w-3xl for focus
- Printable cards: Fixed 4x6 ratio (400x600px equivalent)

---

## Component Library

### 1. Hero Section (Browse Mode Homepage)
- Full-width featured recipe carousel with AI-generated hero images
- Large overlay text with recipe title and brief description
- Semi-transparent backdrop filter on text areas for readability
- Quick action buttons: "View Recipe", "Start Cooking" with blurred backgrounds
- Height: 70vh to 80vh

### 2. Recipe Card Component
**Standard Browse Card**:
- Aspect ratio 4:3 for hero image (AI-generated dish photo)
- Recipe title overlay at bottom with gradient fade
- Small metadata strip: cook time icon + time, servings icon + count
- Hover effect: Subtle lift (shadow increase)
- Category badge in top-right corner

**Printable Card (4x6)**:
- Compact layout with small thumbnail (1x1 aspect ratio) in top-left
- Title in decorative serif, ingredients list with checkboxes
- Instructions numbered and condensed
- Footer with cook time and servings
- Border decoration with subtle corner flourishes

### 3. Category Navigation
- Horizontal scrollable pill-style filters
- Active category: filled background, inactive: outline only
- Icon + label for each category (use Heroicons)
- Sticky position below main header

### 4. Recipe Detail View
**Layout Structure** (vertical flow):
- Large hero image: AI-generated plating shot, 16:9 aspect ratio, full-width within container
- Title + metadata bar (time, servings, difficulty)
- Two-column split on desktop (ingredients left | instructions right), stacked on mobile
- Photo gallery section: Grid of AI-generated step photos (3-4 columns)
- Action buttons: "Print Recipe", "Start Cooking Mode", "Edit Recipe"

**Ingredients Section**:
- Checkbox list items for interactive tracking
- Group by sections if recipe has multiple components
- Quantity + unit + ingredient in consistent format

**Instructions Section**:
- Numbered steps (large numbers in accent positioning)
- Each step with optional small step photo thumbnail
- Generous line-height for readability

### 5. Step-by-Step Cooking Mode
**Full-Screen Focused Interface**:
- Current step number: Massive display (text-8xl) in top-left
- Step instruction: Large text (text-2xl to text-3xl), centered
- Full-width step photo above instruction if available
- Progress indicator: Linear bar showing X of Y steps
- Large navigation: "Previous" | "Next" buttons at bottom (full-width on mobile)
- Minimal header with recipe title and "Exit" button
- Ingredients quick reference panel (collapsible sidebar on desktop, bottom sheet on mobile)

### 6. Photo Gallery View
- Lightbox-style modal or dedicated page
- Grid layout of all AI-generated photos for recipe
- Categories: Hero shots, Ingredient photos, Step photos, Final plating
- Click to expand full-screen with left/right navigation
- Download option for each image

### 7. Recipe Creation/Edit Form
- Multi-step wizard layout:
  1. Basic info (title, category, time, servings)
  2. Ingredients (dynamic add/remove rows)
  3. Instructions (reorderable step list)
  4. Photo generation (style selector + preview)
- Style selector for AI photo generation:
  - Preset options: "Rustic Natural Light", "Modern Minimalist", "Dark & Moody", "Bright & Airy"
  - Visual preview chips showing style examples
- Real-time preview of printable card as you type

### 8. Search & Filter Bar
- Prominent search input with icon (Heroicons magnifying glass)
- Filter dropdowns: Category, Cook Time Range, Dietary Tags
- "Add Recipe" button (primary CTA) aligned to right
- Sticky position when scrolling

### 9. Navigation Header
- Logo/app name in decorative serif font
- Main navigation: "All Recipes", "Categories", "My Gallery"
- Right-aligned: Search trigger, Add Recipe button
- Subtle shadow on scroll

### 10. Empty States
- "No recipes yet" with illustration placeholder
- CTA: "Create Your First Recipe"
- "No recipes in this category" with suggestion to browse all or create

---

## Images

**Hero Section**: Large AI-generated photo of a beautifully plated signature dish with rustic natural lighting, styled like a food magazine cover. Aspect ratio 21:9 or 16:9.

**Recipe Cards**: Each recipe displays its AI-generated hero shot showing the finished dish from an appealing angle (typically 45-degree overhead or straight-on plating shot). Aspect ratio 4:3.

**Step Photos**: Smaller process shots showing ingredient prep, cooking techniques, and plating stages. Square format (1:1) for grid consistency.

**Category Headers**: Optional subtle background textures or ingredient close-ups with heavy overlay for text readability.

**Empty State**: Warm illustration of cooking utensils, recipe cards, or kitchen scene.

---

## Interaction Patterns

**Recipe Card Interactions**:
- Hover: Lift effect with shadow increase
- Click: Navigate to recipe detail with smooth transition

**Cooking Mode Navigation**:
- Swipe gestures on mobile (left/right for steps)
- Keyboard shortcuts on desktop (arrow keys)
- Voice command support indication (future enhancement placeholder)

**Photo Generation**:
- Loading state with placeholder while DALL-E generates
- Regenerate button if user wants different style
- Save to gallery with single click

**Print Function**:
- Opens print preview with optimized 4x6 card layout
- Browser print dialog with pre-configured settings
- Option to print multiple recipes at once (batch mode)

---

## Responsive Behavior

**Mobile (< 768px)**:
- Single-column layouts throughout
- Sticky category filters scroll horizontally
- Cooking mode: Full-screen takeover
- Collapsible ingredient sidebar becomes bottom sheet

**Tablet (768px - 1024px)**:
- 2-column recipe grid
- Side-by-side ingredients/instructions with comfortable spacing

**Desktop (> 1024px)**:
- 3-column recipe grid in masonry layout
- Cooking mode can show ingredient sidebar persistently
- Hover states and keyboard shortcuts enabled

---

## Accessibility

- High contrast text on all photo overlays
- Keyboard navigation for cooking mode (critical for hands-free use)
- Screen reader labels for all interactive elements
- Focus indicators on all buttons and inputs
- Alt text for all AI-generated images with recipe context