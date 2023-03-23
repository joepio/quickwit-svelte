<script lang="ts">
  import type { Hit } from "./types";

  export let hit: Hit;
  export let query: string;

  let body = hit.body;
  let title = hit.body;

  $: {
    let bodyShort = hit.body.substring(0, 200);
    if (query.length > 0) {
      const regex = new RegExp(query, "gi");
      title = hit.title?.replace(regex, (match) => `<mark>${match}</mark>`);
      body = bodyShort.replace(regex, (match) => `<mark>${match}</mark>`);
    } else {
      body = bodyShort;
      title = hit.title;
    }
  }
</script>

<div class="Hit">
  {#if hit.title}
    <h2>{hit.title}</h2>
  {/if}
  <p>{@html body}</p>
</div>

<style>
  .Hit {
    border: 1px solid var(--bg2);
    background-color: var(--bg);
    border-radius: var(--border-radius);
    padding: 1rem;
    margin: 1rem 0;
  }
</style>
