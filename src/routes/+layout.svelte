<script lang="ts">
    import '../app.css';
    import '$lib/prism.js';
    import favicon from '$lib/assets/favicon.svg';

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>
<div class="container mx-auto px-4 py-8 prose dark:prose-invert">
    {@render children?.()}
</div>