<script setup>
import {CloseBold, DArrowRight, SemiSelect} from "@element-plus/icons-vue";
import {DArrowLeft} from "@element-plus/icons-vue";
</script>

<script>
  export default {
    data() {
      return {
        isCollapse: true,
        isLoading: true
      }
    },

    methods: {

      // 最小化和关闭按钮
      minimize() {window.electron.minimize()},
      close() {window.electron.close()},

    },

    created() {
      setTimeout(() => {
        this.isLoading = false
      },100)
    }
  }

</script>

<template >
  <div class="common-layout" v-loading="isLoading" element-loading-text="库库加载中……">
    <el-container>
        <div>
          <el-col>
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                :collapse="isCollapse"
                @open="handleOpen"
                @close="handleClose"
                router
            >
                <el-menu-item index="/">
                  <el-icon><HomeFilled /></el-icon>
                  <template #title><span>首页</span></template>
                </el-menu-item>

                <el-menu-item index="settings">
                  <el-icon><setting /></el-icon>
                  <template #title>设置</template>
                </el-menu-item>
            </el-menu>
          </el-col>

        </div>

      <el-container>
        <el-header class="drag headers">
          <el-row style="height: 100%" justify="space-between">
            <el-col :span="2">
              <el-button class="no_drag" :icon="!isCollapse? DArrowLeft : DArrowRight" circle @click="isCollapse = !isCollapse"/>
            </el-col>
            <el-col :span="18" class="title">
              <span>Hel1antHu5 Tools</span>
            </el-col>
            <el-col :span="4" justify="end" style="text-align: end">
              <el-button  class="no_drag" :icon="SemiSelect" circle @click="minimize()"/>
              <el-button  class="no_drag" type="danger" :icon="CloseBold" circle @click="close()"/>
            </el-col>
          </el-row>
        </el-header>
        <el-main class="main">
          <el-scrollbar height="91vh">
            <router-view></router-view>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 140px;
  min-height: 100vh;
}

.el-menu-vertical-demo:is(.el-menu--collapse) {
  width: 65px;
}

.el-menu--collapse {
  min-height: 100vh;
}

.headers {
  height: 43px;
}

.drag {
  padding: 5px;
  -webkit-app-region: drag
}

.no_drag {
  -webkit-app-region: no-drag;
}

.title {
  display: flex;
  justify-content: center;
  margin-top: 5px;
}

.main {
  background-color: #f5f6f7;
  padding-right: 2px;
  max-width: 95vw;
}

</style>
