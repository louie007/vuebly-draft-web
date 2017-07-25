<template>
  <div class="container">
    <image class="vuebly-logo-image" src="/static/images/vuebly.png" />
    <button @click="click" class="vuebly-button">
      <text class="vuebly-button-text">Say Hello</text>
    </button>
  </div>
</template>

<script>
import mixins from 'mixins'
export default {

  mixins: [mixins],

  methods: {
    click () {
      weex.requireModule('storage').setItem('hello', 'Greeting from Index.vue', ({ result }) => {
        if (result === 'success') {
          this.push('hello')
        }
      })
    }
  }

}
</script>

<style lang="scss" scope>
  @import '../assets/css/base';

  #weex-root {
    .vuebly-logo-image {
      margin-top: 3rem;
      margin-bottom: 1rem;
      height: 3rem;
      width: 3rem;
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
