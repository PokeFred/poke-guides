<script lang="ts">
    import { CodeBlock } from "@skeletonlabs/skeleton"

    export let name: string = ""
    export let language: string = ""
    export let code: string = ""
</script>

<div class="w-full h-auto p-4">
    <div class="w-full h-auto rounded-xl overflow-hidden">
        <div class="text-xl text-left bg-surface-800 pt-2 pl-4">{name}</div>
        <CodeBlock
            language={language}
            code={code}
            color="bg-surface-800"
            rounded="none"
            lineNumbers
        />
    </div>
</div>
