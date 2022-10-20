<template>
  <div class="userWalletHistory">
    <headerCom />
    <div>
      <p class="data-query">玩家出入金記錄</p>
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
        row-class-name="header-wallet">
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
          prop="cashinout"
          label="類型"
          width="150">
          <template slot-scope="props">
            <span v-if="props.row.cashinout == '入金'" class="cashIn">{{ props.row.cashinout }}</span>
            <span v-if="props.row.cashinout == '出金'" class="cashOut">{{ props.row.cashinout }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="amount"
          label="額度"
          width="640">
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
  name: 'userWalletHistoryView',
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
          cashinout: '入金',
          amount: '60,000'
        },
        {
          uid: '26652cwchjbewv744vds4vdvdsva',
          time: '202X-0X-0X,23:59:59',
          cashinout: '出金',
          amount: '60,000'
        },
        {
          uid: '26652cwchjbewv744vds4vdvdsva',
          time: '202X-0X-0X,23:59:59',
          cashinout: '出金',
          amount: '60,000'
        },
        {
          uid: '26652cwchjbewv744vds4vdvdsva',
          time: '202X-0X-0X,23:59:59',
          cashinout: '出金',
          amount: '60,000'
        },
        {
          uid: '26652cwchjbewv744vds4vdvdsva',
          time: '202X-0X-0X,23:59:59',
          cashinout: '入金',
          amount: '60,000'
        },
        {
          uid: '26652cwchjbewv744vds4vdvdsva',
          time: '202X-0X-0X,23:59:59',
          cashinout: '入金',
          amount: '60,000'
        },
        {
          uid: '26652cwchjbewv744vds4vdvdsva',
          time: '202X-0X-0X,23:59:59',
          cashinout: '入金',
          amount: '60,000'
        },
        {
          uid: '26652cwchjbewv744vds4vdvdsva',
          time: '202X-0X-0X,23:59:59',
          cashinout: '出金',
          amount: '60,000'
        },
        {
          uid: '26652cwchjbewv744vds4vdvdsva',
          time: '202X-0X-0X,23:59:59',
          cashinout: '入金',
          amount: '60,000'
        },
        {
          uid: '26652cwchjbewv744vds4vdvdsva',
          time: '202X-0X-0X,23:59:59',
          cashinout: '出金',
          amount: '60,000'
        },
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
.cashIn {
  color: #2FB123;
}
.cashOut {
  color: #E94F2E;
}
</style>
<style lang="scss">
// .userWalletHistory {
  .el-table th.el-table__cell {
    background-color: #3C5266;
  }
  .el-table__header {
    height: 60px;
  }
  .el-table thead {
    color: #FFF;
  }
  .el-table th.el-table__cell>.cell:first-child, .el-table .cell:first-child {
    padding-left: 26px;
  }
  .el-table th.el-table__cell>.cell {
    font-weight: 400;
    font-size: 20px;
  }
  .el-table td.el-table__cell div {
    font-weight: 400;
    font-size: 20px;
    display: flex;
    align-items: center;
  }
  .el-table--striped .el-table__body tr.el-table__row--striped td.el-table__cell {
    background: #F0F0F0;
  }
  .el-dialog {
    background: #F5F5F5;
    box-shadow: 0px 9px 35px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
  }
// }

.el-table tr.header-wallet {
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
  td.el-table__cell:nth-child(3) {
    color: #2FB123;
  }
  td.el-table__cell div {
    display: unset;
    padding-right: 26px;
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

