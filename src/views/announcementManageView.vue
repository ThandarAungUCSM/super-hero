<template>
  <div>
    <headerCom />
    <div class="announcementManage">
      <div>
        <p class="data-query">公告管理</p>
      </div>
      <div class="announceBlock">
        <div class="left-div">
          <p class="left-title">新公告</p>
          <div class="parent-area">
            <textarea name="Text1" v-model="result1" cols="40" rows="5" class="multiline1"></textarea>
          </div>
        </div>
        <div class="right-div">
          <p class="right-title">張貼中公告(僅供閱覽)</p>
          <div class="parent-area">
            <p class="multiline2">{{result2}}</p>
          </div>
        </div>
      </div>
      <div class="postdiv">
        <p class="postBtn" @click="postData">張貼</p>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import headerCom from "@/components/headerCom.vue";

export default {
  name: 'announcementManageView',
  components: {
    headerCom,
  },
  data() {
    return {
      result1: "",
      result2: "",
    }
  },
  methods: {
    postData() {
      this.result2 = this.result1;
      this.result1 = '';
    }
  },
}
</script>

<style lang="scss" scoped>
.announcementManage {
  width: 1440px;
  max-width: 1440px;
  margin: 0 auto;
  .announceBlock {
    display: flex;
    justify-content: center;
    padding-top: 1rem;
    .left-div {
      width: 643px;
      max-width: 643px;
      margin-right: 12px;
      .left-title {
        font-weight: 400;
        font-size: 24px;
        color: #000;
      }
      .parent-area {
        width: 100%;
        background: #FFFFFF;
        border-radius: 14px;
        padding: 2rem;
      }
      .multiline1 {
        height: 550px;
        border: none;
        font-weight: 400;
        font-size: 20px;
        color: #000;
        background: #FFFFFF;
        resize: none;
        overflow-y: scroll;
        width: 100%;
        padding-right: 1rem;
      }
      .multiline1:focus {
        outline: none !important;
        border:1px solid #FFF;
        // box-shadow: 0 0 10px #719ECE;
        // box-shadow: 0 0 10px #FAFAFA;
        cursor: default;
      }

      .multiline1::-webkit-scrollbar {
        background: #E6E6E6;
        border-radius: 14px;
        width: 9px;
      }
      .multiline1::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #FFF; 
        border-radius: 14px;
      }
      .multiline1::-webkit-scrollbar-thumb {
        background: #D9D9D9;
        border-radius: 14px;
      }
      .multiline1::-webkit-scrollbar-thumb:hover {
        background: #D9D9D9;
      }
    }
    .right-div {
      width: 643px;
      max-width: 643px;
      margin-left: 12px;
      .right-title {
        font-weight: 400;
        font-size: 24px;
        color: #000;
      }
      .parent-area {
        width: 100%;
        background: #E6E6E6;
        border-radius: 14px;
        padding: 2rem;
      }
      .multiline2 {
        height: 550px;
        font-weight: 400;
        font-size: 20px;
        color: #595959;
        overflow-y: scroll;
        background: #E6E6E6;
        width: 100%;
        padding-right: 1rem;

        word-break: break-word;
        text-align: left;
        cursor: default;
      }
      .multiline2::-webkit-scrollbar {
        width: 9px;
      }
      .multiline2::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #D9D9D9; 
        background: #D9D9D9;
        border-radius: 14px;
      }
      .multiline2::-webkit-scrollbar-thumb {
        background: #D9D9D9;
        border-radius: 14px;
      }
      .multiline2::-webkit-scrollbar-thumb:hover {
        background: #D9D9D9;
      }
    }
  }
  .postdiv {
    margin-left: 65px;
    .postBtn {
      background: #2BDE73;
      border-radius: 12px;
      font-weight: 700;
      font-size: 24px;
      color: #FFF;
      width: 133px;
      margin-top: 10px;
      height: 59px;
      line-height: 59px;
      cursor: pointer;
    }
  }
}
</style>
<style lang="scss">
</style>
<style>
</style>

