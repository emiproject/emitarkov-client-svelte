import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		page: document.title
	}
});

export default app;