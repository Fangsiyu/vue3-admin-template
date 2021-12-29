<template>
  <div class="about">
    <el-row type="flex" justify="center">
      <h2>推荐前端资源</h2>
    </el-row>
    <el-row v-for="(item, i) in links" :key="i" type="flex" justify="center">
      <el-link :href="item.value" target="_blank">{{ item.name }}</el-link>
    </el-row>
  </div>
</template>
<script>
export default {
  setup() {
    const links = [
      {
        name: "VUE",
        value: "https://v3.cn.vuejs.org/",
      },
      {
        name: "VUEX",
        value: "https://vuex.vuejs.org/zh/#%E4%BB%80%E4%B9%88%E6%98%AF-%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E6%A8%A1%E5%BC%8F",
      },
      {
        name: "Vue Router",
        value: "https://router.vuejs.org/zh/",
      },
      {
        name: "Vue CLI",
        value: "https://cli.vuejs.org/zh/",
      },
    ];

    return {
      links,
    };
  },
};
</script>
<style lang="scss" scoped>
a {
  font-size: 20px;
  line-height: 2;
}
</style>
