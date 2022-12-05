<script lang="ts">
  import { getImageUrl } from '../services/api'

  export let name
  export let logo
  export let url
  export let comment
  export let tags
  export let locations
</script>

<li class="company">
  {#if logo}
    <img src={getImageUrl(logo, 100, 100)} alt="{name} logo" class="logo" />
  {:else}
    <div class="logo" />
  {/if}
  <div class="details">
    <a href={url} target="_blank" rel="noreferrer" class="name">
      {name}
    </a>
    <small class="comment">{comment}</small>
  </div>
  <ul class="locations">
    {#each locations as location}
      <li class="location">
        {location.name}
      </li>
    {/each}
  </ul>
</li>

<style>
  .company {
    list-style: none;
    padding: 15px 0;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid rgba(var(--main-color-rgb), 0.1);
  }
  .company:first-of-type {
    padding-top: 0;
  }
  .company:last-of-type {
    border-bottom: none;
  }
  .logo {
    flex: 0 0 50px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--bright-color);
  }
  .details {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .name {
    color: var(--main-color);
    font-size: var(--font-size-heading);
    font-weight: 700;
    text-decoration: none;
  }
  .name:hover {
    color: var(--main-color);
    text-decoration: underline;
  }
  .comment {
    color: var(--text-color);
    font-size: var(--font-size-default);
  }
  .locations {
    flex: 1 0 auto;
    flex-flow: row wrap;
    justify-content: flex-start;
    padding: 0;
    display: flex;
    gap: 5px;
  }
  .location {
    list-style: none;
    padding: 3px 12px;
    columns: var(--main-color);
    font-weight: 700;
    background-color: var(--bright-color);
    border-radius: 3px;
    border: 1px solid var(--secondary-color);
  }
</style>
