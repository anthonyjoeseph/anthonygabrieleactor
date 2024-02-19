<script>
	import Top from '../components/Top.svelte';
	import Gallery from 'svelte-image-gallery';
</script>

<main>
	<Top />
	<Gallery>
		<img src="images/1.jpeg" alt="headshot" />
		<img src="images/2.jpeg" alt="headshot" />
		<img src="images/3.jpeg" alt="headshot" />
		<img src="images/4.jpeg" alt="headshot" />
		<img src="images/5.jpeg" alt="headshot" />
		<img src="images/6.jpeg" alt="headshot" />
		<img src="images/7.jpeg" alt="headshot" />
		<img src="images/8.jpeg" alt="headshot" />
		<img src="images/9.jpeg" alt="headshot" />
		<img src="images/10.jpeg" alt="headshot" />
		<img src="images/11.jpeg" alt="headshot" />
		<img src="images/12.jpeg" alt="headshot" />
	</Gallery>
	<div>
		photos courtesy of
		<a href="https://headshots.shanihadjian.com/" target="_blank"> Shani Hadjian Photography </a>
	</div>
</main>

<style>
	@import '../app.css';
	:root {
		background-color: white;
		color: black;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		background-color: white;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
