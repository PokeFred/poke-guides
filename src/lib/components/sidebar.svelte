<script lang="ts">
    import { goto } from "$app/navigation"
    import { page } from "$app/stores"
    import { isSidebarOpen } from "$stores"
    import type { ArticleLink } from "$utils"

    const sidebarLinks: ArticleLink[] = [
        {
            name: "Home",
            pathname: "/"
        },
        {
            name: "Svelte 01",
            pathname: "/articles/svelte-01-requirements-and-preface"
        },
        {
            name: "Svelte 02",
            pathname: "/articles/svelte-02-how-to-setup-a-project"
        }
    ]

    function isActiveButton(elementPathname: string): boolean {
        return elementPathname === $page.url.pathname
    }
</script>

{#key $page.url}
    {#each sidebarLinks as elememt}
        <button on:click={() => goto(elememt.pathname)} class="w-full h-12 text-xl flex justify-start items-center cursor-pointer pl-4 hover:opacity-75 {isActiveButton(elememt.pathname) ? 'underline opacity-50 cursor-default' : ''}" disabled={isActiveButton(elememt.pathname)}>{elememt.name}</button>
    {/each}
{/key}
