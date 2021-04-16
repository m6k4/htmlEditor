<template functional>
  <div class="ShDividerLine">
    <span class="ShDividerLine__text" v-if="props.text" >{{ props.text }}</span>
    <div class="ShDividerLine__line" :style="{ width: props.width || '100%' }"/>
  </div>
</template>

<style src="./style.sass" lang="sass" scoped></style>
