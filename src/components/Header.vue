<template>
  <div class="header">
    <div class="nav-bar">
      <router-link to="/">Personal Projects</router-link>
      <router-link to="/about">About me</router-link>
      <router-link to="/resume">Resume</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  //   props: {
  //     msg: String,
  //   },
});
</script>

<style scoped lang="less">

@import '../css/variables.less';

.header {
  width: 100%;
}

.nav-bar {
  text-align: right;
  padding: 20px;
  line-height: 3em;
}

a {
  text-transform: uppercase;
  margin-left: 15px;
  margin-right: 15px;
  padding-bottom: 8px;
  white-space: nowrap;
  display: inline-block;
}

.router-link-exact-active {
  border: 0px solid @textColor;
  border-bottom-width: 2px;
}

@media only screen and (max-width: 620px){
  .nav-bar {
    // Can giua de 4 muc xuong 2 dong deu nhau thay vi lech phai lom com
    text-align: center;
    padding: 14px 10px 8px;
    line-height: 1.7em;
    font-size: 0.85em;
  }

  a {
    margin-left: 8px;
    margin-right: 8px;
    // Vung cham du lon cho ngon tay
    padding-top: 4px;
    padding-bottom: 4px;
  }
}

</style>
