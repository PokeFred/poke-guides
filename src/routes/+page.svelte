
<script lang="ts">
    import { darkmode } from "$stores/darkmode"
    import { theme, getAllThemes } from "$stores/theme"
    import { SlideToggle } from "@skeletonlabs/skeleton"

    function changeTheme(event: { currentTarget: HTMLSelectElement }): void {
        $theme = event.currentTarget.value
    }
</script>

<div class="text-3xl text-center underline">PokeGuides</div>
<SlideToggle name="slide" bind:checked={$darkmode} />
<select class="select" size="4" value="{$theme}" on:change={changeTheme}>
    {#each getAllThemes() as element}
        <option value={element.key}>{element.name}</option>
    {/each}
</select>
