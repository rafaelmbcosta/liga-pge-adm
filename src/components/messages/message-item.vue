<template>
    <div class="toast" v-bind:class="{'toast-green': this.message.type === 'success', 'toast-red': this.message.type === 'error', }">
      <div class="toast-icon">
        <svg version="1.1" class="toast-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
          <g><g><path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0    c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7    C514.5,101.703,514.499,85.494,504.502,75.496z"></path>
            </g></g>
        </svg>
      </div>
      <div class="toast-content">
        <p class="toast-type">{{ textType }}</p>
        <p class="toast-message">{{ message.text }}</p>
      </div>
      <div class="toast-close" @click="removeMessage(message)">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.642 15.642" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 15.642 15.642">
        <path fill-rule="evenodd" d="M8.882,7.821l6.541-6.541c0.293-0.293,0.293-0.768,0-1.061  c-0.293-0.293-0.768-0.293-1.061,0L7.821,6.76L1.28,0.22c-0.293-0.293-0.768-0.293-1.061,0c-0.293,0.293-0.293,0.768,0,1.061  l6.541,6.541L0.22,14.362c-0.293,0.293-0.293,0.768,0,1.061c0.147,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22l6.541-6.541  l6.541,6.541c0.147,0.146,0.338,0.22,0.53,0.22c0.192,0,0.384-0.073,0.53-0.22c0.293-0.293,0.293-0.768,0-1.061L8.882,7.821z"></path>
      </svg>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['message'],
  methods: {
    ...mapActions([
      ''
    ])
  },
  computed: {
    textType() {
      if (this.message.type === 'success'){
        return 'Success !'
      }
      if (this.message.type === 'error'){
        return 'Error !'
      }
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i');

  html, body{
    height:100%;
    width:100%;
    font-family: 'Raleway', sans-serif;
    background-color:#efefef;
    display: table;
    text-align: center;

  }

  .add-margin{
    margin-top:20px;
  }

  .toast-svg{
    fill:#fff;
  }

  .toast {
    text-align:left;
      padding: 21px 0;
      background-color:#fff;
      border-radius:4px;
      width: 100%;
      top: 0px;
      position:relative;
      box-shadow: 0px 0px 14px 2px rgba(0,0,0,0.4);
      margin-bottom: 20px;
  }

  .toast:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
    border-top-left-radius:4px;
    border-bottom-left-radius: 4px;
  }

  .toast-icon{
    position:absolute;
    top:50%;
    left:22px;
    transform:translateY(-50%);
    width:14px;
    height:14px;
    padding: 7px;
    border-radius:50%;
    display:inline-block;
  }

  .toast-type {
    color: #3e3e3e;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 8px;
  }

  .toast-message {
      font-size: 14px;
      margin-top: 0;
    margin-bottom: 0;
      color: #878787;
  }

  .toast-content{
    padding-left:70px;
    padding-right:60px;
  }

  .toast-close {
      position: absolute;
      right: 22px;
      top: 50%;
      width: 14px;
      cursor:pointer;
      height: 14px;
    fill:#878787;
      transform: translateY(-50%);
  }

  .toast-green .toast-icon{
    background-color:#015d47;
  }

  .toast-green:before{
    background-color:#015d47;
  }

  .toast-red .toast-icon{
    background-color:#e04732;
  }

  .toast-red:before{
    background-color:#e04732;
  }
</style>
