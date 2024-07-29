<script lang="ts" setup>
const status = defineModel('status')
</script>

<template>
  <select class="reject-status" v-model.trim="status">
    <option></option>
    <option class="request-got">Запрос на отмену отправлен</option>
    <option class="request-sent">Отмена принята</option>
    <option class="answer-got">Отмена не принята</option>
  </select>
</template>

<style lang="scss" scoped>
.reject-status {
  border-radius: 7px;
  cursor: pointer;
  padding: 15px 5px;
  font-size: 15px;
}
</style>
