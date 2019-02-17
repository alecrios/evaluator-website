<template>
	<div class="intro">
		<div class="intro__text">
			<h1>
				A powerful calculator on standby.
			</h1>

			<div class="intro__body">
				Evaluator is a free calculator application.
				It runs in the background so that it's always ready when you need it.
				Simply hit the hotkey and start typing.
			</div>
		</div>

		<TheDownloads/>
	</div>
</template>

<script>
import TheDownloads from '@/components/TheDownloads.vue';

export default {
	name: 'TheIntro',
	components: {
		TheDownloads,
	},
};
</script>

<style scoped>
.intro {
	margin: 0 auto;
	width: 100%;
	max-width: 48rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.intro__text {
	width: 100%;
	text-align: center;
	padding: 1.5rem;
}

.intro__body {
	font-size: 1rem;
	line-height: 1.5rem;
	font-weight: 400;
	color: var(--color-gray-10);
}

@media (min-width: 32em) {
	.intro__body {
		font-size: 1.25rem;
		line-height: 1.875rem;
	}
}
</style>
