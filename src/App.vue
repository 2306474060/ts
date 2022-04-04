<template>
  <div id="app">

    <!--<top-menu />-->
    <left-menu-bar/>

  </div>
</template>

<script lang="ts" setup>

import TopMenu from "@/views/topMenu.vue";
import LeftMenuBar from "@/views/leftMenuBar.vue";
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
html{height:100%;width: 100%}

</style>