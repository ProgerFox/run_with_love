# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Overview
A lightweight React + Vite starter showcasing a simple landing‑page style site. It includes common UI sections such as Hero, Gallery, News, Partners, and Races.

## Features
- **Hot Module Replacement** for rapid development.
- **Tailwind CSS** for utility‑first styling.
- Pre‑configured **ESLint** rules.
- Ready‑to‑use UI sections in `src/sections` (Hero, Gallery, News, Partners, Races).
- Simple navigation and scroll utilities.

## Tech Stack
- **React 18**  
- **Vite 5**  
- **Tailwind CSS**  
- **ESLint** with recommended React rules  
- **JavaScript (no TypeScript)** – optional TS template available.

## Folder Structure
```
src/
  assets/          # static assets
  components/     # reusable UI components
  sections/       # page sections (Hero, Gallery, News, …)
  utils/          # helper functions (e.g., ScrollTo)
  App.jsx         # root component
  main.jsx        # entry point
```

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

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

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
