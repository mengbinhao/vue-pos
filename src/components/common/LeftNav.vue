<template>
  <div class="left-nav">
    <ul>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-order"></use>
        </svg>
        <div>order</div>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cart"></use>
        </svg>
        <div>cart</div>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-home"></use>
        </svg>
        <div>home</div>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-statistics"></use>
        </svg>
        <div>statistics</div>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-Profile"></use>
        </svg>
        <div>profile</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "LeftNav"
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
  background-color: #1D8ce0;
  float: left;
  width: 5%;
}
.left-nav li{
  list-style: none;
  text-align: center;
  border-bottom:1px solid #20a0ff;
  padding:10px;
}
</style>
