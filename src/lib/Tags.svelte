<script>
  export let tags
</script>

<ul class="tags">
  {#each tags as tag}
    <li class="tag">
      {tag}
    </li>
  {/each}
</ul>

<style>
  .tags {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    gap: 3px;
    padding: 0;
  }
  .tag {
    list-style: none;
    padding: 5px 10px;
    columns: var(--main-color);
    background-color: var(--bright-color);
    border-radius: 3px;
    border: 1px solid var(--secondary-color);
  }
</style>
