## Copilot / AI Assistant Quick Guide

Purpose: help an AI agent become productive quickly in this Nuxt 4 + Tailwind v4 frontend.

Quick start (most common commands)

```bash
# install deps
pnpm install

# dev server
pnpm dev

# build
pnpm build

# regenerate Nuxt types after module/config changes
pnpm dlx nuxi prepare
```

Key files and folders
- `nuxt.config.ts` — central configuration: modules, css entry (`app/assets/css/main.css`), vite plugins, auto-imports.
- `package.json` — project scripts (dev/build/preview), dependencies (Tailwind v4, various Nuxt modules).
- `tsconfig.json` — project TypeScript settings and path aliases (`~/*`, `@/*` are commonly used).
- `app/` — Nuxt 4 application folder: `app/pages`, `app/plugins`, `app/assets`, `app/locales`.
- `app/assets/css/main.css` — Tailwind entry and shadcn-style CSS variables (where theme vars live).
- `app/plugins/*` — Nuxt plugins (e.g. SSR-width plugin patterns go here).
- `ui-thing.config.ts` — project-specific UI scaffolding config (watch this for where UI components are expected; e.g. `componentsLocation: "app/components/Ui"`).

Big picture / architecture notes
- This is a Nuxt 4 single-repo frontend using the `app/` directory layout. Server rendering and auto-imports are handled by Nuxt.
- Tailwind v4 is used via `@tailwindcss/vite` in `nuxt.config.ts` (Vite plugin). The CSS entry is `app/assets/css/main.css`.
- i18n is configured with `@nuxtjs/i18n` and `langDir: "../app/locales/"` — translations live under `app/locales` and there is a translation manager in place.
- Several Nuxt modules are present (check `nuxt.config.ts`): `@vueuse/nuxt`, `@vee-validate/nuxt`, `motion-v/nuxt`, `v-wave/nuxt`, `vue-sonner/nuxt`, etc. When making changes to these, re-run `nuxi prepare`.

Developer conventions and patterns
- Auto-imports: `nuxt.config.ts` includes explicit `imports` mappings for some libs (e.g. `tv` from `tailwind-variants`, `useSonner`). Prefer updating that section for new global imports.
- Component locations vary: check `ui-thing.config.ts` and `nuxt.config.ts` before creating components. Expected UI components often live in `app/components/Ui` or `components/ui` depending on generator config.
- Localization: `defaultLocale` is `pt` and routing strategy is `prefix_except_default`. Use the `app/locales` files for string keys.
- Styling: Tailwind utilities + CSS variables (see `app/assets/css/main.css`). When adding shadcn-like components they may add CSS variable entries here.

Integration & workflow gotchas
- After adding or changing Nuxt modules or config, run `pnpm dlx nuxi prepare` to regenerate `.nuxt` types. This is also triggered by `pnpm postinstall`.
- If using shadcn-vue or similar CLIs, ensure `tsconfig.json` has path aliases (`~/*`, `@/*`) so the CLI can detect import aliases.
- Husky is enabled (`prepare` script) — commits may run hooks; check `package.json` `prepare` script.

Where to look for examples
- UI scaffolding: `ui-thing.config.ts` (shows `componentsLocation`, `tailwindCSSLocation`, `packageManager`). Use it to infer component directories.
- i18n config: `nuxt.config.ts` (`i18n.langDir`, `defaultLocale`, `strategy`).
- CSS entry: `app/assets/css/main.css` (tailwind imports and theme variables).

Making changes safely
- Add deps with pnpm. Use the existing package manager (`pnpm` preferred).
- Update `nuxt.config.ts` to add modules/plugins, then run `pnpm dlx nuxi prepare`.
- If adding UI via a generator (shadcn-like), add path aliases to `tsconfig.json` first.

If anything here is unclear or you want the guide to include examples for a particular task (add a Button component, wire a new Nuxt module, run a local smoke test), tell me which task and I'll update this file.
