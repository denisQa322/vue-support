<template>
  <section class="main">
    <div class="main-info">
      <h1 class="main-info-header">
        Добро пожаловать в
        <span class="main-info-header-span">систему управления заказами(СУЗ)</span>
      </h1>
      <p class="main-info-text">
        Данная система предназначена для контроля по
        <router-link to="/returns" class="link">возвратам</router-link>
        и
        <router-link to="/rejects" class="link">отменам</router-link>
        заказов.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.main {
  width: 1400px;
  margin: auto;
  text-align: center;
  color: #0067a4;
  padding-top: 150px;
  &-info {
    &-header {
      font-size: 50px;
      padding-bottom: 150px;
      display: flex;
      flex-direction: column;
      font-weight: 400;
      &-span {
        font-weight: 800;
      }
    }
    &-text {
      font-size: 30px;
      .link {
        cursor: pointer;
        color: #0067a4;
      }
    }
  }
}
</style>
