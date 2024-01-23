<script lang="ts">
    import { CodeBlock } from '@skeletonlabs/skeleton'

    export let name: string = ''
    export let language: string = ''
    export let code: string = ''
</script>

<div class="h-auto w-full p-4">
    <div class="h-auto w-full overflow-hidden rounded-xl">
        <div class="bg-surface-800 pl-4 pt-2 text-left text-xl">{name}</div>
        <CodeBlock language={language} code={code} color="bg-surface-800" rounded="none" lineNumbers />
    </div>
</div>
