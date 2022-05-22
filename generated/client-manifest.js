export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/about.svelte"),
	() => import("../../src/routes/components/Contact.svelte"),
	() => import("../../src/routes/components/Header.svelte"),
	() => import("../../src/routes/components/Headshot.svelte"),
	() => import("../../src/routes/components/ImageRow.svelte"),
	() => import("../../src/routes/components/MainContent.svelte"),
	() => import("../../src/routes/components/shared/Image.svelte"),
	() => import("../../src/routes/index.svelte")
];

export const dictionary = {
	"": [[0, 9], [1]],
	"about": [[0, 2], [1]],
	"components/Contact": [[0, 3], [1]],
	"components/Header": [[0, 4], [1]],
	"components/Headshot": [[0, 5], [1]],
	"components/ImageRow": [[0, 6], [1]],
	"components/MainContent": [[0, 7], [1]],
	"components/shared/Image": [[0, 8], [1]]
};