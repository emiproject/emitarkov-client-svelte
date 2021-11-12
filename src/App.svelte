<script lang="ts">
	export let page: string;
	import Navbar from "./Navbar.svelte";
</script>

<body>
	<Navbar></Navbar>

	<main>
		<h1>{page}</h1>
		<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	</main>
</body>


<style>
	*,
	html {
		margin: 0;
		padding: 0;
	}

	body {
		font-family: 'Chakra Petch';
	}
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff003b;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	/* azeret-mono-regular - latin */
	@font-face {
		font-family: 'Azeret Mono';
		font-style: normal;
		font-weight: 400;
		src: url('../fonts/azeret-mono-v1-latin-regular.eot'); /* IE9 Compat Modes */
		src: local(''),
				url('../fonts/azeret-mono-v1-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
				url('../fonts/azeret-mono-v1-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
				url('../fonts/azeret-mono-v1-latin-regular.woff') format('woff'), /* Modern Browsers */
				url('../fonts/azeret-mono-v1-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
				url('../fonts/azeret-mono-v1-latin-regular.svg#AzeretMono') format('svg'); /* Legacy iOS */
	}

		/* chakra-petch-regular - latin */
	@font-face {
		font-family: 'Chakra Petch';
		font-style: normal;
		font-weight: 400;
		src: url('../fonts/chakra-petch-v4-latin-regular.eot'); /* IE9 Compat Modes */
		src: local(''),
				url('../fonts/chakra-petch-v4-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
				url('../fonts/chakra-petch-v4-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
				url('../fonts/chakra-petch-v4-latin-regular.woff') format('woff'), /* Modern Browsers */
				url('../fonts/chakra-petch-v4-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
				url('../fonts/chakra-petch-v4-latin-regular.svg#ChakraPetch') format('svg'); /* Legacy iOS */
	}
</style>