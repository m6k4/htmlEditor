<template>
  <div class="PlatformView view">
    <TheHeader />
    <div class="PlatformView__pages">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import store from '@/store';
import TheHeader from '@/components/Platform/TheHeader';

export default {
  name: 'Platform',
  store,
  components: { TheHeader },
};
</script>

<style lang="sass" scoped>
.PlatformView
  &__pages
    padding: 80px 50px
    overflow-y: hidden
</style>
