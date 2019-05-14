<template>
  <div id="app">
    <LeftNav />
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import LeftNav from './components/common/LeftNav'
import Pos from './components/pages/Pos'

export default {
  name: 'app',
  components: {
    LeftNav,
    Pos
  }
}
</script>

<style scoped>
.main{
  float:left;
  width:95%;
  background-color: #EFF2F7;
  height:100%;
  overflow: auto;
}
</style>
