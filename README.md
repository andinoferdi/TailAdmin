# TailAdmin

![TailAdmin Banner](./banner.png)

TailAdmin is a Next.js 16, React 19, and Tailwind CSS 4 dashboard template. The focus of this refactor is to keep reusable pieces inside `src/components`, move page-specific UI into `src/blocks`, remove every SVG dependency, and rely on `@tabler/icons-react` for icons.

## Key Features

- **Clean structure**  
  - `src/components` holds reusable UI only.  
  - `src/blocks` contains page-scoped compositions such as login or dashboard sections.  
- **Modern UI stack**  
  - Tailwind CSS 4 with a curated `globals.css`.  
  - Tabler Icons components replace static SVG imports.  
- **Auth experience**  
  - Login and register share a single page with a simple toggle button.  
  - Password visibility uses Tabler eye icons with consistent styling.

## Directory Layout

```
src/
  app/
    login/
    dashboard/
  blocks/
    login/
    dashboard/
  components/
    common/
    form/
    ui/
  icons/
public/
  images/ (only non-SVG assets such as PNG/JPG remain)
```

## Requirements

- Node.js 20 or newer
- pnpm / npm / yarn (examples below use `npm`)

## Getting Started

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:3000`.

## Available Scripts

- `npm run build` – production build  
- `npm run start` – serve the build output  
- `npm run lint` – run ESLint with the Next.js config

## Implementation Notes

- All SVG imports were removed and replaced with React icon components.  
- The icon wrapper lives in `src/icons/index.tsx`, exposing Tabler icons with sane defaults (`stroke`, `className`, etc.).  
- Legacy SVG assets inside `public/images` can be deleted safely because they are no longer referenced.  
- Password toggles in auth forms now use outlined Tabler icons to match the overall design.

## License

This project follows the open-source TailAdmin license. Confirm the terms before any commercial use.
