<script lang="ts">
    import { goto } from "$app/navigation"
    import { page } from "$app/stores"
    import { isSidebarOpen } from "$stores"
    import type { SidebarLink } from "$utils"

    export let links: SidebarLink[]

    function isActiveButton(elementPathname: string): boolean {
        return elementPathname === $page.url.pathname
    }
</script>

<div class="{($isSidebarOpen) ? 'w-64' : 'w-0'} h-full bg-surface-800 transition-width duration-300">
    <div class="w-full h-12"></div>
    {#key $page.url}
        {#each links as elememt}
            <button on:click={() => goto(elememt.pathname)} class="w-full h-12 text-xl flex justify-start items-center cursor-pointer pl-4 hover:opacity-75 {isActiveButton(elememt.pathname) ? 'underline opacity-50 cursor-default' : ''}" disabled={isActiveButton(elememt.pathname)}>{elememt.name}</button>
        {/each}
    {/key}
</div>
