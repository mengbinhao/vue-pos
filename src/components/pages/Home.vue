<template>
	<div class="center">
		{{ message }}
		<br/>
		<button @click="$router.go(0)">$router.go(0)</button>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<button @click="locationReload">location.reload</button>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<button @click="reload">provide/inject reload vue-router</button>
	</div>
</template>
<script>
export default {
	data () {
		return {
			message: `this is home`
		}
	},
	// props: ['default', 'sidebar'],
	methods: {
		locationReload() {
			window.location.reload()
		}
	},
	inject: ['reload']
}
</script>
<style scoped>
.center {
	text-align: center;
}
</style>
