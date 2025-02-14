# shadcn/ui monorepo template

This template is for creating a monorepo with shadcn/ui.

## Usage

```bash
pnpm dlx shadcn@latest init
```

## Adding components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

## Tailwind

Your `tailwind.config.ts` and `globals.css` are already set up to use the components from the `ui` package.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/ui/button"
```

```
docq
├─ .eslintrc.js
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     └─ heads
│  │        └─ master
│  ├─ objects
│  │  ├─ 08
│  │  │  └─ 0680c382b946f2ad37d79c457cf6b2a9f2aa50
│  │  ├─ 0c
│  │  │  └─ 2a10b8e6bc1a6a3577d3c4add90806db18e5a6
│  │  ├─ 0e
│  │  │  ├─ 0d1d0633f5198e851f7b8109f5e464e6595db2
│  │  │  └─ 42200144040df6f8884dd44b41e0f957e6bd99
│  │  ├─ 0f
│  │  │  └─ 80cfd67c892c7a210f18a20ffa84f577ae015c
│  │  ├─ 12
│  │  │  └─ 38497693d764cc8a74bcda92fcb8e44d8fce4f
│  │  ├─ 1b
│  │  │  ├─ 3be0840f3f6a2bc663b53f4b17d05d2d924df6
│  │  │  └─ dc1d66ab5752bb8929bbb4ca0daee1df5f30da
│  │  ├─ 1e
│  │  │  └─ 0784148393e28187c91e4e332e24afba933723
│  │  ├─ 25
│  │  │  └─ e8677d80cc8864c23bdeb8e3f545ee33cd6c73
│  │  ├─ 26
│  │  │  └─ fb343fd75bb6175014304b7b19c882c2c5811a
│  │  ├─ 2a
│  │  │  └─ 9a18974d5e3c4660eff5328a7b961dfdfc258b
│  │  ├─ 2e
│  │  │  └─ 90fa00b2ab593998d363c91ed160d6900b5bd2
│  │  ├─ 30
│  │  │  └─ b0fafc4554a6bbec21815c653b90174d7abd38
│  │  ├─ 36
│  │  │  └─ e03b19a08dd6d0a1f1564f2ab321e1af2551f5
│  │  ├─ 3a
│  │  │  └─ 829f5387c06ba6c2c19f96c9a8d9f821e9f273
│  │  ├─ 3f
│  │  │  └─ f5faaaf5f139c707e338e7e89e51606e9e0ace
│  │  ├─ 41
│  │  │  └─ 33babc2648cf99089c7871ca6c3f9a60fa9eab
│  │  ├─ 44
│  │  │  └─ f4289918f1d9502348b68a5f936fde231369ca
│  │  ├─ 4a
│  │  │  └─ 414ab1c939142925e3d9c4eb57f22c3025be89
│  │  ├─ 50
│  │  │  └─ 62ee3b28c2eda9c9c802c1478f2c17d823483b
│  │  ├─ 53
│  │  │  └─ 5dec4aedd3391b9b55e24d5dc1bff18098babe
│  │  ├─ 55
│  │  │  └─ c72f43d6d124dc19c0a1b70e97dfd05e7eb3ff
│  │  ├─ 5e
│  │  │  └─ 52005ae1288f28c75515f70b405a8ac6b174a0
│  │  ├─ 69
│  │  │  └─ da3ed0abeb918d19e52a87ee1f554aec8e6aa6
│  │  ├─ 71
│  │  │  └─ 8d6fea4835ec2d246af9800eddb7ffb276240c
│  │  ├─ 78
│  │  │  └─ 1274d0137e9033b09f52d0229bdd05e1d509f6
│  │  ├─ 7a
│  │  │  └─ 807d4e007174d7b8a78c7e611496946c1f01d5
│  │  ├─ 7e
│  │  │  └─ 80576486109fdcc91da95bdb2236f185c126f1
│  │  ├─ 8a
│  │  │  └─ 0df4292d8b72897e2604053114040e1ba3d8c4
│  │  ├─ 94
│  │  │  └─ 501168888941f80883b9be846e14ced38cd0fb
│  │  ├─ a1
│  │  │  └─ cb6375c419518484a163efefe373d86f77e71f
│  │  ├─ a6
│  │  │  └─ 3d09251d593491c675c7003537fa3c1d61f966
│  │  ├─ a7
│  │  │  └─ 55ffea05e30167432325a4c9dc8afd62400905
│  │  ├─ b0
│  │  │  └─ f1eaea9320331d300886d9c8273d9282e2c21f
│  │  ├─ b9
│  │  │  └─ 07dd6a39a3e5eb03e9c5ed81f701dd03049211
│  │  ├─ ba
│  │  │  └─ 7d78ad0784a3228ba46ec1aefeaad6f6f0f30c
│  │  ├─ bd
│  │  │  ├─ 0c391ddd1088e9067844c48835bf4abcd61783
│  │  │  └─ 167d93a3b353c116e18fc8554948c11303c8c8
│  │  ├─ c3
│  │  │  └─ 08498c491af337ce2295031084dbd657f6472a
│  │  ├─ c6
│  │  │  └─ a4ad5501163f9a93448afbc120d67e780c2406
│  │  ├─ c7
│  │  │  └─ ada9ccaabaef0ce286e3a5ade4d9994bbcb3f3
│  │  ├─ c8
│  │  │  └─ e52061577828c5daf87c24c97ef2c206cd9fb7
│  │  ├─ d0
│  │  │  └─ c38fe2a986b7ebf5c9be58e87aec61c212dfbb
│  │  ├─ d5
│  │  │  └─ 64d0bc3dd917926892c55e3706cc116d5b165e
│  │  ├─ d6
│  │  │  └─ a7fe0554393cb94fa5273d6f3821e3c7e23ecb
│  │  ├─ dd
│  │  │  └─ a3143ea78f9afe073f8de37f36a7ac2c592264
│  │  ├─ de
│  │  │  └─ 1c32475cdbe9cf8cdcb4b60fce51d551c801b0
│  │  ├─ e4
│  │  │  ├─ 0fffcd1f1fb8325453ffa7bf4135b47d5c58ca
│  │  │  └─ f893aaee1ffdee0ee1a46aba78472c24e066bc
│  │  ├─ e5
│  │  │  └─ f0c936ca247b610e2913a825ff163f2ff2cc16
│  │  ├─ e6
│  │  │  └─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  ├─ ea
│  │  │  └─ 930cdd0e34a71e835815b9a7ea9b8727d36481
│  │  ├─ ed
│  │  │  └─ a508904ddabbfbe0371901841d411fd589de8e
│  │  ├─ f1
│  │  │  ├─ 19228a14a210564d2397a2296b46959fb7471a
│  │  │  └─ 65538ece3d6551317c86aabb2173ab06910a6b
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ master
│     └─ tags
├─ .gitignore
├─ .npmrc
├─ apps
│  ├─ api
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ src
│  │  │  ├─ controllers
│  │  │  │  ├─ auth.controller.ts
│  │  │  │  ├─ document.controller.ts
│  │  │  │  └─ userController.ts
│  │  │  ├─ index.ts
│  │  │  ├─ middleware
│  │  │  │  └─ auth.middleware.ts
│  │  │  └─ routes
│  │  │     ├─ auth.router.ts
│  │  │     ├─ document.router.ts
│  │  │     └─ userRoutes.ts
│  │  └─ tsconfig.json
│  ├─ dashboard
│  │  ├─ .gitignore
│  │  ├─ eslint.config.mjs
│  │  ├─ next-env.d.ts
│  │  ├─ next.config.ts
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ postcss.config.mjs
│  │  ├─ public
│  │  │  ├─ file.svg
│  │  │  ├─ globe.svg
│  │  │  ├─ next.svg
│  │  │  ├─ vercel.svg
│  │  │  └─ window.svg
│  │  ├─ README.md
│  │  ├─ src
│  │  │  └─ app
│  │  │     ├─ favicon.ico
│  │  │     ├─ globals.css
│  │  │     ├─ layout.tsx
│  │  │     └─ page.tsx
│  │  ├─ tailwind.config.ts
│  │  └─ tsconfig.json
│  ├─ editor
│  │  ├─ .gitignore
│  │  ├─ eslint.config.mjs
│  │  ├─ next-env.d.ts
│  │  ├─ next.config.ts
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ postcss.config.mjs
│  │  ├─ public
│  │  │  ├─ file.svg
│  │  │  ├─ globe.svg
│  │  │  ├─ next.svg
│  │  │  ├─ vercel.svg
│  │  │  └─ window.svg
│  │  ├─ README.md
│  │  ├─ src
│  │  │  └─ app
│  │  │     ├─ favicon.ico
│  │  │     ├─ globals.css
│  │  │     ├─ layout.tsx
│  │  │     └─ page.tsx
│  │  ├─ tailwind.config.ts
│  │  └─ tsconfig.json
│  └─ showcase
│     ├─ app
│     │  ├─ (auth)
│     │  │  ├─ signin
│     │  │  │  └─ page.tsx
│     │  │  └─ signup
│     │  │     └─ page.tsx
│     │  ├─ favicon.ico
│     │  ├─ layout.tsx
│     │  └─ page.tsx
│     ├─ components
│     │  ├─ .gitkeep
│     │  └─ providers.tsx
│     ├─ components.json
│     ├─ eslint.config.js
│     ├─ hooks
│     │  └─ .gitkeep
│     ├─ lib
│     │  └─ .gitkeep
│     ├─ next-env.d.ts
│     ├─ next.config.mjs
│     ├─ package.json
│     ├─ postcss.config.mjs
│     ├─ tailwind.config.ts
│     └─ tsconfig.json
├─ package.json
├─ packages
│  ├─ Database
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ prisma
│  │  │  └─ schema.prisma
│  │  └─ src
│  │     └─ prisma.ts
│  ├─ eslint-config
│  │  ├─ base.js
│  │  ├─ next.js
│  │  ├─ package.json
│  │  ├─ react-internal.js
│  │  └─ README.md
│  ├─ typescript-config
│  │  ├─ base.json
│  │  ├─ nextjs.json
│  │  ├─ package.json
│  │  ├─ react-library.json
│  │  └─ README.md
│  └─ ui
│     ├─ components.json
│     ├─ eslint.config.js
│     ├─ package.json
│     ├─ postcss.config.mjs
│     ├─ src
│     │  ├─ components
│     │  │  ├─ .gitkeep
│     │  │  ├─ button.tsx
│     │  │  ├─ signin-form.tsx
│     │  │  ├─ signup-form.tsx
│     │  │  └─ ui
│     │  │     ├─ input.tsx
│     │  │     └─ label.tsx
│     │  ├─ hooks
│     │  │  └─ .gitkeep
│     │  ├─ lib
│     │  │  └─ utils.ts
│     │  └─ styles
│     │     └─ globals.css
│     ├─ tailwind.config.ts
│     ├─ tsconfig.json
│     └─ tsconfig.lint.json
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ README.md
├─ tsconfig.json
└─ turbo.json

```
```
docq
├─ .eslintrc.js
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     └─ heads
│  │        └─ master
│  ├─ objects
│  │  ├─ 08
│  │  │  └─ 0680c382b946f2ad37d79c457cf6b2a9f2aa50
│  │  ├─ 0c
│  │  │  └─ 2a10b8e6bc1a6a3577d3c4add90806db18e5a6
│  │  ├─ 0e
│  │  │  ├─ 0d1d0633f5198e851f7b8109f5e464e6595db2
│  │  │  └─ 42200144040df6f8884dd44b41e0f957e6bd99
│  │  ├─ 0f
│  │  │  └─ 80cfd67c892c7a210f18a20ffa84f577ae015c
│  │  ├─ 12
│  │  │  └─ 38497693d764cc8a74bcda92fcb8e44d8fce4f
│  │  ├─ 1b
│  │  │  ├─ 3be0840f3f6a2bc663b53f4b17d05d2d924df6
│  │  │  └─ dc1d66ab5752bb8929bbb4ca0daee1df5f30da
│  │  ├─ 1e
│  │  │  └─ 0784148393e28187c91e4e332e24afba933723
│  │  ├─ 25
│  │  │  └─ e8677d80cc8864c23bdeb8e3f545ee33cd6c73
│  │  ├─ 26
│  │  │  └─ fb343fd75bb6175014304b7b19c882c2c5811a
│  │  ├─ 2a
│  │  │  └─ 9a18974d5e3c4660eff5328a7b961dfdfc258b
│  │  ├─ 2e
│  │  │  └─ 90fa00b2ab593998d363c91ed160d6900b5bd2
│  │  ├─ 30
│  │  │  └─ b0fafc4554a6bbec21815c653b90174d7abd38
│  │  ├─ 36
│  │  │  └─ e03b19a08dd6d0a1f1564f2ab321e1af2551f5
│  │  ├─ 3a
│  │  │  └─ 829f5387c06ba6c2c19f96c9a8d9f821e9f273
│  │  ├─ 3f
│  │  │  └─ f5faaaf5f139c707e338e7e89e51606e9e0ace
│  │  ├─ 41
│  │  │  └─ 33babc2648cf99089c7871ca6c3f9a60fa9eab
│  │  ├─ 44
│  │  │  └─ f4289918f1d9502348b68a5f936fde231369ca
│  │  ├─ 4a
│  │  │  └─ 414ab1c939142925e3d9c4eb57f22c3025be89
│  │  ├─ 50
│  │  │  └─ 62ee3b28c2eda9c9c802c1478f2c17d823483b
│  │  ├─ 53
│  │  │  └─ 5dec4aedd3391b9b55e24d5dc1bff18098babe
│  │  ├─ 55
│  │  │  └─ c72f43d6d124dc19c0a1b70e97dfd05e7eb3ff
│  │  ├─ 5e
│  │  │  └─ 52005ae1288f28c75515f70b405a8ac6b174a0
│  │  ├─ 69
│  │  │  └─ da3ed0abeb918d19e52a87ee1f554aec8e6aa6
│  │  ├─ 71
│  │  │  └─ 8d6fea4835ec2d246af9800eddb7ffb276240c
│  │  ├─ 78
│  │  │  └─ 1274d0137e9033b09f52d0229bdd05e1d509f6
│  │  ├─ 7a
│  │  │  └─ 807d4e007174d7b8a78c7e611496946c1f01d5
│  │  ├─ 7e
│  │  │  └─ 80576486109fdcc91da95bdb2236f185c126f1
│  │  ├─ 8a
│  │  │  └─ 0df4292d8b72897e2604053114040e1ba3d8c4
│  │  ├─ 94
│  │  │  └─ 501168888941f80883b9be846e14ced38cd0fb
│  │  ├─ a1
│  │  │  └─ cb6375c419518484a163efefe373d86f77e71f
│  │  ├─ a6
│  │  │  └─ 3d09251d593491c675c7003537fa3c1d61f966
│  │  ├─ a7
│  │  │  └─ 55ffea05e30167432325a4c9dc8afd62400905
│  │  ├─ b0
│  │  │  └─ f1eaea9320331d300886d9c8273d9282e2c21f
│  │  ├─ b9
│  │  │  └─ 07dd6a39a3e5eb03e9c5ed81f701dd03049211
│  │  ├─ ba
│  │  │  └─ 7d78ad0784a3228ba46ec1aefeaad6f6f0f30c
│  │  ├─ bd
│  │  │  ├─ 0c391ddd1088e9067844c48835bf4abcd61783
│  │  │  └─ 167d93a3b353c116e18fc8554948c11303c8c8
│  │  ├─ c3
│  │  │  └─ 08498c491af337ce2295031084dbd657f6472a
│  │  ├─ c6
│  │  │  └─ a4ad5501163f9a93448afbc120d67e780c2406
│  │  ├─ c7
│  │  │  └─ ada9ccaabaef0ce286e3a5ade4d9994bbcb3f3
│  │  ├─ c8
│  │  │  └─ e52061577828c5daf87c24c97ef2c206cd9fb7
│  │  ├─ d0
│  │  │  └─ c38fe2a986b7ebf5c9be58e87aec61c212dfbb
│  │  ├─ d5
│  │  │  └─ 64d0bc3dd917926892c55e3706cc116d5b165e
│  │  ├─ d6
│  │  │  └─ a7fe0554393cb94fa5273d6f3821e3c7e23ecb
│  │  ├─ dd
│  │  │  └─ a3143ea78f9afe073f8de37f36a7ac2c592264
│  │  ├─ de
│  │  │  └─ 1c32475cdbe9cf8cdcb4b60fce51d551c801b0
│  │  ├─ e4
│  │  │  ├─ 0fffcd1f1fb8325453ffa7bf4135b47d5c58ca
│  │  │  └─ f893aaee1ffdee0ee1a46aba78472c24e066bc
│  │  ├─ e5
│  │  │  └─ f0c936ca247b610e2913a825ff163f2ff2cc16
│  │  ├─ e6
│  │  │  └─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  ├─ ea
│  │  │  └─ 930cdd0e34a71e835815b9a7ea9b8727d36481
│  │  ├─ ed
│  │  │  └─ a508904ddabbfbe0371901841d411fd589de8e
│  │  ├─ f1
│  │  │  ├─ 19228a14a210564d2397a2296b46959fb7471a
│  │  │  └─ 65538ece3d6551317c86aabb2173ab06910a6b
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ master
│     └─ tags
├─ .gitignore
├─ .npmrc
├─ apps
│  ├─ api
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ src
│  │  │  ├─ controllers
│  │  │  │  ├─ auth.controller.ts
│  │  │  │  └─ document.controller.ts
│  │  │  ├─ index.ts
│  │  │  ├─ middleware
│  │  │  │  └─ auth.middleware.ts
│  │  │  ├─ routes
│  │  │  │  ├─ auth.router.ts
│  │  │  │  └─ document.router.ts
│  │  │  ├─ services
│  │  │  │  ├─ auth.service.ts
│  │  │  │  └─ document.service.ts
│  │  │  ├─ types
│  │  │  │  └─ auth.ts
│  │  │  └─ validation
│  │  │     ├─ auth.schema.ts
│  │  │     └─ document.schema.ts
│  │  ├─ tsconfig.json
│  │  └─ turbo.json
│  ├─ dashboard
│  │  ├─ .gitignore
│  │  ├─ eslint.config.mjs
│  │  ├─ next-env.d.ts
│  │  ├─ next.config.ts
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ postcss.config.mjs
│  │  ├─ public
│  │  │  ├─ file.svg
│  │  │  ├─ globe.svg
│  │  │  ├─ next.svg
│  │  │  ├─ vercel.svg
│  │  │  └─ window.svg
│  │  ├─ README.md
│  │  ├─ src
│  │  │  └─ app
│  │  │     ├─ favicon.ico
│  │  │     ├─ globals.css
│  │  │     ├─ layout.tsx
│  │  │     └─ page.tsx
│  │  ├─ tailwind.config.ts
│  │  └─ tsconfig.json
│  ├─ editor
│  │  ├─ .gitignore
│  │  ├─ eslint.config.mjs
│  │  ├─ next-env.d.ts
│  │  ├─ next.config.ts
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ postcss.config.mjs
│  │  ├─ public
│  │  │  ├─ file.svg
│  │  │  ├─ globe.svg
│  │  │  ├─ next.svg
│  │  │  ├─ vercel.svg
│  │  │  └─ window.svg
│  │  ├─ README.md
│  │  ├─ src
│  │  │  └─ app
│  │  │     ├─ favicon.ico
│  │  │     ├─ globals.css
│  │  │     ├─ layout.tsx
│  │  │     └─ page.tsx
│  │  ├─ tailwind.config.ts
│  │  └─ tsconfig.json
│  └─ showcase
│     ├─ app
│     │  ├─ (auth)
│     │  │  ├─ signin
│     │  │  │  └─ page.tsx
│     │  │  └─ signup
│     │  │     └─ page.tsx
│     │  ├─ favicon.ico
│     │  ├─ layout.tsx
│     │  └─ page.tsx
│     ├─ components
│     │  ├─ .gitkeep
│     │  └─ providers.tsx
│     ├─ components.json
│     ├─ eslint.config.js
│     ├─ hooks
│     │  └─ .gitkeep
│     ├─ lib
│     │  └─ .gitkeep
│     ├─ next-env.d.ts
│     ├─ next.config.mjs
│     ├─ package.json
│     ├─ postcss.config.mjs
│     ├─ tailwind.config.ts
│     └─ tsconfig.json
├─ package.json
├─ packages
│  ├─ Database
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ prisma
│  │  │  └─ schema.prisma
│  │  └─ src
│  │     └─ prisma.ts
│  ├─ eslint-config
│  │  ├─ base.js
│  │  ├─ next.js
│  │  ├─ package.json
│  │  ├─ react-internal.js
│  │  └─ README.md
│  ├─ typescript-config
│  │  ├─ base.json
│  │  ├─ nextjs.json
│  │  ├─ package.json
│  │  ├─ react-library.json
│  │  └─ README.md
│  └─ ui
│     ├─ components.json
│     ├─ eslint.config.js
│     ├─ package.json
│     ├─ postcss.config.mjs
│     ├─ src
│     │  ├─ components
│     │  │  ├─ .gitkeep
│     │  │  ├─ button.tsx
│     │  │  ├─ signin-form.tsx
│     │  │  ├─ signup-form.tsx
│     │  │  └─ ui
│     │  │     ├─ input.tsx
│     │  │     └─ label.tsx
│     │  ├─ hooks
│     │  │  └─ .gitkeep
│     │  ├─ lib
│     │  │  └─ utils.ts
│     │  └─ styles
│     │     └─ globals.css
│     ├─ tailwind.config.ts
│     ├─ tsconfig.json
│     └─ tsconfig.lint.json
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ README.md
├─ tsconfig.json
└─ turbo.json

```
```
docq
├─ .cursor
│  └─ rules
│     └─ docq.mdc
├─ .eslintrc.js
├─ .npmrc
├─ apps
│  ├─ api
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ src
│  │  │  ├─ controllers
│  │  │  │  ├─ auth.controller.ts
│  │  │  │  └─ document.controller.ts
│  │  │  ├─ index.ts
│  │  │  ├─ middleware
│  │  │  │  ├─ auth.middleware.ts
│  │  │  │  └─ validation.middleware.ts
│  │  │  ├─ routes
│  │  │  │  ├─ auth.router.ts
│  │  │  │  └─ document.router.ts
│  │  │  ├─ services
│  │  │  │  ├─ auth.service.ts
│  │  │  │  └─ document.service.ts
│  │  │  ├─ types
│  │  │  │  └─ auth.ts
│  │  │  └─ validation
│  │  │     ├─ auth.schema.ts
│  │  │     └─ document.schema.ts
│  │  ├─ tsconfig.json
│  │  └─ turbo.json
│  ├─ dashboard
│  │  ├─ eslint.config.mjs
│  │  ├─ next-env.d.ts
│  │  ├─ next.config.ts
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ postcss.config.mjs
│  │  ├─ public
│  │  │  ├─ file.svg
│  │  │  ├─ globe.svg
│  │  │  ├─ next.svg
│  │  │  ├─ vercel.svg
│  │  │  └─ window.svg
│  │  ├─ README.md
│  │  ├─ src
│  │  │  ├─ app
│  │  │  │  ├─ favicon.ico
│  │  │  │  ├─ globals.css
│  │  │  │  ├─ layout.tsx
│  │  │  │  └─ page.tsx
│  │  │  └─ middleware.ts
│  │  ├─ tailwind.config.ts
│  │  └─ tsconfig.json
│  ├─ editor
│  │  ├─ eslint.config.mjs
│  │  ├─ next-env.d.ts
│  │  ├─ next.config.ts
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ postcss.config.mjs
│  │  ├─ public
│  │  │  ├─ file.svg
│  │  │  ├─ globe.svg
│  │  │  ├─ next.svg
│  │  │  ├─ vercel.svg
│  │  │  └─ window.svg
│  │  ├─ README.md
│  │  ├─ src
│  │  │  └─ app
│  │  │     ├─ favicon.ico
│  │  │     ├─ globals.css
│  │  │     ├─ layout.tsx
│  │  │     └─ page.tsx
│  │  ├─ tailwind.config.ts
│  │  └─ tsconfig.json
│  └─ showcase
│     ├─ app
│     │  ├─ (auth)
│     │  │  ├─ signin
│     │  │  │  └─ page.tsx
│     │  │  └─ signup
│     │  │     └─ page.tsx
│     │  ├─ (dashboard)
│     │  │  └─ dashboard
│     │  │     ├─ layout.tsx
│     │  │     └─ page.tsx
│     │  ├─ favicon.ico
│     │  ├─ layout.tsx
│     │  ├─ page.tsx
│     │  └─ providers.tsx
│     ├─ components
│     │  └─ providers.tsx
│     ├─ components.json
│     ├─ eslint.config.js
│     ├─ hooks
│     ├─ lib
│     ├─ next-env.d.ts
│     ├─ next.config.mjs
│     ├─ package.json
│     ├─ postcss.config.mjs
│     ├─ tailwind.config.ts
│     └─ tsconfig.json
├─ package.json
├─ packages
│  ├─ Database
│  │  ├─ mongodb.config.js
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ prisma
│  │  │  └─ schema.prisma
│  │  └─ src
│  │     ├─ mongodb.ts
│  │     └─ prisma.ts
│  ├─ eslint-config
│  │  ├─ base.js
│  │  ├─ next.js
│  │  ├─ package.json
│  │  ├─ react-internal.js
│  │  └─ README.md
│  ├─ typescript-config
│  │  ├─ base.json
│  │  ├─ nextjs.json
│  │  ├─ package.json
│  │  ├─ react-library.json
│  │  └─ README.md
│  └─ ui
│     ├─ components.json
│     ├─ eslint.config.js
│     ├─ package.json
│     ├─ postcss.config.mjs
│     ├─ src
│     │  ├─ components
│     │  │  ├─ button.tsx
│     │  │  ├─ signin-form.tsx
│     │  │  ├─ signup-form.tsx
│     │  │  ├─ ui
│     │  │  │  ├─ input.tsx
│     │  │  │  └─ label.tsx
│     │  │  └─ user-menu.tsx
│     │  ├─ context
│     │  │  └─ auth-context.tsx
│     │  ├─ hooks
│     │  ├─ lib
│     │  │  └─ utils.ts
│     │  ├─ styles
│     │  │  └─ globals.css
│     │  └─ utils
│     │     └─ auth.ts
│     ├─ tailwind.config.ts
│     ├─ tsconfig.json
│     └─ tsconfig.lint.json
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ README.md
├─ tsconfig.json
└─ turbo.json

```
```
docq
├─ .cursor
│  └─ rules
│     └─ docq.mdc
├─ .eslintrc.js
├─ .npmrc
├─ apps
│  ├─ api
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ src
│  │  │  ├─ controllers
│  │  │  │  ├─ auth.controller.ts
│  │  │  │  └─ document.controller.ts
│  │  │  ├─ index.ts
│  │  │  ├─ middleware
│  │  │  │  ├─ auth.middleware.ts
│  │  │  │  └─ validation.middleware.ts
│  │  │  ├─ routes
│  │  │  │  ├─ auth.router.ts
│  │  │  │  └─ document.router.ts
│  │  │  ├─ services
│  │  │  │  ├─ auth.service.ts
│  │  │  │  └─ document.service.ts
│  │  │  ├─ types
│  │  │  │  └─ auth.ts
│  │  │  └─ validation
│  │  │     ├─ auth.schema.ts
│  │  │     └─ document.schema.ts
│  │  ├─ tsconfig.json
│  │  └─ turbo.json
│  ├─ dashboard
│  │  ├─ eslint.config.mjs
│  │  ├─ next-env.d.ts
│  │  ├─ next.config.ts
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ postcss.config.mjs
│  │  ├─ public
│  │  │  ├─ file.svg
│  │  │  ├─ globe.svg
│  │  │  ├─ next.svg
│  │  │  ├─ vercel.svg
│  │  │  └─ window.svg
│  │  ├─ README.md
│  │  ├─ src
│  │  │  ├─ app
│  │  │  │  ├─ favicon.ico
│  │  │  │  ├─ globals.css
│  │  │  │  ├─ layout.tsx
│  │  │  │  └─ page.tsx
│  │  │  └─ middleware.ts
│  │  ├─ tailwind.config.ts
│  │  └─ tsconfig.json
│  ├─ editor
│  │  ├─ eslint.config.mjs
│  │  ├─ next-env.d.ts
│  │  ├─ next.config.ts
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ postcss.config.mjs
│  │  ├─ public
│  │  │  ├─ file.svg
│  │  │  ├─ globe.svg
│  │  │  ├─ next.svg
│  │  │  ├─ vercel.svg
│  │  │  └─ window.svg
│  │  ├─ README.md
│  │  ├─ src
│  │  │  └─ app
│  │  │     ├─ favicon.ico
│  │  │     ├─ globals.css
│  │  │     ├─ layout.tsx
│  │  │     └─ page.tsx
│  │  ├─ tailwind.config.ts
│  │  └─ tsconfig.json
│  └─ showcase
│     ├─ app
│     │  ├─ (auth)
│     │  │  ├─ signin
│     │  │  │  └─ page.tsx
│     │  │  └─ signup
│     │  │     └─ page.tsx
│     │  ├─ (dashboard)
│     │  │  └─ dashboard
│     │  │     ├─ layout.tsx
│     │  │     └─ page.tsx
│     │  ├─ favicon.ico
│     │  ├─ layout.tsx
│     │  ├─ page.tsx
│     │  └─ providers.tsx
│     ├─ components
│     │  └─ providers.tsx
│     ├─ components.json
│     ├─ eslint.config.js
│     ├─ hooks
│     ├─ lib
│     ├─ next-env.d.ts
│     ├─ next.config.mjs
│     ├─ package.json
│     ├─ postcss.config.mjs
│     ├─ tailwind.config.ts
│     └─ tsconfig.json
├─ package.json
├─ packages
│  ├─ Database
│  │  ├─ mongodb.config.js
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ prisma
│  │  │  └─ schema.prisma
│  │  └─ src
│  │     ├─ mongodb.ts
│  │     └─ prisma.ts
│  ├─ eslint-config
│  │  ├─ base.js
│  │  ├─ next.js
│  │  ├─ package.json
│  │  ├─ react-internal.js
│  │  └─ README.md
│  ├─ typescript-config
│  │  ├─ base.json
│  │  ├─ nextjs.json
│  │  ├─ package.json
│  │  ├─ react-library.json
│  │  └─ README.md
│  └─ ui
│     ├─ components.json
│     ├─ eslint.config.js
│     ├─ package.json
│     ├─ postcss.config.mjs
│     ├─ src
│     │  ├─ components
│     │  │  ├─ button.tsx
│     │  │  ├─ signin-form.tsx
│     │  │  ├─ signup-form.tsx
│     │  │  ├─ ui
│     │  │  │  ├─ input.tsx
│     │  │  │  └─ label.tsx
│     │  │  └─ user-menu.tsx
│     │  ├─ context
│     │  │  └─ auth-context.tsx
│     │  ├─ hooks
│     │  ├─ lib
│     │  │  └─ utils.ts
│     │  ├─ styles
│     │  │  └─ globals.css
│     │  └─ utils
│     │     └─ auth.ts
│     ├─ tailwind.config.ts
│     ├─ tsconfig.json
│     └─ tsconfig.lint.json
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ README.md
├─ tsconfig.json
└─ turbo.json

```#   d o c q  
 
```
docq
├─ .cursor
│  └─ rules
│     └─ docq.mdc
├─ .eslintrc.js
├─ .npmrc
├─ apps
│  ├─ api
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ src
│  │  │  ├─ controllers
│  │  │  │  ├─ auth.controller.ts
│  │  │  │  └─ document.controller.ts
│  │  │  ├─ index.ts
│  │  │  ├─ middleware
│  │  │  │  ├─ auth.middleware.ts
│  │  │  │  └─ validation.middleware.ts
│  │  │  ├─ routes
│  │  │  │  ├─ auth.router.ts
│  │  │  │  └─ document.router.ts
│  │  │  ├─ services
│  │  │  │  ├─ auth.service.ts
│  │  │  │  └─ document.service.ts
│  │  │  ├─ types
│  │  │  │  ├─ auth.ts
│  │  │  │  └─ express.d.ts
│  │  │  └─ validation
│  │  │     ├─ auth.schema.ts
│  │  │     └─ document.schema.ts
│  │  ├─ tsconfig.json
│  │  └─ turbo.json
│  ├─ dashboard
│  │  ├─ eslint.config.mjs
│  │  ├─ next-env.d.ts
│  │  ├─ next.config.ts
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ postcss.config.mjs
│  │  ├─ public
│  │  │  ├─ file.svg
│  │  │  ├─ globe.svg
│  │  │  ├─ next.svg
│  │  │  ├─ vercel.svg
│  │  │  └─ window.svg
│  │  ├─ README.md
│  │  ├─ src
│  │  │  └─ app
│  │  │     ├─ favicon.ico
│  │  │     ├─ globals.css
│  │  │     ├─ layout.tsx
│  │  │     └─ page.tsx
│  │  ├─ tailwind.config.ts
│  │  └─ tsconfig.json
│  ├─ editor
│  │  ├─ eslint.config.mjs
│  │  ├─ next-env.d.ts
│  │  ├─ next.config.ts
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ postcss.config.mjs
│  │  ├─ public
│  │  │  ├─ file.svg
│  │  │  ├─ globe.svg
│  │  │  ├─ next.svg
│  │  │  ├─ vercel.svg
│  │  │  └─ window.svg
│  │  ├─ README.md
│  │  ├─ src
│  │  │  └─ app
│  │  │     ├─ favicon.ico
│  │  │     ├─ globals.css
│  │  │     ├─ layout.tsx
│  │  │     └─ page.tsx
│  │  ├─ tailwind.config.ts
│  │  └─ tsconfig.json
│  └─ showcase
│     ├─ app
│     │  ├─ (auth)
│     │  │  ├─ signin
│     │  │  │  └─ page.tsx
│     │  │  └─ signup
│     │  │     └─ page.tsx
│     │  ├─ (dashboard)
│     │  │  └─ dashboard
│     │  │     ├─ layout.tsx
│     │  │     └─ page.tsx
│     │  ├─ favicon.ico
│     │  ├─ layout.tsx
│     │  ├─ page.tsx
│     │  └─ providers.tsx
│     ├─ components
│     │  └─ providers.tsx
│     ├─ components.json
│     ├─ eslint.config.js
│     ├─ hooks
│     ├─ lib
│     ├─ next-env.d.ts
│     ├─ next.config.mjs
│     ├─ package.json
│     ├─ postcss.config.mjs
│     ├─ tailwind.config.ts
│     └─ tsconfig.json
├─ package.json
├─ packages
│  ├─ Database
│  │  ├─ mongodb.config.js
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ prisma
│  │  │  └─ schema.prisma
│  │  └─ src
│  │     ├─ mongodb.ts
│  │     └─ prisma.ts
│  ├─ eslint-config
│  │  ├─ base.js
│  │  ├─ next.js
│  │  ├─ package.json
│  │  ├─ react-internal.js
│  │  └─ README.md
│  ├─ typescript-config
│  │  ├─ base.json
│  │  ├─ nextjs.json
│  │  ├─ package.json
│  │  ├─ react-library.json
│  │  └─ README.md
│  └─ ui
│     ├─ components.json
│     ├─ eslint.config.js
│     ├─ package.json
│     ├─ postcss.config.mjs
│     ├─ src
│     │  ├─ components
│     │  │  ├─ button.tsx
│     │  │  ├─ loader.tsx
│     │  │  ├─ signin-form.tsx
│     │  │  ├─ signup-form.tsx
│     │  │  ├─ ui
│     │  │  │  ├─ input.tsx
│     │  │  │  └─ label.tsx
│     │  │  └─ user-menu.tsx
│     │  ├─ context
│     │  │  └─ auth-context.tsx
│     │  ├─ hooks
│     │  ├─ lib
│     │  │  └─ utils.ts
│     │  ├─ styles
│     │  │  └─ globals.css
│     │  └─ utils
│     │     └─ auth.ts
│     ├─ tailwind.config.ts
│     ├─ tsconfig.json
│     └─ tsconfig.lint.json
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ README.md
├─ tsconfig.json
└─ turbo.json

```
```
docq
├─ .cursor
│  └─ rules
│     └─ docq.mdc
├─ .eslintrc.js
├─ .npmrc
├─ apps
│  ├─ api
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ src
│  │  │  ├─ controllers
│  │  │  │  ├─ auth.controller.ts
│  │  │  │  └─ document.controller.ts
│  │  │  ├─ index.ts
│  │  │  ├─ middleware
│  │  │  │  ├─ auth.middleware.ts
│  │  │  │  └─ validation.middleware.ts
│  │  │  ├─ routes
│  │  │  │  ├─ auth.router.ts
│  │  │  │  └─ document.router.ts
│  │  │  ├─ services
│  │  │  │  ├─ auth.service.ts
│  │  │  │  └─ document.service.ts
│  │  │  ├─ types
│  │  │  │  ├─ auth.ts
│  │  │  │  └─ express.d.ts
│  │  │  └─ validation
│  │  │     ├─ auth.schema.ts
│  │  │     └─ document.schema.ts
│  │  ├─ tsconfig.json
│  │  └─ turbo.json
│  ├─ dashboard
│  │  ├─ components.json
│  │  ├─ eslint.config.mjs
│  │  ├─ next-env.d.ts
│  │  ├─ next.config.ts
│  │  ├─ package.json
│  │  ├─ postcss.config.mjs
│  │  ├─ public
│  │  │  ├─ file.svg
│  │  │  ├─ globe.svg
│  │  │  ├─ next.svg
│  │  │  ├─ vercel.svg
│  │  │  └─ window.svg
│  │  ├─ README.md
│  │  ├─ src
│  │  │  └─ app
│  │  │     ├─ favicon.ico
│  │  │     ├─ layout.tsx
│  │  │     └─ page.tsx
│  │  ├─ tailwind.config.ts
│  │  └─ tsconfig.json
│  ├─ editor
│  │  ├─ eslint.config.mjs
│  │  ├─ next-env.d.ts
│  │  ├─ next.config.ts
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ postcss.config.mjs
│  │  ├─ public
│  │  │  ├─ file.svg
│  │  │  ├─ globe.svg
│  │  │  ├─ next.svg
│  │  │  ├─ vercel.svg
│  │  │  └─ window.svg
│  │  ├─ README.md
│  │  ├─ src
│  │  │  └─ app
│  │  │     ├─ favicon.ico
│  │  │     ├─ globals.css
│  │  │     ├─ layout.tsx
│  │  │     └─ page.tsx
│  │  ├─ tailwind.config.ts
│  │  └─ tsconfig.json
│  └─ showcase
│     ├─ app
│     │  ├─ (auth)
│     │  │  ├─ signin
│     │  │  │  └─ page.tsx
│     │  │  └─ signup
│     │  │     └─ page.tsx
│     │  ├─ (dashboard)
│     │  │  └─ dashboard
│     │  │     ├─ layout.tsx
│     │  │     └─ page.tsx
│     │  ├─ favicon.ico
│     │  ├─ layout.tsx
│     │  ├─ page.tsx
│     │  └─ providers.tsx
│     ├─ components
│     │  └─ providers.tsx
│     ├─ components.json
│     ├─ eslint.config.js
│     ├─ hooks
│     ├─ lib
│     ├─ next-env.d.ts
│     ├─ next.config.mjs
│     ├─ package.json
│     ├─ postcss.config.mjs
│     ├─ tailwind.config.ts
│     └─ tsconfig.json
├─ package.json
├─ packages
│  ├─ Database
│  │  ├─ mongodb.config.js
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ prisma
│  │  │  └─ schema.prisma
│  │  └─ src
│  │     ├─ mongodb.ts
│  │     └─ prisma.ts
│  ├─ eslint-config
│  │  ├─ base.js
│  │  ├─ next.js
│  │  ├─ package.json
│  │  ├─ react-internal.js
│  │  └─ README.md
│  ├─ typescript-config
│  │  ├─ base.json
│  │  ├─ nextjs.json
│  │  ├─ package.json
│  │  ├─ react-library.json
│  │  └─ README.md
│  └─ ui
│     ├─ components.json
│     ├─ eslint.config.js
│     ├─ package.json
│     ├─ postcss.config.mjs
│     ├─ src
│     │  ├─ app
│     │  │  └─ dashboard
│     │  │     └─ page.tsx
│     │  ├─ components
│     │  │  ├─ app-sidebar.tsx
│     │  │  ├─ loader.tsx
│     │  │  ├─ nav-main.tsx
│     │  │  ├─ nav-projects.tsx
│     │  │  ├─ nav-user.tsx
│     │  │  ├─ signin-form.tsx
│     │  │  ├─ signup-form.tsx
│     │  │  ├─ team-switcher.tsx
│     │  │  ├─ theme-toggle.tsx
│     │  │  ├─ ui
│     │  │  │  ├─ avatar.tsx
│     │  │  │  ├─ breadcrumb.tsx
│     │  │  │  ├─ button.tsx
│     │  │  │  ├─ collapsible.tsx
│     │  │  │  ├─ dropdown-menu.tsx
│     │  │  │  ├─ input.tsx
│     │  │  │  ├─ label.tsx
│     │  │  │  ├─ separator.tsx
│     │  │  │  ├─ sheet.tsx
│     │  │  │  ├─ sidebar.tsx
│     │  │  │  ├─ skeleton.tsx
│     │  │  │  └─ tooltip.tsx
│     │  │  └─ user-menu.tsx
│     │  ├─ context
│     │  │  └─ auth-context.tsx
│     │  ├─ hooks
│     │  │  └─ use-mobile.tsx
│     │  ├─ lib
│     │  │  └─ utils.ts
│     │  ├─ providers
│     │  │  └─ theme-provider.tsx
│     │  ├─ styles
│     │  │  └─ globals.css
│     │  └─ utils
│     │     └─ auth.ts
│     ├─ tailwind.config.ts
│     ├─ tsconfig.json
│     └─ tsconfig.lint.json
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ README.md
├─ tsconfig.json
└─ turbo.json

```