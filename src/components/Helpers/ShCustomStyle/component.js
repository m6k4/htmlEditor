export default {
  name: 'ShCustomStyle',
  mounted() {
    const styleTag = document.createElement('style');
    styleTag.textContent = this.$refs.styles.textContent;
    this.$refs.styles.textContent = null;
    this.$refs.styles.appendChild(styleTag);
  },
};
