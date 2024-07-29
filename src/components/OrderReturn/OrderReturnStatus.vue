<script lang="ts" setup>
const status = defineModel('status')
</script>

<template>
  <select class="return-status" v-model.trim="status">
    <option></option>
    <option class="request-got">Запрос получен</option>
    <option class="request-sent">Запрос отправлен</option>
    <option class="answer-got">Ответ получен</option>
    <option class="return-request">Запрос на возврат</option>
    <option class="return-got">Возврат получен</option>
  </select>
</template>

<style lang="scss" scoped>
.return-status {
  border-radius: 7px;
  cursor: pointer;
  padding: 15px 5px;
  font-size: 15px;
}
</style>
