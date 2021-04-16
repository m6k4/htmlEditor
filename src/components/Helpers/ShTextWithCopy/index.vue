<template>
  <div class="ShTextWithCopy">
    <el-tooltip class="item" effect="dark" content="Kopiuj do schowka" placement="top">
      <el-button circle size="micro" v-if="!isDisabled && copyPosition === 'left'" class="el-button--simple-action"
        v-clipboard:copy="text"
        v-clipboard:success="onCopy"
      >
        <i class="fa fa-files-o" aria-hidden="true"></i>
      </el-button>
    </el-tooltip>
    {{ text }}
    <el-tooltip class="item" effect="dark" content="Kopiuj do schowka" placement="top">
      <el-button circle size="micro" v-if="!isDisabled && copyPosition === 'right'" class="el-button--simple-action"
        v-clipboard:copy="text"
        v-clipboard:success="onCopy"
      >
        <i class="fa fa-files-o" aria-hidden="true"></i>
      </el-button>
    </el-tooltip>
  </div>
</template>

<script src="./component.js"></script>
