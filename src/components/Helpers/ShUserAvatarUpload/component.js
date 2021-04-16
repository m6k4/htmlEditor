/* eslint-disable import/extensions */
import { hGetPathinfo, hConvertImageToBase64 } from '@/utils/helpers';
import { Notification } from 'element-ui';
import ShUserAvatar from '@/components/Helpers/ShUserAvatar';

export default {
  name: 'ShUserAvatarUpload',
  components: { ShUserAvatar },
  props: {
    avatar: {
      type: String,
      default: '/static/img/default-avatar.png',
    },
    width: {
      type: String,
      default: '24px',
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    __validateFileExtenstion(file) {
      const allowedFileExtensions = ['png', 'jpg', 'jpeg', 'bmp', 'gif'];
      const fileExtension = hGetPathinfo(file.name, 'PATHINFO_EXTENSION').extension;

      if (!allowedFileExtensions.includes(fileExtension) || !allowedFileExtensions.includes(file.type.split('/')[1])) {
        Notification.error({
          title: 'Error',
          message: `Nieprawidłowe rozszerzenie pliku. Dozwolone pliku to: ${allowedFileExtensions.join('/')}`,
        });
        return false;
      }

      return true;
    },
    __validateFileSize(file) {
      const maxSize = 1;
      if (maxSize * 1024 * 1024 < file.size) {
        Notification.error({
          title: 'Error',
          message: `Plik jest za duży. Maksymalny rozmiar pliku to: ${maxSize}`,
        });
        return false;
      }

      return true;
    },
    handleUploadFile(fileInfo) {
      const { file } = fileInfo;
      if (!this.__validateFileExtenstion(file)) { return false; }
      if (!this.__validateFileSize(file)) { return false; }

      hConvertImageToBase64(file, (parsedFile) => {
        this.$emit('uploadFile', parsedFile);
      });

      return true;
    },
  },
};
