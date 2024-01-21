<script lang="ts">
    import '../app.css'
    import 'highlight.js/styles/github-dark.css'
    import type { LayoutServerData } from "./$types"
    import { afterNavigate } from "$app/navigation"
    import type { AfterNavigate } from "@sveltejs/kit"
    import { initializeStores, Drawer, Modal, Toast, storePopup, storeHighlightJs, AppShell } from '@skeletonlabs/skeleton'
    import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom'
    import hljs from 'highlight.js/lib/core'
    import Header from "$components/header.svelte"
    import Sidebar from "$components/sidebar.svelte"
    import PageTransition from "$components/pageTransition.svelte"
    import { selectedTheme, isDarkMode } from "$stores"

    async function loadHighlights(): Promise<void> {
        hljs.registerLanguage('javascript', (await import('highlight.js/lib/languages/javascript')).default)
        hljs.registerLanguage('typescript', (await import('highlight.js/lib/languages/typescript')).default)
        hljs.registerLanguage('json', (await import('highlight.js/lib/languages/json')).default)
    }

    initializeStores()
    storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow })
    loadHighlights()
    storeHighlightJs.set(hljs)

    afterNavigate((event: AfterNavigate): void => {
        const isNewPage: boolean = event.from?.route.id !== event.to?.route.id
        const elementPage: Element | null = document.querySelector("#page")

        if (isNewPage && (elementPage !== null)) {
            elementPage.scrollTop = 0
        }
    })

    export let data: LayoutServerData | null
</script>

<div data-theme="{$selectedTheme}" class="{($isDarkMode) ? 'dark' : 'light'}">
    <!-- Skeleton Utility initializes -->
    <Drawer />
    <Modal />
    <Toast />

    <!-- the actual page -->
    <div class="w-screen h-screen text-surface-200 bg-surface-900">
        <AppShell>
            <!-- Sidebar -->
            <Sidebar slot="sidebarLeft" links={data?.links} />

            <!-- Header -->
            <Header slot="pageHeader" />

            <!-- Content -->
            <PageTransition>
                <div class="w-full h-full overflow-hidden relative p-4">
                    <slot />
                </div>
            </PageTransition>
        </AppShell>
    </div>
</div>
