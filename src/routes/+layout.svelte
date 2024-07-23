<script lang="ts">
    import "../app.css"
    import "@fontsource/nunito"
    import "highlight.js/styles/github-dark.css"
    import { onMount } from "svelte"
    import { afterNavigate, goto } from "$app/navigation"
    import type { AfterNavigate } from "@sveltejs/kit"
    import { darkmode } from "$stores/darkmode"
    import { theme } from "$stores/theme"
    import { storeHighlightJs } from "@skeletonlabs/skeleton"
    import hljs from "highlight.js/lib/core"
    import Icon from "svelte-awesome"
    import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"

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
            <div>
                <button on:click={() => goto("/")} class="text-xl">PokeGuides</button>
                <button on:click={() => goto("/error-handling")} class="mx-8">Error Handling</button>
            </div>
            <div></div>
        </div>
        <div class="alert variant-filled-warning mx-auto mt-4 w-96">
            <div class="w-full text-center">This Page is currently under construction.</div>
        </div>
        <div class="mx-auto my-4 w-full max-w-4xl h-auto bg-surface-100-800-token rounded-xl p-4">
            <slot />
        </div>
        <div class="mb-4 flex justify-between items-center px-6">
            <div>
                <a href="https://github.com/PokeFred/poke-guides" target="_blank"><Icon data={faGithub} class="w-8 h-8" /></a>
            </div>
            <div>&copy; 2024 by PokeFred. All rights reserved.</div>
        </div>
    </div>
</custom-theming-element>
