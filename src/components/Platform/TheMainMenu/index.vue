<template>
  <div class="TheMainMenu">
    <section class="TheMainMenu__user-info">
      <div>
        <div class="user_info__avatar">
          <ShUserAvatar width="75px" :avatar="user.avatar" />
        </div>
        <div class="user-info__login">{{ user.name }} {{ user.last_name }}</div>
        <div class="user-info__email">{{ user.email }}</div>
        <div class="user-info__profile" @click="goToUserProfile(user.user_uuid)">Pokaż profil</div>
      </div>
    </section>

    <section class="TheMainMenu__menu">
      <p class="menu__title">Obsługa</p>
      <el-menu class="menu__list" ref="handlingMenu">
        <el-menu-item index="1" class="menu__item"
          :class="{ 'is-active' : activePath ===  '/dashboard' }"
          @click="handleClickOnMenuItem('/dashboard')">
          <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
          <span>Dashboard</span>
        </el-menu-item>
      </el-menu>
      <template v-if="$store.getters['authorization/acl'].hasAccessForRoles(['owner'])" >
        <p class="menu__title">Zarządzanie</p>
        <el-menu class="menu__list" ref="managementMenu">

        </el-menu>
      </template>
    </section>
  </div>
</template>

<script src="./component.js"></script>
<style src="./style.sass" lang="sass" scoped></style>
