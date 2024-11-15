<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import '@fontsource-variable/rubik';
	import '../app.css';
</script>

<svelte:head>
	<title>Frontend Mentor | Time tracking dashboard</title>
</svelte:head>

<main>
	<section>
		<aside>
			<h1 class="sr-only">Time tracking dashboard</h1>
			<div>
				<img src="/images/image-jeremy.png" alt="Headshot of Jeremy Robson" />
				<h2>
					<span>Report for</span>
					<span>Jeremy Robson</span>
				</h2>
			</div>
			<ul>
				<li><a href="/">Daily</a></li>
				<li><a href="/?interval=weekly">Weekly</a></li>
				<li><a href="/?interval=monthly">Monthly</a></li>
			</ul>
		</aside>
		<div>
			{#each Array(6) as _}
				<Card />
			{/each}
		</div>
	</section>
</main>
