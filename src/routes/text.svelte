<script lang="ts">
  export let text = "";
  export let baseDelay = 0;
  export let className = "";
  export let split = true;
  
  // Fonction pour diviser le texte en caractères
  const splitText = (text: string) => [...text];
</script>

{#if split == true}
<h1 class={className}>
  {#each splitText(text) as char, index}
    <span
      class="animate-reveal inline-block [animation-fill-mode:backwards]"
      style="animation-delay: {baseDelay + index * 0.05}s"
    >
      {char === " " ? "\u00A0" : char}
    </span>
  {/each}
</h1>
{:else}

<h1 class={className}>
    <span
      class="animate-reveal inline-block [animation-fill-mode:backwards]"
      style="animation-delay: {1 + baseDelay}s"
    >
      {text}
    </span>
</h1>
{/if}

