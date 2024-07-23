<script lang="ts">
    import { CodeBlock } from "@skeletonlabs/skeleton"
</script>

<div class="categorie-title">Error Handling</div>
<div class="description-card">
    <div class="description-card-title">Throwing own Errors</div>
    <div class="description-card-body">
        <div>You can throw that in every <span class="font-bold px-1">+page.ts</span>, <span class="font-bold px-1">+page.server.ts</span> or <span class="font-bold px-1">hooks.server.ts</span>.</div>
        <br />
        <div>In that example we throw it from an <span class="font-bold px-1">+page.server.ts</span>.</div>
        <div class="my-2"><CodeBlock language="ts" code={`import { PageServerLoad } from "./$types"\nimport { error } from "@sveltejs/kit"\n\nexport const load: PageServerLoad = async (): Promise<{}> => {\n\t// you can throw here any HTTP-Code like 400/404/500 with a custom error message\n\terror(400, "My Message")\n}`} /></div>
    </div>
</div>
<div class="description-card">
    <div class="description-card-title">&lt;root&gt;/src/error.html</div>
    <div class="description-card-body">
        <div>This file is for server-side errors (5xx errors) caused by internal server issues. As these errors are critical and can't be handled, it's important to provide informative and user-friendly error messages.</div>
        <div class="my-2"><CodeBlock language="html" code={`<!DOCTYPE html>\n<html lang="en">\n\t<head>\n\t\t<meta charset="utf-8" />\n\t\t<title>%sveltekit.error.message%</title>\n\t</head>\n\t<body>\n\t\t<h1>My custom error page</h1>\n\t\t<p>Status: %sveltekit.status%</p>\n\t\t<p>Message: %sveltekit.error.message%</p>\n\t</body>\n</html>`} /></div>
    </div>
</div>
<div class="description-card">
    <div class="description-card-title">&lt;root&gt;/src/routes/+error.svelte</div>
    <div class="description-card-body">
        <div>This file handles client-side errors (4xx errors) caused by incorrect user requests. It allows for the display of custom error messages to the user. Error pages getting used on subroutes too, if there is no additional error page for this subroute.</div>
        <div class="my-2"><CodeBlock language="html" code={`<script>\n\timport { page } from "$app/stores"\n</script>\n\n<h1>{$page.error.message}</h1>`} /></div>
    </div>
</div>

<style>
    div.categorie-title {
        @apply text-2xl text-center underline;
    }

    div.description-card {
        @apply mx-auto my-4 w-full h-auto border rounded-xl overflow-hidden;
    }

    div.description-card div.description-card-title {
        @apply w-full h-auto text-lg font-bold border-b px-4 py-1;
    }

    div.description-card div.description-card-body {
        @apply text-base px-4 py-2;
    }
</style>
