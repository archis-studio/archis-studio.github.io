# Categories Page - Design Versions

## 🎨 Two Design Options Available

### Version 1: Magazine Grid (Classic)
**File**: `categories-v1.md`
- Clean, professional magazine layout
- 2x4 grid cards
- Elegant hover effects
- Subtle animations
- **Style**: Fashion Editorial meets Autumn Noir

### Version 2: Cyberpunk Futuristic (Current) ⭐
**File**: `categories.md` (active)
- Sci-Fi holographic command center
- Neon glow effects
- Glitch text animations
- 3D card transforms
- Animated cyber background
- **Style**: Cyberpunk 2077 + Tron + Blade Runner

## 🔄 Switch Between Versions

To switch back to Magazine Grid style:
```bash
mv _pages/categories.md _pages/categories-futuristic.md
mv _pages/categories-v1.md _pages/categories.md

mv _sass/custom/_categories.scss _sass/custom/_categories-futuristic.scss
mv _sass/custom/_categories-v1.scss _sass/custom/_categories.scss
```

## 🎯 Current Active Design

**Cyberpunk Futuristic Theme** is currently active at `/categories/`

### Key Features:
- ✨ Glitch text effect on "CATEGORY_NEXUS" title
- 🌐 Animated grid background with particles
- 💫 Scanning line effect
- 🎴 Hexagonal-inspired cards
- 🔮 Holographic glow on hover
- 🎯 Signal pulse indicators
- 📊 Live stats display (ENTRIES / STATUS)
- 🚀 3D transform on hover
- ⚡ Neon border effects
- 🎨 8 color-coded categories

### Animations:
1. **Grid Movement** - Background grid slides infinitely
2. **Particle Float** - Colored particles drift across screen
3. **Scan Line** - Vertical scanning effect
4. **Glitch Text** - Random RGB split on title
5. **Card Entrance** - Staggered fade-in from bottom
6. **Hover Transform** - Card lifts and rotates
7. **Icon Spin** - 360° rotation on hover
8. **Signal Pulse** - Concentric rings animation
9. **Corner Glow** - Pulsing corner decorations
10. **Button Shift** - Arrow slides on hover

## 📱 Responsive Design

Both versions are fully responsive:
- **Desktop**: Full grid layout with all effects
- **Tablet**: Adjusted spacing and sizing
- **Mobile**: Single column, optimized animations

## 🎨 Color Palette

### Cyberpunk Theme Colors:
- Background: `#0a0a0f` (Deep space black)
- Surface: `#12121a` (Dark panels)
- Text: `#e0e0ff` (Cool white)
- Glow: `rgba(0, 200, 255, 0.5)` (Cyber blue)

### Category Colors (Same for both):
- AI Tools: Gold `#D4A017`
- Software Dev: Cyan `#00B4D8`
- Data Science: Blue `#5D8AA8`
- Marketing: Purple `#9370DB`
- Quant Trading: Orange `#FF9800`
- Reading: Brown `#8B7355`
- Green Energy: Green `#2E7D32`
- Growth: Coral `#FF6F61`

## 🚀 Visit the Page

Open in browser: http://localhost:4001/categories/

---

**Maintained by**: Archi Chen & AI Copilot
**Last Updated**: 2025-10-26
**Active Version**: Cyberpunk Futuristic v2
