<script>
export default {
  data() {
    return {
      objectAmount: 0,
      plusData: false,
      minusData: false,
      confirmState: false,
      itemLevel: '',
      itemId: '',
    }
  },
  props: {
    show: Boolean,
    selectData: {},
    popupname: String
  },
  computed: {
    notDisabled: function() {
      console.log(this.itemId); 
      return (this.itemId !== '' && this.itemLevel !== '');
    }
  },
  methods: {
    addAmount() {
      this.plusData = true;
      this.minusData = false;
      this.confirmState = true;
    },
    minusAmount() {
      this.minusData = true;
      this.plusData = false;
      this.confirmState = true;
    },
    updateData() {
      this.plusData = false;
      this.minusData = false;
      this.confirmState = false;
      this.$emit('close')
    }
  }
}
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask maskupdate1">
      <div class="modal-wrapper">
        <div class="modal-container updateCon1">
          <div class="modal-header updateHeader1">
            <img alt="menu" src="../assets/images/popup-close.png" @click="$emit('close')" class="close-img">
          </div>

          <div class="modal-body updateBody1">
            <!-- <slot name="body">default body</slot> -->
            <div class="bodyupdate1">
              <p class="uid-css">對象UID</p>
              <p class="uid-val">26652cwchjbewv744vds4vdvdsva</p>

              <p class="object-name" v-if="popupname == '當前A幣'">A幣</p>
              <p class="object-name" v-else-if="popupname == '當前電池'">電池</p>
              <p class="object-name" v-else-if="popupname == '當前晶片'">晶片</p>
              <p class="object-name" v-else>裝備</p>
              <!-- maxlength="3" -->
              <input
                class="amountcss"
                type="text"
                v-model="objectAmount"
                pattern="^([0-9]{3})$"
                placeholder="xxx"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                required
                v-if="popupname !== 'addItem'"
              />

              <div class="addminus-btn" v-if="popupname !== 'addItem'">
                <div class="plus-btn" :class="plusData == true ? 'activeBtn' : ''" @click="addAmount">增加</div>
                <div class="minus-btn" :class="minusData == true ? 'activeBtn' : ''" @click="minusAmount">減少</div>
              </div>

              <div v-if="popupname == 'addItem'">
                <input
                  class="amountcss"
                  type="text"
                  v-model="itemId"
                  placeholder="請輸入裝備ID"
                  required
                />
                <input
                  class="amountcss1"
                  type="text"
                  v-model="itemLevel"
                  pattern="^([0-9]{3})$"
                  placeholder="請輸入裝備等級"
                  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                  required
                />
              </div>
            </div>
          </div>

          <div class="modal-footer updatefoot-div">
            <p v-if="popupname == 'addItem' && notDisabled" :class="notDisabled == true ? 'yesFilled' : 'updatefoot1'" @click="$emit('close')" :disabled='notDisabled'>確認派發</p>
            <p v-else-if="popupname == 'addItem' && notDisabled == false" class="updatefoot1" :disabled='!notDisabled'>確認派發</p>
            <p v-else-if="popupname !== 'addItem' && confirmState" :class="confirmState == true ? 'yesFilled' : 'updatefoot1'" @click="updateData">完成</p>
            <p v-else-if="popupname !== 'addItem' && confirmState == false" class="updatefoot1">完成</p>
          </div>


        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
<style lang="scss">
  .maskupdate1 {
    background-color: unset;
    top: 21%;
    height: unset;
    z-index: 10;
  }
  .updateCon1 {
    width: 480px;
    height: 428px;
    background: #F5F5F5;
    box-shadow: 0px 9px 35px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    // padding-left: 4rem;
  }
  .updateHeader1 {
    justify-content: end !important;
  }
  .updateBody1 {
    text-align: left;
    padding-right: 14px !important;
    .bodyupdate1 {
      width: 263px; 
      margin: 0 auto;
    }
  }
  .updatefoot-div {
    justify-content: flex-start !important;
    padding-right: 14px !important;
    .updatefoot1, .yesFilled {
      font-weight: 400;
      font-size: 18px;
      border-radius: 22px;
      height: 44px;
      line-height: 44px;
      width: 280px;
      margin-bottom: 0;
      margin: 0 auto;
    }
    .updatefoot1 {
      color: #93B2C3;
      border: 2px solid #93B2C3;
    }
    .yesFilled {
      color: #00A0FF;
      border: 2px solid #00A0FF;
      cursor: pointer;
    }
  }
  .amountcss, .amountcss1 {
    font-weight: 400;
    font-size: 18px;
    color: #000;
    border-style: solid;
    border: none;
    box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
    text-align: right;
    padding-right: 10px;
    width: 263px;
    height: 45px;
  }
  .amountcss1 {
    margin-top: 12px;
  }

  .amountcss::-webkit-input-placeholder, .amountcss1::-webkit-input-placeholder { /* Edge */
    color: #AFAFAF;
    font-weight: 400;
    font-size: 18px;
  }
  .amountcss:-ms-input-placeholder, .amountcss1:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #AFAFAF;
    font-weight: 400;
    font-size: 18px;
  }
  .amountcss::placeholder, .amountcss1::placeholder {
    color: #AFAFAF;
    font-weight: 400;
    font-size: 18px;
  }

  .amountcss:focus, .amountcss1:focus {
    outline: none;
  }
  .uid-css {
    font-weight: 400;
    font-size: 20px;
    color: #000;
  }
  .uid-val {
    font-weight: 400;
    font-size: 16px;
    color: #00A0FF;
  }
  .close-img {
    width: 30px;
    cursor: pointer;
  }
  .object-name {
    font-weight: 400;
    font-size: 32px;
    color: #000;
  }
  .addminus-btn {
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 18px;
    color: #FFF;
    width: 263px;
    padding-top: 1rem;
    .activeBtn {
      border: 3px solid #FF8181 !important;
    }
    .plus-btn {
      background: #2BDE73;
      border: 3px solid #2BDE73;
      border-radius: 5px;
      padding: 5px 2rem;
      width: 48%;
      text-align: center;
      cursor: pointer;
    }
    .minus-btn {
      background: #565656;
      border: 3px solid #565656;
      border-radius: 5px;
      padding: 5px 2rem;
      width: 48%;
      text-align: center;
      cursor: pointer;
    }
  }
  input:invalid ~ p.sss {
    background-color: red;
  }
</style>


<!-- 
https://vuejs.org/examples/#modal
https://dev.to/davidemaye/how-to-create-a-modal-component-in-nuxt-38g1
https://fsymbols.com/keyboard/windows/alt-codes/list/
 -->