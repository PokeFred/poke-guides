<div class="text-3xl text-center">TTT</div>
<div class="my-2 text-xl text-center">Error Handling</div>
<div class="card my-2 border border-surface-300-600-token">
    <div class="card-title text-lg font-bold border-b border-surface-300-600-token px-4 py-2">&lt;root&gt;/src/error.html</div>
    <div class="card-body text-base p-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, doloribus. Quaerat rerum laborum, nulla esse quisquam modi magnam itaque temporibus harum accusamus delectus fugiat quidem architecto dicta illum quia nobis?</div>
</div>
<div class="card my-2 border border-surface-300-600-token">
    <div class="card-title text-lg font-bold border-b border-surface-300-600-token px-4 py-2">&lt;root&gt;/src/routes/+error.svelte</div>
    <div class="card-body text-base p-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, doloribus. Quaerat rerum laborum, nulla esse quisquam modi magnam itaque temporibus harum accusamus delectus fugiat quidem architecto dicta illum quia nobis?</div>
</div>

<div class="categorie-title">Categorie</div>
<div class="text-block-title">Title</div>
<div class="text-block">lorem</div>
<div class="text-block-title">Title</div>
<div class="text-block">lorem</div>

<hr class="my-8" />

<div class="categorie-title">Error Handling</div>
<div class="text-block-title">&lt;root&gt;/src/error.html</div>
<div class="text-block">This file is for server-side errors (5xx errors) caused by internal server issues. As these errors are critical and can't be handled, it's important to provide informative and user-friendly error messages.</div>
<div class="text-block-title">&lt;root&gt;/src/routes/+error.svelte</div>
<div class="text-block">This file handles client-side errors (4xx errors) caused by incorrect user requests. It allows for the display of custom error messages to the user. Error pages getting used on subroutes too, if there is no additional error page for this subroute.</div>

<hr class="my-8" />

<div class="categorie-title">Categorie</div>
<div class="text-block-title">Title</div>
<div class="text-block">lorem</div>
<div class="text-block-title">Title</div>
<div class="text-block">lorem</div>

<hr class="my-8" />

<div class="text-xl">Uncategorized</div>
<div class="ml-4 text-lg font-bold">src/app.html</div>
<div class="ml-8 text-base">This file serves as the base HTML for the entire application. It is rarely edited as it provides the foundational structure of the website.</div>
<div class="ml-4 text-lg font-bold">src/routes/+page.svelte</div>
<div class="ml-8 text-base">lorem</div>
<div class="ml-4 text-lg font-bold">src/routes/+layout.svelte</div>
<div class="ml-8 text-base">Layout components define the layout for a specific route or group of routes. They can be nested on subroutes to create complex layout structures. A layout might provide common navigation or a footer for multiple pages.</div>
<div class="ml-4 font-bold"></div>
<div class="ml-8 text-base"></div>
<div class="ml-4 font-bold"></div>
<div class="ml-8 text-base"></div>
<div class="ml-4 font-bold"></div>
<div class="ml-8 text-base"></div>
<div class="ml-4 font-bold"></div>
<div class="ml-8 text-base"></div>
<div class="ml-4 font-bold"></div>
<div class="ml-8 text-base"></div>
<div class="ml-4 font-bold"></div>
<div class="ml-8 text-base"></div>
<div class="ml-4 font-bold"></div>
<div class="ml-8 text-base"></div>
<div class="my-16"></div>

<div class="text-xl">Error Handling</div>
<div class="ml-4 text-lg font-bold">src/error.html</div>
<div class="ml-8 text-base">This file is for server-side errors (5xx errors) caused by internal server issues. As these errors are critical and can't be handled, it's important to provide informative and user-friendly error messages.</div>
<div class="ml-4 text-lg font-bold">src/routes/+error.svelte</div>
<div class="ml-8 text-base">This file handles client-side errors (4xx errors) caused by incorrect user requests. It allows for the display of custom error messages to the user. Error pages getting used on subroutes too, if there is no additional error page for this subroute.</div>

<style>
    div.categorie-title {
        @apply text-xl;
    }

    div.text-block-title {
        @apply ml-4 text-lg font-bold;
    }

    div.text-block {
        @apply ml-8 text-base;
    }
</style>

<!--
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
-->
