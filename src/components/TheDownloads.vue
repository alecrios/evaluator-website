<template>
	<div class="download">
		<a class="download__button" :href="operatingSystems[primaryOs].link">
			<svg class="download__icon" viewBox="0 0 24 24">
				<path class="download__path" :d="operatingSystems[primaryOs].icon"/>
			</svg>

			<div class="download__text">
				Download for {{ operatingSystems[primaryOs].name }}
			</div>
		</a>

		<a class="download__link" :href="operatingSystems[secondaryOs].link">
			<div class="download__secondary-text">
				Download for {{ operatingSystems[secondaryOs].name }}
			</div>
		</a>
	</div>
</template>

<script>
export default {
	name: 'TheDownloads',
	data() {
		return {
			operatingSystems: {
				macos: {
					name: 'macOS',
					link: 'https://github.com/alecrios/evaluator/releases/download/v1.2.2/Evaluator-1.2.2.dmg',
					icon: 'M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z',
				},
				windows: {
					name: 'Windows',
					link: 'https://github.com/alecrios/evaluator/releases/download/v1.2.2/Evaluator.1.2.2.exe',
					icon: 'M0 12v-8.646l10-1.355v10.001h-10zm11 0h13v-12l-13 1.807v10.193zm-1 1h-10v7.646l10 1.355v-9.001zm1 0v9.194l13 1.806v-11h-13z',
				},
			},
		};
	},
	computed: {
		primaryOs() {
			return navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? 'macos' : 'windows';
		},
		secondaryOs() {
			return Object.keys(this.operatingSystems).find((os) => os !== this.primaryOs);
		},
	},
};
</script>

<style scoped>
.download {
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	padding: 1.5rem;
}

.download__button {
	position: relative;
	display: flex;
	background-color: var(--color-gray-11);
	padding: .75rem 1rem;
	cursor: pointer;
	margin-bottom: .75rem;
	transition: background-color 250ms ease;
}

.download__button:hover {
	background-color: var(--color-jade);
}

.download__icon {
	width: 1.125rem;
	height: 1.125rem;
	margin-right: .75rem;
}

.download__path {
	fill: var(--color-gray-02);
	transition: fill 250ms ease;
}

.download__button:hover .download__path {
	fill: var(--color-gray-02);
}

.download__text {
	font-size: 1rem;
	font-weight: 500;
	white-space: nowrap;
	color: var(--color-gray-02);
	transition: color 100ms ease;
}

.download__button:hover .download__text {
	color: var(--color-gray-02);
}

.download__link {
	padding: .75rem;
	cursor: pointer;
}

.download__secondary-text {
	font-size: .875rem;
	color: var(--color-gray-09);
	white-space: nowrap;
	text-decoration: underline;
}

.download__link:hover .download__secondary-text {
	color: var(--color-jade);
}
</style>
