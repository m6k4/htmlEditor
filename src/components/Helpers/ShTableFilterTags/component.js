export default {
  name: 'ShTableFilterTags',
  props: {
    filteringCriteria: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    isEmpty() {
      return Object.keys(this.filteringCriteria).length === 0;
    },
  },
  methods: {
    clearFilterTags() {
      if (!this.isEmpty) this.$emit('clearFilterTags');
    },
    close(index) {
      const item = {
        key: index,
        value: null,
        name: this.filteringCriteria[index].name,
        label: this.filteringCriteria[index].label,
      };
      this.$emit('removeFilterItem', item);
    },
  },
};
