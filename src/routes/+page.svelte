<script lang="ts">
	import Background from './background.svelte';
	import Card from './card.svelte';
	import Noise from './noise.svelte';
	import Text from './text.svelte';

	let text = "Développeur Web · Étudiant en école de commerce";
	let SmallScreenText1 = "Étudiant en école de commerce";
	let SmallScreenText2 = "Développeur Web";

	let dom: HTMLParagraphElement;
</script>


<div class="relative max-h-screen w-screen">

<Background/>

	<div class="absolute inset-0 z-30 flex items-center justify-center h-screen">
		<div class=" p-8 sm:max-w-full max-w-[600px] mx-auto">

			<!-- title -->
			<Text text="Je suis" className="text-3xl text-teal-900" />
			<Text text="Filaïcht SINGAÏNY" split={false} baseDelay={0}
						className="leading-[4.70rem] text-7xl text-teal-950" />
	
			<!-- subtitle -->
			<div class="hidden md:block">
				<Text text={text} className="text-xl text-teal-900" baseDelay={1} />
			</div>
			<div class="md:hidden block">
				<Text text={SmallScreenText1} className="text-xl" baseDelay={1} />
				<Text text={SmallScreenText2} className="text-xl" baseDelay={1.5} />
			</div>

			<!-- Sub-section "Mes projets" -->
			<div class="mt-12">
				<div class="flex items-center">

					<Text split={false} baseDelay={1} text="Mes projets"
								className="w-full text-4xl whitespace-nowrap text-teal-950" />

					<span class="h-0.5 bg-teal-950 animate-hr [animation-fill-mode:backwards] hidden md:block w-full"
								style="animation-delay: 3s"></span>
				</div>

			
				<Card/>

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
