import { Notification } from 'element-ui';

export default {
  name: 'ShTextWithCopy',
  props: {
    text: {
      type: String,
      default: 'some text to copy',
    },
    copyPosition: {
      type: String,
      default: 'right',
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onCopy(e) {
      Notification.success({
        title: 'Skopiowano do schowka',
        message: e.text,
      });
    },
  },
};
