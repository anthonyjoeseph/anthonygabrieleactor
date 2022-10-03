<script>
	export const links = {
		reel: "https://www.youtube.com/watch?v=HkWQp_y0ccU",
		resume: "/images/resume.pdf",
	};
</script>

<div class="top">
	<div class="name">
		<h1 style="float:left;">Anthony Gabriele</h1>
	</div>
	<span id="links">
		<a href={links.resume} class="link">resume</a>
		<b>&vert;</b>
		<a href={links.reel} class="link">reel</a>
		<b>&vert;</b>
		<a href="tel:6317430728" class="link">phone</a>
		<b>&vert;</b>
		<a href="mailto:anthony@anthonygabrieleactor.com" class="link">email</a>
	</span>
</div>

<style>
	.top {
		display: flex;
		align-items: baseline;
		justify-content: space-around;
		padding-bottom: 20px;
	}

	.link {
		padding: 20px;
	}

	#links b {
		color: gainsboro;
	}

	#links a {
		color: rgb(59, 59, 59);
	}

	#links a:hover {
		color:rgb(100, 100, 100)
	}

	.name {
		display: flex;
		align-items: baseline;
		flex-direction: row;
	}
</style>
