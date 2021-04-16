<template>
  <div class="DisplayHtmlWindow">
    <div class="DisplayHtmlWindow__header">
      <div class="DisplayHtmlWindow__title">
        Wygenerowany kod HTML możesz skopiować do schowka
      </div>
      <el-tooltip
        class="item"
        effect="dark"
        placement="top"
        content="Kliknij, aby skopiować do schowka"
      >
        <i
          class="fa fa-clipboard DisplayHtmlWindow__button"
          @click="copyToClipboard"
        />
      </el-tooltip>
    </div>
    <div ref="htmlContent" class="DisplayHtmlWindow__content">
      {{ htmlContent }}
    </div>
  </div>
</template>
<style src="./style.sass" lang="sass" scoped></style>
<script src="./component.js" />
