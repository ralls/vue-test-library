<template>
  <div id="app">
    <Block tag="span">Test</Block>
    The pen is <span class="blue">blue</span>!
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style>
@import "./styles/app.css";
.blue {
  color: blue;
}
</style>
