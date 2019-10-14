<template>
	<Reference id="shortcuts">
		<h2>App Shortcuts</h2>

		<BaseTable>
			<thead>
				<tr>
					<th>Hotkey</th>
					<th>Function</th>
				</tr>
			</thead>

			<tbody>
				<tr v-for="shortcut in shortcuts" :key="shortcut.name">
					<td>{{ shortcut.name }}</td>
					<td>{{ shortcut.description }}</td>
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
	data() {
		return {
			shortcuts: [
				{
					name: 'Alt + Space',
					description: 'Show / Hide',
				},
				{
					name: 'Escape',
					description: 'Hide',
				},
				{
					name: 'Shift + Escape',
					description: 'Recenter',
				},
				{
					name: 'Enter',
					description: 'Copy Result and Hide',
				},
				{
					name: 'Shift + Enter',
					description: 'Use Result as Expression',
				},
				{
					name: 'Shift + Backspace',
					description: 'Clear Expression',
				},
			],
		};
	},
};
</script>

<style scoped>

</style>
