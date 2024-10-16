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

<style>
  .blob {
		filter: url(#blob-filter);
	}

  .noise-filter {
		filter: url('#noise-filter') opacity(50%);
	}
</style>