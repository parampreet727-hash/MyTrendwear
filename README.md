# TrendWear

An e-commerce storefront built with React, Vite, React Router, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Project Structure

```
src/
├── assets/                 Static images bundled by Vite
├── components/
│   ├── common/              Shared across all pages (Navbar, Footer, SearchBar, NotFound)
│   ├── home/                Homepage-only sections (Hero, Categories, Sale Banner,
│   │                        Why Choose Us, Reviews, Slider)
│   └── products/            Reusable product-grid component (ProductCollection)
├── context/                 Cart state (CartContext, cartContextObject, useCart hook)
├── data/                    Static product/category data
├── pages/                   One file per route
│   ├── auth/                 Login, Register
│   └── customercare/         Shipping, Returns, Privacy, Terms
├── App.jsx                  Route definitions
└── main.jsx                 App entry point
```

## Routes

| Path                | Page               |
|----------------------|--------------------|
| `/`                  | Home               |
| `/about`              | About              |
| `/services`           | ServicePage        |
| `/contact`             | Contact            |
| `/login`, `/register`  | Auth pages         |
| `/men`, `/women`, `/accessories`, `/new-arrivals` | Product collections |
| `/product/:id`         | Product details    |
| `/addCart`             | Cart               |
| `/checkout`            | Checkout           |
| `/shipping-policy`, `/returns`, `/privacy-policy`, `/terms` | Customer care |
| `*`                   | 404 Not Found       |
