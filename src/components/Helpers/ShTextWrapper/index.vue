<template>
  <div class="ShTextWrapper">
    <el-tooltip class="item" effect="light" :content="text" placement="top" :open-delay="300">
      <div class="ShTextWrapper__wrapped-text" :style="{ 'width' : width }">
        {{ text }}
      </div>
    </el-tooltip>
  </div>
</template>

<script src="./component.js"></script>
<style src="./style.sass" lang="sass" scoped></style>
