<template>
  <div class="rewardHistory">
    <headerCom />
    <div>
      <p class="data-query">玩家獲取&消耗記錄</p>
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
          width="370">
        </el-table-column>
        <el-table-column
          prop="time"
          label="獲得時間"
          width="270">
        </el-table-column>
        <el-table-column
          prop="type"
          label="類型"
          width="130">
          <template slot-scope="props">
            <span v-if="props.row.type == '獲得'" class="buyGreen">{{ props.row.type }}</span>
            <span v-if="props.row.type == '消耗'" class="sellRed">{{ props.row.type }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="content"
          label="內容"
          width="250">
          <template slot-scope="props">
            <span v-if="props.row.content == '電池'" class="content1">{{ props.row.content }}</span>
            <span v-else-if="props.row.content == 'A幣'" class="content2">{{ props.row.content }}</span>
            <span v-else-if="props.row.content == '晶片'" class="content3">{{ props.row.content }}</span>
            <span v-else class="content4">{{ props.row.content }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="quantity"
          label="數量"
          width="190">
          <template slot-scope="props">
            <span v-if="(props.row.quantity).replace(/\,/g,'') > 0" class="quantity1">{{ props.row.quantity }}</span>
            <span v-else class="quantity2">{{ props.row.quantity }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="source"
          label="來源"
          width="230">
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
  name: 'rewardHistoryView',
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
          type: '獲得',
          content: '電池',
          quantity: '2',
          source: '通關獎勵'
        },
        {
          uid: '26652cwchjbewv744vds4vdvdsva',
          time: '202X-0X-0X,23:59:59',
          type: '獲得',
          content: '裝備名稱(Lv.9999)',
          quantity: '1',
          source: '通關獎勵'
        },
        {
          uid: '26652cwchjbewv744vds4vdvdsva',
          time: '202X-0X-0X,23:59:59',
          type: '獲得',
          content: 'A幣',
          quantity: '1,000',
          source: '拍賣場-販售'
        },
        {
          uid: '26652cwchjbewv744vds4vdvdsva',
          time: '202X-0X-0X,23:59:59',
          type: '消耗',
          content: '裝備名稱(Lv.9999)',
          quantity: '-1',
          source: '拍賣場上架'
        },
        {
          uid: '26652cwchjbewv744vds4vdvdsva',
          time: '202X-0X-0X,23:59:59',
          type: '消耗',
          content: '電池',
          quantity: '-20',
          source: '英雄升級'
        },
        {
          uid: '26652cwchjbewv744vds4vdvdsva',
          time: '202X-0X-0X,23:59:59',
          type: '消耗',
          content: 'A幣',
          quantity: '-99,999,999',
          source: '拍賣場-購買'
        },
        {
          uid: '26652cwchjbewv744vds4vdvdsva',
          time: '202X-0X-0X,23:59:59',
          type: '消耗',
          content: '晶片',
          quantity: '-300',
          source: '裝備突破'
        },
        {
          uid: '26652cwchjbewv744vds4vdvdsva',
          time: '202X-0X-0X,23:59:59',
          type: '消耗',
          content: 'A幣',
          quantity: '-99,999,999',
          source: '拍賣場-購買'
        },
        {
          uid: '26652cwchjbewv744vds4vdvdsva',
          time: '202X-0X-0X,23:59:59',
          type: '獲得',
          content: '裝備名稱(Lv.9999)',
          quantity: '1',
          source: '拍賣場-下架'
        },
        {
          uid: '26652cwchjbewv744vds4vdvdsva',
          time: '202X-0X-0X,23:59:59',
          type: '獲得',
          content: '晶片',
          quantity: '30',
          source: '離線獎勵'
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
  color: #2BDE73;
}
.content1 {
  color: #0CC41F;
}
.content2 {
  color: #F26E23;
}
.content3 {
  color: #9642D8;
}
.content4 {
  color: #000;
}
.sellRed {
  color: #F22361;
}
.quantity2 {
  color: #F35A90;
}
</style>
<style lang="scss">
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

