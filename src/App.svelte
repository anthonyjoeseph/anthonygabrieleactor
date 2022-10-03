<script>
	import Top from './components/Top.svelte';
	import Gallery from 'svelte-image-gallery'
</script>

<main>

<Top />
<Gallery   >
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
	
</main>

<style>

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
/* 
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	} */

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>