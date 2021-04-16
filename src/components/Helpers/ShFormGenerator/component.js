export default {
  name: 'ShFormGenerator',
  props: {
    inputsElements: {
      type: Array,
      default() { return []; },
    },
    model: {
      type: Object,
      default() { return {}; },
    },
    hideSubmitButton: {
      type: Boolean,
      required: false,
    },
    inline: {
      type: Boolean,
      required: false,
    },
    cancelButtonRedirectLink: {
      type: String,
    },
    labelPosition: {
      type: String,
      default: 'top',
    },
    uploadText: {
      type: String,
      default: 'Upuść plik tutaj lub kliknij, aby przesłać',
    },
    submitButtonText: {
      type: String,
    },
    cancelButtonText: {
      type: String,
    },
    loadingText: {
      type: String,
      default: 'Loading data',
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    messagesAfterSubmit: {
      type: Object,
      action: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  },
  data() {
    return {
      hash: 0,
      formsData: this.convertDataColumnsToSearchObject(),
      passwordTypeInput: 'password',
      rules: {},
    };
  },
  computed: {
    formInputs() {
      this.inputsElements.forEach((input) => {
        // eslint-disable-next-line no-nested-ternary
        this.formsData[input.key] = (input.type === 'switch' ? false : (this.model ? this.model[input.key] : ''));
        this.formsData[input.key] = (input.type === 'checkbox') ? [] : this.model[input.key];
      });
      return this.formsData;
    },
    formRules() {
      this.inputsElements.forEach((input) => {
        let validators = [];

        input.rules.forEach((rule) => {
          if (rule.validator) {
            validators.push(rule);
          }
        });
        let inputCopy = JSON.parse(JSON.stringify(input));
        inputCopy.rules = inputCopy.rules.map((rule) => {
          let ruleCopy = rule;
          ruleCopy.message = ruleCopy.message;
          return ruleCopy;
        });

        inputCopy.rules = inputCopy.rules.concat(validators);
        this.rules[input.key] = inputCopy.rules;
      });

      return this.rules;
    },
    getPasswordTypeInputIcon() {
      return this.passwordTypeInput === 'password' ? 'eye-slash' : 'eye';
    },
  },
  methods: {
    convertDataColumnsToSearchObject() {
      if (this.inputsElements.length === 0) { return {}; }
      let formsData = {};
      this.inputsElements.forEach((field) => {
        formsData[field.key] = field.type === 'select' || field.type === 'checkbox' ? [] : '';
      });
      return formsData;
    },
    unLiveComponent() {
      this.hash += 1;
    },
    submitForm() {
      this.$refs.ruleForm.validate((valid) => {
        if (!valid) { return false; }
        let params = {};
        this.inputsElements.forEach((field) => {
          params[field.key] = field.type === 'checkbox' ? this.formsData[field.key][0] : this.formsData[field.key];
        });
        this.$emit('submit', params);
        return true;
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
      this.$emit('handleResetForms');
    },
    tooglePasswordTypeInput() {
      this.passwordTypeInput = this.passwordTypeInput === 'password' ? 'text' : 'password';
    },
    uploadFile(field, file) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        this.formsData[field.key] = reader.result;
      });
      reader.readAsDataURL(file.raw);
    },
  },
};
