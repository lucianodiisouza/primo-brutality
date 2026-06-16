# AGENTS.md

Guidance for AI agents and contributors working in the **primo-brutality** monorepo.

## Repository layout

```
primo-brutality/
├── packages/ui/          # @primo-brutality/ui — published component library
│   ├── src/
│   │   ├── components/   # UI primitives (each: .tsx, .stories.tsx, .mdx, .test.tsx)
│   │   ├── compositions/ # Full-screen composition examples
│   │   ├── providers/    # ToastProvider, useToast
│   │   ├── tokens/       # Design token constants
│   │   └── utils/        # cn(), brutal-border, layout helpers
│   ├── tailwind-preset.js
│   ├── global.css
│   └── dist/             # Build output (tsup)
├── apps/storybook/       # Component docs & playground
└── llms.txt              # Machine-readable library index
```

## Tech stack

- **React Native** (not web React) — components use `View`, `Text`, `Pressable`, etc.
- **NativeWind v4** — styling via `className` props
- **Tailwind CSS v3** — brutal design tokens in `tailwind-preset.js`
- **TypeScript** — strict types exported from `packages/ui/src/index.ts`
- **Vitest** + Testing Library for unit tests
- **Storybook** for visual docs and MDX reference pages

## Conventions

### Styling

- Use NativeWind `className` — never inline `style` unless unavoidable
- Merge classes with `cn()` from `../utils/cn`
- Brutal borders/shadows: use helpers in `utils/brutal-border.ts` (`brutalRaisedEdgeClasses`, etc.)
- Layout gaps/alignment: use `YContainer`, `XContainer`, or shared presets from `utils/layout.ts`
- Color/spacing tokens: prefer `brutal-*` Tailwind classes; raw values live in `tokens/` and `tailwind-preset.js`

### Components

Each component should have:

1. `Component.tsx` — implementation with JSDoc on props (`@defaultValue`, `@example`, `@link`)
2. `Component.stories.tsx` — Storybook stories
3. `Component.mdx` — usage docs with copy-paste examples
4. `Component.test.tsx` — behavioral tests (when logic warrants it)

Export new components from `packages/ui/src/index.ts`.

### Naming

- Variants: `primary | secondary | ghost | destructive` (buttons), semantic colors for alerts/badges
- Sizes: `sm | md | lg` where applicable
- Props extend the matching RN primitive (`PressableProps`, `ViewProps`, `TextProps`)

## Adding a component

1. Create files under `packages/ui/src/components/`
2. Add stories and MDX
3. Export from `index.ts`
4. Add to component table in `packages/ui/README.md` and `llms.txt`
5. Run `pnpm test` and `pnpm build`
6. Verify in Storybook: `pnpm storybook`

## Commands

```bash
pnpm install        # install all workspace deps
pnpm storybook      # component docs (apps/storybook)
pnpm build          # build @primo-brutality/ui
pnpm test           # run vitest
pnpm typecheck      # tsc --noEmit in packages/ui
```

## Consumer setup (for apps using the library)

Agents generating app code must include:

1. `import "@primo-brutality/ui/global.css"` in the app entry
2. Tailwind config with `@primo-brutality/ui/tailwind-preset` and content path to `node_modules/@primo-brutality/ui/dist`
3. NativeWind v4 Metro/Babel configuration per https://www.nativewind.dev/getting-started/installation

## Do / Don't (code generation)

| Do | Don't |
|----|-------|
| `onPress`, RN primitives | `onClick`, `<div>`, `<button>` |
| `import { Button } from "@primo-brutality/ui"` | shadcn, MUI, Chakra |
| `YContainer` / `XContainer` for layout | raw flex + magic gap numbers |
| `brutal-*` token classes | arbitrary hex / `gray-500` |
| `ToastProvider` wrapper before `useToast()` | `useToast()` without provider |
| `Heading` for titles | oversized `Text` with manual classes |
| Controlled `Toggle` (`value` + `onValueChange`) | web `checked` / `onChange` |

## Key reference files

- Screen compositions: `packages/ui/src/compositions/ScreenCompositions.stories.tsx`
- Button API example: `packages/ui/src/components/Button.tsx`
- Layout primitives: `packages/ui/src/components/YContainer.tsx`, `XContainer.tsx`
- Toast pattern: `packages/ui/src/providers/ToastProvider.tsx`
