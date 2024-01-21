<script lang="ts">
    import Icon from "svelte-awesome"
    import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"
    import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark"
    import { isSidebarOpen } from "$stores"

    function toggleSidebar(): void {
        $isSidebarOpen = !($isSidebarOpen)
    }
</script>

<div class="w-full h-12 bg-surface-800 flex justify-start items-center">
    <button on:click={toggleSidebar} class="w-12 h-12 flex justify-center items-center shrink-0">
        <Icon data={($isSidebarOpen) ? faXmark : faBars} class="w-6 h-6 text-surface-200" />
    </button>
    <div class="w-full h-full text-surface-200 text-3xl flex justify-center items-center">PokeGuides</div>
</div>
