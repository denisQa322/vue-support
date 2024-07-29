<script lang="ts" setup>
const reason = defineModel('reason')
</script>

<template>
  <select v-model.trim="reason" class="reject-reason">
    <option></option>
    <option>Отказ клиента</option>
    <option>Сроки истекли</option>
  </select>
</template>

<style lang="scss">
.reject-reason {
  display: none;
  border-radius: 7px;
  cursor: pointer;
  padding: 15px 5px;
  font-size: 15px;
}
</style>
