<template>
	<Reference id="methods">
		<h2>Methods</h2>

		<BaseTable>
			<thead>
				<tr>
					<th>Method</th>
					<th>Description</th>
				</tr>
			</thead>

			<tbody>
				<tr v-for="method in methods" :key="method.name">
					<td>{{ method.name }}</td>
					<td>{{ method.description }}</td>
				</tr>
			</tbody>
		</BaseTable>
	</Reference>
</template>

<script>
import Reference from '@/components/Reference.vue';
import BaseTable from '@/components/BaseTable.vue';

export default {
	name: 'ReferenceMethods',
	components: {
		Reference,
		BaseTable,
	},
	data() {
		return {
			methods: [
				{
					name: 'ABS(x)',
					description: 'Returns the absolute value of a number.',
				},
				{
					name: 'ACOS(x)',
					description: 'Returns the arccosine of a number.',
				},
				{
					name: 'ACOSH(x)',
					description: 'Returns the hyperbolic arccosine of a number.',
				},
				{
					name: 'ADD(x, y)',
					description: 'Returns the total of two numbers.',
				},
				{
					name: 'ASIN(x)',
					description: 'Returns the arcsine of a number.',
				},
				{
					name: 'ASINH(x)',
					description: 'Returns the hyperbolic arcsine of a number.',
				},
				{
					name: 'ATAN(x)',
					description: 'Returns the arctangent of a number.',
				},
				{
					name: 'ATANH(x)',
					description: 'Returns the hyperbolic arctangent of a number.',
				},
				{
					name: 'ATAN2(y, x)',
					description: 'Returns the arctangent of the quotient of the arguments.',
				},
				{
					name: 'CBRT(x)',
					description: 'Returns the cube root of a number.',
				},
				{
					name: 'CEIL(x)',
					description: 'Returns the smallest integer greater than or equal to a number.',
				},
				{
					name: 'COS(x)',
					description: 'Returns the cosine of a number.',
				},
				{
					name: 'COSH(x)',
					description: 'Returns the hyperbolic cosine of a number.',
				},
				{
					name: 'DIVIDE(x, y)',
					description: 'Returns the quotient of two numbers.',
				},
				{
					name: 'EXP(x)',
					description: 'Returns E to the power of x.',
				},
				{
					name: 'EXPM1(x)',
					description: 'Returns subtracting 1 from EXP(x).',
				},
				{
					name: 'FLOOR(x)',
					description: 'Returns the largest integer less than or equal to a number.',
				},
				{
					name: 'HYPOT(x[, y[, ...]])',
					description: 'Returns the square root of the sum of squares of the arguments.',
				},
				{
					name: 'LOG(x)',
					description: 'Returns the natural logarithm of a number.',
				},
				{
					name: 'LOG1P(x)',
					description: 'Returns the natural logarithm of 1 + x.',
				},
				{
					name: 'LOG10(x)',
					description: 'Returns the base 10 logarithm of a number.',
				},
				{
					name: 'LOG2(x)',
					description: 'Returns the base 2 logarithm of a number.',
				},
				{
					name: 'MAX(x[, y[, ...]])',
					description: 'Returns the largest of one or more numbers.',
				},
				{
					name: 'MEAN(x[, y[, ...]])',
					description: 'Returns the mean of one or more numbers.',
				},
				{
					name: 'MIN(x[, y[, ...]])',
					description: 'Returns the smallest of one or more numbers.',
				},
				{
					name: 'MOD(x, y)',
					description: 'Returns the modulus of two numbers.',
				},
				{
					name: 'MULTIPLY(x, y)',
					description: 'Returns the product of two numbers.',
				},
				{
					name: 'POW(x, y)',
					description: 'Returns base to the exponent power.',
				},
				{
					name: 'SIN(x)',
					description: 'Returns the sine of a number.',
				},
				{
					name: 'SINH(x)',
					description: 'Returns the hyperbolic sine of a number.',
				},
				{
					name: 'SQRT(x)',
					description: 'Returns the positive square root of a number.',
				},
				{
					name: 'SUBTRACT(x, y)',
					description: 'Returns the difference of two numbers.',
				},
				{
					name: 'SUM(x[, y[, ...]])',
					description: 'Returns the sum of one or more numbers.',
				},
				{
					name: 'TAN(x)',
					description: 'Returns the tangent of a number.',
				},
				{
					name: 'TANH(x)',
					description: 'Returns the hyperbolic tangent of a number.',
				},
			],
		};
	},
};
</script>

<style scoped>
td:first-child {
	white-space: nowrap;
}
</style>
