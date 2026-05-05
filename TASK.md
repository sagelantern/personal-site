# Task: Implement V2 Design System + Content Updates

Read DESIGN-CONSULTATION-V2.md for the full design system. This task implements the brand, design tokens, typography, and content changes described there.

## CRITICAL TONE NOTE
The content should be **matter of fact, not cliche**. No inspirational poster language. No "I believe in the power of..." or "My journey has taught me..." Write like a real person would write about themselves -- direct, honest, slightly dry. If a sentence sounds like it could be on a motivational Instagram account, delete it.

## Phase 1: Design Tokens

### Colors (tailwind.config.mjs)
Replace the current color palette with:
```
paper: '#F4EEE3',
linen: '#E7D9C7',
sandstone: '#C9B59D',
'monsoon-ink': '#1F2A2A',
'river-slate': '#4B5B5A',
'temple-teal': '#2F6B68',
terracotta: '#A95F3D',
'brass-leaf': '#8B7A42',
'sage-thread': '#899486',
marigold: '#E07B1A',
```

Keep `ivory`, `midnight`, `teal`, `sage` as aliases if needed for backward compat, or just replace all references.

### Typography
Update Google Fonts to load: Fraunces (400, 400i, 700), Newsreader (400, 400i), Instrument Sans (400, 500)

Update tailwind fontFamily:
```
sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
serif: ['"Newsreader"', 'Georgia', 'serif'],
display: ['"Fraunces"', 'Georgia', 'serif'],
```

### Background
Change body background from `bg-ivory` to use `paper` color. Update text color from `text-midnight` to `text-monsoon-ink` (or use CSS custom properties).

## Phase 2: Layout Updates

### BaseLayout.astro
- Update background and text colors to new palette
- Update nav link colors to river-slate
- Update footer to use new palette
- Keep the max-width and basic structure

### global.css
- Update `.section-heading` to use new colors (temple-teal or river-slate for text, marigold or sandstone for the left border)
- Update `.link` to use temple-teal
- Update `.prose` styles for new palette
- Increase body line-height slightly

## Phase 3: Homepage Redesign (index.astro)

Replace the current homepage with this structure:

### 1. Hero
Name in Fraunces display. Below it, a short matter-of-fact paragraph (NOT a tagline). Something like:

"I'm a founder and investor in New York. Indian-born, Wharton-educated, two startups and a decade in tech. Right now most of my time goes to meditation, family, and writing. I run Kindred and invest through Pioneer Fund, but those take up about two days a week. The rest is practice."

Keep it factual. No poetry.

### 2. Right Now aside
A small offset block with a marigold left border, Fraunces italic, smaller text:
```
Right now —
Reading Red Rising (Pierce Brown)
Training for nothing in particular, 15 miles a week
Second kid arriving August
Building an AI mindfulness tool nobody asked for
```

### 3. Work section
- Kindred — AI performance management (CEO)
- Pioneer Fund — early-stage VC (Senior VP)
- Stay Nivas — hotel reviews through feeling, not amenities
- CovAID India — pandemic charity assessment, 2020-21 (with brother Aryan)

### 4. Writing section
Link to /writing with a one-line description: "Essays from 2015 to now. Mostly about meaning, imperfection, and India."

### 5. Family section
Link to /family. One line: "Annual family letters."

### 6. Around the web
LinkedIn, Twitter links (same as current)

## Phase 4: About Page (/about)

Create a NEW about page at `src/pages/about.astro`. Remove the redirect from `/about` to `/` in astro.config.mjs.

### Opener (Contradiction Architecture)
Large Fraunces 700, stacked lines:
```
Aries who chose Vipassana.
YC founder who sits for an hour every morning.
Type 7 learning to stay in one place.
```

No explanation of these lines. They just sit there.

### Then the actual bio
Write in first person, matter of fact. Cover:
- Born in India, moved to NYC as a kid, back to Mumbai for middle/high school, then Penn for undergrad
- Started two companies. First one he left. Second one (Kindred) is winding down to one day a week.
- Senior VP at Pioneer Fund
- Meditation practice: Vipassana foundation, daily 1-hour sits, exploring jhana
- Family: wife Shivantika, son Sohum, second kid on the way
- Shivantika wrote "Bombay || New York" -- include this naturally
- The transition: less interested in performing ambition, more interested in being present
- Still a builder. Still gets excited about new things. Just more honest about which things matter.
- Forbes contributor, work in WSJ and NYT (mention once, don't dwell)

Keep it to ~400 words. No fluff.

### Footer of about page
A quiet line: "If you want to get in touch, LinkedIn works."

## Phase 5: Update nav

In BaseLayout.astro, add simple top-right or top navigation for: Writing, About, Family. Keep it minimal -- just text links.

## Implementation Notes
- Use Astro components, keep it all static
- Mobile-friendly -- test that font sizes and spacing work on small screens
- The marigold color should appear sparingly: left border on "right now" block, maybe one accent on the about page, hover states. NOT everywhere.
- Keep the overall feel warm and editorial, not startup-y
- When in doubt, less decoration, more whitespace
