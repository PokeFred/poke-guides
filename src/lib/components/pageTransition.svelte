<script lang="ts">
    import { page } from "$app/stores"
    import { fly } from "svelte/transition"

    const x: number = -75
    const y: number = 0
    const duration: number = 400
</script>

{#key $page.url}
    <div
        in:fly={{ x: x, y: y, duration: duration, delay: duration }}
        out:fly={{ x: x, y: y, duration: duration }}
    >
        <slot />
    </div>
{/key}
