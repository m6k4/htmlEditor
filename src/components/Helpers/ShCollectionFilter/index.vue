<template>
  <div class="ShCollectionFilter">
    <el-input v-model="filter" @keydown.native="handleFiltering"
      :clearable="true"
      size="small"
      @clear="handleFiltering"
      data-test="ShCollectionFilter__input"
    >
      <template slot="prepend"><i class="fa fa-search" aria-hidden="true"></i></template>
    </el-input>
  </div>
</template>

<script src="./component.js"></script>
<style src="./style.sass" lang="sass" scoped></style>
