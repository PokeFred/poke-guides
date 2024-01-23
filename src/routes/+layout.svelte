<script lang="ts">
    import '../app.css'
    import 'highlight.js/styles/github-dark.css'
    import type { LayoutServerData } from "./$types"
    import { afterNavigate } from "$app/navigation"
    import type { AfterNavigate } from "@sveltejs/kit"
    import { initializeStores, Drawer, getDrawerStore, Modal, Toast, storePopup, storeHighlightJs, AppShell } from '@skeletonlabs/skeleton'
    import type { DrawerStore } from "@skeletonlabs/skeleton"
    import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom'
    import hljs from 'highlight.js/lib/core'
    import html from 'highlight.js/lib/languages/xml' // for HTML
    import css from 'highlight.js/lib/languages/css'
    import javascript from 'highlight.js/lib/languages/javascript'
    import typescript from 'highlight.js/lib/languages/typescript'
    import json from 'highlight.js/lib/languages/json'
    import shell from 'highlight.js/lib/languages/shell'
    import Header from "$components/header.svelte"
    import Sidebar from "$components/sidebar.svelte"
    import PageTransition from "$components/pageTransition.svelte"
    import { selectedTheme, isDarkMode } from "$stores"

    initializeStores()
    const drawerStore: DrawerStore = getDrawerStore()
    storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow })
    hljs.registerLanguage('html', html)
    hljs.registerLanguage('css', css)
    hljs.registerLanguage('javascript', javascript)
    hljs.registerLanguage('typescript', typescript)
    hljs.registerLanguage('json', json)
    hljs.registerLanguage('shell', shell)
    storeHighlightJs.set(hljs)

    afterNavigate((event: AfterNavigate): void => {
        const isNewPage: boolean = event.from?.route.id !== event.to?.route.id
        const elementPage: Element | null = document.querySelector("#page")

        if (isNewPage) {
            if ($drawerStore.id === "sidebar-drawer") {
                drawerStore.close()
            }
            if (elementPage !== null) {
                elementPage.scrollTop = 0
            }
        }
    })

    export let data: LayoutServerData | null
</script>

<div data-theme="{$selectedTheme}" class="{($isDarkMode) ? 'dark' : 'light'} text-surface-200 bg-surface-900">
    <!-- Skeleton Utility initializes -->
    <Drawer>
        {#if $drawerStore.id === "sidebar-drawer"}
            <div class="p-4">
                <Sidebar />
            </div>
        {/if}
    </Drawer>
    <Modal />
    <Toast />

    <!-- the actual page -->
    <div class="w-screen h-screen">
        <AppShell>
            <!-- Sidebar -->
            <div slot="sidebarLeft" class="w-0 lg:w-64 h-full bg-surface-800">
                <div class="w-full h-12"></div>
                <Sidebar />
            </div>

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
