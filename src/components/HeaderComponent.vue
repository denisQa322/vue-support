<script lang="ts" setup></script>

<template>
  <div class="header">
    <div class="header-img">
      <router-link to="/">
        <img src="../assets/images/support-main-icon.png" alt="" />
      </router-link>
    </div>
    <nav class="header-navigation">
      <router-link to="/returns" class="link">Возврат</router-link>
      /
      <router-link to="/rejects" class="link">Отказы</router-link>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.header {
  width: 1400px;
  margin: auto;
  text-align: center;
  color: #0067a4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  &-img {
    cursor: pointer;
    img {
      width: 50px;
    }
  }

  &-navigation {
    display: flex;
    gap: 5px;
    font-size: 25px;
    .link {
      cursor: pointer;
      text-decoration: none;
      color: #0067a4;
    }
  }
}
</style>
