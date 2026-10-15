# Material Catppuccin UI

A React UI component library implementing a generic Material Framework layout paired with the beautiful [Catppuccin](https://github.com/catppuccin/catppuccin) color palette.

Includes official Catppuccin themes (`mocha`, `latte`, `frappe`, `macchiato`) and custom greyish themes:
- **`base` (Dark)**: Extracted minimal dark theme (`#000000` crust, `#0e0e0e` base, `#272727` surface1, with shared vibrant `#FF0074` pink and `#FF5500` peach accents).
- **`esab` (Light)**: The inverted counterpart (`#ffffff` crust, `#f1f1f1` base, `#d8d8d8` surface1, with shared `#FF0074` pink and `#FF5500` peach accents).

This library provides clean, raw `.tsx` exports optimized for modern Next.js environments using Tailwind CSS v4.

## Installation

```bash
npm install @qfwfq/material-catppuccin-ui
```

## Configuration

Since this library ships raw `.tsx` files, you must configure Next.js to transpile the package. Update your `next.config.ts` (or `next.config.js`):

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['@qfwfq/material-catppuccin-ui'],
};

export default nextConfig;
```

Import the global styles and instruct Tailwind to scan the package for utility classes in your root `globals.css`:
```css
@import "tailwindcss";
@import "@qfwfq/material-catppuccin-ui/styles/globals.css";
@source "../../node_modules/@qfwfq/material-catppuccin-ui";
```

## Usage Example

```tsx
'use client';
import { useState } from 'react';
import { Sidebar, ThemeToggle, Card, catppuccinFlavors } from '@qfwfq/material-catppuccin-ui';

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div 
      data-theme={darkMode ? 'base' : 'esab'}
      className="min-h-screen flex transition-colors duration-200 bg-cat-base text-cat-text"
    >
      <Sidebar darkMode={darkMode} title="Trendy" subtitle="Dashboard">
        {/* Sidebar Content goes here */}
        
        {/* Toggle automatically pushes to bottom if wrapped with mt-auto */}
        <div className="mt-auto flex justify-start pt-8">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </Sidebar>
      
      <main className="flex-1 ml-80 pt-6 px-8 pb-8 min-h-screen">
        <h1 className="text-2xl font-bold">Main Content</h1>
        <Card darkMode={darkMode} className="p-4 mt-4">
          <p>Card styled with Catppuccin theme variables</p>
        </Card>
      </main>
    </div>
  );
}
```

## Palette API

You can programmatically access the full color values of all themes (`latte`, `frappe`, `macchiato`, `mocha`, `base`, `esab`):

```typescript
import { catppuccinFlavors, getFlavor } from '@qfwfq/material-catppuccin-ui';

// Access hex colors directly
console.log(catppuccinFlavors.base.colors.base); // #0e0e0e
console.log(catppuccinFlavors.base.colors.pink); // #FF0074
console.log(catppuccinFlavors.esab.colors.base); // #f1f1f1
console.log(catppuccinFlavors.mocha.colors.base); // #1e1e2e
```

## Local Development Workflow
If you want to contribute or modify components locally across multiple projects:
1. In this directory, run `npm link`.
2. In your consuming Next.js project (e.g. `soupre`), run `npm link @qfwfq/material-catppuccin-ui`.
3. Start your Next.js dev server. Any changes you save here will instantly hot-reload in your app!

## Pre-configured Template
If you are starting a brand new project, you can skip the manual setup by using our starter repository:
```bash
npx create-next-app@latest my-app -e https://github.com/qeffeweffeq/next-catppuccin-starter
```
