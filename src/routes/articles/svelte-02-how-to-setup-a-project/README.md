package-lock.json
```json
{
    "name": "test-project",
    "version": "0.0.0",
    "type": "module",
    "private": true,
    "scripts": {
        "dev": "vite dev",
        "build": "vite build",
        "preview": "vite preview"
    },
    "devDependencies": {
        "@sveltejs/adapter-auto": "^3.0.0",
        "@sveltejs/kit": "^2.0.0",
        "@sveltejs/vite-plugin-svelte": "^3.0.0",
        "svelte": "^4.2.7",
        "tslib": "^2.4.1",
        "typescript": "^5.0.0",
        "vite": "^5.0.3"
    }
}
```

svelte.config.js
```js
import adapter from "@sveltejs/adapter-auto"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import("@sveltejs/kit").Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter()
    }
}

export default config
```

tsconfig.json
```json
{
    "extends": "./.svelte-kit/tsconfig.json",
    "compilerOptions": {
        "allowJs": true,
        "checkJs": true,
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "resolveJsonModule": true,
        "skipLibCheck": true,
        "sourceMap": true,
        "strict": true,
        "moduleResolution": "bundler"
    }
}
```

vite.config.ts
```ts
import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"

export default defineConfig({
    plugins: [sveltekit()]
})
```
