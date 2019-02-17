<template>
	<div>
		<ReferenceShortcuts/>
		<ReferenceOperators/>
		<ReferenceConstants/>
	</div>
</template>

<script>
import ReferenceShortcuts from '@/components/ReferenceShortcuts.vue';
import ReferenceOperators from '@/components/ReferenceOperators.vue';
import ReferenceConstants from '@/components/ReferenceConstants.vue';

export default {
	name: 'TheReferences',
	components: {
		ReferenceShortcuts,
		ReferenceOperators,
		ReferenceConstants,
	},
};
</script>

<style scoped>

</style>
