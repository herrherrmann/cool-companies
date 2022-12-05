<script>
  import { onMount } from 'svelte'
  import { getCompanies } from '../services/api'
  import Company from './Company.svelte'

  let loading = true
  let companies = []

  onMount(async () => {
    companies = await getCompanies()
    loading = false
  })
</script>

<ul>
  {#if loading}
    <p>Loading…</p>
  {/if}
  {#each companies as company}
    <Company
      name={company.fields.name}
      logo={company.fields.logoSrc}
      url={company.fields.url}
      comment={company.fields.comment}
    />
  {/each}
</ul>

<style>
  ul {
    margin: 0;
    padding: 0;
  }
</style>
