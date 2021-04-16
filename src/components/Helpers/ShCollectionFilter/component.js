export default {
  name: 'ShCollectionFilter',
  props: {
    collection: {
      type: Array,
      default: () => [],
    },
    filteredBy: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      filter: '',
    };
  },
  methods: {
    handleFiltering() {
      const filteredCollection = this.collection.filter(item => item[this.filteredBy].toLowerCase().indexOf(this.filter) !== -1);
      this.$emit('onFiltering', filteredCollection);
    },
  },
};
