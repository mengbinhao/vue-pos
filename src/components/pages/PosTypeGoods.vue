<template>
  <div class="goods-type clearfix">
    <el-tabs v-model="goodType" @tab-click="handleClick">
      <el-tab-pane
        v-for="tabObj in displayTabs"
        :key="tabObj.name"
        :label="tabObj.label"
        :name="tabObj.name"
      >
        <div>
          <ul class="cook-list">
            <li
              v-for="typeGoods in tabObj.typeGoods"
              :key="typeGoods.goodsId"
              @click="addGoods(typeGoods)"
            >
              <span class="foodImg">
                <img :src="tabObj.src" width="100%">
              </span>
              <span class="foodName">{{typeGoods.goodsName}}</span>
              <span class="foodPrice">{{typeGoods.price}}</span>
            </li>
          </ul>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: "PosTypeGoods",
  props: {
    displayTabs: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      goodType: "first"
    };
  },
  methods: {
    handleClick() {},
    addGoods(goods) {
      this.$emit("addGoods", goods);
    }
  }
};
</script>
<style scoped>
.goods-type {
  margin: 10px;
}
/* just clear specific class*/
.clearfix {
  clear: both;
}
.cook-list li {
  list-style: none;
  border: 1px solid #e5e9f2;
  background-color: #fff;
  float: left;
  /* height: auto; */
  width: 25%;
  overflow: hidden;
  padding: 5px;
  margin: 10px;
  cursor: pointer;
}
.cook-list li span {
  display: block;
  float: left;
}
.foodImg {
  width: 40%;
}
.foodName {
  font-size: 20px;
  padding-left: 10px;
  color: brown;
  width:50%;
}
.foodPrice {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}
</style>
