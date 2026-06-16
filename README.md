# Primo Brutality

Neo-brutalist React Native component library with browser-based Storybook preview.

## Quick start

```bash
pnpm install
pnpm storybook
```

Open [http://localhost:6006](http://localhost:6006) to browse components in the browser — no mobile app required.

## Packages

- `@primo-brutality/ui` — component library (`packages/ui`)
- `storybook` — web preview app (`apps/storybook`)

## Components

**Layout:** `BrutContainer`, `BrutScrollView`

**Primitives:** `BrutText`, `BrutHeading`, `BrutButton`, `BrutInput`, `BrutCard`, `BrutBadge`, `BrutAlert`

**Overlays:** `BrutModal`, `BrutPinInput`, `BrutToastProvider` + `useToast()`

## Usage in an Expo app

```tsx
import "@primo-brutality/ui/global.css";
import {
  BrutButton,
  BrutContainer,
  BrutToastProvider,
} from "@primo-brutality/ui";

export default function App() {
  return (
    <BrutToastProvider>
      <BrutContainer padding="lg">
        <BrutButton variant="primary">Get started</BrutButton>
      </BrutContainer>
    </BrutToastProvider>
  );
}
```

Configure NativeWind in your Expo app to consume the library's Tailwind tokens from `packages/ui/tailwind.config.js`.

## Scripts

| Command | Description |
|---|---|
| `pnpm storybook` | Start web Storybook dev server |
| `pnpm build-storybook` | Build static Storybook site |
| `pnpm build` | Build `@primo-brutality/ui` |
