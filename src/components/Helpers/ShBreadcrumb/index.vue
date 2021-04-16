<template>
  <div class="ShBreadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="(item, index) in items" :key="index"
        :to="{ path: item.path || null }">
        {{ item.label }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script src="./component.js"></script>
<style src="./style.sass" lang="sass"></style>
