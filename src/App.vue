<template>
	<div id="app">
		<TheHeader/>

		<main class="main">
			<TheDemo/>
			<TheIntro/>
			<TheFeatures/>
			<TheReferences/>
		</main>

		<TheFooter/>
	</div>
</template>

<script>
import 'core-reset/core-reset.css';
import 'core-grid/core-grid.css';
import 'focus-visible';

import TheHeader from '@/components/TheHeader.vue';
import TheDemo from '@/components/TheDemo.vue';
import TheIntro from '@/components/TheIntro.vue';
import TheFeatures from '@/components/TheFeatures.vue';
import TheReferences from '@/components/TheReferences.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
	name: 'app',
	components: {
		TheHeader,
		TheDemo,
		TheIntro,
		TheFeatures,
		TheReferences,
		TheFooter,
	},
};
</script>

<style>
@font-face {
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 300;
	src:
		local('Roboto Light'),
		local('Roboto-Light'),
		url('./assets/fonts/roboto-v18-latin-300.woff2') format('woff2'),
		url('./assets/fonts/roboto-v18-latin-300.woff') format('woff');
}

@font-face {
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	src:
		local('Roboto'),
		local('Roboto-Regular'),
		url('./assets/fonts/roboto-v18-latin-regular.woff2') format('woff2'),
		url('./assets/fonts/roboto-v18-latin-regular.woff') format('woff');
}

@font-face {
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 500;
	src:
		local('Roboto Medium'),
		local('Roboto-Medium'),
		url('./assets/fonts/roboto-v18-latin-500.woff2') format('woff2'),
		url('./assets/fonts/roboto-v18-latin-500.woff') format('woff');
}

:root {
	--color-gray-15: hsla(225, 6.25%, 100%, 1);
	--color-gray-14: hsla(225, 6.25%, 93.75%, 1);
	--color-gray-13: hsla(225, 6.25%, 87.5%, 1);
	--color-gray-12: hsla(225, 6.25%, 81.25%, 1);
	--color-gray-11: hsla(225, 6.25%, 75%, 1);
	--color-gray-10: hsla(225, 6.25%, 62.5%, 1);
	--color-gray-09: hsla(225, 6.25%, 56.25%, 1);
	--color-gray-08: hsla(225, 6.25%, 50%, 1);
	--color-gray-07: hsla(225, 6.25%, 43.75%, 1);
	--color-gray-06: hsla(225, 6.25%, 37.5%, 1);
	--color-gray-05: hsla(225, 6.25%, 31.25%, 1);
	--color-gray-04: hsla(225, 6.25%, 25%, 1);
	--color-gray-03: hsla(225, 6.25%, 18.75%, 1);
	--color-gray-02: hsla(225, 6.25%, 12.5%, 1);
	--color-gray-01: hsla(225, 6.25%, 6.25%, 1);
	--color-gray-00: hsla(225, 6.25%, 0%, 1);

	--color-jade: hsla(135, 50%, 50%, 1);
	--color-ruby: hsla(360, 50%, 50%, 1);
}

html {
	font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;;
	background-color: var(--color-gray-01);
}

body {
	background-color: var(--color-gray-02);
}

body::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: calc(8.75rem + 3.125vw);
	background-color: var(--color-gray-01);
}

#app {
	position: relative;
}

.main {
	padding: 1.5rem 0;
}

.js-focus-visible :focus {
	outline: none;
	box-shadow: 0 0 0 .125rem hsla(135, 50%, 50%, .5);
}

.js-focus-visible :focus:not([data-focus-visible-added]) {
	box-shadow: none;
}

::selection {
	background-color: var(--color-jade);
	color: var(--color-gray-11);
}

h1 {
	font-size: 1.5rem;
	line-height: 2rem;
	font-weight: 400;
	text-align: center;
	margin-bottom: .75rem;
	color: var(--color-gray-11);
}

@media (min-width: 32em) {
	h1 {
		font-size: 2.25rem;
		line-height: 3rem;
		font-weight: 300;
	}
}

h2 {
	font-size: 1.5rem;
	line-height: 2rem;
	font-weight: 400;
	text-align: center;
	margin-bottom: 1.5rem;
	color: var(--color-gray-11);
}
</style>
