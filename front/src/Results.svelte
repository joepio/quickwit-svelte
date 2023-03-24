<script lang="ts">
  import Hit from "./Hit.svelte";
  import type { Hit as HitType } from "./types";
  import { query, client } from "./stores";

  $: results = $client.search<HitType>({
    maxHits: 200,
    query: `body:"${$query}" title:"${$query}"`,
    indexId: "stackoverflow",
  });
</script>

{#await results}
  <p class="counter">aan het zoeken...</p>
{:then res}
  <p class="counter">
    {res.num_hits == 10000 ? "10.000+" : res.num_hits} resultaten
  </p>
  <div class="results">
    {#each res.hits as hit}
      <Hit {hit} />
    {/each}
  </div>
{:catch error}
  <p style="color: red">err: {error.message}</p>
{/await}

<style>
  .counter {
    color: var(--bg4);
    font-size: 0.8rem;
    margin-left: auto;
  }
  .results {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
</style>
