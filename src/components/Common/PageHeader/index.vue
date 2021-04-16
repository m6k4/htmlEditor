<template>
  <div class="PageHeader animated fadeIn">
    <h2 class="PageHeader__title">
      <i :class="`fa fa-${faIcon}`" /> {{ title }}
    </h2>
    <small class="PageHeader__description">
      {{ description }}
    </small>
    <ShDividerLine />
    <div class="PageHeader__breadcrumbs" v-if="breadcrumbItems.length != 0">
      <ShBreadcrumb :items="breadcrumbItems" />
    </div>
  </div>
</template>

<script src="./component.js"></script>
<style src="./style.sass" lang="sass" scoped></style>
