<script lang="ts">
    import Icon from 'svelte-awesome'
    import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
    import { getDrawerStore } from '@skeletonlabs/skeleton'

    let drawerStore = getDrawerStore()

    function toggleSidebar(): void {
        drawerStore.open({ id: 'sidebar-drawer' })
    }
</script>

<div class="relative h-12 w-full bg-surface-800">
    <div class="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center text-3xl text-surface-200">PokeGuides</div>
    <button on:click={toggleSidebar} class="absolute left-0 top-0 flex h-12 w-12 shrink-0 items-center justify-center lg:hidden">
        <Icon data={faBars} class="h-6 w-6 text-surface-200" />
    </button>
</div>
