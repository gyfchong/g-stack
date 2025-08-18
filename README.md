# GStack

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is almost ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Finish your CI setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/wHysMTMBZN)

## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve g-stack
```

To create a production bundle:

```sh
npx nx build g-stack
```

To see all available targets to run for a project, run:

```sh
npx nx show project g-stack
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

# GStack

This repo uses pnpm workspaces with Vite, Vitest, Playwright, and ESLint (no Nx).

## Quick start

Run from the repo root:

```sh
pnpm dev        # start app dev server
pnpm build      # build the app
pnpm preview    # preview built app at http://localhost:4300
pnpm test       # run unit tests
pnpm test:watch # watch unit tests
pnpm lint       # lint
pnpm typecheck  # type-check
pnpm e2e        # run Playwright tests (auto-starts preview)
```

You can also target a specific package:

```sh
pnpm --filter @g-stack/g-stack dev
pnpm --filter @g-stack/g-stack-e2e test
```
