<template>
  <div class="EditorLayout">
    <div class="EditorLayout__container">
      <div class="container__column">
        <div class="container__title">Edytor</div>
        <div class="container__description">
          Wprowadź dowolnie ostylowany tekst
        </div>
        <div class="container__box">
          <slot name="leftColumn" />
        </div>
      </div>
      <div class="container__column">
        <div class="container__title">Kod HTML</div>
        <div class="container__description">
          Poniżej wyświetla się Twój tekst w języku HTML
        </div>
        <div class="container__box">
          <slot name="rightColumn" />
        </div>
      </div>
    </div>
  </div>
</template>
<style src="./style.sass" lang="sass" scoped></style>
<script src="./component.js" />
