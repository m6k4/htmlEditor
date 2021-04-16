import { Editor, EditorContent, EditorMenuBar, EditorMenuBubble } from 'tiptap';
import {
  Bold,
  Italic,
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Underline,
  Link,
  Strike,
  History,
  Code,
} from 'tiptap-extensions';

export default {
  name: 'HtmlEditor',
  components: {
    EditorContent,
    EditorMenuBar,
    EditorMenuBubble,
  },
  data() {
    return {
      newContent: '<p>Tutaj możesz wpisać swój tekst</p>',
      editor: new Editor({
        content: '<p>Tutaj możesz wpisać swój tekst</p>',
        extensions: [
          new Bold(),
          new Italic(),
          new Heading({ levels: [1, 2, 3] }),
          new OrderedList(),
          new BulletList(),
          new ListItem(),
          new TodoItem(),
          new TodoList(),
          new Underline(),
          new Link(),
          new Strike(),
          new History(),
          new Code(),
        ],
        onUpdate: ({ getHTML }) => {
          // get new content on update
          this.newContent = getHTML();
          this.$emit('conentChanged', getHTML());
        },
      }),
    };
  },
  computed: {
    getNewContent() {
      return this.newContent;
    },
  },
  beforeDestroy() {
    this.editor.destroy();
  },
};
