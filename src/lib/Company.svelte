<script lang="ts">
  import { getImageUrl } from '../services/api'
  import Tags from './Tags.svelte'

  export let name
  export let logo
  export let url
  export let comment
  export let tags
  export let locations

  const flatTags = tags.map((tag) => tag.name)
  const locationTags = locations.map((location) => location.name)
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
  <div class="tags">
    <Tags tags={locationTags} />
  </div>
  <div class="tags">
    <Tags tags={flatTags} />
  </div>
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
    flex: 1 0 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
  .tags {
    flex: 1 0 20%;
  }
</style>
