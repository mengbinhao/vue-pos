<template>
	<div>
		{{ title }} <br>
		{{ childNeed }} <br>
		<button @click="$emit('update:title', 'new title from Child')">sync qualifiers</button>
	</div>
</template>
<script>
export default {
	data () {
		return {
			message: `hello vuex`
		}
	},
	mounted() {
		//console.log(this.$attrs)
		//console.log(process.env.VUE_APP_TITLE)
	},
	props: {
		title: {
			type: String,
			required: true
		},
		childNeed: {
			type: String,
			required: true
		}
	}
}
</script>
<style>
</style>
