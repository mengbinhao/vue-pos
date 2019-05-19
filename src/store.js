import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
    scrollTop: 0 //全局记录滚动位置
  },
  mutations: {
    add(state, num) {
      if (num) {
        state.count += num
      } else {
        state.count++
      }
    },
    reduce(state) {
      state.count--
    }
  },
  actions: {
    addAction(context) {
      setTimeout(()=>{
        context.commit('add')
      },2000)
    },
    reduceAction({commit}){
      setTimeout(()=>{
        commit('reduce')
      },2000)
    }
  },
  getters: {
    count(state) {
      return state.count += 100
    }
  }
})
