# Component Documentation

## Overview
All components are built with React 19, TypeScript, and Framer Motion for smooth animations.

---

## Header.tsx

**Purpose**: Sticky navigation bar with dropdown menu

**Features**:
- Sticky positioning (top: 0, z-50)
- Logo with gradient styling
- Services dropdown (3 items)
- Portfolio link
- "Request a Quote" CTA button
- Mobile hamburger menu with slide-out navigation

**Key Code**:
```tsx
<header className="sticky top-0 z-50 bg-white dark:bg-black border-b">
  // Navigation content
</header>
```

**Responsive**:
- Desktop: Full horizontal navigation
- Mobile: Hamburger menu that expands vertically

---

## Hero.tsx

**Purpose**: Welcome section with 3D animation and CTAs

**Features**:
- Animated headline with gradient text
- Custom SVG 3D circuit board animation
- Animated nodes that pulse
- Two CTA buttons with hover effects
- Split layout (text left, animation right)

**Animation Details**:
- Circuit paths animate with pathLength
- Nodes pulse with changing radius
- Staggered animations with delays

**SVG Features**:
- Blue → Purple → Pink gradient
- 6 circuit nodes pulsing
- Center node with fastest pulse
- Connected paths representing circuits

---

## TechHub.tsx

**Purpose**: Service showcase using Bento Grid layout

**Features**:
- 4 cards in asymmetric layout
- Cards 1, 2: Regular size
- Card 3: Large (spans 2 columns, 2 rows)
- Card 4: Regular size

**Cards**:
1. **Mobile & Laptop Repairs** (blue gradient)
   - Icon: Smartphone
   - CTA: Book Now

2. **Software & IT Support** (purple gradient)
   - Icon: Settings
   - CTA: Learn More

3. **Mobile App & Web Development** (pink gradient - LARGE)
   - Icon: Code2
   - Feature list with bullet points
   - CTA: View Portfolio

4. **WhatsApp Quick Link** (green gradient)
   - Icon: MessageCircle
   - Direct WhatsApp link
   - Phone number: 066 277 4937

**Layout**:
```css
grid-cols-1 md:grid-cols-2 lg:grid-cols-4
Card 1: lg:row-span-2 (takes 2 rows)
Card 3: md:col-span-2 lg:col-span-2 lg:row-span-2
```

---

## Portfolio.tsx

**Purpose**: Showcase projects with filtering

**Features**:
- Three filter buttons: All, Hardware Rescues, Software Launches
- 6 sample projects (3 hardware, 3 software)
- Before/After card design
- Smooth filter transitions with AnimatePresence
- Project cards with category badges

**Project Structure**:
```tsx
{
  id: number,
  category: 'hardware' | 'software',
  title: string,
  before: string,
  after: string
}
```

**Animation**:
- Items animate in/out with opacity and scale
- Filter transition is smooth
- Hover effects on cards

**Card Design**:
- Top section: Gradient background with "Before" text
- Divider: Colored line
- Bottom section: Project title and "After" result
- Category badge at bottom

---

## Process.tsx

**Purpose**: Visualize the 3-step customer journey

**Features**:
- Three step cards: Consult, Execute, Support
- Animated connecting line (SVG path)
- Numbered circles with gradients
- Icons that float up/down
- Arrow indicators between steps
- Mobile-friendly layout

**Steps**:
1. **Consult** (Blue) - "We listen to your needs"
2. **Execute** (Purple) - "Our experts deliver solutions"
3. **Support** (Pink) - "We stand by our work"

**Animations**:
- Icons bounce up/down continuously
- Numbers pulse when hovered
- Connecting line animates on scroll
- Staggered card entrance animations

---

## About.tsx

**Purpose**: Tell company story and showcase values

**Features**:
- Two-column "Who We Are" section
- Three-feature cards: Hardware Expertise, Software Innovation, Reliability First
- Checkmark list of team qualities
- "Total Tech Care" callout box
- Large CTA banner at bottom

**Content Sections**:
1. Headline: "The Guardians of Your Digital World"
2. Introduction paragraph
3. Who We Are + Why Choose Us features
4. "Total Tech Care" principle box
5. CTA banner: "Get Started Today"

**Animations**:
- Sections slide in on scroll
- Feature cards stagger entrance
- Icon animations on scroll
- Scale animations on CTA hover

---

## Footer.tsx

**Purpose**: Contact form and footer information

**Features**:
- Contact form (Name, Email, Message)
- Success message after submission
- Contact information with icons
- Social media links (Facebook, Twitter, LinkedIn)
- Phone, Email, WhatsApp, Location details
- Copyright year (auto-updates)

**Form Handling**:
```tsx
const [formData, setFormData] = useState({
  name: '', email: '', message: ''
});
const [submitted, setSubmitted] = useState(false);
```

**Contact Icons**:
- Phone (blue)
- Mail (blue)
- MessageCircle (green)
- MapPin (purple)
- Social: Facebook, Twitter, LinkedIn (gray → blue on hover)

**WhatsApp Integration**:
- Direct link: `https://wa.me/27662774937`
- Opens WhatsApp with prefilled number

---

## Styling Patterns

### Gradients Used
- **Blue → Purple**: Primary actions
- **Purple → Pink**: Secondary/Feature highlights
- **Text Gradients**: Headings with bg-clip-text

### Colors
- Primary: Blue-600
- Secondary: Purple-600
- Accent: Pink-600
- Success: Green-500
- Neutral: Gray scales

### Responsive Classes
- `hidden md:block` - Show on desktop only
- `md:grid-cols-2` - 2 columns on tablet
- `lg:grid-cols-4` - 4 columns on desktop
- `w-full md:w-auto` - Full width on mobile

### Animation Patterns
- `initial={{ opacity: 0, y: 20 }}`
- `animate={{ opacity: 1, y: 0 }}`
- `transition={{ duration: 0.6, delay: index * 0.1 }}`
- `whileHover={{ scale: 1.05 }}`
- `whileTap={{ scale: 0.95 }}`

---

## Dark Mode Support

All components use Tailwind's dark mode classes:
```tsx
className="bg-white dark:bg-black text-gray-900 dark:text-white"
```

Automatically respects system preferences:
```css
@media (prefers-color-scheme: dark) { ... }
```

---

## Performance Optimizations

1. **Code Splitting**: Each component in separate file
2. **Image Optimization**: Next.js Image component ready
3. **Lazy Loading**: Components animate in on scroll with whileInView
4. **Client Components**: Only marked with 'use client' where needed
5. **No Unused Dependencies**: Tree-shakeable imports

---

## Accessibility Features

- Semantic HTML (header, nav, section, footer)
- Color contrast ratios meet WCAG standards
- Proper heading hierarchy (h1, h2, h3)
- Form labels and validation
- Keyboard navigation support
- ARIA labels where needed

---

## Customization Guide

### Change Colors
Edit gradient classes in component className attributes:
```tsx
// Before
from-blue-600 to-purple-600

// After
from-red-600 to-orange-600
```

### Add More Projects
Edit Portfolio.tsx array:
```tsx
const projects = [
  // Add new item here
  {
    id: 7,
    category: 'hardware',
    title: 'Your Project',
    before: 'Before state',
    after: 'After result',
  }
]
```

### Update Contact Info
Edit Footer.tsx:
```tsx
href="mailto:youremail@example.com"
href="https://wa.me/YOUR_PHONE"
```

### Change Phone Number
Update in:
- Header.tsx (Services dropdown)
- TechHub.tsx (WhatsApp Card 4)
- Footer.tsx (Contact section)

---

## Dependencies

- **framer-motion**: Smooth animations and transitions
- **lucide-react**: 40+ icons used throughout
- **tailwindcss**: Utility-first CSS framework
- **next.js**: React framework with SSR/SSG

---

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari, Chrome Mobile

---

## File Sizes

Approximate component sizes:
- Header.tsx: 4.2 KB
- Hero.tsx: 3.8 KB
- TechHub.tsx: 5.1 KB
- Portfolio.tsx: 4.9 KB
- Process.tsx: 5.3 KB
- About.tsx: 4.7 KB
- Footer.tsx: 5.2 KB

Total: ~33 KB of component code (before gzip compression)
