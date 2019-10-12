<template>
	<div class="reference" :id="id">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'Reference',
	props: ['id'],
};
</script>

<style scoped>
.reference {
	padding: 3rem 1.5rem;
	max-width: 26rem;
	margin: 0 auto;
}
</style>
