<script lang="ts">
    import { goto } from '$app/navigation'
    import { page } from '$app/stores'
    import type { ArticleLink } from '$utils'

    const sidebarLinks: ArticleLink[] = [
        {
            name: 'Home',
            pathname: '/',
        },
        {
            name: 'Svelte 01',
            pathname: '/articles/svelte-01-requirements-and-preface',
        },
        {
            name: 'Svelte 02',
            pathname: '/articles/svelte-02-how-to-setup-a-project',
        },
        {
            name: 'Svelte 03',
            pathname: '/articles/svelte-03-customize-the-project',
        },
    ]

    function isActiveButton(elementPathname: string): boolean {
        return elementPathname === $page.url.pathname
    }
</script>

{#key $page.url}
    {#each sidebarLinks as elememt}
        <button
            on:click={() => goto(elememt.pathname)}
            class="flex h-12 w-full cursor-pointer items-center justify-start pl-4 text-xl hover:opacity-75 {isActiveButton(elememt.pathname) ? 'cursor-default underline opacity-50' : ''}"
            disabled={isActiveButton(elememt.pathname)}>{elememt.name}</button
        >
    {/each}
{/key}
