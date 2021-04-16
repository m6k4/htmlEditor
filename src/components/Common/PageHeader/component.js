import ShBreadcrumb from '@/components/Helpers/ShBreadcrumb';
import ShDividerLine from '@/components/Helpers/ShDividerLine';

export default {
  name: 'PageHeader',
  components: { ShBreadcrumb, ShDividerLine },
  props: {
    faIcon: {
      type: String,
      default: 'circle-thin',
    },
    title: {
      type: String,
      default: 'Page header title',
    },
    description: {
      type: String,
      default: 'Page header description',
    },
    breadcrumbItems: {
      type: Array,
      default: () => [],
    },
  },
};
