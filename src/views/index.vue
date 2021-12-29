<template>
  <img src="@/assets/logo.png" alt="" />
  <h3>Hello World Vue</h3>
  <el-row class="el-row-mb-20" type="flex" justify="center">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
  </el-row>

  <el-row class="el-row-mb-20" type="flex" justify="center">
    <el-button plain>Plain</el-button>
    <el-button type="primary" plain>Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>
  </el-row>

  <el-row class="el-row-mb-20" type="flex" justify="center">
    <el-button round>Round</el-button>
    <el-button type="primary" round>Primary</el-button>
    <el-button type="success" round>Success</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round>Danger</el-button>
  </el-row>

</template>
<script >
export default {
  setup() {
    console.log('运行环境配置：',process.env);
  },
};
</script>
<style lang="scss" scoped>
.el-row-mb-20 {
  margin-bottom: 20px;
}
h3 {
  color: $theme-color;
  font-size: $font-size-title;
}
</style>