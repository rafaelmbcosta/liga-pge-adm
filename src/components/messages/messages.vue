<template>
  <div class="toast-container">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="toast-cell">
            <MessageItem v-for="(message, index) in getMessages" :key="index" :message="message" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MessageItem from './message-item'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getMessages'
    ])
  },
  components: {
    MessageItem
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i');

  .toast-container{
    position: fixed;
    top: 20;
    left: 0;
    z-index: 9999;
    width: 100%;
  }

  .toast-cell{
    display:inline-block;
    width: 100%;
  }
</style>

