# Amana Store

> A premium, modern e-commerce storefront template built with Next.js, React, TypeScript, and Tailwind CSS.

[![Next.js](https://img.shields.io/badge/Next.js-16.3.0-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

## Overview

**Amana Store** is a polished e-commerce frontend template designed for modern retail brands that want a clean, trustworthy, and premium shopping experience.

The template includes a responsive navigation system, homepage sections, product browsing, collections, shopping cart, checkout UI, about page, contact page, theme switching, animations, and reusable UI components.

Built with **Next.js, React, TypeScript, and Tailwind CSS**, Amana Store provides a clean foundation that can be rebranded and extended for real-world commerce projects.

> **Important:** This is a frontend template/demo. Product information, customer reviews, contact details, and store data included in the project are sample/demo content and should be replaced before production use.

## Preview / Demo

**Live Demo:** https://amana-store.vercel.app/

## Pages

| Route | Description |
| --- | --- |
| `/` | Homepage with hero, categories, featured products, testimonials, and newsletter |
| `/products` | Product browsing with filtering, sorting, and pagination |
| `/collections` | Collection/category overview |
| `/about` | Store and brand information |
| `/contact` | Contact interface |
| `/cart` | Shopping cart with quantity controls and order summary |
| `/checkout` | Checkout interface and order summary |

## Tech Stack

| Technology | Purpose |
| --- | --- |
| [Next.js](https://nextjs.org/) | React framework and application foundation |
| [React](https://react.dev/) | UI development |
| [TypeScript](https://www.typescriptlang.org/) | Static typing |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://motion.dev/) | Animations and UI interactions |
| [Lucide React](https://lucide.dev/) | Interface icons |
| [next-themes](https://github.com/pacocoursey/next-themes) | Light/dark theme management |
| [shadcn](https://ui.shadcn.com/) | UI component tooling |
| [Base UI](https://base-ui.com/) | UI primitives |
| [class-variance-authority](https://cva.style/) | Component variants |
| [clsx](https://github.com/lukeed/clsx) | Conditional class composition |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | Tailwind class merging |
| [tw-animate-css](https://github.com/Wombosvideo/tw-animate-css) | Tailwind animation utilities |
| [Vercel Analytics](https://vercel.com/analytics) | Production analytics |

## Features

### Storefront

- Premium responsive e-commerce layout
- Modern homepage and hero section
- Featured categories and products
- Product browsing experience
- Collection navigation
- Product filtering and sorting
- Price range filtering
- Rating-based sorting
- Newest-product sorting
- Price low-to-high / high-to-low sorting
- Product ratings and review counts
- Product badges such as **New** and **Bestseller**
- Pagination
- Responsive product cards

### Shopping Experience

- Client-side shopping cart
- Add/remove products
- Quantity controls
- Dynamic cart totals
- Order summary
- Recommended products
- Empty cart state
- Checkout interface
- Responsive cart and checkout layouts

### UI & UX

- Light and dark mode
- Smooth Framer Motion animations
- Fully responsive layouts
- Reusable React components
- Accessible UI primitives
- Modern typography and spacing
- Lucide icon system
- Skip-to-content accessibility support
- Clean component-oriented architecture

## Architecture

```text
Next.js App Router
├── app/
│   ├── about/
│   ├── cart/
│   ├── checkout/
│   ├── collections/
│   ├── contact/
│   ├── products/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── about/
│   ├── cart/
│   ├── checkout/
│   ├── collections/
│   ├── contact/
│   ├── home/
│   ├── motion/
│   ├── shop/
│   └── ui/
│
├── lib/
│   ├── format.ts
│   ├── home-data.ts
│   ├── products-data.ts
│   ├── site-config.ts
│   └── utils.ts
│
└── public/
    ├── icon.svg
    ├── preview.png
    └── application icons
```

## Getting Started

### Prerequisites

Make sure you have a current **Node.js** installation available.

### Installation

Install the project dependencies:

```bash
npm install
```

Or with pnpm:

```bash
pnpm install
```

### Development

Start the development server:

```bash
npm run dev
```

Then open the local URL provided by Next.js.

### Production Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Customization

Amana Store is designed to be easy to rebrand and customize.

### Store Configuration

Edit:

```text
lib/site-config.ts
```

You can update:

- Store name
- Tagline
- Description
- Email
- Phone
- Address
- Main navigation
- Footer navigation

### Product Catalog

Edit:

```text
lib/products-data.ts
```

Product fields include:

- Product name
- Price
- Rating
- Review count
- Category
- Badge
- Display order

### Homepage Content

Edit:

```text
lib/home-data.ts
```

This file contains homepage categories, featured products, and testimonials.

### Styling

Global styles are located at:

```text
app/globals.css
```

Tailwind CSS is used throughout the project for responsive styling and UI customization.

## Data & Backend

Amana Store is a **frontend e-commerce template** using local/static demo data.

The provided project does not include a production backend, database, authentication system, payment gateway, order-management API, or persistent product-management system.

The cart and checkout are frontend foundations that can be connected to a real backend or commerce platform.

For production use, you can integrate:

- Product/database APIs
- Authentication
- Payment processing
- Order management
- Customer accounts
- Inventory management
- CMS or headless commerce platforms

## Deployment

The project is structured for modern Next.js hosting platforms, including Vercel.

Before production deployment:

1. Replace all demo store information.
2. Replace sample products and testimonials.
3. Configure the production domain in `app/layout.tsx`.
4. Connect your real product/backend system if required.
5. Add your preferred payment provider if checkout payments are needed.
6. Review metadata, Open Graph images, and favicon assets.
7. Test the complete responsive experience.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |

## Browser Support

Amana Store is built on a modern **Next.js + React** stack and is intended for modern browsers. Specific browser-version guarantees are not defined by the project.

## License

License information is not currently specified.

If this template is being sold or redistributed, apply the license and usage terms provided with the final marketplace listing.

## Credits

Built with:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- next-themes
- shadcn
- Base UI

---

## Built with Amana Store

**Amana Store** provides a premium, flexible foundation for launching modern e-commerce storefronts with a clean UI, responsive layouts, reusable components, and a smooth shopping experience.

Built with **Next.js, React, TypeScript, and Tailwind CSS**.
