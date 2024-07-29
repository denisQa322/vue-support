<script lang="ts" setup>
const reason = defineModel('reason')
</script>

<template>
  <select v-model.trim="reason" class="return-reason">
    <option></option>
    <option>Повреждение</option>
    <option>Неверное вложение</option>
    <option>Брак</option>
    <option>Некомплект/Недостача</option>
  </select>
</template>

<style lang="scss" scoped>
.return-reason {
  border-radius: 7px;
  cursor: pointer;
  padding: 15px 5px;
  font-size: 15px;
}
</style>
