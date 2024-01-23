<script lang="ts">
    import CodeBlock from "$components/codeBlock.svelte"
</script>

<div class="mb-2 text-3xl text-center">Svelte 03 - Base Building for Node-Server</div>
<CodeBlock name="Terminal" language="shell" code={'$ npm uninstall @sveltejs/adapter-auto\n$ npm i -D @sveltejs/adapter-node\n$ npm i express dotenv'} />
<CodeBlock name="<root>/svelte.config.js" language="javascript" code={'// replace this\nimport adapter from "@sveltejs/adapter-auto"\n// to this\nimport adapter from "@sveltejs/adapter-node"\n\n// and customize the config\nconst config = {\n\tkit: {\n\t\tadapter: adapter({\n\t\t\tout: "./build",\n\t\t\tprecompress: false,\n\t\t\tenvPrefix: ""\n\t\t})\n\t}\n}'} />
<CodeBlock name="<root>/package.json" language="json" code={'{\n\t"scripts": {\n\t\t"start": "node app.js"\n\t}\n}'} />
<CodeBlock name="<root>/app.js" language="javascript" code={'import express from "express"\nimport { handler } from "./build/handler.js"\n\nconst app = express()\napp.use(handler)\napp.listen(3000, "0.0.0.0", () => {\n\tconsole.log("[server] running on http://localhost:3000")\n})'} />