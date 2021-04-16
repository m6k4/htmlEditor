<template>
  <div class="HtmlEditor">
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="HtmlEditor__menubar">
        <el-button
          class="menubar__button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <i class="fa fa-bold" />
        </el-button>

        <el-button
          class="menubar__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          <i class="fa fa-italic" />
        </el-button>

        <el-button
          class="menubar__button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          <i class="fa fa-strikethrough" />
        </el-button>

        <el-button
          class="menubar__button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          <i class="fa fa-underline" />
        </el-button>

        <el-button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          <b>H1</b>
        </el-button>

        <el-button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          <b>H2</b>
        </el-button>

        <el-button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          <b>H3</b>
        </el-button>

        <el-button
          class="menubar__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          <i class="fa fa-list" />
        </el-button>

        <el-button
          class="menubar__button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          <i class="fa fa-list-ol" />
        </el-button>

        <el-button class="menubar__button" @click="commands.undo">
          <i class="fa fa-undo" />
        </el-button>

        <el-button class="menubar__button" @click="commands.redo">
          <i class="fa fa-repeat" />
        </el-button>
      </div>
    </editor-menu-bar>
    <editor-content :editor="editor" class="HtmlEditor__content" />
  </div>
</template>
<style src="./style.sass" lang="sass"></style>
<script src="./component.js" />
