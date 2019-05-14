<template>
  <div class="often-goods">
    <div class="title">常用商品</div>
    <div class="often-goods-list">
      <ul>
        <li v-for="goods in oftenGoods" :key="goods.goodsId" @click="addGoods(goods)">
          <span>{{goods.goodsName}}</span>
          <span class="o-price">{{goods.price}}元</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "PosOftenGoods",
  props: {
    oftenGoods: {
      type: Array,
      required: true
    }
  },
  methods: {
    addGoods(goods) {
      this.$emit("addGoods", goods)
    }
  }
};
</script>
<style scoped>
.often-goods-list ul li {
  list-style: none;
  float: left;
  border: 1px solid #e5e9f2;
  padding: 10px;
  margin: 10px;
  background-color: #fff;
  cursor: pointer;
}
.title {
  height: 20px;
  border-bottom: 1px solid #d3dce6;
  background-color: #f9fafc;
  text-align: left;
  padding: 10px;
}
.o-price {
  color: #58b7ff;
  padding-left: 5px;
}
</style>
