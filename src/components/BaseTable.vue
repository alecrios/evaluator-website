<template>
	<table>
		<slot></slot>
	</table>
</template>

<script>
export default {
	name: 'BaseTable',
};
</script>

<style scoped>
table {
	width: 100%;
	text-align: left;
}

tr {
	border-bottom: .125rem solid var(--color-gray-03);
}

th {
	font-size: 1.125rem;
	line-height: 1.5rem;
	padding: .75rem;
	color: var(--color-gray-11);
}

td {
	font-size: 1rem;
	line-height: 1.5rem;
	color: var(--color-gray-10);
	padding: .75rem;
}
</style>
