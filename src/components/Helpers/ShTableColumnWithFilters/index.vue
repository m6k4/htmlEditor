<template>
  <div class="ShTableColumnWithFilters">
    <div class="ShTableColumnWithFilters__column-name" :class="{ 'ShTableColumnWithFilters__column-name--active' : selectedItem }">{{ columnName }}</div>

    <el-dropdown size="mini" placement="bottom-start" @command="handleClickOnItem" trigger="hover" v-if="filterType === 'options'">
      <span class="el-dropdown-link ShTableColumnWithFilters__filter filter-select">
        <template v-if="!asMock">
          <span class="filter-select__text" :class="{ 'filter-select__text--inactive' : !selectedItem }">
            {{ selectedItem ? selectedItem.label : 'Filtruj' }}
            <i class="fa fa-angle-down" aria-hidden="true"></i>
          </span>
        </template>
        <template v-if="asMock">
          <span class="filter-select__text filter-select__text--inactive"> -------- </span>
        </template>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="(item, index) in filters" :key="index" :command="item">
          <span :class="{ 'el-dropdown-menu__item-label--active' : selectedItem ? (item.value === selectedItem.value) : false }">{{ item.label }}</span>
        </el-dropdown-item>
        <el-dropdown-item :divided="true" :command="{ label: 'clear' }" v-if="!asMock">
          Wyczyść
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <div class="ShTableColumnWithFilters__filter filter-daterange" v-if="filterType === 'daterange'">
      <el-popover placement="bottom" width="350" trigger="hover">
        <label class="el-popover__label">{{ columnName }}</label>
        <el-date-picker
          size="mini"
          v-model="daterange"
          type="daterange"
          start-placeholder="Od"
          end-placeholder="Do"
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd"
          :default-time="['00:00:00', '23:59:59']"
          @change="handleClickOnItem"
        >
        </el-date-picker>
        <span class="filter-daterange__text" :class="{ 'filter-daterange__text--inactive' : !selectedItem }" slot="reference">
          {{ selectedItem ? selectedItem.label : 'Filtruj' }}
          <i class="fa fa-angle-down" aria-hidden="true"></i>
        </span>
      </el-popover>
    </div>

    <div class="ShTableColumnWithFilters__filter filter-input"  v-if="filterType === 'input'"  @click="hasIncorectData = false"
     :class="{ 'filter-input--active' : selectedItem }"
    >

      <el-popover placement="bottom" width="350" trigger="hover">
        <el-popover
          placement="top"
          width="100"
          trigger="manual"
          v-model="hasIncorectData"
          popper-class="el-popover--error"
          content="Nieprawidłowy typ danych"
        >
          <template slot="reference">
            <label class="el-popover__label">{{ columnName }}</label>
            <el-input size="mini" v-model="input" @keyup.enter.native="handleFilterOnInput"> </el-input>
            <i class="el-popover__input-close-icon el-icon-circle-close" v-if="selectedItem" @click="input = null"></i>
          </template>
        </el-popover>
        <span class="filter-input__text" :class="{ 'filter-input__text--inactive' : !selectedItem }" slot="reference">
          {{ selectedItem ? selectedItem.value : 'Filtruj' }}
          <i class="fa fa-angle-down" aria-hidden="true"></i>
        </span>
      </el-popover>
    </div>

  </div>
</template>

<script src="./component.js"></script>
<style src="./style.sass" lang="sass" scoped></style>
