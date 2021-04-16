<template>
  <div class="ShUserAvatarUpload" :style="{ width }">
    <el-upload
      action=""
      :show-file-list="false"
      :auto-upload="true"
      :http-request="handleUploadFile"            
    >
      <div class="ShUserAvatarUpload__overlay">
        <el-tooltip class="item" effect="dark" content="Zmień avatar" placement="bottom" :open-delay="300">
          <div class="overlay__upload-icon">
            <i class="fa fa-upload" aria-hidden="true"></i>
          </div>
        </el-tooltip>       
      </div>
      <div class="ShUserAvatarUpload__avatar-component">
        <ShUserAvatar 
          :avatar="avatar" 
          :width="width" 
          :isLoading="isLoading" 
        />
      </div>
    </el-upload>
  </div>
</template>

<script src="./component.js"></script>
<style src="./style.sass" lang="sass" scoped></style>

