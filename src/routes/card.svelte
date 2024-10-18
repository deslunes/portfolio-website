<script lang="ts">
  export let title: string = "Tailwind Attributify";
  export let desc : string = "Un projet open source à mon initiative, qui a pour but d'améliorer la lisibilité du code.";
  export let link : string = "https://github.com/deslunes/vite-plugin-tailwind-attributify";
  export let cta  : string = "En savoir plus";

</script>

<div
style="animation-delay: 3s"
class="max-w-[600px] my-4 p-4 animate-slideup [animation-fill-mode:backwards] py-6 rounded-xl bg-white bg-opacity-10 backdrop-blur-sm border-white border border-opacity-40">
  
  <h2 class="text-xl font-bold font-Bricolage text-teal-950">{title}</h2>
  <p class="text-teal-950 max-w-lg">{desc}</p>
  <div class="mt-4">
    {#if cta !== ""}
    <a href={link}
       class=" self-center h-auto px-5 py-2.5 font-medium bg-teal-950 text-white rounded-lg text-sm transition-all ease-in-out"
       hover="bg-black"
       >
      {cta}
    </a>
    {/if}
  </div>
  
</div>