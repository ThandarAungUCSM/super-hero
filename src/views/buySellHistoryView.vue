<template>
  <div class="buySellHistory">
    <headerCom />
    <div>
      <p class="data-query">玩家拍賣場歷程</p>
    </div>
    <div class="search-div">
      <img alt="menu" src="../assets/images/search.png" class="search-img">
      <div class="formcss" v-click-outside="onClickOutside">
        <input type="search" id="inputId" @keyup.enter="enterSearch(searchItem)" placeholder="請輸入UID" v-model="searchItem" @click="inputFocus" class="input-text" />
        <button
          :class="showBtn ? 'crossCss' : 'searchCss'"
          type="submit"
          @click="searchRemove"
        >
          Search
        </button>
      </div>
      <div class="search-btn" @click="showResult">
        查詢
      </div>
    </div>
    <div v-if="retrieveResult == true">
      <el-table
        :data="tableData"
        stripe
        class="retrieve-div1"
        :cell-class-name="uidcss"
        row-class-name="header-buysell">
        <el-table-column
          prop="uid"
          label="UID"
          width="400">
        </el-table-column>
        <el-table-column
          prop="time"
          label="時間"
          width="250">
        </el-table-column>
        <el-table-column
          prop="buysell"
          label="類型"
          width="130">
          <template slot-scope="props">
            <span v-if="props.row.buysell == '售出'" class="buyGreen">{{ props.row.buysell }}</span>
            <span v-if="props.row.buysell == '購買'" class="sellRed">{{ props.row.buysell }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="namewithlevel"
          label="品項"
          width="360">
        </el-table-column>
        <el-table-column
          prop="price"
          label="價格"
          width="300">
          <template slot-scope="props">
            <span v-if="props.row.buysell == '售出'">{{ props.row.price }}</span>
            <span v-if="props.row.buysell == '購買'" class="sellPink">-{{ props.row.price }}</span>
          </template>
        </el-table-column>
      </el-table>
      <div v-if="tableData.length > 0">
        <div class="nomorediv" v-if="nomoredata">
          <p class="loadmore">資料已全數顯示</p>
        </div>
        <div class="loadmorediv" v-else>
          <p class="loadmore">再載入10筆</p>
        </div>
      </div>
      <div v-else>
        <div class="nodatadiv">
          <p class="loadmore">尚無資料</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Vue from "vue";
// @ is an alias to /src
import headerCom from "@/components/headerCom.vue";

Vue.directive("click-outside", {
  bind(el, binding, vnode) {
    el.clickOutsideEvent = event => {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    if (document.body) document.body.addEventListener("click", el.clickOutsideEvent);

    const input = document.querySelector("input");
    if (input) input.addEventListener("click", setFocus);
  },
  unbind(el) {
    if (document.body) document.body.removeEventListener("click", el.clickOutsideEvent);

    const input = document.querySelector("input");
    if (input) input.addEventListener("click", setFocus1);
  },
});

function stopEvent(e) {
  e.stopPropagation();
  e.preventDefault();
  return false;
}

function setFocus(e) {
  document.getElementById("inputId").focus();
  stopEvent(e);
}
function setFocus1() {
  document.getElementById("inputId").focus();
}

export default {
  name: 'buySellHistoryView',
  components: {
    headerCom,
  },
  data() {
    return {
      retrieveResult: false,
      searchItem: '',
      showBtn: false,
      nomoredata: false,
      tableData: [
        {
          uid: '26652cwchjbewv744vds4vdvdsva',
          time: '202X-0X-0X,23:59:59',
          buysell: '售出',
          namewithlevel: '裝備名稱裝備名稱 (Lv.999999)',
          price: '60,000'
        },
        {
          uid: '26652cwchjbewv744vds4vdvdsva',
          time: '202X-0X-0X,23:59:59',
          buysell: '購買',
          namewithlevel: '裝備名稱裝備名稱 (Lv.999999)',
          price: '60,000'
        },
        {
          uid: '26652cwchjbewv744vds4vdvdsva',
          time: '202X-0X-0X,23:59:59',
          buysell: '購買',
          namewithlevel: '裝備名稱裝備名稱 (Lv.999999)',
          price: '60,000'
        },
        {
          uid: '26652cwchjbewv744vds4vdvdsva',
          time: '202X-0X-0X,23:59:59',
          buysell: '購買',
          namewithlevel: '裝備名稱裝備名稱 (Lv.999999)',
          price: '60,000'
        },
        {
          uid: '26652cwchjbewv744vds4vdvdsva',
          time: '202X-0X-0X,23:59:59',
          buysell: '售出',
          namewithlevel: '裝備名稱裝備名稱 (Lv.999999)',
          price: '60,000'
        },
        {
          uid: '26652cwchjbewv744vds4vdvdsva',
          time: '202X-0X-0X,23:59:59',
          buysell: '售出',
          namewithlevel: '裝備名稱裝備名稱 (Lv.999999)',
          price: '60,000'
        },
        {
          uid: '26652cwchjbewv744vds4vdvdsva',
          time: '202X-0X-0X,23:59:59',
          buysell: '售出',
          namewithlevel: '裝備名稱裝備名稱 (Lv.999999)',
          price: '60,000'
        },
        {
          uid: '26652cwchjbewv744vds4vdvdsva',
          time: '202X-0X-0X,23:59:59',
          buysell: '購買',
          namewithlevel: '裝備名稱裝備名稱 (Lv.999999)',
          price: '60,000'
        },
        {
          uid: '26652cwchjbewv744vds4vdvdsva',
          time: '202X-0X-0X,23:59:59',
          buysell: '售出',
          namewithlevel: '裝備名稱裝備名稱 (Lv.999999)',
          price: '60,000'
        },
        {
          uid: '26652cwchjbewv744vds4vdvdsva',
          time: '202X-0X-0X,23:59:59',
          buysell: '購買',
          namewithlevel: '裝備名稱裝備名稱 (Lv.999999)',
          price: '60,000'
        }
      ],
      // tableData: []
    }
  },
  methods: {
    showResult() {
      this.retrieveResult = true;
    },
    uidcss() {
      return "selected-cell"
    },
    inputFocus() {
      this.showBtn = true;
    },
    enterSearch(keyword) {
      this.showBtn = true;
      this.searchItem = keyword;
    },
    searchRemove() {
      this.searchItem = "";
      this.retrieveResult = false;
    },
    onClickOutside() {
      if(this.showBtn == true) {
        console.log('hi')
        this.showBtn = false;
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.nomorediv, .loadmorediv, .nodatadiv {
  width: 280px;
  height: 44px;
  line-height: 44px;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 45px auto 170px;
  .loadmore {
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 0;
  }
}
.loadmorediv {
  border: 2px solid #00A0FF;
  .loadmore {
    color: #00A0FF;
  }
}
.nomorediv {
  border: 2px solid #93B2C4;
  .loadmore {
    color: #93B2C4;
  }
}
.nodatadiv {
  margin-top: 0;
  border: 2px solid #93B2C3;
  .loadmore {
    color: #93B2C3;
  }
}
.retrieve-div1 {
  max-width: 1440px;
  width: 1440px;
  margin: 0 auto;
}
.buyGreen {
  color: #2FB123;
}
.sellRed {
  color: #E94F2E;
}
</style>
<style lang="scss">
.sellPink {
  color: #F35A90;
}
.el-table tr.header-buysell {
  th.el-table__cell {
    background-color: #698DAD !important;
  }
  td.el-table__cell {
    height: 55px;
  }
  td.el-table__cell {
    color: #000;
  }
  td.el-table__cell:first-child {
    color: #00A0FF;
  }
}
</style>
<style>
.selected-cell {
  /* color: #00A0FF !important; */
}
.el-table__empty-block {
  background: #f7fafa !important;
}
.el-table__empty-text {
  display: none;
}
.el-table::before {
  height: 0;
}
</style>

