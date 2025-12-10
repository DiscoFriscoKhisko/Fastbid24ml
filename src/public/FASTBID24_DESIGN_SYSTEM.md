# FastBid24 Design System

## 1. Logo & Brand Identity

### Logo Mark
The FastBid24 logo represents the "Division 8" focus (Doors, Frames, Hardware) through a technical, architectural lens.

- **Icon:** `DoorOpen` (Lucide React)
- **Container:** 32x32px Square
- **Color:** Blueprint Blue (#3b82f6) background with Stone 950 (#0c0a09) icon.
- **Styling:**
  - Technical corner accents (Top-Left and Bottom-Right) in Stone 950.
  - Sharp, industrial edges (no border radius).

### Wordmark
- **Primary Text:** "FASTBID24"
  - Font: Playfair Display (Serif)
  - Weight: Bold (700)
  - Tracking: Tight
  - Color: White (#ffffff) / Stone 100 (#f5f5f4)
- **Tagline:** "DIV.08 EXPERTS"
  - Font: JetBrains Mono (Monospace)
  - Weight: Normal (400)
  - Tracking: Widest (0.1em)
  - Color: Stone 500 (#78716c)

---

## 2. Color Palette

### Primary Brand Colors
| Name | Hex | Tailwind | Usage |
|------|-----|----------|-------|
| **Blueprint Blue** | `#3b82f6` | `blue-500` | Primary brand accent, text highlights, technical lines, borders. |
| **Blueprint Dark** | `#2563eb` | `blue-600` | **Primary Buttons** (Background). ensuring WCAG AA compliance with white text. |

### Neutral / Surface Colors (Warm Stone)
| Name | Hex | Tailwind | Usage |
|------|-----|----------|-------|
| **Void** | `#0c0a09` | `stone-950` | Main application background. |
| **Surface High** | `#1c1917` | `stone-900` | Cards, panels, secondary backgrounds. |
| **Surface Mid** | `#292524` | `stone-800` | Borders, dividers, inputs. |
| **Surface Low** | `#44403c` | `stone-700` | Technical borders, scrollbars. |

### Typography Colors
| Name | Hex | Tailwind | Usage |
|------|-----|----------|-------|
| **Text Primary** | `#f5f5f4` | `stone-100` | Main headings, primary body text. |
| **Text Secondary** | `#d6d3d1` | `stone-300` | Secondary information, descriptions. |
| **Text Muted** | `#78716c` | `stone-500` | Meta data, labels, inactive states. |

---

## 3. Typography

### Headings (Serif)
Used for high-impact titles to evoke a sense of heritage and architectural solidity.
- **Font Family:** `Playfair Display`, serif
- **Weights:** Regular (400), Medium (500), Bold (700)

### Body Copy (Sans)
Highly legible, modern geometric sans-serif for UI elements and long-form reading.
- **Font Family:** `Inter`, sans-serif
- **Weights:** Light (300), Regular (400), Bold (700)

### Technical Data (Mono)
Used for specs, numbers, codes, and "blueprint" aesthetic details.
- **Font Family:** `JetBrains Mono`, monospace
- **Weights:** Regular (400)

---

## 4. UI Elements

### Buttons
- **Primary:** `bg-blueprint-dark` (#2563eb) text-white. Sharp corners or slight radius (standardized).
- **Secondary:** Transparent background, `border-stone-600` text-stone-300.

### Technical Borders
Custom CSS class `.technical-border` adds corner "L" brackets in Blueprint Blue to evoke CAD drawings.

```css
.technical-border {
    border: 1px solid #44403c;
    position: relative;
}
/* Corner Accents */
.technical-border::after {
    /* Top Left Corner */
    border-top: 2px solid #3b82f6;
    border-left: 2px solid #3b82f6;
}
```
