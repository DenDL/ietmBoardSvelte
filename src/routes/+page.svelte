<script>
    import { data as imgData  } from '../data/imageData.json';
    import Gallery from "$lib/components/Gallery.svelte";
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app"/>
</svelte:head>

<section>
    <div class="container mx-auto">

            <Gallery items="{imgData}" />

    </div>
</section>

<style lang="scss">

</style>
