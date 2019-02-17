<template>
	<Reference>
		<h2>App Shortcuts</h2>

		<BaseTable>
			<thead>
				<tr>
					<th>Hotkey</th>
					<th>Function</th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<td>Command + Space</td>
					<td>Show/hide (macOS)</td>
				</tr>

				<tr>
					<td>Control + Space</td>
					<td>Show/hide (Windows)</td>
				</tr>

				<tr>
					<td>Esc</td>
					<td>Hide</td>
				</tr>

				<tr>
					<td>Shift + Esc</td>
					<td>Recenter</td>
				</tr>

				<tr>
					<td>Enter</td>
					<td>Copy result and hide</td>
				</tr>

				<tr>
					<td>Shift + Enter</td>
					<td>Create expression with result</td>
				</tr>

				<tr>
					<td>Shift + Backspace</td>
					<td>Clear</td>
				</tr>
			</tbody>
		</BaseTable>
	</Reference>
</template>

<script>
import Reference from '@/components/Reference.vue';
import BaseTable from '@/components/BaseTable.vue';

export default {
	name: 'ReferenceShortcuts',
	components: {
		Reference,
		BaseTable,
	},
};
</script>

<style scoped>

</style>
