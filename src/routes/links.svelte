<script>
  import {SquareArrowOutUpRight} from 'lucide-svelte';
  import { links } from '$lib/config';
</script>

<div class="absolute top-0 flex p-4 ">
  {#each links as link }
    
    <a href={link.url} target="_blank"
    class="relative font-semibold text-teal-900 py-1 px-2 rounded-lg transition-all hover:text-teal-700 hover:rounded after:content-['_↗'] after:relative after:left-0 after:bottom-0 after:text-teal-900 after:transition-all hover:after:bottom-0.5 hover:after:left-0.5 hover:after:text-teal-700"
    >
    {link.title}
  </a>
{/each}
</div>