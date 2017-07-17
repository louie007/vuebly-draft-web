<template>
  <div class="wrapper" @click="update">
    <text class="title">Bonjour {{target}}!</text>
  </div>
</template>

<style>
  .wrapper { align-items: center; padding-top: 120px; }
  .title { font-size: 48px; }
  .logo { width: 360px; height: 82px; }
</style>

<script>
  export default {
    data: {
      target: 'Vuebly'
    },
    methods: {
      update: function (e) {
        this.target = 'World'
        console.log('target:', this.target)
      }
    }
  }
</script>
