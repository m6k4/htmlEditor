<template>
  <div class="EditorView view">
    <EditorLayout>
      <template #leftColumn>
        <HtmlEditor @conentChanged="handleContentChanged" />
      </template>
      <template #rightColumn>
        <DisplayHtmlWindow :htmlContent="htmlContent" />
      </template>
    </EditorLayout>
  </div>
</template>

<script>
import EditorLayout from '../components/Editor/EditorLayout';
import DisplayHtmlWindow from '../components/Editor/DisplayHtmlWindow';
import HtmlEditor from '../components/Editor/HtmlEditor';

export default {
  name: 'EditorView',
  components: {
    EditorLayout,
    HtmlEditor,
    DisplayHtmlWindow,
  },

  data() {
    return {
      htmlContent: '<p>Tutaj możesz wpisać swój tekst</p>',
    };
  },
  methods: {
    handleContentChanged(newHtml) {
      this.htmlContent = newHtml;
    },
  },
};
</script>

<style lang="sass" scoped>
.EditorView
  &__pages
    padding-top: 40px
    overflow-y: hidden
</style>
