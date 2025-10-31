# Wynwood Walls Audit Dashboard - Design Guidelines

## Design Approach

**Selected Approach**: Design System-Based (Material Design principles)
**Rationale**: This is a data-intensive, utility-focused dashboard requiring clear information hierarchy, consistent patterns, and professional credibility. Material Design provides excellent guidelines for data visualization, card-based layouts, and interactive states while maintaining accessibility and scalability.

**Core Principles**:
- Data clarity and scanability over decorative elements
- Consistent information architecture across all audit sections
- Professional SaaS aesthetics with subtle sophistication befitting a fashion/art brand
- Responsive grid system optimizing for desktop-primary usage (tablets/mobile as secondary)

---

## Typography System

**Font Stack**: 
- **Primary (UI/Body)**: Inter or DM Sans via Google Fonts - modern, highly legible for data-heavy interfaces
- **Display/Headers**: Same family, varied weights for hierarchy
- **Monospace (Data/Metrics)**: JetBrains Mono for numerical data, code snippets, analytics

**Type Scale**:
- **Page Titles**: text-3xl (30px) font-semibold
- **Section Headers**: text-2xl (24px) font-semibold  
- **Subsection Headers**: text-xl (20px) font-medium
- **Card Titles**: text-lg (18px) font-medium
- **Body Text**: text-base (16px) font-normal
- **Captions/Labels**: text-sm (14px) font-normal
- **Metrics/Data**: text-2xl to text-4xl (24-36px) font-bold (monospace)
- **Micro-labels**: text-xs (12px) font-medium uppercase tracking-wide

---

## Layout System

**Spacing Primitives**: Use Tailwind units of **2, 4, 6, 8, 12, 16, 24** for consistent rhythm
- Component padding: p-4, p-6, p-8
- Section spacing: space-y-6, space-y-8
- Card gaps: gap-4, gap-6
- Margins: m-4, m-6, m-8

**Grid Structure**:
- **Sidebar**: Fixed width 280px (w-70), sticky positioning
- **Main Content**: Responsive container with max-w-7xl, px-8 py-6
- **Dashboard Cards**: CSS Grid with grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
- **Data Tables**: Full-width with horizontal scroll on mobile

**Sidebar Navigation**:
- Collapsible section groups with smooth transitions
- Active state: Left border accent (border-l-4), slightly elevated background
- Icons: 20px (w-5 h-5) from Heroicons, aligned left with 12px gap to text
- Nested items: Indented with pl-10, smaller text (text-sm)
- Hover: Subtle background shift, no drastic changes

---

## Component Library

### Dashboard Cards
- Rounded corners: rounded-lg (8px)
- Elevation: shadow-md with subtle border
- Padding: p-6 for standard cards, p-8 for feature cards
- Header: Flex layout with title (left) and action icon/badge (right)
- Content: Organized with consistent spacing (space-y-4)

### KPI Metric Cards
- Large numerical display (text-4xl font-bold monospace)
- Label above metric (text-sm uppercase tracking-wide)
- Trend indicator: Small arrow icon + percentage (text-sm)
- Compact layout: Minimal padding (p-4), focused on data

### Data Visualization Containers
- Aspect ratio: aspect-video or aspect-square depending on chart type
- Padding: p-6 minimum to prevent chart edge cutoff
- Legend: Positioned bottom or right, text-sm
- Tooltips: Floating cards with rounded-md, shadow-lg

### Interactive Lists/Tables
- Alternating row backgrounds for readability
- Hover state: Subtle background transition
- Row height: py-3 minimum for touch targets
- Sticky headers on scroll
- Pagination: Bottom-right, simple previous/next with page numbers

### Section Headers
- Border-bottom separator (border-b) with pb-4 mb-6
- Optional description text (text-base) below title
- Action buttons: Right-aligned (flex justify-between)

### Timeline Components (for recommendations/roadmap)
- Vertical line connecting phases (border-l-2)
- Phase markers: Circular badges (rounded-full w-10 h-10)
- Content cards: Offset from timeline with connecting line
- Spacing between phases: space-y-12

### Navigation Pills/Tabs
- Rounded: rounded-full for pill style
- Padding: px-4 py-2
- Active: Solid background with font-semibold
- Inactive: Transparent with hover state
- Grouped with gap-2 in flex container

### Accordion/Collapsible Sections
- Header: py-3 px-4 with chevron icon (rotate on expand)
- Content: pl-4 pt-2 pb-4 when expanded
- Transition: duration-200 ease-in-out
- Border: Bottom border on each item

### Status Badges
- Rounded: rounded-full or rounded-md
- Padding: px-3 py-1
- Text: text-xs font-medium uppercase tracking-wide
- Icons: Optional leading icon (w-4 h-4)
- Categories: Critical, Warning, Success, Info, Neutral

---

## Screen-Specific Layouts

### Executive Dashboard (Home)
- Hero metrics: 4-column grid of KPI cards at top (grid-cols-4 gap-4)
- Chart row: 2-column split for Traffic/Conversion charts (grid-cols-2 gap-6)
- Recent activity feed: Single column, card-based list
- Quick actions: Floating action buttons bottom-right (fixed positioning)

### Organizational Structure
- Team hierarchy: Tree diagram or nested card layout
- Member cards: Grid layout (grid-cols-3 gap-6) with avatar, name, role, key metrics
- Hover: Expand to show additional details (modal or inline expansion)

### Analysis Sections (Problems, Recommendations)
- Two-column layout: Problem description (left 60%), Impact visualization (right 40%)
- Categorized grouping with color-coded badges
- Expandable details with smooth height transitions

### Marketing Strategy View
- Timeline visualization: Horizontal scrollable weeks with vertical task cards
- Workstream swimlanes: Stacked rows with task bubbles
- KPI dashboard: Metrics grid above timeline

### AI Marketing Showcase
- Before/After comparison: Side-by-side layout (grid-cols-2)
- Workflow diagrams: Flow chart style with connected boxes
- Sample content: Full-width cards with rich media previews

---

## Animations & Interactions

**Minimal Animation Strategy**:
- Navigation: Smooth page transitions (200ms fade + subtle slide)
- Cards: Hover lift (translateY -2px) with shadow increase
- Collapsible sections: Height transition (300ms ease-in-out)
- Data loading: Skeleton screens (pulsing gradient)
- Chart animations: Staggered entry on initial load only
- Tooltips: Fade in/out (150ms)

**No Animations**:
- Avoid distracting scroll-triggered effects
- No parallax or continuous animations
- No decorative motion graphics

---

## Accessibility Considerations

- Focus indicators: 2px offset ring on all interactive elements
- Keyboard navigation: Full support for tab order through sidebar and content
- ARIA labels: Proper labeling for all data visualizations and interactive components
- Color contrast: Ensure all text meets WCAG AA standards (handled in color implementation)
- Skip links: "Skip to main content" for keyboard users
- Screen reader: Descriptive alt text for charts (data tables as fallback)

---

## Images

**Hero Image**: None - this is a data-focused dashboard application where screen real estate prioritizes information density over large imagery.

**Supporting Images**:
- **Team member avatars**: Circular (rounded-full), 48px (w-12 h-12) for cards, 32px (w-8 h-8) for lists
- **Section illustrations** (optional): Small decorative icons (w-16 h-16) for empty states or section headers - use line-art style illustrations from Undraw or similar
- **Chart placeholders**: During loading, use simple geometric patterns
- **AI workflow diagrams**: Custom SVG illustrations showing automation flows (created by engineer, not stock photos)