<template>
  <div class="">
    <div class="head-bg">
      <b-button v-b-toggle.sidebar-no-header class="btn-css">
        <img alt="menu" src="../assets/images/menu.png" class="menu-css">
        <span class="menu-title">超能英雄 - 後台</span>
      </b-button>
      <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
        <template #default="{ hide }">
          <div @click="hide" class="border-close">
            <img alt="menu" src="../assets/images/close.png" class="close-css">
          </div>
          <div>
            <nav class="menu-div">
              <router-link @click.native="hide" to="/search" class="nav-link">玩家資料查詢</router-link>
              <router-link @click.native="hide" to="/buySellHistory" class="nav-link">玩家拍賣場歷程</router-link>
              <router-link @click.native="hide" to="/userWalletHistory" class="nav-link">玩家出入金記錄</router-link>
              <router-link @click.native="hide" to="/rewardHistory" class="nav-link">玩家獲取獎勵記錄</router-link>
              <router-link @click.native="hide" to="/announcementManage" class="nav-link">公告管理</router-link>
            </nav>
          </div>
          
          <!-- <div class="p-3">
            <nav class="mb-3">
              <b-nav vertical>
                <b-nav-item active @click="hide">玩家資料查詢</b-nav-item>
                <b-nav-item href="/about" @click="hide">公告管理</b-nav-item>
              </b-nav>
            </nav>
          </div> -->
        </template>
      </b-sidebar>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'headerCom',
  data() {
    return {
      variant: 'dark'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss"; // $text-primary would be defined in that file

.head-bg {
  background: #00A0FF;
  height: 100px;
  display: flex;
  .logo-css {
    font-weight: 500;
    font-size: 40px;
    color: $text-primary; // example
    color: #000;

    margin-top: 0;
    margin-bottom: 0;
  }
  .btn-css {
    background-color: unset;
    border-style: none;
    display: flex;
    align-items: center;
    padding-left: 2rem;
    .menu-css {
      width: 50px;
    }
    .menu-title {
      font-weight: 500;
      font-size: 32px;
      color: #FFF;
      padding-left: 2rem;
    }
  }
  .border-close {
    border-bottom: 3px solid #000000;
    width: 70%;
    margin: 0 auto;
  }
  .close-css {
    width: 36px;
    margin-top: 45px;
    margin-bottom: 45px;
    cursor: pointer;
  }
  .menu-div {
    display: flex;
    flex-direction: column;
    padding-left: 4rem;
  }
}
.nav-link {
  font-weight: 500;
  font-size: 24px;
  color: #000;
  padding-top: 2rem;
  text-align: left;
  margin-bottom: 0;
}
</style>
<style>
.b-sidebar {
  width: 350px !important;
}
div#sidebar-no-header {
  background: #AEE1FF !important;
  box-shadow: 7px 0px 11px rgba(0, 0, 0, 0.15) !important;
}
</style>
