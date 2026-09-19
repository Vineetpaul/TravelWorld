# TravelWorld

TravelWorld is a responsive travel and tourism website built with React and Vite. It presents destinations, countries, travel services, testimonials, travel ideas, FAQs, and contact information through a clean multi-page experience powered by client-side routing.

## Features

- Responsive travel landing page with destination highlights
- Dedicated pages for About, Services, Countries, FAQ, and Contact
- Reusable React components for navigation, cards, sections, heroes, and layout
- Local travel content and image assets organized by feature
- Client-side navigation with React Router
- Tailwind CSS styling through the Vite plugin
- Iconography provided by React Icons

## Routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About TravelWorld |
| `/services` | Travel services |
| `/countries` | Countries and destinations |
| `/faq` | Frequently asked questions |
| `/contact` | Contact information and form |

## Tech Stack

- React 19
- Vite 8
- React Router DOM 7
- Tailwind CSS
- React Icons
- ESLint

## Getting Started

### Requirements

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will print the local development URL in the terminal, usually `http://localhost:5173`.

## Available Scripts

```bash
npm run dev       # Start the development server
npm run build     # Create a production build in dist/
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

## Project Structure

```text
src/
├── assets/       # Images used throughout the site
├── components/   # Reusable UI sections and cards
├── data/         # Navigation, destinations, services, and content data
├── pages/        # Route-level page components
├── App.jsx       # Application routes and shared layout
├── index.css     # Global styles and Tailwind entry point
└── main.jsx      # React application entry point
```

## Adding Content

Most repeated content is data-driven. Update the relevant file in `src/data/` when adding destinations, countries, services, testimonials, statistics, or travel ideas. Add new reusable presentation logic under `src/components/` and compose it in the relevant page or home section.

## Production Build

Create and test a production build with:

```bash
npm run build
npm run preview
```

Because the application uses `BrowserRouter`, the production host must be configured to serve `index.html` as a fallback for client-side routes such as `/about` and `/contact`.

## License

This project is intended for personal and educational use.