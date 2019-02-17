<template>
	<div class="demo">
		<div class="modal">
			<div class="modal__box">
				<input
					ref="input"
					class="modal__field modal__expression"
					type="text"
					placeholder="Type an expression..."
					:value="input"
					@input="onInput"
					@keydown.enter="showError = true"
				>

				<div id="icon" class="modal__icon">
					<img src="../assets/icon.svg" alt="">
				</div>
			</div>

			<div class="modal__box">
				<input
					class="modal__field modal__result"
					:data-is-error="resultIsError"
					type="text"
					:value="output"
					disabled
				>
			</div>
		</div>
	</div>
</template>

<script>
import Evaluator from 'evaluator.js';

const evaluator = new Evaluator();

export default {
	name: 'TheDemo',
	data() {
		return {
			input: '',
			showError: false,
		};
	},
	computed: {
		result() {
			try {
				return evaluator.evaluate(this.input);
			} catch (error) {
				return error;
			}
		},
		resultIsError() {
			return this.result instanceof Error;
		},
		output() {
			if (this.resultIsError) {
				return this.showError ? this.result : '';
			}

			return this.result;
		},
	},
	methods: {
		onInput(event) {
			this.input = event.target.value;
			this.showError = false;
		},
	},
	mounted() {
		this.$refs.input.focus();
	},
};
</script>

<style scoped>
.demo {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 3.125vw 1.5rem;
}

.modal {
	font-family: BlinkMacSystemFont, 'Segoe UI', -apple-system, 'Roboto', sans-serif;
	background-color: var(--color-gray-02);
	width: 100%;
	max-width: 24rem;
	height: 8rem;
	border-radius: .375rem;
	box-shadow: 0 1rem 4rem hsla(0, 0%, 0%, .5);
}

.modal__box {
	position: relative;
}

.modal__icon {
	position: absolute;
	top: 0;
	left: 0;
	width: 4rem;
	height: 4rem;
	display: flex;
	align-items: center;
	justify-content: center;
	pointer-events: none;
}

.modal__svg {
	width: 1.625rem;
	height: 1.625rem;
}

.modal__field {
	width: 100%;
	height: 4rem;
	font-size: 1.125rem;
	cursor: text;
}

.modal__field:focus {
	box-shadow: none;
}

.modal__field::placeholder {
	color: var(--color-gray-06);
	opacity: 1;
}

.modal__expression {
	text-align: left;
	padding: 0 1.1875rem 0 4rem;
	color: var(--color-gray-11);
}

.modal__result {
	text-align: right;
	padding: 0 1.1875rem 0 1.1875rem;
	color: var(--color-jade);
}

.modal__result[data-is-error="true"] {
	color: var(--color-ruby);
	font-style: italic;
}
</style>
