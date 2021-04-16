<template>
  <div
    class="PageLayout"
    :style="{ paddingLeft: padding, paddingRight: padding }"
  >
    <slot></slot>
  </div>
</template>

<script src="./component.js"></script>
<style src="./style.sass" lang="sass" scoped></style>
