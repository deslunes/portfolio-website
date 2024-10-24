<script>
	import Text from './text.svelte'
	export let text;
	export let SmallScreenText1;
	export let SmallScreenText2;
</script>

<div class="px-4">
	<!-- title -->
<Text text="Je suis" className="text-3xl text-teal-900" />
<Text text="Filaïcht SINGAÏNY" split={false} baseDelay={0}
			className="leading-[4.70rem] text-7xl text-teal-950" />

<!-- subtitle -->
<div class="hidden md:block">
	<Text text={text} className="text-xl text-teal-900" baseDelay={1} />
</div>
<div class="md:hidden block">
	<Text text={SmallScreenText1} className="text-xl text-teal-900" baseDelay={1} />
	<Text text={SmallScreenText2} className="text-xl text-teal-900" baseDelay={1.5} />
</div>
</div>