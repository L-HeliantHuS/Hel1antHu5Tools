<script setup>
  const value = new Date()
</script>

<template>
  <el-row class="calc">
      <el-calendar v-model="value" />
  </el-row>

  <el-row>
    123
  </el-row>
</template>

<style scoped>
.calc {
  //height: 500px;
}
</style>