<template functional>
  <div class="ShUserAvatar" :style="{ width: props.width || '24px', height: props.width || '24px' }"
    v-loading="props.isLoading"
    element-loading-background="rgba(0, 0, 0, 0)"
    >
    <img
      v-if="props.isLoading"
      class="ShUserAvatar__image"
      :src="'/static/img/loading-avatar.png'"
    />
    <img
      v-if="!props.isLoading"
      class="ShUserAvatar__image"
      :src="props.avatar && (props.avatar !== '')? props.avatar : '/static/img/default-avatar.png'"
    />
  </div>
</template>
<style src="./style.sass" lang="sass" scoped></style>
