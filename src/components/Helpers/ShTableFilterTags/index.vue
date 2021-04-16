<template>
  <div class="ShTableFilterTags">
    <div class="ShTableFilterTags__title">
      Aktywne filtry:
    </div>
    <div class="ShTableFilterTags__tags-list">
      <el-tag
        class="tags-list__tag"
        v-for="(filter, index) in filteringCriteria"
        :key="index"
        size="mini"
        @close="() => close(index)"
        closable>
        <b>{{filter.name}}</b>: {{filter.label}}
      </el-tag>
      <label v-if="isEmpty" class="tags-list__empty-tag animated fadeIn">
        -- Brak --
      </label>
    </div>
    <div class="ShTableFilterTags__actions">
      <el-button size="mini" @click="clearFilterTags">Usuń filtry</el-button>
    </div>
  </div>
</template>

<script src="./component.js"></script>
<style src="./style.sass" lang="sass" scoped></style>
