<script lang="ts">
    import Icon from "svelte-awesome"
    import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"
    import { getDrawerStore } from "@skeletonlabs/skeleton"

    let drawerStore = getDrawerStore()

    function toggleSidebar(): void {
        drawerStore.open({ id: "sidebar-drawer" })
    }
</script>

<div class="w-full h-12 bg-surface-800 relative">
    <div class="top-1/2 left-1/2 w-full h-full text-surface-200 text-3xl flex justify-center items-center -translate-x-1/2 -translate-y-1/2 absolute">PokeGuides</div>
    <button on:click={toggleSidebar} class="top-0 left-0 w-12 h-12 flex justify-center items-center shrink-0 absolute lg:hidden">
        <Icon data={faBars} class="w-6 h-6 text-surface-200" />
    </button>
</div>
