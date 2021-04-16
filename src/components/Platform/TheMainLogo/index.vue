<template functional>
  <div class="TheMainLogo animated fadeInLeft">
    <div class="TheMainLogo__container">
      <span class="TheMainLogo__title TheMainLogo__title--tiny">HTML</span>
      <span class="TheMainLogo__title TheMainLogo__title--bold">parser</span>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.TheMainLogo
  height: 100%
  background-color: $app-main-color
  width: 150px
  line-height: 16px
  font-size: 20px
  display: flex
  justify-content: center
  align-items: center

  &__container
    padding: 5px

  &__title
    display: block
    color: $app-text-color
    text-transform: uppercase
  &__title--tiny
    font-weight: 200
  &__title--bold
    font-weight: 900
    letter-spacing: 2px
</style>
