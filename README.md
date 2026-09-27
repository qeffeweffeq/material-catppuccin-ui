# Material Catppuccin UI

A React UI component library implementing a generic Material Framework layout paired with the beautiful [Catppuccin](https://github.com/catppuccin/catppuccin) color palette (Mocha/Latte).

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
import { Sidebar, ThemeToggle } from '@qfwfq/material-catppuccin-ui';

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen flex transition-colors duration-200 ${darkMode ? 'bg-[#1e1e2e] text-[#cdd6f4]' : 'bg-[#eff1f5] text-[#4c4f69]'}`}>
      <Sidebar darkMode={darkMode} title="Trendy" subtitle="Dashboard">
        {/* Sidebar Content goes here */}
        
        {/* Toggle automatically pushes to bottom if wrapped with mt-auto */}
        <div className="mt-auto flex justify-start pt-8">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </Sidebar>
      
      <main className="flex-1 ml-80 pt-6 px-8 pb-8 min-h-screen">
        <h1 className="text-2xl font-bold">Main Content</h1>
      </main>
    </div>
  );
}
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
