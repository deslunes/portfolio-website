<script>
// @ts-nocheck

  import Text from './text.svelte'
  import Header from './header.svelte'
  import Card from './card.svelte'
  import Background from './background.svelte'

  let { children } = $props();
</script>


<div class="relative max-h-screen w-screen">

  <Background/>
  
  
    <div class="absolute inset-0 z-30 flex items-center justify-center h-screen">
      <div class=" sm:max-w-3xl max-w-[600px] mx-auto">
        
        {@render children()}
  
      </div>
    </div>
  </div>
  
  
  
  <style lang="postcss">
  
    :global(:root, html, body) {
      background: #82c5b6;
      margin: 0;
      height: 100%;
      overflow: hidden;
    }
  </style>