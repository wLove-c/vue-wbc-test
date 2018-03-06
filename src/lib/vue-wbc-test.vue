<template>
  <div class="vue-wbc-test">
    <div class="wbc-item" @click="clickMe" :style="{'backgroundColor':bgColor}">
      Click Me
    </div>
  </div>
</template>
<script>
  export default {
    name: 'vue-wbc-test',
    data() {
      return {
        bgColor: '#ccc'
      }
    },
    methods: {
      clickMe() {
        this.bgColor = '#' + Math.floor(Math.random() * 0xffffff).toString(16)
      }
    }
  }
</script>
<style scoped>
  .vue-wbc-test {
    height: 100vh;
    width: 100%;
  }

  .wbc-item {
    width: 50%;
    height: 100px;
    line-height: 100px;
    font-size: 26px;
    text-align: center;
    margin: 0 auto;
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    color: #fff;
  }

  .wbc-item:hover {
    cursor: pointer;
  }
</style>
