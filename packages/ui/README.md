# @primo-brutality/ui

Neo-brutalist React Native component library built with [NativeWind](https://www.nativewind.dev/) v4. Thick borders, hard shadows, and bold colors — ready for Expo and bare React Native apps.

## Install

```bash
npm install @primo-brutality/ui nativewind
# or
pnpm add @primo-brutality/ui nativewind
# or
yarn add @primo-brutality/ui nativewind
```

### Peer dependencies

| Package        | Version  |
| -------------- | -------- |
| `react`        | `>=18`   |
| `react-native` | `>=0.74` |
| `nativewind`   | `>=4`    |

You also need **Tailwind CSS v3** in your app (see setup below).

## Setup

Components use NativeWind `className` props. Configure your app once before importing components.

### 1. Import global styles

In your app entry file (e.g. `app/_layout.tsx` for Expo Router or `App.tsx`):

```tsx
import "@primo-brutality/ui/global.css";
```

### 2. Configure Tailwind

Add the brutal design tokens via the package preset:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@primo-brutality/ui/dist/**/*.{js,mjs}",
  ],
  presets: [require("@primo-brutality/ui/tailwind-preset")],
};
```

The preset includes NativeWind and all `brutal-*` colors, shadows, radii, and layout tokens. Source: [`tailwind-preset.js`](./tailwind-preset.js).

Follow the [NativeWind v4 installation guide](https://www.nativewind.dev/getting-started/installation) for Metro/Babel setup in your project.

### 3. TypeScript (optional)

Add NativeWind types to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "jsxImportSource": "nativewind"
  }
}
```

## Usage

```tsx
import { Button, Card, Text } from "@primo-brutality/ui";

export function Example() {
  return (
    <Card>
      <Text size="lg" weight="bold">
        Welcome
      </Text>
      <Button variant="primary" onPress={() => {}}>
        Get started
      </Button>
    </Card>
  );
}
```

### Toast notifications

Wrap your app with `ToastProvider` and call `useToast()` from any child:

```tsx
import { ToastProvider, Button, useToast } from "@primo-brutality/ui";

function App() {
  return (
    <ToastProvider>
      <Screen />
    </ToastProvider>
  );
}

function Screen() {
  const { show } = useToast();

  return (
    <Button onPress={() => show({ message: "Saved!", variant: "success" })}>
      Save
    </Button>
  );
}
```

## Components

| Component       | Description                                     |
| --------------- | ----------------------------------------------- |
| `Text`          | Typography with size, weight, and color presets |
| `Heading`       | Display heading with level-based scale (h1–h4)  |
| `Button`        | Pressable button with variants and hard shadow  |
| `Input`         | Text input with brutal border styling           |
| `Card`          | Bordered container with optional shadow         |
| `Badge`         | Small label / status chip                       |
| `Alert`         | Inline alert banner                             |
| `Container`     | Layout wrapper with max-width presets           |
| `YContainer`    | Vertical stack with token-based gap presets     |
| `XContainer`    | Horizontal row with token-based gap presets     |
| `Modal`         | Modal dialog overlay                            |
| `PinInput`      | PIN / OTP digit input                           |
| `Toggle`        | Switch with brutal track and thumb styling      |
| `ToastProvider` | Toast context provider                          |
| `useToast`      | Hook to show and dismiss toasts                 |

## Design tokens

Import raw token values for custom components:

```tsx
import {
  colors,
  spacing,
  fontSizes,
  radii,
  shadows,
} from "@primo-brutality/ui";
```

## Development

This package lives in the [primo-brutality](https://github.com/lucianodiisouza/primo-brutality) monorepo. Clone the repo and run Storybook to browse all components:

```bash
git clone https://github.com/lucianodiisouza/primo-brutality.git
cd primo-brutality
pnpm install
pnpm storybook
```

## License

MIT
