# Headphones — ALX Frontend Project (HTML / CSS / JS)

---

## Project overview

This is a pixel-perfect landing page implemented from scratch using **HTML, CSS and JavaScript** following the ALX Frontend requirements.

The goal is to reproduce the designer file exactly (desktop → tablet → mobile) while using good structure, accessibility and responsive best-practices implementing the following pieces:

* **Header + Hero** (top area with hero image, branding, CTA)
* **What we do…** (icon features row using the provided custom icon font)
* **Our results** (pentagon statistic shapes — drawn in CSS, no images)
* **Contact form** (accessible form with minimal validation)
* **Footer**
* **Mobile hamburger** (screens ≤ 480px — toggle menu via JS)
* **Animations** for the rows (hover or continuous)
* Use provided fonts: `Source Sans Pro` and `Spin-Cycle-OT`
* Use provided icon pack for custom icons

---

## Files structure

```
headphones-project/
├─ index.html                # main page (desktop-first)
├─ styles/
│  ├─ reset.css
│  ├─ variables.css
│  ├─ styles.css             # main stylesheet (max-width: 1000px centered)
│  └─ components.css        
├─ js/
│  └─ main.js                # hamburger toggle + simple form behavior
├─ fonts/
│  ├─ SourceSansPro/         # Source Sans Pro files
│  └─ Spin-Cycle-OT/         # Spin Cycle files
├─ icons/
│  └─ holberton_school-icon/ # icon font files + demo
├─ assets/
│  └─ 01_headphones_desktop@2x.png   # designer hero asset
└─ README.md
```
---

## Key implementation details

### HTML

* Semantic markup: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
* Keep markup simple and composable — small reusable sections and components.
* The contact form uses `<label>` properly associated with inputs via `for`/`id`.
* Accessible skip link (e.g. `<a class="skip-link" href="#main">Skip to main content</a>`).

### CSS

* **Reset** styles at top (`reset.css`) to avoid browser inconsistencies.
* Use CSS **variables** for colors, spacing and breakpoints (e.g. `--primary`, `--accent`, `--max-width`).
* Keep selectors generic and avoid over-specific chains.
* **Max content width** set to `1000px`, centered using margin auto.
* **Responsive breakpoint** for the mobile layout: when `max-width: 480px` the layout switches to the mobile version.
* **Hover/active color** for links: `#FF6565`.
* **Button hover/active**: `opacity: 0.9`.
* Draw pentagons using CSS only (no images). Example approach:

  * Use `clip-path` or CSS transforms with pseudo-elements to construct a pentagon shape
  * Or use a rotated square + pseudo elements to create the five-sided shape
* Animations:

  * Add subtle `transform: scale()` and `opacity` transitions on the “What we do…” icons and pentagon cards
  * Can run continuously (keyframes) or trigger on `:hover`.
* Use `@font-face` to load `Source Sans Pro` and `Spin-Cycle-OT`.

### Icons

* Include the provided icon font (holberton_school-icon). Use the demo to map icon classes to glyphs.
* Keep icon markup semantic — `<i class="hs-icon hs-soundwave" aria-hidden="true"></i>` with an accessible label in text.

### JavaScript

* A **small JS** file that:

  * Toggles the navigation on small screens (hamburger button).
  * Adds `aria-expanded` toggling for accessibility.
  * Optionally adds simple client-side form validation (e.g. email required pattern).
* Keep JS minimal and non-blocking — include at the end of `<body>` or use `defer`.

---

## How to run (locally)

1. Clone or copy the project folder.
2. Ensure fonts and the icon pack are in `fonts/` and `icons/`.
3. Open `index.html` in your browser.
4. For a better dev experience, run a static server (optional):

   * `npx http-server` or `live-server .`
5. Resize your browser to confirm breakpoints:

   * Desktop layout: wide screens
   * Mobile layout: `max-width: 480px` — hamburger nav visible and toggles menu

---

## Accessibility (a11y) notes

* Use landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`).
* `aria-label` and `aria-expanded` on the hamburger button for screen readers.
* All interactive controls are reachable via keyboard (`:focus` visible).
* Provide `alt` text for images or use decorative role if purely decorative.
* Form controls include labels; error messages are associated via `aria-describedby`.
* Ensure color contrast meets WCAG AA for body text.

---

## ALX submission checklist

* [ ] Page matches the designer mockup visually (desktop).
* [ ] Mobile version works at `≤ 480px` and hamburger toggles menu.
* [ ] Pentagons in “Our results” are drawn using **only CSS** (no PNG/SVG images).
* [ ] Icon font used for "What we do..." (holberton icon pack).
* [ ] Reset, variables, and modular CSS used.
* [ ] Animations added for the rows (hover/continuous).
* [ ] Contact form present and usable.
* [ ] Fonts included (`Source Sans Pro`, `Spin-Cycle-OT`).
* [ ] All code well-structured and commented where necessary.

---

## Tips & common pitfalls

* **Rounding floats**: the designer contains fractional values — rounding is allowed.
* **Avoid deeply nested selectors** — prefer small utility classes and BEM-like naming.
* **Keep `max-width` at 1000px** and center content to match the spec.
* For the pentagon shapes: test both `clip-path` (better browser support nowadays) and multi-element constructions. `clip-path: polygon(...)` is the simplest if allowed by the project rules.
* Don’t forget `box-sizing: border-box;` in your reset — it makes sizing predictable.
* Use `transform` and `opacity` for smooth animation (avoid animating `width/height`).

---

## Credits & assets

* Figma / Designer file: provided by ALX/Project brief.
* Fonts:

  * `Source Sans Pro` — include in `fonts/` or via local `@font-face`.
  * `Spin-Cycle-OT` — used for logo/headline accents.
* Icon font: `holberton_school-icon.zip`.
* Hero image (local): `/mnt/data/01_headphones_desktop@2x.png`

---

## Example meta (small code snippets)

**Hamburger toggle (vanilla JS)**

```js
// js/main.js (defer)
const btn = document.querySelector('.hamburger');
const nav = document.querySelector('.main-nav');

btn.addEventListener('click', () => {
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('nav-open');
});
```

**CSS variable sample**

```css
:root{
  --accent: #FF6565;
  --bg-dark: #071827;
  --max-width: 1000px;
  --transition: 0.25s ease;
}
```

**Simple pentagon (clip-path example)**

```css
.pentagon {
  width: 140px;
  height: 120px;
  background: var(--accent);
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  display:flex;
  align-items:center;
  justify-content:center;
}
```

---

## License

```
MIT License — project created for ALX Frontend Bootcamp.
```