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
    flex: 1 0 auto;
    flex-flow: row wrap;
    justify-content: flex-start;
    padding: 0;
    display: flex;
    gap: 5px;
  }
  .tag {
    list-style: none;
    padding: 3px 12px;
    columns: var(--main-color);
    font-weight: 700;
    background-color: var(--bright-color);
    border-radius: 3px;
    border: 1px solid var(--secondary-color);
  }
</style>
