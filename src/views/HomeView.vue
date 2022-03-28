<template>
  <div class="home">
    <el-container style="height: 100vh">
      <el-aside width="230px" style="background-color: #ffafbd">
        <el-menu>
          <!-- 首页 -->
          <div class="item1" index="1"><i class="el-icon-menu"></i> 首页</div>
          <!-- 数据管理 -->
          <el-submenu index="1" class="item2">
            <template slot="title"
              ><i class="el-icon-document-remove"></i>数据管理</template
            >
            <el-menu-item-group>
              <el-menu-item index="1-1">用户列表</el-menu-item>
              <el-menu-item index="2-2">商家列表</el-menu-item>
              <el-menu-item index="2-2">食品列表</el-menu-item>
              <el-menu-item index="2-2">订单列表</el-menu-item>
              <el-menu-item index="2-2">管理列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 添加数据 -->
          <el-submenu index="2" class="item2">
            <template slot="title"
              ><i class="el-icon-plus"></i>添加数据</template
            >
            <el-menu-item-group>
              <el-menu-item index="2-1">添加用户</el-menu-item>
              <el-menu-item index="2-2">添加商品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右边 -->
      <el-container>
        <!-- 右边头部 -->
        <el-header style="text-align: right; font-size: 12px">
              
        </el-header>
        <!-- 右边内容 -->
        <el-main> </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>
.item1 {
  height: 56px;
  line-height: 56px;
  padding-left: 24px;
  font-size: 20px;
  color: #43c6ac;
  /* background: none; */
}
.item1:hover {
  background: #ffc3a0;
}
.el-menu {
  background: none;
}
.el-menu >>> .el-menu {
  background: none;
}
.item2 >>> .el-submenu__title {
  font-size: 20px;
  color: #43c6ac;
}
.item2 >>> .el-submenu__title:hover {
    background: #ffc3a0;
}
.item2 >>> i {
  font-size: 20px;
  color: #43c6ac;
}
.el-submenu .el-menu-item {
  font-size: 16px;
  color: #43c6ac;
}
.el-submenu .el-menu-item:hover {
    background: #ffc3a0;
}
</style>
