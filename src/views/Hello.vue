<template>
  <div class="container">
    <text class="vuebly-hello-text">{{ hello }}</text>
    <text class="vuebly-countdown-text">Countdown: {{ countdown }} </text>
    <env title="deviceWidth"></env>
    <button @click="click" class="vuebly-button">
      <text class="vuebly-button-text">Go back</text>
    </button>
  </div>
</template>

<script>
import env from 'components/Env'
import mixins from 'mixins'
export default {

  mixins: [mixins],

  components: {
    env
  },

  data: _ => ({
    env: 'Web',
    hello: 'This is Hello.vue',
    countdown: 3
  }),

  created () {
    var vm = this
    var timer = setInterval(function () {
      if (vm.countdown === 0) {
        weex.requireModule('storage').getItem('hello', ({ result, data }) => {
          if (result === 'success') {
            vm.hello = data
          }
        })
        return clearInterval(timer)
      }
      vm.countdown -= 1
    }, 1000)
  },

  methods: {
    click () {
      this.pop()
    }
  }

}
</script>

<style lang="scss" scope>
  @import '../assets/css/base';

  #weex-root {
    .vuebly-hello-text {
      margin-top: 3rem;
      text-align: center;
      font-size: 0.5rem;
      height: 2rem;
      color: #575757;
    }
    .vuebly-countdown-text {
      margin-bottom: 0.5rem;
      text-align: center;
      font-size: 0.4rem;
      color: #e91e63;
    }
    .vuebly-button {
      width: 9rem;
      height: 1.2rem;
      border-radius: 0.6rem;
      background-color: #e91e63;
      justify-content: center;
      align-items: center;
      border: none;
    }
    .vuebly-button .vuebly-button-text {
      text-align: center;
      color: white;
    }
  }
</style>
