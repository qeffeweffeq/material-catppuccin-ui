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
const nextConfig = {
  transpilePackages: ['@qfwfq/material-catppuccin-ui'],
};
export default nextConfig;
```

Import the global styles in your root `layout.tsx` or `globals.css`:
```css
@import "@qfwfq/material-catppuccin-ui/styles/globals.css";
```

## Usage Example

```tsx
'use client';
import { useState } from 'react';
import { Sidebar, ThemeToggle } from '@qfwfq/material-catppuccin-ui';

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#1e1e2e] text-[#cdd6f4]' : 'bg-[#eff1f5] text-[#4c4f69]'}`}>
      <Sidebar darkMode={darkMode} setDarkMode={setDarkMode}>
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </Sidebar>
      <main className="ml-80 p-8">
        <h1>Your Material Dashboard</h1>
      </main>
    </div>
  );
}
```

## Want a pre-configured template?
If you are starting a brand new project, you can skip the manual setup by using our starter repository:
```bash
npx create-next-app@latest my-app -e https://github.com/qeffeweffeq/next-catppuccin-starter
```
