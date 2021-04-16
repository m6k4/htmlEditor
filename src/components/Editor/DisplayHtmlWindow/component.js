/* eslint-disable import/extensions */
export default {
  name: 'DisplayHtmlWindow',
  props: {
    htmlContent: {
      type: String,
      default: '',
    },
  },
  components: { },

  methods: {
    copyToClipboard() {
      let tempInput = document.createElement('input');
      tempInput.value = this.htmlContent;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      this.$message({
        type: 'success',
        message: 'Zapisano element',
      });
    },
  },
};
