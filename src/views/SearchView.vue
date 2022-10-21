<template>
  <div class="search">
    <headerCom />
    <div>
      <p class="data-query">玩家資料查詢</p>
    </div>
    <div class="search-div">
      <img alt="menu" src="../assets/images/search.png" class="search-img">
      <!-- <input type="search" id="gsearch" name="gsearch" placeholder="請輸入UID" v-model="searchItem" class="input-text" /> -->
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
    <!-- <div class="retrieve-div">
      <p class="uid-col">UID</p>
      <p class="level-col">建立時間</p>
      <p class="level-col">當前關卡</p>
      <p class="level-col">破關次數</p>
      <p class="level-col">當前A幣</p>
      <p class="currency-col">當前電池</p>
      <p class="battery-col">當前晶片</p>
      <p class="chips-col">晶片</p>
    </div> -->
    <div v-if="retrieveResult == true">
      <div v-if="tableData.length > 0">
        <el-table
          :data="tableData"
          stripe
          class="retrieve-div1"
          :cell-class-name="uidcss"
          row-class-name="header-search">
          <el-table-column
            prop="uid"
            label="UID"
            width="330">
          </el-table-column>
          <el-table-column
            prop="name"
            label="建立時間"
            width="210">
          </el-table-column>
          <el-table-column
            prop="address"
            label="當前關卡"
            width="150">
          </el-table-column>
          <el-table-column
            prop="col4"
            label="破關次數"
            width="150">
          </el-table-column>
          <el-table-column
            prop="col5"
            label="當前A幣"
            width="200">
            <template slot-scope="props">
              <p class="ptextcss">{{ props.row.col5 }}</p>
              <!-- <img alt="menu" src="../assets/images/edit.png" @click="popupData(props.row)" class="edit-img"> -->
              <img alt="menu" id="show-modal" @click="popupData(props.row, '當前A幣')" src="../assets/images/edit.png" class="edit-img">
            </template>
          </el-table-column>
          <el-table-column
            prop="col6"
            label="當前電池"
            width="200">
            <template slot-scope="props">
              <p class="ptextcss">{{ props.row.col6 }}</p>
              <img alt="menu" id="show-modal" @click="popupData(props.row, '當前電池')" src="../assets/images/edit.png" class="edit-img">
            </template>
          </el-table-column>
          <el-table-column
            prop="col7"
            label="當前晶片"
            width="200">
            <template slot-scope="props">
              <p class="ptextcss">{{ props.row.col7 }}</p>
              <img alt="menu" id="show-modal" @click="popupData(props.row, '當前晶片')" src="../assets/images/edit.png" class="edit-img">
            </template>
          </el-table-column>
        </el-table>

        <div class="walletAdd-head">
          <p class="address-title">錢包地址</p>
        </div>
        <div class="walletAdd-content">
          <p class="address-text">ERFWEFEWFGEWFEWF654165463</p>
        </div>

        <div class="walletAdd-head">
          <p class="address-title">裝備明細</p>
          <div class="add-btn">
            <p class="add-text" id="show-modal" @click="popupAddItem()">派發裝備</p>
          </div>
        </div>

        <el-table
          :data="tableData2"
          stripe
          class="retrieve-div2"
          header-row-class-name="header-2"
          row-class-name="header-2">
          <el-table-column
            label=""
            width="164">
          </el-table-column>
          <el-table-column
            prop="itemid"
            label="裝備ID"
            width="250">
          </el-table-column>
          <el-table-column
            prop="itemlevel"
            label="裝備等級"
            width="250">
          </el-table-column>
          <el-table-column align="right">
            <template slot-scope="scope">
              <!-- <el-button
                type="primary"
                icon="el-icon-delete"
                circle
                size="mini"
                style="margin-left: 55px"
                @click="handleDelete(scope.$index, scope.row)"
                class="delete-img"
              ></el-button> -->
              <img alt="delete" src="../assets/images/delete.png" @click="handleDelete(scope.$index, scope.row)" class="delete-img">
            </template>
          </el-table-column>
        </el-table>
        <div class="loadmorediv">
          <p class="loadmore">再載入10筆</p>
        </div>
      </div>

      <!-- ///////// -->
      <div v-else>
        <div class="whennodata">
          <div class="nodata-header">
            <p class="header-text1">UID</p>
            <p class="header-text2">建立時間</p>
            <p class="header-text3">當前關卡</p>
            <p class="header-text4">破關次數</p>
            <p class="header-text5">當前A幣</p>
            <p class="header-text6">當前電池</p>
            <p class="header-text7">當前晶片</p>
          </div>
          <div class="nodata-content">
            <p class="address-text1">26652cwchjbewv744vds4vdvdsva</p>
            <p class="address-text2">202X-0X-0X,23:59:59</p>
            <p class="address-text3">--</p>
            <p class="address-text4">0</p>
            <div class="address-text5">
              <p class="ptag-css">0</p>
              <img alt="menu" src="../assets/images/edit.png" class="edit-img">
            </div>
            <div class="address-text6">
              <p class="ptag-css">0</p>
              <img alt="menu" src="../assets/images/edit.png" class="edit-img">
            </div>
            <div class="address-text7">
              <p class="ptag-css">0</p>
              <img alt="menu" src="../assets/images/edit.png" class="edit-img">
            </div>
          </div>
        </div>
        <div class="walletAdd-head">
          <p class="address-title">錢包地址</p>
        </div>
        <div class="walletAdd-content">
          <p class="noaddress-text">無資料</p>
        </div>
        <div class="walletAdd-head">
          <p class="address-title">裝備明細</p>
          <div class="add-btn">
            <p class="add-text">派發裝備</p>
          </div>
        </div>
        <div class="whennodata1">
          <div class="nodata-header">
            <p class="header-text0"></p>
            <p class="header-text1">裝備ID</p>
            <p class="header-text2">裝備等級</p>
          </div>
        </div>
        <div class="nodata-loadmorediv">
          <p class="nodata-loadmore">尚無資料</p>
        </div>
      </div>
      <!-- ///////// -->
    </div>
    <modalCom :show="showModal" :selectData="selectData" :popupname="popupname" @close="showModal = false">
      <template #header>
        <!-- <h3>custom header</h3> -->
      </template>
    </modalCom>

  </div>
</template>

<script>
import Vue from "vue";
// @ is an alias to /src
import headerCom from "@/components/headerCom.vue";
import modalCom from "@/components/modalCom.vue";


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
  name: 'SearchView',
  components: {
    headerCom,
    modalCom
  },
  data() {
    return {
      retrieveResult: false,
      showModal: false,
      selectData: {},
      popupname: '',
      searchItem: '',
      showBtn: false,
      tableData: [
        {
          uid: '26652cwchjbewv744vds4vdvdsva',
          name: '202X-0X-0X,23:59:59',
          address: '2-3',
          col4: '0',
          col5: '999,999',
          col6: '999,999',
          col7: '999,999'
        }
      ],
      // tableData: [],
      tableData1: [{
        uid: '26652cwchjbewv744vds4vdvdsva',
        name: '202X-0X-0X,23:59:59',
        address: '2-3',
        col4: '0',
        col5: '999,999',
        col6: '999,999',
        col7: '999,999'
      }, {
        uid: '2016-05-02',
        name: 'Tom',
        address: 'No. 189',
        col4: 'hello',
        col5: 'world',
        col6: 'haha',
        col7: 'ui'
      }, {
        uid: '2016-05-04',
        name: 'Tom',
        address: 'No. 189',
        col4: 'hello',
        col5: 'world',
        col6: 'haha',
        col7: 'ui'
      }, {
        uid: '2016-05-01',
        name: 'Tom',
        address: 'No. 189',
        col4: 'hello',
        col5: 'world',
        col6: 'haha',
        col7: 'ui'
      }],
      tableData2: [{
        itemid: 'ASDS541651ADSA',
        itemlevel: 'Lv.99999'
      }, {
        itemid: 'ASDS541651ADSA',
        itemlevel: 'Lv.88888'
      }, {
        itemid: 'ASDS541651ADSA',
        itemlevel: 'Lv.77777'
      }, {
        itemid: 'ASDS541651ADSA',
        itemlevel: 'Lv.66666'
      }, {
        itemid: 'ASDS541651ADSA',
        itemlevel: 'Lv.55555'
      }, {
        itemid: 'ASDS541651ADSA',
        itemlevel: 'Lv.44444'
      }, {
        itemid: 'ASDS541651ADSA',
        itemlevel: 'Lv.33333'
      }, {
        itemid: 'ASDS541651ADSA',
        itemlevel: 'Lv.22222'
      }, {
        itemid: 'ASDS541651ADSA',
        itemlevel: 'Lv.11111'
      }, {
        itemid: 'ASDS541651ADSA',
        itemlevel: 'Lv.00000'
      }]
    }
  },
  methods: {
    showResult() {
      this.retrieveResult = true;
    },
    uidcss() {
      return "selected-cell"
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleClose(done) {
      this.$confirm('Are you sure to close this dialog?')
        .then(_ => {
          console.log(_);
          done();
        })
        .catch(_ => {
          console.log(_);
        });
    },
    popupData(data, showPopup) {
      console.log(data)
      console.log(showPopup)
      this.selectData = data;
      this.popupname = showPopup;
      this.showModal = true
    },
    popupAddItem() {
      this.selectData = {};
      this.popupname = 'addItem';
      this.showModal = true
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
@import "../assets/scss/_variables.scss"; // $text-primary would be defined in that file

.whennodata1 {
  background: #698DAD;
  max-width: 1440px;
  width: 1440px;
  margin: 0 auto;
  .nodata-header {
    height: 60px;
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 20px;;
    color: #FFF;
  }
  .header-text0 {
    margin-bottom: 0;
    width: 164px;
  }
  .header-text1 {
    margin-bottom: 0;
    width: 250px;
    text-align: left;
    padding-left: 26px;
  }
  .header-text2 {
    margin-bottom: 0;
    width: 210px;
    text-align: left;
    padding-left: 26px;
  }
}
.whennodata {
  background: #3C5266;
  max-width: 1440px;
  width: 1440px;
  margin: 0 auto;
  .nodata-header {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;
    font-size: 20px;;
    color: #FFF;
    margin-bottom: 0;
  }
  .header-text1, .header-text2, .header-text3, .header-text4, .header-text5, .header-text6, .header-text7 {
    margin-bottom: 0;
    text-align: left;
    padding-left: 26px;
  }
  .header-text1 {
    width: 330px;
  }
  .header-text2 {
    width: 210px;
  }
  .header-text3 {
    width: 150px;
  }
  .header-text4 {
    width: 150px;
  }
  .header-text5 {
    width: 200px;
  }
  .header-text6 {
    width: 200px;
  }
  .header-text7 {
    width: 200px;
  }
  .nodata-content {
    height: 107px;
    line-height: 107px;
    display: flex;
  }
  .address-text1, .address-text2, .address-text3, .address-text4, .address-text5, .address-text6, .address-text7 {
    font-weight: 400;
    margin-bottom: 0;
    background: #FFF;
    text-align: left;
    padding-left: 26px;
  }
  .address-text1 {
    font-size: 16px;
    color: #00A0FF;
    width: 330px;
  }
  .address-text2 {
    font-size: 16px;
    color: #000;
    width: 210px;
  }
  .address-text3, .address-text4 {
    font-size: 20px;
    color: #000;
    width: 150px;
  }
  .address-text5, .address-text6, .address-text7 {
    font-size: 20px;
    color: #000;
    width: 200px;
    
    display: flex;
    align-items: center;
  }
  .ptag-css {
    margin-bottom: 0;
    width: 65px;
  }
}
.walletAdd-head {
  height: 60px;
  background: #3C5266;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  width: 1440px;
  margin: 0 auto;
  padding-left: 26px;
  padding-right: 26px;
  .address-title {
    font-weight: 400;
    font-size: 20px;;
    color: #FFF;
    margin-bottom: 0;
  }
  .add-btn {
    background: #00A0FF;
    border-radius: 38px;
    width: 122px;
    height: 36px;
    line-height: 36px;
    z-index: 999;
    .add-text {
      font-weight: 400;
      font-size: 16px;
      color: #FFF;
      margin-bottom: 0;
      cursor: pointer;
    }
  }
}
.walletAdd-content {
  height: 55px;
  display: flex;
  align-items: center;
  max-width: 1440px;
  width: 1440px;
  margin: 0 auto;
  background: #FFF;
  .address-text {
    font-weight: 400;
    font-size: 16px;;
    color: #000;
    margin-bottom: 0;
    padding-left: 26px;
  }
  .noaddress-text {
    font-weight: 400;
    font-size: 16px;
    color: #FF0000;
    margin-bottom: 0;
    padding-left: 26px;
  }
}
.loadmorediv {
  width: 280px;
  height: 44px;
  line-height: 44px;
  border: 2px solid #00A0FF;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 45px auto 170px;
  .loadmore {
    font-weight: 400;
    font-size: 18px;
    color: #00A0FF;
    margin-bottom: 0;
  }
}
.nodata-loadmorediv {
  width: 280px;
  height: 44px;
  line-height: 44px;
  border: 2px solid #93B2C3;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 45px auto 170px;
  .nodata-loadmore {
    font-weight: 400;
    font-size: 18px;
    color: #93B2C3;
    margin-bottom: 0;
  }
}
.popup-css {
  // background: #F5F5F5;
  // box-shadow: 0px 9px 35px rgba(0, 0, 0, 0.25);
  // border-radius: 30px;
}
.retrieve-div {
  height: 60px;
  background: #3C5266;
  display: flex;
  align-items: center;
  max-width: 1440px;
  width: 1440px;
  margin: 0 auto;
  .uid-col, .level-col, .currency-col, .battery-col, .chips-col {
    font-weight: 400;
    font-size: 24px;
    color: #FFF;
    margin-bottom: 0;
  }
  .uid-col {
    width: 35%;
    text-align: left;
    padding-left: 26px;
  }
  .level-col {
    width: 13%;
    text-align: left;
  }
  .currency-col {
    width: 13%;
    text-align: left;
  }
  .battery-col {
    width: 13%;
    text-align: left;
  }
  .chips-col {
    width: 26%;
    text-align: left;
  }
}
.ptextcss {
  margin-bottom: 0;
  width: 90px;
}
.edit-img, .delete-img {
  width: 30px;
  height: 30px;
}
.edit-img {
  margin-left: 1rem;
  cursor: pointer;
  z-index: 999;
}
.retrieve-div2 {
  max-width: 1440px;
  width: 1440px;
  margin: 0 auto;
}
.retrieve-div1 {
  max-width: 1440px;
  width: 1440px;
  margin: 0 auto;
  .uid-col {
    color: #00A0FF;
  }
  .uid-col, .level-col, .currency-col, .battery-col, .chips-col {
    font-weight: 400;
    font-size: 24px;
    color: #FFF;
    margin-bottom: 0;
  }
  .uid-col {
    width: 35%;
    text-align: left;
    padding-left: 26px;
  }
  .level-col {
    width: 13%;
    text-align: left;
  }
  .currency-col {
    width: 13%;
    text-align: left;
  }
  .battery-col {
    width: 13%;
    text-align: left;
  }
  .chips-col {
    width: 26%;
    text-align: left;
  }
}
</style>
<style lang="scss">
.data-query {
  font-weight: 400;
  font-size: 24px;
  color: #00A0FF;
  height: 63px;
  line-height: 63px;
  background: #FFF;
  margin-bottom: 0;
}
.search-div {
  height: 59px;
  line-height: 59px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;
  .search-img {
    width: 40px;
  }
  .input-text {
    font-weight: 400;
    font-size: 20px;
    color: #000;
    background: #E2E2E2;
    border-style: solid;
    border: none;
    padding-left: 20px;
  }
  .formcss {
    background: #E2E2E2;
    margin-left: 12px;
    margin-right: 12px;
  }
  button.searchCss {
    background: transparent url("../assets/images/popup-close.png") no-repeat center;
    font-size: 24px;
    background-size: 24px 24px;
    border: none;

    visibility: hidden;
  }
  button.searchCss,
  button.crossCss {
    text-indent: -999px;
    overflow: hidden;
    width: 40px;
    padding: 0;
    margin: 0;
    border: 1px solid transparent;
    border-radius: inherit;
  }
  button.crossCss {
    cursor: pointer;
    background: transparent url("../assets/images/popup-close.png") no-repeat center;
    font-size: 24px;
    background-size: 24px 24px;
    border: none;

    display: unset;
  }
  .input-text:focus {
    outline: none;
  }
  .input-text::-webkit-input-placeholder, .input-text:-ms-input-placeholder, .input-text::placeholder { /* Edge */ /* Internet Explorer 10-11 */
    font-weight: 400;
    font-size: 24px;
    color: #9E9E9E;
  }
  input[type="search"] {
    // border: none;
    // background: #fff; // transparent
    // margin: 0;
    // padding: 7px 8px;
    // border: 1px solid #fff;
    // border-radius: inherit;
    // width: 100%;

    // font-weight: 400;
    // font-size: 1rem;
    // color: #000;
  }

  input[type="search"]:hover::-webkit-search-cancel-button {
    display: none;
    // background: transparent url("../assets/images/close.png") no-repeat center;
    // font-size: 20px;
    // background-size: 22px 22px;
  }
  input[type="search"]::-webkit-search-cancel-button {
    display: none;
    // background: transparent url("../assets/images/close.png") no-repeat center;
    // font-size: 20px;
    // background-size: 22px 22px;
  }
  input[type="search"]::placeholder {
    // color: #bdbdbd; 
  }
  .search-btn {
    width: 133px;
    background: #2BDE73;
    border-radius: 12px;
    font-weight: 700;
    font-size: 24px;
    color: #FFF;
    cursor: pointer;
  }
}
.search {
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
  .el-table tr.header-2 td.el-table__cell:last-child {
    div {
      justify-content: end;
    }
  }
  .el-table th.el-table__cell>.cell {
    font-weight: 400;
    font-size: 20px;
  }
  .el-table td.el-table__cell div {
    font-weight: 400;
    font-size: 20px;
    color: #000;
    display: flex;
    align-items: center;
  }
  td.el-table__cell {
    height: 107px;
  }
  td.el-table__cell:first-child {
    .cell {
      color: #00A0FF !important;
      font-size: 16px;
    }
  }
  td.el-table__cell:nth-child(2) {
    .cell {
      font-size: 16px;
    }
  }
  .el-table--striped .el-table__body tr.el-table__row--striped td.el-table__cell {
    background: #F0F0F0;
  }
  .el-dialog {
    background: #F5F5F5;
    box-shadow: 0px 9px 35px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
  }
}
.el-table tr.header-search {
  th.el-table__cell {
    background-color: #698DAD !important;
  }
}
.el-table tr.header-2 {
  th.el-table__cell {
    background-color: #698DAD !important;
  }
  td.el-table__cell {
    height: 55px;
  }
  td.el-table__cell div {
    display: unset;
    padding-right: 26px;
    font-weight: 400;
    font-size: 16px !important;
    color: #000;
    display: flex;
    align-items: center;
  }
}
</style>
<style>
.selected-cell {
  /* color: #00A0FF !important; */
}

</style>
