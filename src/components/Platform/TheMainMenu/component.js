import ShUserAvatar from '@/components/Helpers/ShUserAvatar';

export default {
  name: 'TheMainMenu',
  props: {
    activePath: {
      type: String,
      default: '',
    },
    user: {
      type: Object,
      default: () => ({}),
    },
  },
  components: { ShUserAvatar },
  methods: {
    __fixActiveMenuItem() {
      // fix set active menu item, because info about active item is obtained from url
      Object.keys(this.$refs).forEach((menu) => {
        this.$refs[menu].activeIndex = 0;
      });
    },
    handleClickOnMenuItem(path, params = {}) {
      this.$emit('clickOnMenuItem');
      this.$router.push({ path, params });
      this.__fixActiveMenuItem();
    },
    goToUserProfile(userUuid) {
      this.$emit('clickOnMenuItem');
      this.$router.push({ name: 'PlatformUserDetails', params: { userUuid } });
    },
  },
};
