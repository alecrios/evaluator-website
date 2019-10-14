<template>
	<Reference id="constants">
		<h2>Constants</h2>

		<BaseTable>
			<thead>
				<tr>
					<th>Constant</th>
					<th>Description</th>
				</tr>
			</thead>

			<tbody>
				<tr v-for="constant in constants" :key="constant.name">
					<td>{{ constant.name }}</td>
					<td>{{ constant.description }}</td>
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
	data() {
		return {
			constants: [
				{
					name: 'E',
					description: 'Euler\'s constant and the base of natural logarithms.',
				},
				{
					name: 'LN2',
					description: 'Natural logarithm of 2.',
				},
				{
					name: 'LN10',
					description: 'Natural logarithm of 10.',
				},
				{
					name: 'LOG2E',
					description: 'Base 2 logarithm of E.',
				},
				{
					name: 'LOG10E',
					description: 'Base 10 logarithm of E.',
				},
				{
					name: 'PHI',
					description: 'Golden ratio.',
				},
				{
					name: 'PI',
					description: 'Ratio of the circumference of a circle to its diameter.',
				},
				{
					name: 'SQRT1_2',
					description: 'Square root of 1/2.',
				},
				{
					name: 'SQRT2',
					description: 'Square root of 2.',
				},
				{
					name: 'TAU',
					description: 'Ratio of the circumference of a circle to its radius.',
				},
			],
		};
	},
};
</script>

<style scoped>

</style>
