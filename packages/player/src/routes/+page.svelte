<script lang="ts">
	let youtubeUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
	let audioUrl = "";

	function play() {
		audioUrl = `http://localhost:3001?url=${youtubeUrl}`;
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		Svelte Streamer
	</h1>

	<input type="text" bind:value={youtubeUrl} />
	<button on:click={play}>Play</button>

	{#if audioUrl}
		<audio src={audioUrl} controls autoplay></audio>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
