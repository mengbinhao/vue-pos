<template>
  <el-tabs v-model="orderType" @tab-click="handleClick">
    <el-tab-pane label="点餐" name="first">
      <el-table
        :data="tableData"
        border
        :summary-method="getSummaries"
        show-summary
        style="width: 100%"
      >
        <el-table-column prop="goodsName" label="商品"></el-table-column>
        <el-table-column prop="count" label="量" width="90"></el-table-column>
        <el-table-column prop="price" label="金额" width="90"></el-table-column>
        <el-table-column label="操作" width="100" fixed="right">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="deleteGoods(scope.row)">删除</el-button>
            <el-button type="text" size="small" @click="addGoods(scope.row)">增加</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- <div class="total">
				<small>数量: </small>{{ totalCount }} &nbsp;&nbsp;&nbsp;&nbsp;<small>金额: </small>{{ totalPrice }}元
      </div>-->
      <div class="div-btn">
        <el-button type="warning" size="small">挂单</el-button>
        <el-button type="danger" size="small" @click="deleteAllGoods">删除</el-button>
        <el-button type="success" size="small" @click="checkout">结账</el-button>
      </div>
    </el-tab-pane>
    <el-tab-pane label="挂单" name="second">挂单</el-tab-pane>
    <el-tab-pane label="外卖" name="third">外卖</el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  name: "PosOrder",
  props: {
    tableData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      orderType: "first"
    }
  },
  methods: {
    handleClick() {},
    getSummaries(param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "合计"
          return
        }
        if (index === columns.length - 1) {
          return
        }
        const values = data.map(item => Number(item[column.property]))
        //for calculate total price
        let rowIndex = 0
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return (
                prev +
                (column.property === "price"
                  ? curr * data[rowIndex++].count
                  : curr)
              )
            } else {
              return prev
            }
          }, 0)
          index === 1 ? (sums[index] += " 个") : (sums[index] += " 元")
        } else {
          sums[index] = "N/A"
        }
      })
      return sums
    },
    deleteAllGoods() {
      this.$emit("deleteAllGoods")
		},
		checkout() {
			this.$emit("checkout")
		},
		addGoods(goods) {
			this.$emit('addGoods', goods)
		},
		deleteGoods(goods) {
			this.$emit('deleteGoods', goods)
		}
  }
};
</script>
<style scoped>
.div-btn {
  margin: 10px;
}
/* .total {
  background-color: #fff;
  padding: 10px;
  border-bottom: 1px solid #D3DCE6;
} */
</style>
