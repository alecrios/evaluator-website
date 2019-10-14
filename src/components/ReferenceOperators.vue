<template>
	<Reference id="operators">
		<h2>Operators</h2>

		<BaseTable>
			<thead>
				<tr>
					<th>Operator</th>
					<th>Description</th>
				</tr>
			</thead>

			<tbody>
				<tr v-for="operator in operators" :key="operator.name">
					<td>{{ operator.name }}</td>
					<td>{{ operator.description }}</td>
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
	data() {
		return {
			operators: [
				{
					name: '+',
					description: 'Add / Unary Plus',
				},
				{
					name: '-',
					description: 'Subtract / Unary Minus',
				},
				{
					name: '*',
					description: 'Multiply',
				},
				{
					name: '/',
					description: 'Divide',
				},
				{
					name: '^',
					description: 'Power',
				},
				{
					name: '%',
					description: 'Modulo',
				},
				{
					name: '(',
					description: 'Begin Group',
				},
				{
					name: ')',
					description: 'End Group',
				},
				{
					name: ',',
					description: 'Separate Argument',
				},
			],
		};
	},
};
</script>

<style scoped>

</style>
