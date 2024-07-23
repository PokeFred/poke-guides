<script lang="ts">
    import { CodeBlock } from "@skeletonlabs/skeleton"
</script>

<div>Hello World</div>

<div class="categorie-title hidden">Uncategorized</div>
<div class="description-card hidden">
    <div class="description-card-title">src/routes/+page.svelte</div>
    <div class="description-card-body">
        <div>This is a client-side page. Each file that follows the pattern of svelte components represent an individual page within the application. These pages can be rendered on the client or server side, enabling interactive UI components and dynamic content.</div>
    </div>
</div>
<div class="description-card hidden">
    <div class="description-card-title">src/routes/+layout.svelte</div>
    <div class="description-card-body">
        <div>Layout components define the layout for a specific route or group of routes. They can be nested on subroutes to create complex layout structures. A layout might provide common navigation or a footer for multiple pages.</div>
    </div>
</div>
<div class="description-card hidden">
    <div class="description-card-title">src/routes/+page.ts</div>
    <div class="description-card-body">
        <div>This file is used for loading data on the client side. Asynchronous operations, such as API calls, can be performed here to fetch data that will then be used in the association with Svelte components.</div>
    </div>
</div>
<div class="description-card hidden">
    <div class="description-card-title">src/routes/+page.server.ts</div>
    <div class="description-card-body">
        <div>This file handles data loading on the server side and manages form actions. It allows data to be prepared server-side before being send to the client, which can improve security and performance. Asides it's giving access to databases and the server side filesystem.</div>
    </div>
</div>
<div class="description-card hidden">
    <div class="description-card-title">&lt;root&gt;/src/routes/+server.ts</div>
    <div class="description-card-body">
        <div>This file is used to create custom HTTP API routes. It can handle various HTTP methods like GET, POST, PATCH, and PUT, enabling the creation of endpoints that can be accessed by other parts of the application or external services.</div>
        <br />
        <div>Basic Code Example for an JSON based backend API:</div>
        <div class="my-2"><CodeBlock language="ts" code={`import type { RequestHandler } from "./$types"\n\nexport const POST: RequestHandler = async (): Promise<Response> => {\n\treturn new Response(JSON.stringify({ success: true, message: "Hello World" }), {\n\t\tstatus: 200,\n\t\theaders: {\n\t\t\t"Content-Type": "application/json"\n\t\t}\n\t})\n}`} /></div>
    </div>
</div>
<div class="description-card hidden">
    <div class="description-card-title">&lt;root&gt;/src/hooks.server.ts</div>
    <div class="description-card-body">
        <div>This file acts as middleware and is executed server-side before each request and route call. It can be used for tasks such as implementing authentication, logging requests, or other server-side preparations.</div>
        <br />
        <div>Lets create a small example of a basic middleware to implement user authentication and set a custom header only between the middleware and the server which the user aren't seing.</div>
        <div>First Step: Setting the Locals for Typescript Support (<span class="font-bold px-1">&lt;root&gt;/src/app.d.ts</span>)</div>
        <div class="my-2"><CodeBlock language="ts" code={`declare global {\n\tnamespace App {\n\t\tinterface Locals {\n\t\t\tauth: {\n\t\t\t\tisAuth: boolean,\n\t\t\t\tuserId: string\n\t\t\t}\n\t\t}\n\t}\n}\n\nexport {}`} /></div>
        <div>Second Step: Creating the actual Hooks-File:</div>
        <div class="my-2"><CodeBlock language="ts" code={`import type { Handle } from "@sveltejs/kit"\nimport type { Cookies } from "@sveltejs/kit"\n\nasync function handleAuth(cookies: Cookies): { isAuth: boolean, userId: string } {\n\t// implement real logic here with a database check!!!\n\treturn { isAuth: true, userId: "" }\n}\n\nexport const handle: Handle = async ({ event, resolve }): Promise<Response> => {\n\tevent.locals = {\n\t\tauth: await handleAuth(event.cookies)\n\t}\n\n\tconst response: Response = await resolve(event)\n\tresponse.headers.set("x-custom-header", "potato");\n\n\treturn response\n}`} /></div>
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
