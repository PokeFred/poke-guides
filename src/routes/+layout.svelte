<script lang="ts">
    import "../app.css"
    import "@fontsource/nunito"
    import { afterNavigate, goto } from "$app/navigation"
    import type { AfterNavigate } from "@sveltejs/kit"
    import { darkmode } from "$stores/darkmode"
    import { theme } from "$stores/theme"

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
            <div>Just a sample text.</div>
        </div>
        <div class="mb-4 text-right pr-4">&copy; 2024 by PokeFred. All rights reserved.</div>
    </div>
</custom-theming-element>
