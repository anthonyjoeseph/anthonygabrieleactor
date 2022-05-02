<script>
	import Portrait from './Portrait.svelte';
	import { images } from './images';
</script>

<div>
	{#each Object.keys(images) as image}
		<!-- content here -->

		<!-- <img src={images[image].source} alt={image.alt} width="20vw" /> -->
		<Portrait source={images[image].source} alternate={image.alt} width="15%" />
	{/each}
</div>

<style>
	div {
		display: flex;
		align-items: center;
	}

	img {
		display: block;
		align-self: center;
	}
</style>
