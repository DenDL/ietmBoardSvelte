<script>
    export let item;
</script>

<div class="border border-2 p-2 text-center border-black rounded bg-white">
    <img class='w-full'
         src='{item.download_url}'
         alt='{item.author}'>
    <p>Author: {item.author}</p>
    <p>Id: {item.id}</p>
</div>

<style lang="scss">
  div {
    margin: 0 1rem 1rem 0;
    display: inline-block;
    width: 100%;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    transition: all .25s ease-in-out;

    &:hover img {
      filter: grayscale(0);
    }

    &:hover {
      border-color: coral;
    }

    img {
      width: 100%;
      filter: grayscale(100%);
      border-radius: 5px;
      transition: all .25s ease-in-out;
    }

    p {
      margin: 5px 0;
      padding: 0;
      text-align: center;
      font-style: italic;
    }
  }

</style>