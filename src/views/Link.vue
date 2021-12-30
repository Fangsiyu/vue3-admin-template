<template>
  <div class="about">
    <el-row type="flex" justify="center">
      <h2>推荐 VUE 前端资源</h2>
    </el-row>
    <el-row type="flex" justify="center">
      <el-table :data="links" stripe style="width: 80%">
        <el-table-column type="index" label="序号" />
        <el-table-column prop="name" label="名称" width="180" />
        <el-table-column prop="value" label="链接" width="180">
          <template #default="scope">
            <el-link
              :href="scope.row.value"
              type="success"
              :title="scope.row.value"
              target="_blank"
              >{{ scope.row.name }}</el-link
            >
          </template>
        </el-table-column>
        <el-table-column prop="note" label="简介" />
        <el-table-column prop="from" label="备注" />
      </el-table>
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
        note: "渐进式JavaScript 框架",
        from: "vue 官方",
      },
      {
        name: "VUEX",
        value:
          "https://vuex.vuejs.org/zh/#%E4%BB%80%E4%B9%88%E6%98%AF-%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E6%A8%A1%E5%BC%8F",
        note: "Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。",
        from: "vue 官方",
      },
      {
        name: "Vue Router",
        value: "https://router.vuejs.org/zh/",
        note: "Vue.js 官方的路由管理器。",
        from: "vue 官方",
      },
      {
        name: "Vue CLI",
        value: "https://cli.vuejs.org/zh/",
        note: "🛠️ Vue.js 开发的标准工具",
        from: "vue 官方",
      },
      {
        name: "awesome-vue",
        value: "https://github.com/vuejs/awesome-vue",
        note: "awesome-vue",
        from: "vue 官方",
      },
      {
        name: "Element Plus",
        value: "https://element-plus.gitee.io/zh-CN/",
        note: "Element Plus，一套为开发者、设计师和产品经理准备的基于 Vue 3 的桌面端组件库",
        from: "饿了么",
      },
      {
        name: "Naïve UI",
        value: "https://www.naiveui.com/zh-CN/light",
        note: "一个 Vue 3 组件库,比较完整，主题可调，使用 TypeScript，不算太慢,有点意思",
        from: "TuSimple 图森未来",
      },
      {
        name: "TDesign",
        value: "https://tdesign.tencent.com/",
        note: "腾讯 TDesign 企业级设计体系，包含 桌面，移动，小程序三端UI框架",
        from: "腾讯",
      },
      {
        name: "Taro",
        value: "https://taro.aotu.io/",
        note: "Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ / 飞书 小程序 / H5 / RN 等应用。",
        from: "京东",
      },
      {
        name: "Ant Design-vue",
        value: "https://antdv.com/docs/vue/introduce-cn",
        note: "antd 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。",
        from: "阿里",
      },
      {
        name: "iconfont",
        value: "http://www.iconfont.cn/",
        note: "阿里系图标库",
        from: "阿里",
      },
      {
        name: "IconPark",
        value: "https://iconpark.oceanengine.com/home",
        note: "来自字节跳动的丰富多彩的资源库免费使用，IconPark 是技术驱动图标样式的开源图标库",
        from: "字节",
      },
      {
        name: "Tailwind CSS",
        value: "https://www.tailwindcss.cn/",
        note: "Tailwind CSS 是一个功能类优先的 CSS 框架，它集成了诸如 flex, pt-4, text-center 和 rotate-90 这样的的类，它们能直接在脚本标记语言中组合起来，构建出任何设计。",
        from: "---",
      },
      {
        name: "Vant",
        value: "https://vant-contrib.gitee.io/vant/#/zh-CN/",
        note: "轻量、可靠的移动端 Vue 组件库",
        from: "有赞",
      },
    ];

    return {
      links,
    };
  },
};
</script>
<style lang="scss" scoped>
</style>
