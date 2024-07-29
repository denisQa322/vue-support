<script lang="ts" setup>
import OrderReturnReason from './OrderReturn/OrderReturnReason.vue'
import OrderReturnStatus from './OrderReturn/OrderReturnStatus.vue'
import OrderRejectStatus from './OrderReject/OrderRejectStatus.vue'
import OrderRejectReason from './OrderReject/OrderRejectReason.vue'

const reference = defineModel('reference')
const quantity = defineModel('quantity')
const price = defineModel('price')
const date = defineModel('date')
</script>

<template>
  <section class="add-order-section">
    <input type="text" placeholder="Референс" class="reference" v-model.trim="reference" />
    <input type="text" placeholder="Количество" class="quantity" v-model.trim="quantity" />
    <OrderReturnReason />
    <OrderRejectReason />
    <input type="text" class="price" placeholder="Стоимость" v-model.trim="price" />
    <input type="date" class="date" v-model.trim="date" />
    <OrderReturnStatus />
    <OrderRejectStatus />
    <div class="buttons">
      <button class="add">Добавить</button>
      <button class="edit">Изменить</button>
      <button class="delete">Удалить</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.add-order-section {
  width: 1400px;
  margin: auto;
  display: flex;
  gap: 10px;
  padding-top: 20px;
  input {
    padding: 15px 5px;
    font-size: 15px;
    border-radius: 7px;
  }
  .date {
    cursor: pointer;
  }
  .buttons {
    display: flex;
    gap: 5px;
    button {
      padding: 15px 5px;
      font-size: 15px;
      background-color: #0067a4;
      color: white;
      border-radius: 7px;
      border: none;
      font-weight: 600;
      cursor: pointer;
    }
  }
}
</style>
