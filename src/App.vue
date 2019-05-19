<template>
  <div id="app">
    <LeftNav />
    <div class="main" v-if="isRouterAlive">
      <router-view />
    </div>
  </div>
</template>

<script>
import LeftNav from './components/common/LeftNav'

export default {
  name: 'app',
  components: {
    LeftNav
  },
  data() {
    return {
      isRouterAlive: true
    }
  },
  provide(){
    return {
      reload: this.reload
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$color:#EFF2F7;
.main{
  float:left;
  width:95%;
  background-color: $color;
  height:100%;
  overflow: auto;
}
</style>