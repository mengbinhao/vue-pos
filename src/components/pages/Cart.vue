<template>
	<div class="center">
		<!-- <TestComponent :title="title" @update:title="title = $event"/> -->
		<TestComponent  class="abc" type="primary" data-test="parent data" :title.sync="title" childNeed="foo" />
	</div>
</template>
<script>
import TestComponent from './TestComponent.vue'

export default {
	data () {
		return {
			title: `title from Parent`
		}
	},
	components:{
		TestComponent
	},
	methods: {
		test() {
			console.log(`testtesttest`)
		}
	}
}
</script>
<style scoped>
.center {
	text-align: center;
}
</style>
