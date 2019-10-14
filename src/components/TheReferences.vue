<template>
	<div>
		<ReferenceShortcuts/>
		<ReferenceOperators/>
		<ReferenceConstants/>
		<ReferenceMethods/>
	</div>
</template>

<script>
import ReferenceShortcuts from '@/components/ReferenceShortcuts.vue';
import ReferenceOperators from '@/components/ReferenceOperators.vue';
import ReferenceConstants from '@/components/ReferenceConstants.vue';
import ReferenceMethods from '@/components/ReferenceMethods.vue';

export default {
	name: 'TheReferences',
	components: {
		ReferenceShortcuts,
		ReferenceOperators,
		ReferenceConstants,
		ReferenceMethods,
	},
};
</script>

<style scoped>

</style>
