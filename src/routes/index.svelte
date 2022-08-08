<script type="ts">

	import MainContent from './components/MainContent.svelte';

</script>


<div class="wrapper" style="background-color: black;">


	<div class="main-content">
<MainContent />
</div>





</div>

<style>


.wrapper {
		/* background-image: url('/images/GM0A2507.jpg'); */

		background-color: black;
		height: 100vh;
	width: 100vw;
	margin: -10px;
	padding: 0;
	display: flex;
		/* display: fixed; */
		position: relative;
}

.wrapper::before {
	content: '';
	background-image: url("/images/GM0A2507.jpg");
  background-repeat: no-repeat;
  background-size: cover;
	background-position: center center;
opacity: 0.5;
margin: -10px;
	position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
}



.main-content {
	flex: 1;
	transform: translateY(-30vh);
	width: 50vw;
	border-radius: 100;
	background-color: white;
	position: relative;
	align-self: center;
	justify-self: center;
	align-items: center;
}



* {overflow-x: hidden}

</style>

