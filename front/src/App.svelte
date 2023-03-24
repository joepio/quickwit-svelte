<script lang="ts">
  import About from "./About.svelte";
  import Results from "./Results.svelte";

  import { query } from "./stores";
</script>

<main>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <a
    href="/"
    on:click={(e) => {
      e.preventDefault();
      $query = "";
    }}
  >
    <h1 class="logo">
      <span class="logo--open">Open</span>Besluitvorming
    </h1>
  </a>
  <input
    type="text"
    name="search"
    autocomplete="off"
    placeholder="Zoek door 300+ gemeenten..."
    class="SearchBar"
    bind:value={$query}
  />
  {#if $query.length > 0}
    <Results />
  {:else}
    <About />
  {/if}
</main>

<style>
  main {
    max-width: 40rem;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }
  .logo {
    color: var(--blue);
    margin-bottom: 1rem;
  }
  .logo--open {
    color: var(--bluedark);
  }
  .SearchBar {
    box-shadow: var(--box-shadow);
    flex: 1;
    padding: 1rem;
    font-size: 1rem;
    border: 1px solid var(--bg3);
    border-radius: var(--border-radius);
    background-color: var(--bg);
  }
  .SearchBar::-webkit-input-placeholder {
    color: var(--bg4);
  }
</style>
