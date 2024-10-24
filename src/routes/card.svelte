<script lang="ts">
  let { title, desc, link, cta, delay } : { 
    title: string, 
    desc: string,
    link: string,
    cta: string,
    delay: number
  } = $props();
</script>

<div
style={"animation-delay: " + delay + "s"}
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