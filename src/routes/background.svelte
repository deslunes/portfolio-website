<div
class="absolute inset-0 z-0 h-screen w-screen animate-ripple bg-[#82C5B6] bg-cover bg-center blur-3xl"
>
<div class="blob absolute left-3/4 h-96 w-96 scale-125 rounded-full bg-[#FBFAE1]"></div>
<div class="blob absolute left-3/4 top-1/2 h-96 w-96 rounded-full bg-[#F1EFB9]"></div>
<div class="blob absolute left-1/2 top-1/2 h-96 w-96 scale-125 rounded-full bg-[#FBFAE1]"></div>
<div class="blob absolute left-1/2 h-96 w-96 rounded-full bg-[#F1EFB9]"></div>
<div class="blob absolute h-96 w-96 scale-110 rounded-full bg-[#04DEAD]"></div>
<div class="blob absolute top-1/2 h-96 w-96 scale-150 rounded-full bg-[#0E9577]"></div>
</div>

<div class="bg-white bg-opacity-30 absolute inset-0 z-20 h-screen w-screen">
</div>

<div class="noise-filter absolute inset-0 z-10 h-screen w-screen">
</div>

<svg class="hidden">
  <filter id="blob-filter">
    <!-- Ajoute une fréquence de bruit plus basse pour une déformation plus douce -->
    <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="1" result="noise" />
    <!-- Augmente légèrement le "scale" pour accentuer la déformation -->
    <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" />
  </filter>
</svg>


<svg class="hidden" id="noice">
  <filter id="noise-filter">
      <feTurbulence type="fractalNoise" baseFrequency="0.84" numOctaves="7" stitchTiles="stitch"></feTurbulence>
      <feColorMatrix type="saturate" values="0"></feColorMatrix>
      <feComponentTransfer>
          <feFuncR type="linear" slope="0.31"></feFuncR>
          <feFuncG type="linear" slope="0.31"></feFuncG>
          <feFuncB type="linear" slope="0.31"></feFuncB>
          <feFuncA type="linear" slope="0.78"></feFuncA>
      </feComponentTransfer>
      <feComponentTransfer>
          <feFuncR type="linear" slope="1.44" intercept="-0.22"/>
          <feFuncG type="linear" slope="1.44" intercept="-0.22"/>
          <feFuncB type="linear" slope="1.44" intercept="-0.22"/>
      </feComponentTransfer>
  </filter>
  <rect width="100%" height="100%" filter="url(#noise-filter)"></rect>
</svg>


<style>
  .blob {
		filter: url(#blob-filter);
	}

  .noise-filter {
		filter: url('#noise-filter') opacity(30%) brightness(100);
	}
</style>