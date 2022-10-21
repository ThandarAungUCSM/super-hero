<template>
  <div class="login">
    <div class="login-css">
      <p class="login-title">超能英雄 後台</p>
      <hr class="hr-css" />

      <div class="form-css">
        <p class="accountno-text">帳號：</p>
        <input
          class="accountno-input"
          type="text"
          v-model="accountNo"
          pattern="^([0-9]{3})$"
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
          required
        />
      </div>
      <div class="form-css">
        <p class="password-text">密碼：</p>
        <input
          class="password-input"
          type="text"
          v-model="accountPwd"
          pattern="^([0-9]{3})$"
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
          required
        />
      </div>
      <div class="login-div">
        <p class="loginerror-css" v-if="somethingWrong">帳號或密碼錯誤</p>
        <button class="loginbtn-css" @click="loginBtn">登入</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "LoginView",
  data() {
    return {
      somethingWrong: false,
      accountNo: null,
      accountPwd: null
    }
  },
  components: {},
  methods: {
    loginBtn() {
      this.$router.push("search");
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  .login-css {
    max-width: 711px;
    width: 711px;
    height: 554px;

    background: #00a0ff;
    box-shadow: 1px 17px 20px rgba(0, 0, 0, 0.25);

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    margin: auto;
    .login-title {
      font-weight: 700;
      font-size: 36px;
      color: #fff;
      margin-top: 30px;
    }
    .hr-css {
      width: 487px;
      border: 2px solid #ffffff;
      margin: auto;
    }
    .form-css {
      width: 487px;
      margin: 0 auto;
      text-align: left;
    }
    .accountno-text,
    .password-text {
      font-weight: 700;
      font-size: 24px;
      color: #fff;
      margin-bottom: 5px;
      margin-top: 20px;
    }
    .accountno-input,
    .password-input {
      width: 100%;
      height: 53px;
      padding: unset;
      border-style: solid;
      border: none;
      padding-left: 1rem;
    }
    .accountno-input:focus, .password-input:focus {
      outline: none;
    }
    .login-div {
      position: absolute;
      bottom: 35px;
      left: 0;
      right: 0;
      margin: auto;
    }
    .loginbtn-css {
      width: 200px;
      height: 64px;
      background: #2bde73;
      border-style: unset;

      font-weight: 700;
      font-size: 36px;
      color: #fff;
    }
    .loginerror-css {
      font-weight: 400;
      font-size: 24px;
      color: #ff1a1a;
      margin-bottom: 2.3rem;
    }
  }
}
</style>
