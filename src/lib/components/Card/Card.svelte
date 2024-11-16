<script lang="ts">
	import type { TimeframeData } from '$lib/apptypes';

	interface Props {
		title: TimeframeData['title'];
		data: TimeframeData['timeframes'][keyof TimeframeData['timeframes']];
		interval: 'daily' | 'weekly' | 'monthly';
	}

	let { title, data, interval }: Props = $props();

	const icons = {
		Work: '/images/icon-work.svg',
		Play: '/images/icon-play.svg',
		Study: '/images/icon-study.svg',
		Exercise: '/images/icon-exercise.svg',
		Social: '/images/icon-social.svg',
		'Self Care': '/images/icon-self-care.svg'
	};

	const iconBackgrounds = {
		Work: 'bg-primary-lightorange',
		Play: 'bg-primary-softblue',
		Study: 'bg-primary-lightred',
		Exercise: 'bg-primary-limegreen',
		Social: 'bg-primary-violet',
		'Self Care': 'bg-primary-lightyellow'
	};
</script>

<article>
	<div
		class="flex max-h-[10rem] items-center justify-end overflow-hidden rounded-t-[0.9375rem] {iconBackgrounds[
			title
		]} pr-4"
	>
		<figure class="relative -top-[0.85rem] size-[4.9375rem]">
			<img src={icons[title]} alt="" class="aspect-[1] w-full object-contain" />
		</figure>
	</div>
	<div
		class="relative -mt-[2.5625rem] rounded-[0.9375rem] bg-neutral-darkblue px-6 py-7 hover:cursor-pointer hover:bg-neutral-darkblue-hover lg:-mt-[2.125rem] lg:p-[1.875rem]"
	>
		<div class="flex items-center justify-between">
			<h3 class="font-medium">{title}</h3>
			<button
				class="group rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-paleblue"
				aria-label="Menu"
			>
				<svg
					width="21"
					height="5"
					viewBox="0 0 21 5"
					class="h-auto max-w-full fill-neutral-paleblue group-hover:fill-neutral-white"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
						fill-rule="evenodd"
					/>
				</svg>
			</button>
		</div>
		<div
			class="mt-[0.375rem] flex items-center justify-between lg:mt-[1.5625rem] lg:flex-col lg:items-start lg:gap-2"
		>
			<p class="text-32 font-light lg:text-[3.5rem]">
				{data.current}{data.current === 1 ? 'hr' : 'hrs'}
			</p>
			<p class="text-15 text-neutral-paleblue">
				{#if interval === 'daily'}
					Yesterday
				{:else if interval === 'weekly'}
					Last Week
				{:else}
					Last Month
				{/if} - {data.previous}{data.previous === 1 ? 'hr' : 'hrs'}
			</p>
		</div>
	</div>
</article>
