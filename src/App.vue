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

export default {
  name: 'app',
  components: {
    LeftNav
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