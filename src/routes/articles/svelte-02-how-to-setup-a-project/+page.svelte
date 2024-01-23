<script lang="ts">
    import CodeBlock from "$components/codeBlock.svelte"
</script>

<div class="mb-2 text-3xl text-center">Svelte 02 - How to setup a Project</div>
<CodeBlock name="<root>/package.json" language="json" code={'{\n\t"name": "test-project",\n\t"version": "0.0.0",\n\t"type": "module",\n\t"private": true,\n\t"scripts": {\n\t\t"dev": "vite dev",\n\t\t"build": "vite build",\n\t\t"preview": "vite preview"\n\t},\n\t"devDependencies": {\n\t\t"@sveltejs/adapter-auto": "^3.0.0",\n\t\t"@sveltejs/kit": "^2.0.0",\n\t\t"@sveltejs/vite-plugin-svelte": "^3.0.0",\n\t\t"svelte": "^4.2.7",\n\t\t"tslib": "^2.4.1",\n\t\t"typescript": "^5.0.0",\n\t\t"vite": "^5.0.3"\n\t}\n}'} />
<CodeBlock name="<root>/svelte.config.js" language="javascript" code={'import adapter from "@sveltejs/adapter-auto"\nimport { vitePreprocess } from "@sveltejs/vite-plugin-svelte"\n\n/** @type {import("@sveltejs/kit").Config} */\nconst config = {\n\tpreprocess: vitePreprocess(),\n\tkit: {\n\t\tadapter: adapter()\n\t}\n}\n\nexport default config'} />
<CodeBlock name="<root>/tsconfig.json" language="json" code={'{\n"extends": "./.svelte-kit/tsconfig.json",\n\t"compilerOptions": {\n\t"allowJs": true,\n\t\t"checkJs": true,\n\t\t"esModuleInterop": true,\n\t\t"forceConsistentCasingInFileNames": true,\n\t\t"resolveJsonModule": true,\n\t\t"skipLibCheck": true,\n\t\t"sourceMap": true,\n\t\t"strict": true,\n\t\t"moduleResolution": "bundler"\n\t}\n}'} />
<CodeBlock name="<root>/vite.config.ts" language="typescript" code={'import { sveltekit } from "@sveltejs/kit/vite"\nimport { defineConfig } from "vite"\n\nexport default defineConfig({\n\tplugins: [sveltekit()]\n})'} />
<CodeBlock name="<root>/src/app.html" language="html" code={'<!doctype html>\n<html lang="en">\n\t<head>\n\t\t<meta charset="utf-8" />\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1" />\n\t\t<link rel="icon" href="%sveltekit.assets%/favicon.png" />\n\t\t%sveltekit.head%\n\t</head>\n\t<body data-sveltekit-preload-data="hover">\n\t\t<div style="display: contents">%sveltekit.body%</div>\n\t</body>\n</html>'} />
<CodeBlock name="<root>/src/app.d.ts" language="typescript" code={'declare global {\n\tnamespace App {}\n}\n\nexport {}'} />
<CodeBlock name="<root>/src/routes/+page.svelte" language="html" code={'<div>Hello World</div>'} />

<div>Customizing</div>
    <CodeBlock name="<root>/vite.config.ts" language="typescript" code={'import type { CommonServerConfig } from "vite"\n\nconst serverConfig: CommonServerConfig = {\n\thost: "0.0.0.0",\n\tport: 3000,\n\tstrictPort: true\n}\n\n// And appending it to your config\nexport default defineConfig({\n\tserver: serverConfig,\n\tpreview: serverConfig\n})'} />
