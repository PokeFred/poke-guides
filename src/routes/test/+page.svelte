<script lang="ts">
    import type { PageServerData } from "./$types"

    export let data: PageServerData | null
</script>

<div class="card p-4">
    {#if data !== null}
        {@html data.content}
    {/if}
</div>
