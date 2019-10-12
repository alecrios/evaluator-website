<template>
	<Reference id="constants">
		<h2>Constants</h2>

		<BaseTable>
			<thead>
				<tr>
					<th>Constant</th>
					<th>Value</th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<td>e</td>
					<td>2.71828183...</td>
				</tr>

				<tr>
					<td>pi</td>
					<td>3.14159265...</td>
				</tr>
			</tbody>
		</BaseTable>
	</Reference>
</template>

<script>
import Reference from '@/components/Reference.vue';
import BaseTable from '@/components/BaseTable.vue';

export default {
	name: 'ReferenceConstants',
	components: {
		Reference,
		BaseTable,
	},
};
</script>

<style scoped>

</style>
