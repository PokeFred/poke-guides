<script lang="ts">
    import CodeBlock from "$components/codeBlock.svelte"
</script>

<div class="mb-2 text-3xl text-center">Svelte 01 - Requirements and Preface</div>
<div>Before we dive into SvelteKit development, make sure the following requirements are met:</div>
<div>NodeJS: https://nodejs.org (min v18)</div>
<div>npm: v7</div>
<CodeBlock name="Terminal" language="shell" code={'$ node -v\nSample Output:\nv18.13.0\n\n$ npm -v\nSample Output:\n9.2.0'} />
<div>VSCode: https://code.visualstudio.com/</div>
<div>Optional VSCode Extension: Identifier: svelte.svelte-vscode</div>

<CodeBlock name="Hello World 1" language="json" code={'{\n\t"key": "value"\n}'} />
<CodeBlock name="Hello World 2" language="typescript" code={'const g: number = 0'} />
<CodeBlock name="Hello World 3" language="json" code={'{"key": "value"}'} />

# 

## Requirements


1. **Node.js and npm:**
    - Ensure you have Node.js installed (at least version 18). You can download the latest version of Node.js from the official website: [Node.js Download](https://nodejs.org/).
    - Verify your Node.js version by running the following command in your terminal:
        ```bash
        node -v
        ```
    - Ensure you have npm (Node Package Manager) installed (at least version 7). If needed, you can update npm using the command:
        ```bash
        npm install -g npm@latest
        ```
        Verify your npm version by running:
        ```bash
        npm -v
        ```

2. **Visual Studio Code:** We recommend using Visual Studio Code as the code editor for SvelteKit development. You can download Visual Studio Code from the official website: [VSCode Download](https://code.visualstudio.com/).

    ```markdown
    - VSCode: [https://code.visualstudio.com/](https://code.visualstudio.com/)
    ```

3. **Optional: Svelte VSCode Extension:** To enhance Svelte development in Visual Studio Code, consider installing the Svelte extension. Search for the extension with the identifier `svelte.svelte-vscode` in the VSCode extensions marketplace, or install it manually.

    ```markdown
    - Optional VSCode Extension: Identifier: svelte.svelte-vscode
    ```

## Preface

Welcome to the SvelteKit Guide! This guide provides a comprehensive overview of developing web applications with SvelteKit. Before we delve into the details, ensure that the above requirements are met to ensure a smooth development environment. If you have any questions or need assistance, feel free to seek support.

