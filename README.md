# re-life-blood-centre

React + Vite + Tailwind CSS v4 website for re-life-blood-centre.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Tailwind

The project uses Tailwind CSS v4 through `@tailwindcss/vite`. The old large CSS layout file has been removed; page/component styling is now written with Tailwind utility classes.

## Products

The home collection intentionally shows the first 5 products. When more products are added to `src/data/products.js`, the **View All Products** button expands the collection to show all products and **Show Less** collapses it back to 5.
