# Run With Love

React + Vite landing page for the Run With Love charity running project.

## Overview
A lightweight React + Vite starter showcasing a simple landing‑page style site. It includes common UI sections such as Hero, Gallery, News, Partners, and Races.

## Features
- **Hot Module Replacement** for rapid development.
- **Tailwind CSS** for utility‑first styling.
- Pre‑configured **ESLint** rules.
- Ready‑to‑use UI sections in `src/sections` (Hero, Gallery, News, Partners, Races).
- Simple navigation and scroll utilities.

## Tech Stack
- **React 19**  
- **Vite 8**  
- **Tailwind CSS**  
- **TypeScript**  
- **ESLint** with recommended React and TypeScript rules

## Folder Structure
```
src/
  sections/       # page sections (Hero, Gallery, News, …)
  data/           # typed content data
  types.ts        # shared domain and component types
  utils/          # helper functions (e.g., ScrollTo)
  App.tsx         # root component
  main.tsx        # entry point
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Type Check

```sh
npm run typecheck
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
