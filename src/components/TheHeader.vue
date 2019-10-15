<template>
	<header class="header">
		<a href="/">
			<img class="header__logo" src="../assets/logo.svg" alt="Evaluator">
		</a>
	</header>
</template>

<script>
export default {
	name: 'TheHeader',
};
</script>

<style scoped>
.header {
	display: flex;
	justify-content: center;
}

.header__logo {
	width: 11.25rem;
	height: 3.25rem;
}
</style>
