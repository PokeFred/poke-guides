<script lang="ts">
    import "../app.css"
    import "@fontsource/nunito"
    import { afterNavigate } from "$app/navigation"
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

<custom-theming-element data-theme="{$theme}" class="{$darkmode ? 'dark' : 'light'}">
    <div class="top-0 left-0 w-screen h-screen text-surface-900-50-token bg-surface-50-900-token absolute">
        <div class="mx-auto my-8 w-full max-w-4xl h-auto bg-surface-100-800-token rounded-xl p-4">
            <slot />
        </div>
    </div>
</custom-theming-element>
