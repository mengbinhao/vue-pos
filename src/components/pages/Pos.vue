 <template>
  <div class="pos">
    <el-row>
      <el-col :span="7" class="pos-order" id="order-list">
        <PosOrder
          :tableData="tableData"
          @addGoods="addGoods"
          @deleteGoods="deleteGoods"
          @deleteAllGoods="deleteAllGoods"
          @checkout="checkout"
          :canNotBeChangedInChild="canNotBeChangedInChild"
        />
      </el-col>
      <el-col :span="17">
        <PosOftenGoods :oftenGoods="oftenGoods" @addGoods="addGoods"/>
        <PosTypeGoods
          @addGoods="addGoods"
          :displayTabs="displayTabs"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PosOrder from './PosOrder'
import PosOftenGoods from './PosOftenGoods'
import PosTypeGoods from './PosTypeGoods'
import { getOftenGoodsAndTypeGoods } from '@/plugins/request'

export default {
  name: "Pos",
  components: {
    PosOrder,
    PosOftenGoods,
    PosTypeGoods
  },
  data() {
    return {
      tableData: [],
      oftenGoods: [],
      subTabs: [
        {label:'汉堡', name:'first'},
        {label:'主食', name:'second'},
        {label:'小食', name:'third'},
        {label:'套餐', name:'forth'}
      ],
      displayTabs:[],
      canNotBeChangedInChild: 'canNotBeChangedInChild'
    };
  },
  created() {
    getOftenGoodsAndTypeGoods().then(data => {
      this.oftenGoods = data[0]
      this.displayTabs = this.buildTabObjs(data[1])
    })
  },
  mounted: function() {
    var orderHeight = document.body.clientHeight
    document.getElementById("order-list").style.height = orderHeight + "px"
  },
  methods: {
    addGoods(goods) {
      //judge if goods exists
      let isExist = false
      this.tableData.some(item => {
        if (item.goodsId === goods.goodsId) {
          isExist = true
          return
        }
      })

      if (isExist) {
        let arr = this.tableData.filter(item => item.goodsId === goods.goodsId)
        arr[0].count++
      } else {
        let newGood = {
          goodsId: goods.goodsId,
          goodsName: goods.goodsName,
          price: goods.price,
          count: 1
        }
        this.tableData.push(newGood)
      }
    },
    deleteGoods(goods) {
      this.tableData = this.tableData.filter(
        item => item.goodsId !== goods.goodsId
      )
    },
    deleteAllGoods() {
      if (this.tableData.length) {
        this.$confirm("确认删除订单?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
        .then(() => {
          this.tableData = []
          this.$message({
            type: "success",
            message: "删除成功!"
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          })
        })
      }
    },
    checkout() {
      const h = this.$createElement
      if (this.tableData.length) {
        this.tableData = []
        this.$message({
          message: h("p", null, [
            h("span", { style: "color:blue" }, "已下单成功")
          ])
        })
      } else {
        this.$message({
          message: h("p", null, [h("span", { style: "color:red" }, "请先选择商品")])
        })
      }
    },
    buildTabObjs(data) {
      let tabObjs = []
      data.forEach((item, index) => {
        let {label, name} = this.subTabs[index],
            tabs = {label, name, 'typeGoods':item}
        tabObjs.push(tabs)
      })
      return tabObjs
    }
  }
};
</script>

<style scoped>
.pos-order {
  background-color: #f9fafc;
  border-right: 1px solid #c0ccda;
  text-align: center;
  padding: 10px;
}
</style>
