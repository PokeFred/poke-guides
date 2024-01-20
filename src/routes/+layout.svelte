<script lang="ts">
    import '../app.css'
    import 'highlight.js/styles/github-dark.css'
    import { initializeStores, Drawer, Modal, Toast, storePopup, storeHighlightJs } from '@skeletonlabs/skeleton'
    import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom'
    import hljs from 'highlight.js/lib/core'

    async function loadHighlights(): Promise<void> {
        hljs.registerLanguage('javascript', (await import('highlight.js/lib/languages/javascript')).default)
        hljs.registerLanguage('typescript', (await import('highlight.js/lib/languages/typescript')).default)
        hljs.registerLanguage('json', (await import('highlight.js/lib/languages/json')).default)
    }

    initializeStores()
    storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow })
    loadHighlights()
    storeHighlightJs.set(hljs)
</script>

<div data-theme="skeleton" class="dark">
    <!-- Skeleton Utility initializes -->
    <Drawer />
    <Modal />
    <Toast />

    <!-- the actual page -->
    <slot />
</div>
