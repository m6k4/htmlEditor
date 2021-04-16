<template>
  <div>
    <el-alert
      v-if="messagesAfterSubmit"
      :title="messagesAfterSubmit.title"
      :type="messagesAfterSubmit.action"
      :description="messagesAfterSubmit.description"
      class=""
      show-icon>
    </el-alert>
    <el-form
      :hash="hash"
      name="form"
      :inline="inline"
      v-loading="isLoading"
      :element-loading-text="loadingText"
      :label-position="inline? 'left' : labelPosition"
      ref="ruleForm"
      :model="formInputs"
      :rules="formRules"
      label-width="160px"
      @submit.native.prevent
      @keyup.enter.native="submitForm"
    >
      <el-form-item
        :label="input.type === 'checkbox'? '' : input.label"
        :prop="input.key"
        :key="input.key"
        v-for="input in inputsElements"
        :class="`ShFormGenerator__element-${input.key} ${input.type === 'checkbox'? 'ShFormGenerator__element-checkbox' : ''}`"
        :id="`js-form-element-${input.key}`"
        :style="`margin-bottom:${input.rules.length === 0? 0 : 10}px !important`"
      >
        <el-upload
          v-if="input.type === 'image'"
          drag
          action=""
          class="ShFormGenerator__upload"
          :http-request="() => {}"
          :on-change="uploadFile.bind(null, input)"
          :show-file-list="false"
        >
          <div v-if="formsData[input.key]">
            <img
              class="image-responsive"
              :src="formsData[input.key]" />
          </div>
          <div v-if="!formsData[input.key]">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">{{uploadText}}</div>
          </div>
        </el-upload>

        <el-input
          v-if="input.type === 'text'"
          v-model="formsData[input.key]"
          :placeholder="input.placeholder? input.placeholder : ''"
          :class="input.additionalClasses"
        >
          <template slot="prepend" v-if="input.prepend"><span v-html="input.prepend"></span></template>
          <template slot="append" v-if="input.append">{{input.append}}</template>
        </el-input>
        <el-input
          v-if="input.type === 'textarea'"
          type="textarea"
          v-model="formsData[input.key]"
          :placeholder="input.placeholder? input.placeholder : ''"
          :class="input.additionalClasses"
        />
        <el-input-number
          v-if="input.type === 'number'"
          v-model="formsData[input.key]"
          :min="0"
          :placeholder="input.placeholder? input.placeholder : ''"
          :class="input.additionalClasses"
        ></el-input-number>
        <el-input
          :type="passwordTypeInput"
          :placeholder="input.placeholder? input.placeholder : ''"
          v-if="input.type === 'password'"
          v-model="formsData[input.key]"
          :class="input.additionalClasses"
        >
          <template slot="prepend" v-if="input.prepend"><span v-html="input.prepend"></span></template>
          <el-button
            slot="append"
            :id="`js-form-element-password-button-${input.key}`"
            @click="tooglePasswordTypeInput"
          >
            <i :class="`fa fa-${getPasswordTypeInputIcon}`" />
          </el-button>
        </el-input>
        <el-select
          v-model="formsData[input.key]"
          v-if="input.type === 'select'"
          @change="unLiveComponent"
          :multiple="input.multiple? true : false"
          :placeholder="input.placeholder? input.placeholder : ''"
          :class="input.additionalClasses"
        >
          <el-option
            v-for="(item, index) in (input.options? input.options : [])"
            :key="index"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-switch
          @change="unLiveComponent"
          v-if="input.type === 'switch'"
          v-model="formsData[input.key]"
          :class="input.additionalClasses" />
        <el-checkbox-group v-if="input.type === 'checkbox'" v-model="formsData[input.key]" :class="input.additionalClasses">
          <el-checkbox
            :label="input.allowHtml? null : (input.label? input.label : '')"
            :name="input.key"
            @change="unLiveComponent"
          >
            <label v-if="input.allowHtml" v-html="input.label? input.label : ''"></label>
          </el-checkbox>
        </el-checkbox-group>
        <div v-if="input.extra" class="ShFormGenerator-extra">{{input.extra}}</div>
      </el-form-item>
      <el-form-item class="ShFormGenerator-buttons" :style="`margin-bottom:${inline? 0 : 10}px !important`">
        <router-link
         id="js-form-generator-button__cancel"
         v-if="cancelButtonRedirectLink"
         :to="cancelButtonRedirectLink">
          <el-button
            size="mini"
            type="text">
            {{ cancelButtonText? cancelButtonText : 'Anuluj' }}
          </el-button>
        </router-link>
        <el-button v-if="!hideSubmitButton" type="primary"
          @click="submitForm('ruleForm')"
          id="js-form-generator-button__submit">
          {{ submitButtonText? submitButtonText : 'Zapisz' }}
        </el-button>
        <span @click="submitForm('ruleForm')">
          <slot name="ShFormGenerator-submit"/>
        </span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script src="./component.js" />
