<template>
	<footer class="footer">
		<span class="item">
			&copy;
			{{ new Date().getFullYear() }}
			<a href="https://alecrios.com" target="_blank" rel="noopener">Alec Rios</a>
		</span>

		<span class="item">
			<a href="https://alecrios.com/contact" target="_blank" rel="noopener">Send Feedback</a>
		</span>
	</footer>
</template>

<script>
export default {
	name: 'TheFooter',
};
</script>

<style scoped>
.footer {
	padding: 1.5rem;
	display: flex;
	justify-content: center;
}

.item {
	font-size: .75rem;
	line-height: 1.5rem;
	letter-spacing: .03125rem;
	color: var(--color-gray-09);
}

.item + .item {
	margin-left: 1.5rem;
}

.item a:hover {
	text-decoration: underline;
}
</style>
