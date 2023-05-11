<script>
    import GalleryCard from "$lib/components/GalleryCard.svelte";

    export let items;
</script>

<div class="gallery-container gap-4">
    {#each items as img}
        <GalleryCard item={img}/>
    {/each}
</div>

<style lang="scss">
  .gallery-container {
    columns: 2 auto;
  }
</style>