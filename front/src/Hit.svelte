<script lang="ts">
  import type { Hit } from "./types";

  export let hit: Hit;

  import { client, query } from "./stores";
  let body = hit.body;
  let title = hit.body;

  $: {
    let bodyShort = hit.body.substring(0, 200);
    if ($query.length > 0) {
      const regex = new RegExp($query, "gi");
      title = hit.title?.replace(regex, (match) => `<mark>${match}</mark>`);
      body = bodyShort.replace(regex, (match) => `<mark>${match}</mark>`);
    } else {
      body = bodyShort;
      title = hit.title;
    }
  }

  let children = [];

  const getRelated = async () => {
    let q = `questionId:${hit.questionId} AND type:answer`;
    if (hit.type == "answer") {
      q = `answerId:${hit.answerId} AND type:question`;
    }
    const res = await $client.search({
      maxHits: 10,
      query: q,
      indexId: "stackoverflow",
    });
    children = res.hits;
  };
</script>

<div class="Hit">
  {#if hit.title}
    <h2>{hit.title}</h2>
  {/if}
  <p>{@html body}</p>
  <button on:click={getRelated}>related</button>
  {#each children as child}
    <div class="Hit">
      <p>{@html child.body}</p>
    </div>
  {/each}
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
