<script>
	let source;
	export let alternate;
</script>

<container>
	<div class="pic" />
	<div class="pic" />
	<div class="pic" />
	<div class="pic" />
	<!-- <img src={source} alt="" /> -->
</container>

<style>
	.pic {
		background-image: url({source});
		height: 100%;
		overflow: hidden;
		color: blue;
	}
</style>
