<template>
	<div class="reference">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'Reference',
};
</script>

<style scoped>
.reference {
	padding: 1.5rem 1.5rem;
	max-width: 32rem;
	margin: 0 auto;
}
</style>
