# Online Shopping

A responsive online shopping landing page built with React, TypeScript and Vite.

## Getting Started

First, install the project dependencies:

```bash
npm ci
```

Then, run the development server:

```bash
npm run dev   # development server
```

Open [http://localhost:5173](http://localhost:5173) in your browser to see the application.

You can start editing the page by modifying the files inside the `src` directory. The browser will automatically refresh when you make changes.

## Project Structure

The project is organized into reusable components and feature-based folders:

- `src/components/` – Common components such as buttons, carousels and containers.
- `src/features/` – Header, footer, newsletter and product-related functionality.
- `src/layouts/` – Main page layout.
- `src/pages/` – Home page and its sections.
- `src/assets/` – Icons and other assets.
- `src/styles/` – Global styles, CSS variables and utilities.
- `src/utils/` – Reusable helper functions.

The project uses CSS Modules to keep component styles separate and easy to maintain.

## Available Scripts

Run the following commands from the project directory:

```bash
npm run dev
```
Starts the development server.

```bash
npm run build
```
Checks TypeScript and creates the production build in the `dist` folder.

```bash
npm run preview
```
Runs the production build locally.

```bash
npm run lint
```
Checks the code for linting issues.

## Features

- Responsive layout for desktop, tablet and mobile screens.
- Mobile-friendly navigation with a collapsible menu.
- Search bar with a toggle option on smaller screens.
- Hero section with an automatic image slider.
- Product cards loaded from local JSON data.
- Categories and offers displayed using reusable carousels.
- Newsletter form with email validation.
- Reusable components and CSS Modules for styling.

## Technologies Used

- React
- TypeScript
- Vite
- CSS Modules
- HTML5
- CSS3

## Deployment

The project is deployed using GitHub Pages. GitHub Actions automatically builds and deploys the application whenever changes are pushed to the `main` branch.

You can view the live application here:

[Online Shopping – Live Demo](https://kusharmayking.github.io/Assignment-Powerweave/)
