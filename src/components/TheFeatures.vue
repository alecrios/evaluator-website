<template>
	<div class="features">
		<hr>

		<div class="container row">
			<div class="col xs-12 sm-6 lg-3">
				<Feature
					title="Convenient"
					body="The modal is just a hotkey away at all times."
				/>
			</div>

			<div class="col xs-12 sm-6 lg-3">
				<Feature
					title="Quick"
					body="Expressions are evaluated in realtime as you type."
				/>
			</div>

			<div class="col xs-12 sm-6 lg-3">
				<Feature
					title="Capable"
					body="Every major math operation is fully supported."
				/>
			</div>

			<div class="col xs-12 sm-6 lg-3">
				<Feature
					title="Cross-platform"
					body="Evaluator is available for macOS and Windows."
				/>
			</div>
		</div>

		<hr>
	</div>
</template>

<script>
import Feature from '@/components/Feature.vue';

export default {
	name: 'TheFeatures',
	components: {
		Feature,
	},
};
</script>

<style scoped>
.features {
	max-width: 64rem;
	margin: 0 auto;
	padding: 3rem 0;
}

.container {
	padding: 1.5rem 0;
}

hr {
	height: .125rem;
	background-color: var(--color-gray-03);
	margin: 0 1.5rem;
}
</style>
