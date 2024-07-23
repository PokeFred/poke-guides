<script lang="ts">
    import "../app.css"
    import "@fontsource/nunito"
    import "highlight.js/styles/github-dark.css"
    import { onMount } from "svelte"
    import { afterNavigate, goto } from "$app/navigation"
    import type { AfterNavigate } from "@sveltejs/kit"
    import { darkmode } from "$stores/darkmode"
    import { theme } from "$stores/theme"
    import { storeHighlightJs, CodeBlock } from "@skeletonlabs/skeleton"
    import hljs from "highlight.js/lib/core"

    onMount(async (): Promise<void> => {
        hljs.registerLanguage("html", (await import("highlight.js/lib/languages/xml")).default)
        hljs.registerLanguage("css", (await import("highlight.js/lib/languages/css")).default)
        hljs.registerLanguage("js", (await import("highlight.js/lib/languages/javascript")).default)
        hljs.registerLanguage("javascript", (await import("highlight.js/lib/languages/javascript")).default)
        hljs.registerLanguage("ts", (await import("highlight.js/lib/languages/typescript")).default)
        hljs.registerLanguage("typescript", (await import("highlight.js/lib/languages/typescript")).default)
        storeHighlightJs.set(hljs)
    })

    afterNavigate((event: AfterNavigate): void => {
        const isNewPage: boolean = event.from?.url.pathname !== event.to?.url.pathname
        const elementPage: Element | null = document.querySelector("#page")

        if (isNewPage && (elementPage !== null)) {
            elementPage.scrollTop = 0
        }
    })
</script>

<svelte:head>
    <title>PokeGuides</title>
</svelte:head>

<custom-theming-element data-theme="{$theme}" class="{$darkmode ? 'dark' : 'light'}">
    <div class="top-0 left-0 w-screen h-screen text-surface-900-50-token bg-surface-50-900-token overflow-x-hidden overflow-y-scroll absolute">
        <div class="w-full h-12 bg-surface-100-800-token flex justify-between items-center relative px-8">
            <button on:click={() => goto("/")} class="text-xl">PokeGuides</button>
            <div></div>
        </div>
        <div class="alert variant-filled-warning mx-auto mt-4 w-96">
            <div class="w-full text-center">This Page is currently under construction.</div>
        </div>
        <div class="mx-auto my-4 w-full max-w-4xl h-auto bg-surface-100-800-token rounded-xl p-4">
            <div class="categorie-title">Uncategorized</div>
            <div class="description-card">
                <div class="description-card-title">src/routes/+page.svelte</div>
                <div class="description-card-body">
                    <div>This is a client-side page. Each file that follows the pattern of svelte components represent an individual page within the application. These pages can be rendered on the client or server side, enabling interactive UI components and dynamic content.</div>
                </div>
            </div>
            <div class="description-card">
                <div class="description-card-title">src/routes/+layout.svelte</div>
                <div class="description-card-body">
                    <div>Layout components define the layout for a specific route or group of routes. They can be nested on subroutes to create complex layout structures. A layout might provide common navigation or a footer for multiple pages.</div>
                </div>
            </div>
            <div class="description-card">
                <div class="description-card-title">src/routes/+page.ts</div>
                <div class="description-card-body">
                    <div>This file is used for loading data on the client side. Asynchronous operations, such as API calls, can be performed here to fetch data that will then be used in the association with Svelte components.</div>
                </div>
            </div>
            <div class="description-card">
                <div class="description-card-title">src/routes/+page.server.ts</div>
                <div class="description-card-body">
                    <div>This file handles data loading on the server side and manages form actions. It allows data to be prepared server-side before being send to the client, which can improve security and performance. Asides it's giving access to databases and the server side filesystem.</div>
                </div>
            </div>
            <div class="description-card">
                <div class="description-card-title">src/routes/+server.ts</div>
                <div class="description-card-body">
                    <div>This file is used to create custom HTTP API routes. It can handle various HTTP methods like GET, POST, PATCH, and PUT, enabling the creation of endpoints that can be accessed by other parts of the application or external services.</div>
                    <br />
                    <div>Basic Code Example for an JSON based backend API:</div>
                    <div class="my-2"><CodeBlock language="ts" code={`import type { RequestHandler } from "./$types"\n\nexport const POST: RequestHandler = async (): Promise<Response> => {\n\treturn new Response(JSON.stringify({ success: true, message: "Hello World" }), {\n\t\tstatus: 200,\n\t\theaders: {\n\t\t\t"Content-Type": "application/json"\n\t\t}\n\t})\n}`} /></div>
                </div>
            </div>
            <div class="description-card">
                <div class="description-card-title">src/hooks.server.ts</div>
                <div class="description-card-body">
                    <div>This file acts as middleware and is executed server-side before each request and route call. It can be used for tasks such as implementing authentication, logging requests, or other server-side preparations.</div>
                </div>
            </div>
            <div class="categorie-title">Error Handling</div>
            <div class="description-card">
                <div class="description-card-title">&lt;root&gt;/src/error.html</div>
                <div class="description-card-body">
                    <div>This file is for server-side errors (5xx errors) caused by internal server issues. As these errors are critical and can't be handled, it's important to provide informative and user-friendly error messages.</div>
                </div>
            </div>
            <div class="description-card">
                <div class="description-card-title">&lt;root&gt;/src/routes/+error.svelte</div>
                <div class="description-card-body">
                    <div>This file handles client-side errors (4xx errors) caused by incorrect user requests. It allows for the display of custom error messages to the user. Error pages getting used on subroutes too, if there is no additional error page for this subroute.</div>
                </div>
            </div>
        </div>
        <div class="mb-4 text-right pr-4">&copy; 2024 by PokeFred. All rights reserved.</div>
    </div>
</custom-theming-element>

<style>
    div.categorie-title {
        @apply text-2xl text-center underline;
    }

    div.description-card {
        @apply mx-auto my-4 w-full h-auto border rounded-xl overflow-hidden;
    }

    div.description-card div.description-card-title {
        @apply w-full h-auto text-lg font-bold border-b px-4 py-1;
    }

    div.description-card div.description-card-body {
        @apply text-base px-4 py-2;
    }
</style>
