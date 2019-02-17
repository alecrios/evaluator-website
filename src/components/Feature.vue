<template>
	<div class="feature">
		<div class="feature__text">
			<h2 class="feature__title">{{ title }}</h2>
			<p class="feature__body">{{ body }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Feature',
	props: ['title', 'body'],
};
</script>

<style scoped>
.feature {
	text-align: center;
	padding: 1.5rem;
}

.feature__text {
	max-width: 16rem;
	margin: 0 auto;
}

.feature__title {
	font-size: 1.125rem;
	line-height: 1.5rem;
	font-weight: 400;
	margin-bottom: .75rem;
	color: var(--color-gray-11);
}

.feature__body {
	font-size: 1rem;
	line-height: 1.5rem;
	font-weight: 400;
	color: var(--color-gray-10);
}
</style>
