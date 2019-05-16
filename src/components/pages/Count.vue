<template>
	<div>
		<h3>{{ message }}</h3>
		<div>
			direct way to invoke mutation
			<button @click="$store.commit('add')">add count</button>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<button @click="$store.commit('add', 10)">add 10</button>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<button @click="$store.commit('reduce')">reduce count</button>
		</div>
		<div>
			simple way to invoke mutation
			<button @click="add()">add count</button>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<button @click="add(10)">add 10</button>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<button @click="reduce()">reduce count</button>
		</div>
		<div>
			actions
			<button @click="addAction">add count</button>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<button @click="reduceAction">reduce count</button>
		</div>
		<br>
		<br>
		<br>
		<hr>
		<h3>get from $store: {{ $store.state.count }}</h3>
		<h3>get from computed: {{ count }}</h3>
	</div>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
	data () {
		return {
			message: `hello vuex`
		}
	},
	methods: {
		...mapMutations(['add','reduce']),
		...mapActions(['addAction','reduceAction'])
	},
	//get data from vuex then reactive to vue
	//way 1
	// computed: {
	// 	count() {
	// 		return this.$store.state.count
	// 	}
	// }

	//way 2
	// computed: mapState({
  //   // 箭头函数可使代码更简练
  //   count: state => state.count
	// })

	//way 3
	//computed: mapState(['count'])

	computed: {
		...mapState(["count"]),
		...mapGetters(["count"])
	}
}
</script>
<style>
</style>
