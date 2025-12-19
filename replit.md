# WebAI Automations

## Overview

WebAI Automations is a premium B2B AI automation agency landing page. The site showcases enterprise automation solutions with a dark, minimal design aesthetic featuring cyan (#00D9FF) as the primary accent color with 3D motion effects and modern typography.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **React 18 with TypeScript** - Component-based SPA architecture
- **Vite** - Build tool and dev server (port 5000)
- **React Router DOM** - Client-side routing

### Styling Approach
- **Tailwind CSS** - Utility-first styling with custom configuration
- **Custom color palette**:
  - Background: #0F0F0F (near-black)
  - Text primary: #FFFFFF
  - Text secondary: #CCCCCC
  - Text tertiary: #999999
  - Accent primary: #00D9FF (cyan)
  - Accent secondary: #0088FF (electric blue)
  - Accent tertiary: #7C3AED (purple for gradients)
  - Borders: #1A1A2E
- **Custom animations** - Float, glow, and scroll keyframe animations

### Component Structure
```
src/
├── components/
│   ├── Header.tsx          # Sticky navigation (70px height)
│   ├── Hero.tsx            # Full-screen hero with 3D orb
│   ├── TrustMetrics.tsx    # 3 KPI cards with cyan borders
│   ├── CoreServices.tsx    # 3 feature cards with 3D tilt
│   ├── HowItWorks.tsx      # 4-step horizontal flow
│   ├── FeaturedProjects.tsx # 3 case study cards
│   ├── ClientLogos.tsx     # Client trust logos
│   ├── Testimonials.tsx    # 4 testimonial cards with stars
│   ├── CTASections.tsx     # Final CTA section
│   └── Footer.tsx          # Full footer with links
├── pages/
│   ├── HomePage.tsx
│   ├── ContentAutomationPage.tsx
│   ├── OmnichannelOutreachPage.tsx
│   ├── HRAutomationsPage.tsx
│   └── CaseStudiesPage.tsx
├── App.tsx
├── index.css
└── main.tsx
```

### Routing Structure
```
/ → HomePage
/content-automation → ContentAutomationPage
/omnichannel-outreach → OmnichannelOutreachPage
/hr-automations → HRAutomationsPage
/case-studies → CaseStudiesPage
```

### Section IDs for Navigation
- #platform → TrustMetrics section
- #solutions → CoreServices section
- #customers → FeaturedProjects section
- #resources → Testimonials section
- #company → CTASections (Final CTA)

### Design Patterns
- Sticky header with 70px height, transparent on top, backdrop blur on scroll
- Hero section: two-column layout with 3D animated orb
- Cards with subtle 3D transforms on hover
- Cyan accent used for CTAs, highlights, and key elements
- Modern sans-serif typography (Inter font family)

## External Dependencies

### Third-Party Services
- **Cal.com** - Booking/scheduling integration via embed script
- All CTAs link to `cal.com/anabless-dela-cruz-knutxw/consultation`

### Icon Library
- **Lucide React** - Icon components used throughout the UI

### Build Configuration
- ESLint with TypeScript and React plugins
- PostCSS with Autoprefixer
- Vite configured for port 5000 with allowedHosts enabled
- Static deployment configured (dist folder)

## Recent Changes
- December 2024: Major redesign implementing premium B2B AI style
  - New dark color palette with cyan accents
  - 3D animated hero orb
  - Trust metrics section with KPI cards
  - Updated all section designs with modern aesthetic
  - Fixed navigation anchors to match section IDs
