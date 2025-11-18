# VO2 Max Physiotherapy Landing Experience

## Overview

- **Project type**: Single-page marketing site
- **Audience**: Prospective physiotherapy and sports-rehab clients in Mysuru, India
- **Primary goals**:
  - Establish credibility for Dr. Pinakin Ayare
  - Highlight core services and patient testimonials
  - Funnel visitors toward WhatsApp booking and phone outreach

## Key Features Implemented

1. **Signature Hero Moment**
   - Sticky navigation with responsive mobile sheet
   - Framer Motion scroll reveals and animated testimonial cards
   - Premium hero composition blending bold typography with photo focal point
2. **Service Showcase**
   - Icon-driven service grid articulating 11 therapeutic offerings
   - Dark elevated panel with shadow and lighting accents for depth
3. **Gallery Rail**
   - Horizontal scroll gallery with mouse-wheel interception for smooth browsing
   - Placeholder tiles ready for real facility imagery
4. **Lead Capture**
   - WhatsApp-integrated appointment form that pre-fills patient details
   - Secondary action buttons for direct call and email outreach
5. **Footer Hub**
   - Social proof links (Instagram, Facebook, LinkedIn, Hexa Health)
   - Persistent booking CTA and location shortcut

## Visual System

- **Palette**: Deep navy (#0B1626), electric blue (#1F7DD6), powder blue accents, warm white background
- **Typeface**: Manrope (Google Fonts) with controlled tracking for premium hierarchy
- **Spacing & Grid**: 12-column responsive grid, 8px spacing rhythm, pill-shaped containers (#2.5rem radius)
- **Textures**: Soft gradients, blurred light orbs, and lifted cards for refined depth

## Interaction Specs

- Menu toggle: icon swap with aria labels, closes on link activation
- Gallery strip: horizontal wheel scroll with smooth behavior and hidden scrollbar styling
- Testimonials: fade + rise animation triggered on viewport entry
- Booking form: validates name and 10-digit phone, opens WhatsApp with encoded message

## Assets & Placeholders

- `src/assets/vo2max-logo.png`: Temporary brand mark (replace when official vector is available)
- `src/assets/doctor-photo.jpg`: Professional physiotherapist portrait placeholder (swap with Dr. Pinakin’s photo)
- Gallery stills currently text tiles—replace with clinic photography when ready

## Tailwind Tokens

Defined in `tailwind.config.js`:

| Token            | Value      | Usage                                  |
|------------------|------------|-----------------------------------------|
| `vo-white`       | `#f9fafb`  | Page background                         |
| `vo-black`       | `#0b1626`  | Primary text                            |
| `vo-black-soft`  | `#111c2b`  | Dark sections                           |
| `vo-blue`        | `#1f7dd6`  | CTAs, icons                             |
| `vo-blue-soft`   | `#d3ebff`  | Accents, glow backdrops                 |
| `vo-muted`       | `#6b7a90`  | Supporting copy                         |
| `vo-border`      | `#d8dee8`  | Hairline borders and outlines           |
| `shadow-card`    | Soft blue  | Elevated cards and modals               |

## Next Steps

1. Swap placeholder imagery with official logo, hero photo, and gallery shots
2. Update copy with verified business hours, location details, and success metrics
3. Optionally integrate backend form submission if email logging is required

## Maintenance Notes

- Tailwind and global typography fingerprints live in `tailwind.config.js` and `src/index.css`
- Hero gradients and shadows rely on new tokens—keep values in sync if color tweaks are requested
- WhatsApp links use `wa.me` with encoded message strings; adjust numbers or copy directly within `App.tsx`
- Testimonial array and service list are plain constants for quick content updates
