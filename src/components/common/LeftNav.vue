<template>
  <div class="left-nav">
    <ul>
      <li>
        <svg class="icon" aria-hidden="true" @click="$router.push({path:'/'})">
          >
          <use xlink:href="#icon-order"></use>
        </svg>
        <div>order</div>
      </li>
      <li>
        <svg class="icon" aria-hidden="true" @click="$router.push({path:'/cart'})">
          <use xlink:href="#icon-cart"></use>
        </svg>
        <div>cart</div>
      </li>
      <li>
        <svg class="icon" aria-hidden="true" @click="$router.push({name:'Home'})">
          <use xlink:href="#icon-home"></use>
        </svg>
        <div>home</div>
      </li>
      <li>
        <svg class="icon" aria-hidden="true" @click="$router.push({path:'/statistics'})">
          <use xlink:href="#icon-statistics"></use>
        </svg>
        <div>statistics</div>
      </li>
      <li>
        <svg class="icon" aria-hidden="true" @click="$router.push(`/myself`)">
          <use xlink:href="#icon-Profile"></use>
        </svg>
        <div>profile</div>
      </li>
      <div class="btndiv">
        <el-button size="small" @click="goback" type="primary" round>back</el-button>
        <el-button size="small" @click="goforward" type="primary" round>forward</el-button>
      </div>
    </ul>
  </div>
</template>
<script>
export default {
  name: "LeftNav",
  methods: {
    goback() {
      this.$router.go(-1);
    },
    goforward() {
      this.$router.go(1);
    }
  }
};
</script>
<style>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -1.15em;
  fill: currentColor;
  overflow: hidden;
  font-size: 24px;
}
.left-nav {
  color: #fff;
  font-size: 10px;
  height: 100%;
  background-color: #1d8ce0;
  float: left;
  width: 5%;
}
.left-nav li {
  list-style: none;
  text-align: center;
  border-bottom: 1px solid #20a0ff;
  padding: 10px;
}
.btndiv {
  text-align: center;
  padding: 5px;
  font-size: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.btndiv button {
  margin: 5px;
}
</style>
