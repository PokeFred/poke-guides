<script lang="ts">
    import CodeBlock from "$components/codeBlock.svelte"
</script>

<div class="text-3xl text-center">Svelte 01</div>

<CodeBlock name="Hello World 1" language="json" code={'{\n\t"key": "value"\n}'} />
<CodeBlock name="Hello World 2" language="typescript" code={'const g: number = 0'} />
<CodeBlock name="Hello World 3" language="json" code={'{"key": "value"}'} />
