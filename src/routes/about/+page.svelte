<script>
	import Top from '../../components/Top.svelte';
</script>

<main>
	<Top showHome={true} />
	<div class="bio">
		<div>
			<img class="hero-img" src="images/About-Me.jpg" alt="airport" />
		</div>
		<div style="margin-left: 50px;">
			<p>Anthony (he/him) is a brooklyn based actor, writer and musician.</p>
			<p>
				He has conservatory training from
				<a href="https://www.thestudionewyork.com/" target="_blank"> The Studio/NY </a>
				under Jayd McCarty.
			</p>
			<p>
				In 2021 performed and co-wrote a solo show about a nurse he met in the hospital (video
				available upon request)
			</p>
			<p>
				He grew up in western New York. His favorite apple is
				<a href="https://www.applesfromny.com/varieties/empire/" target="_blank"> Empire </a>
				.
			</p>
			<p>
				He is an advocate for public schools and educational equity.
				<a href="https://steinhardt.nyu.edu/metrocenter/perspectives" target="_blank">
					Resources
				</a>
				,
				<a
					href="https://www.goodreads.com/list/show/155801.Nice_White_Parents_A_Reading_List"
					target="_blank"
				>
					Reading list
				</a>
			</p>
		</div>
	</div>
</main>

<style>
	@import '../../app.css';
	:root {
		background-color: white;
		color: black;
	}

	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		background-color: white;
	}

	.hero-img {
		min-width: 300px;
		max-width: 400px;
	}

	.bio {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-left: 40px;
		margin-right: 40px;
	}

	@media (min-width: 800px) {
		main {
			max-width: none;
		}
		.bio {
			flex-direction: row;
		}
	}
</style>
