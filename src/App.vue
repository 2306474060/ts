<template>
  <div id="app">

    <top-menu />
    <left-menu-bar></left-menu-bar>
    <roll-images></roll-images>

  </div>
</template>

<script lang="ts" setup>

import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import TopMenu from "@/views/topMenu.vue";
import RollImages from "@/views/rollImages.vue";
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
.tac{
  width: 450px;
  height: 100%;
}

</style>