<template>
  <div class="modal" v-if="show" @click="hideModal">
    <div @click.stop class="modal__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";

export default {
  name: 'MyModal',
  mixins: [toggleMixin] // Подключаем миксины (в нем записаны базовые данные, которые будут монтированы при инициализации компонента
  //Миксины отрабатывают быстрее хука mounted, так что данные с миксина попадут раньше
}
</script>

<style lang="scss" scoped>
.modal {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;

  &__content {
    margin: auto;
    background: white;
    border-radius: 12px;
    min-width: 300px;
    min-height: 50px;
    padding: 10px 15px;
  }
}

</style>