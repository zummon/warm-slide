<script>
	import '../app.css';
	let { children, data } = $props()
</script>

<div class="">
	{#key data.path}
		{@render children()}
	{/key}
</div>

