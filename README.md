# Online Shopping - landing page

Responsive e-commerce landing page. React + TypeScript + Vite, plain CSS (no UI framework).

## Setup

```
npm install
npm run dev       # localhost:5173
npm run build     # output in dist/
npm run preview   # serve the build
```

## Structure

- `src/index.css` - CSS variables, reset, shared classes (`.container`, `.btn`, `.section`, slider buttons)
- `src/App.tsx` - page layout
- `src/data/products.json` - product list for the Featured Products cards
- `src/components/` - one component per section, each with its own .css file
  - `Header` - sticky header, hamburger menu, search, cart/wishlist/account icons
  - `Hero` - 4 slide banner with arrows, dots and autoplay
  - `Carousel` - scroll-snap slider shared by Categories and Offers
  - `Categories`, `Products`, `Offers`
  - `NewsletterForm` - email input with validation, used in the footer
  - `Footer` - newsletter strip, link columns, contact, social
  - `Icons` - inline svg icons

Breakpoints are mobile first: 40em, 48em and 64em.

## Notes on the assignment

**Header**
- hamburger toggles the nav on mobile (`aria-expanded`, Esc closes it)
- search bar wraps to a full width row under the logo on small screens, account icon is hidden there
- logo text and icon scale with `clamp()`

**Footer**
- newsletter strip, 3 link columns, contact and social icons all collapse to one column on phones
- email field checks the format on submit and shows an inline error (`aria-invalid` + `role="alert"`)

**Sections** - Hero, Top Categories, Featured Products, Offers

**Product cards** - loaded from `products.json` via a dynamic import with a short delay and a skeleton state, so it behaves like a fetch

**Other**
- semantic tags: header / nav / main / section / article / footer / address / figure
- heading order h1 (hero) > h2 (sections) > h3 (product names)
- flexbox + grid everywhere, no fixed widths or heights on layout
- images use `max-width: 100%` / `object-fit: cover` with `aspect-ratio` instead of fixed heights
- all buttons, links and inputs are at least 44px tall
- rem / em / clamp for sizes, 1px only for borders
- `loading="lazy"` on everything below the fold, hero image 1 is `fetchpriority="high"`
- alt text on every image, visible focus ring, reduced-motion respected for the hero and skeleton
- vite minifies css/js in the build

Images are from Unsplash.
