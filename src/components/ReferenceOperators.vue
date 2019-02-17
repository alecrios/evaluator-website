<template>
	<Reference>
		<h2>Operators</h2>

		<BaseTable>
			<thead>
				<tr>
					<th>Operator</th>
					<th>Operation</th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<td>+</td>
					<td>Addition</td>
				</tr>

				<tr>
					<td>-</td>
					<td>Subtraction</td>
				</tr>

				<tr>
					<td>*</td>
					<td>Multiplication</td>
				</tr>

				<tr>
					<td>/</td>
					<td>Division</td>
				</tr>

				<tr>
					<td>^</td>
					<td>Exponentiation</td>
				</tr>

				<tr>
					<td>%</td>
					<td>Modulo</td>
				</tr>

				<tr>
					<td>( )</td>
					<td>Grouping</td>
				</tr>
			</tbody>
		</BaseTable>
	</Reference>
</template>

<script>
import Reference from '@/components/Reference.vue';
import BaseTable from '@/components/BaseTable.vue';

export default {
	name: 'ReferenceOperators',
	components: {
		Reference,
		BaseTable,
	},
};
</script>

<style scoped>

</style>
