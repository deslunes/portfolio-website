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
