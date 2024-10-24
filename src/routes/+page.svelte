<script lang="ts">
  import * as Carousel from "$lib/shadcn/ui/carousel/index.js";
	import Autoplay from "embla-carousel-autoplay";

	import Background from './background.svelte';
	// import Card from './card.svelte';
	import Container from './container.svelte';
	import Header from './header.svelte';
	import Text from './text.svelte';

	let text = "Développeur Web · Étudiant en école de commerce";
	let SmallScreenText1 = "Étudiant en école de commerce";
	let SmallScreenText2 = "Développeur Web";


	let pages = [
		{
			title: "Mes projets",
			items: [
			{
				title: "Tailwind Attributify",
				desc: "Un projet open source à mon initiative, qui a pour but d'améliorer la lisibilité du code.",
				link: "https://github.com/deslunes/vite-plugin-tailwind-attributify",
				cta: "En savoir plus",
				delay: 3
			},
			{
				title:"TriesCatch",
				desc:"Un projet open source à mon initiative, qui a pour but de simplifier la gestion des erreurs dans la programmation.",
				link:"https://github.com/deslunes/triescatch",
				cta:"En savoir plus",
				delay:4
			},
  		]
		},
		{
			title: "Mon Parcours",
			items: [
			{
				title: "NeomaBS",
				desc: "Master en innovation digitale (programme TEMA), 2021-2026",
				link: "https://github.com/deslunes/vite-plugin-tailwind-attributify",
				cta: "",
				delay: 3
			},
			{
				title:"Epitech Barcelona",
				desc:"Formation au développement web, au déploiement d'infrastructure et à la gestion de bases de données.",
				link:"https://github.com/deslunes/triescatch",
				cta:"",
				delay:4
			},
  		]
		}
	]



</script>

{#snippet Card(item: { title: string; desc: string; link: string; cta: string; delay: number; })}
  <div
    style={"animation-delay: " + item.delay + "s"}
    class="max-w-[600px] my-4 p-4 animate-slideup [animation-fill-mode:backwards] py-6 rounded-xl bg-white bg-opacity-10 backdrop-blur-sm border-white border border-opacity-40">
    
    <h2 class="text-xl font-bold font-Bricolage text-teal-950">{item.title}</h2>
    <p class="text-teal-950 max-w-lg">{item.desc}</p>
		{#if item.cta !== ""}
    <div class="mt-4">
				<a href={item.link}
					 class="self-center h-auto px-5 py-2.5 font-medium bg-teal-950 text-white rounded-lg text-sm transition-all ease-in-out hover:bg-black">
					{item.cta}
				</a>
			</div>
		{/if}
    
  </div>
{/snippet}

<Container>
	{#snippet children()}
	<Header {text} {SmallScreenText1} {SmallScreenText2}/>

		<Carousel.Root 
		style="animation-delay: 3.5s" 
		class="w-full animate-slideup [animation-fill-mode:backwards]"
		plugins={[ Autoplay({ delay: 7000 }) ]}
		>
			<Carousel.Content>
				{#each pages as page}
					<Carousel.Item>

						<div class="mt-12 px-4">
							<div class="flex items-center">
					
								<Text split={false} baseDelay={1} text={page.title}
											className="w-full text-4xl text-teal-950" />
					
								<span class="h-0.5 bg-teal-950 animate-hr [animation-fill-mode:backwards] hidden md:block w-full"
											style="animation-delay: 3s"></span>
							</div>


							{#each page.items as item}
								{@render Card(item)}
							{/each}
						
					</div>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
			<Carousel.Previous class="bg-opacity-0 border-none transition duration-500" />
			<Carousel.Next class="bg-opacity-0 border-none transition duration-500" />

		</Carousel.Root>





	{/snippet}

</Container>