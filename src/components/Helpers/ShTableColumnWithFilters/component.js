import validator from 'validator';

export default {
  name: 'ShTableColumnWithFilters',

  props: {
    filterType: {
      type: String,
      default: 'options',
    },
    columnName: {
      type: String,
      default: 'Column',
    },
    filters: {
      type: Array,
      default: () => [],
    },
    prop: {
      type: String,
      default: null,
    },
    activeFilters: {
      type: Object || Array,
      default: () => ({}),
    },
    validateTypeOnInput: {
      type: String,
      default: 'none',
    },
  },

  data() {
    return {
      selectedItem: null,
      daterange: null,
      input: null,
      hasIncorectData: false,
      hasErrorVisibilityTimeout: null,
    };
  },

  computed: {
    asMock() {
      return this.filters.length === 0 && this.prop === null;
    },
  },

  watch: {
    activeFilters(value) {
      if (!Object.keys(value).includes(this.prop)) {
        this.selectedItem = null;
        this.daterange = null;
      } else {
        const filter = this.activeFilters[this.prop];
        this.selectedItem = {
          label: filter.label,
          key: filter.key,
          value: filter.value,
          name: this.columnName,
        };
      }
    },
    hasIncorectData(value) {
      clearTimeout(this.hasErrorVisibilityTimeout);
      if (value) {
        this.hasErrorVisibilityTimeout = setTimeout(() => {
          this.hasIncorectData = false;
        }, 2000);
      }
    },
  },

  methods: {
    __validateInput(value, type) {
      this.hasIncorectData = false;
      const validate = {
        none: () => true,
        uuid: val => validator.isUUID(val, 4),
        email: val => validator.isEmail(val),
      };
      if (!validate[type](value)) {
        this.hasIncorectData = true;
        return false;
      }
      return true;
    },
    handleClickOnItem(item) {
      const filter = {
        key: this.prop,
        name: this.columnName,
        label: item.label || (Array.isArray(item) ? `[${item.join()}]` : ''),
      };
      if (item.label === 'clear') {
        if (this.selectedItem != null) this.$emit('clear', { value: null, ...filter });
        this.selectedItem = null;
      } else {
        this.daterange = item;
        const value = item.value !== undefined ? item.value : (Array.isArray(item) ? `[${item.join()}]` : item);
        this.$emit('selectFilter', { value, ...filter });
      }
    },
    handleFilterOnInput() {
      if (this.__validateInput(this.input, this.validateTypeOnInput)) {
        const filter = {
          key: this.prop,
          name: this.columnName,
          label: this.input,
          value: this.input,
        };
        this.$emit('selectFilter', filter);
      }
    },
  },
};
