<script>
	export let showHome = false;
	export const links = {
		reel: 'https://www.youtube.com/watch?v=HkWQp_y0ccU',
		resume: '/images/resume.pdf',
		home: '/',
		about: '/about'
	};
</script>

<div class="top">
	<div class="name">
		<h1 style="float:left;">Anthony Gabriele</h1>
	</div>
	<span id="links">
		<a class:hide={!showHome} href={links.home} class="link">home</a>
		<a class:hide={showHome} href={links.about} class="link">about</a>
		<b class="separator">&vert;</b>
		<a href={links.resume} class="link" target="_blank">resume</a>
		<b class="separator">&vert;</b>
		<a href={links.reel} class="link" target="_blank">reel</a>
		<b class="separator">&vert;</b>
		<a href="mailto:anthony@anthonygabrieleactor.com" class="link" target="_blank">email</a>
		<b class="separator">&vert;</b>
		<a href="https://instagram.com/tony.balo.nyc/" class="link" target="_blank"
			><img src="images/ig_logo.png" alt="instagram logo" width="20" /></a
		>
	</span>
</div>

<style>
	h1 {
		font-size: 3.2em;
		line-height: 1.1;
	}
	.hide {
		display: none !important;
	}
	.separator {
		display: none;
	}
	.top {
		display: flex;
		align-items: baseline;
		justify-content: space-around;
		padding-bottom: 20px;
	}

	.link {
		padding-left: 20px;
		padding-right: 20px;
	}

	#links {
		margin-left: 40px;
	}

	#links b {
		color: gainsboro;
	}

	#links a {
		color: rgb(59, 59, 59);
	}

	#links a:hover {
		color: rgb(100, 100, 100);
	}

	.name {
		display: flex;
		align-items: baseline;
		flex-direction: row;
	}

	@media (min-width: 700px) {
		.separator {
			display: inline !important;
		}
	}
</style>
