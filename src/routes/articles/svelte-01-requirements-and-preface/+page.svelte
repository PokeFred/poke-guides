<script lang="ts">
    import CodeBlock from '$components/codeBlock.svelte'
    import ArticelUnderConstructionWarning from '$components/articleUnderConstructionWarning.svelte'
</script>

<div class="mb-2 text-center text-3xl">Svelte 01 - Requirements and Preface</div>
<ArticelUnderConstructionWarning />
<p class="mx-4">Before diving into SvelteKit development, make sure your system meets the following requirements:</p>
<ul>
    <li class="mt-4">
        <strong class="mx-4">Node.js and npm:</strong>
        <ul>
            <li class="mx-4">Ensure you have Node.js installed (at least version 18). You can download the latest version from <a href="https://nodejs.org/" target="_blank">Node.js website</a>.</li>
            <li class="mx-4">To check your Node.js version, run the following command in your terminal:</li>
            <CodeBlock language="shell" code={'$ node -v\nSample Output:\nv18.13.0'} />
            <li class="mx-4">Ensure npm (Node Package Manager) is installed (at least version 7). You can update npm using the command:</li>
            <CodeBlock language="shell" code={'$ npm -v\nSample Output:\n9.2.0'} />
        </ul>
    </li>
    <li class="mt-4">
        <strong class="mx-4">Visual Studio Code:</strong>
        <ul>
            <li class="mx-4">We recommend using Visual Studio Code as your code editor. You can download it from <a href="https://code.visualstudio.com/" target="_blank">VSCode website</a>.</li>
        </ul>
    </li>
    <li class="mt-4">
        <strong class="mx-4">Optional: Svelte VSCode Extension:</strong>
        <ul>
            <li class="mx-4">
                To enhance Svelte development in Visual Studio Code, consider installing the Svelte extension. Search for the extension with the identifier <code>svelte.svelte-vscode</code> in the VSCode extensions marketplace or install it manually.
            </li>
        </ul>
    </li>
</ul>
