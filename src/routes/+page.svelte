<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import '@fontsource-variable/rubik';
	import '../app.css';
</script>

<svelte:head>
	<title>Frontend Mentor | Time tracking dashboard</title>
</svelte:head>

<main class="flex min-h-screen items-center justify-center px-6 py-20">
	<section
		class="grid w-full grid-cols-1 gap-6 lg:max-w-[69.375rem] lg:grid-cols-[15.9375rem_1fr] lg:gap-[1.875rem]"
	>
		<aside class="rounded-[0.9375rem] bg-neutral-darkblue">
			<h1 class="sr-only">Time tracking dashboard</h1>
			<div
				class="flex items-center gap-5 rounded-[0.9375rem] bg-primary-blue px-7 py-8 lg:h-[22.125rem] lg:flex-col lg:items-start lg:gap-10 lg:py-[2.125rem]"
			>
				<img
					src="/images/image-jeremy.png"
					alt="Headshot of Jeremy Robson"
					class="w-16 rounded-full border-[0.1875rem] shadow-profile lg:w-[4.875rem]"
				/>
				<h2>
					<span class="block text-15 text-neutral-paleblue">Report for</span>
					<span class="mt-1 block text-24 font-light lg:text-[2.5rem]">Jeremy Robson</span>
				</h2>
			</div>
			<ul
				class="flex justify-around py-6 text-neutral-desaturatedblue lg:flex-col lg:justify-start lg:gap-5 lg:px-8"
			>
				<li><a href="/">Daily</a></li>
				<li><a href="/?interval=weekly">Weekly</a></li>
				<li><a href="/?interval=monthly">Monthly</a></li>
			</ul>
		</aside>
		<div class="grid gap-6 lg:grid-cols-3 lg:gap-[1.875rem]">
			{#each Array(6) as _}
				<Card />
			{/each}
		</div>
	</section>
</main>
