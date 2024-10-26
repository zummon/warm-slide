<script>
	let { data } = $props();
</script>

<div class="text-red-500 text-center p-3">
	<a class="" href="/">Back</a>
</div>

<div class="sm:columns-2 lg:columns-3 text-center p-3">
	{#each data.things as thing}
		<div class="mb-3">
			<img
				class="max-h-80 sm:max-h-[400px] lg:max-h-[480px] w-full object-cover object-center"
				src={thing.img}
				alt={thing.cd}
			/>
		</div>
	{/each}
</div>
