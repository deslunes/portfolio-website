<script>
	import Background from './background.svelte';
	import Noise from './noise.svelte';
	import AnimatedText from './text.svelte';

	let text = "Développeur Web · Étudiant en école de commerce";
	let SmallScreenText1 = "Étudiant en école de commerce";
	let SmallScreenText2 = "Développeur Web";

	/**
	 * @type {HTMLParagraphElement}
	 */
	let dom;

	function toggleclass() {
		dom.classList.toggle("hidden")
	}
</script>

<svelte:head>
	<title>Portfolio</title>
</svelte:head>


<div class="relative max-h-screen w-screen">

<Background/>

	<div class="absolute inset-0 z-30 flex items-center justify-center h-screen">
		<div class=" p-8 sm:max-w-full max-w-[600px] mx-auto">
			<AnimatedText text="Je suis" className="font-Bricolage overflow-hidden text-3xl font-bold text-teal-900" />
	
			<AnimatedText text="Filaïcht SINGAÏNY" split={false} className="font-Bricolage overflow-hidden leading-[4.70rem] text-7xl font-bold text-teal-950" baseDelay={0.5} />
	
			<div class="hidden md:block">
				<AnimatedText text={text} className="font-Bricolage overflow-hidden text-xl font-bold text-teal-900" baseDelay={2} />
			</div>
	
			<div class="md:hidden block">
				<AnimatedText text={SmallScreenText1} className="font-Bricolage overflow-hidden text-xl font-bold text-teal-900" baseDelay={2} />
				<AnimatedText text={SmallScreenText2} className="font-Bricolage overflow-hidden text-xl font-bold text-teal-900" baseDelay={3} />
			</div>

			<div class="mt-12">
				<div class="flex items-center">
					<!-- <h2 class="font-Bricolage text-4xl font-bold text-teal-950 whitespace-nowrap">Mes projets</h2> -->
					<AnimatedText split={false} baseDelay={3} text="Mes projets" className="font-Bricolage w-full overflow-hidden text-4xl font-bold whitespace-nowrap text-teal-950" />

					<span class=" h-0.5 bg-teal-950 animate-hr [animation-fill-mode:backwards] hidden md:block w-full" style="animation-delay: 5s"></span>
				</div>

			
				<div style="animation-delay: 6s" class="max-w-[600px] my-4 p-4 animate-slideup [animation-fill-mode:backwards] py-6 rounded-xl bg-white bg-opacity-10 backdrop-blur-sm border-white border border-opacity-40">
					<h2 class="text-xl font-bold font-Bricolage text-teal-950">Tailwind Attributify</h2>
					<p class="text-teal-950 max-w-lg">Un projet open source à mon initiative, qui a pour but d'améliorer la lisibilité du code.</p>
					<div class="mt-4">
						<a  href="https://github.com/deslunes/vite-plugin-tailwind-attributify"
						class=" self-center h-auto px-5 py-2.5 font-medium bg-teal-950 text-white rounded-lg text-sm transition-all ease-in-out"
						hover="bg-black">
						En savoir plus
					</a>
				</div>
				</div>
			</div>

		</div>
	</div>
</div>
<Noise/>




<style lang="postcss">

	:global(:root, html, body) {
		background: #82c5b6;
		margin: 0;
		height: 100%;
    overflow: hidden;
	}
</style>
