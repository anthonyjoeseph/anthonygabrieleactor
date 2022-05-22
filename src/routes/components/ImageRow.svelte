<script lang="ts">
	import Image from './shared/Image.svelte';
// import Image from '/static/headshot1.jpg'
// const imageUrls: string[] = [''];
const imgUrl =  'cumshot.png'


const imgUrls = [
    'images/headshots/headshot1.jpg',
    'images/headshots/headshot2.jpg',
    'images/headshots/headshot1.jpg',
    'images/GM0A2507.jpg',
    'images/headshots/headshot1.jpg',
    'images/GM0A2507.jpg',
    'images/GM0A2642.jpg',
    'images/GM0A2507.jpg',
    'images/headshots/headshot1.jpg',
    'images/headshots/headshot2.jpg',
    'images/GM0A2507.jpg'
]


</script>


<div class="imageGrid">
{#each imgUrls as url} 
<div class="imageContainer">
  
    
    
    
<Image url={url} style={"width: 20vw; min-height: 20vw; "}  />
<Image url={url} style={"width: 20vw; min-height: 20vw; "}  />
</div>

{/each}
</div>

<style>





.imageGrid {
    display: flex;
    overflow-x: hidden;    
}

.imageContainer {
    width: 15vw;
    height: 15vw;
    overflow: hidden;
}
</style>
