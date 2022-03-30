<template>
  <form @submit.prevent>
    <h4>{{!editMeasurementSignal ? 'Добаление показаний температуры' : 'Изменение показания температуры'}}</h4>
    <my-input
        v-model.number="currentMeasurement.temperature"
        type="number"
        placeholder="Введите температуру в ℃"/>
    <div class="btnGroup">
    <my-button
        v-if="isPage"
        class="btnGroup__back"
        @click="$router.push('/')"> <!-- Переход по ссылке -->Назад</my-button>
    <my-button
        v-if="!editMeasurementSignal"
        class="btnGroup__add"
        @click="addTemperatureReadings"
        :isDisabled="isDisabled"
    >Добавить</my-button>
    <my-button
        v-else
        class="btnGroup__change"
        style="margin-left: auto"
        @click="$emit('editCurrentMeasurement')"
        :isDisabled="isDisabled"
    >Изменить</my-button>
    </div>
  </form>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  props: {
    isPage: Boolean,
  },
  computed: {
    // В computed инициализируется state, тут прописывается название модуля и переменные, которые хранятся в state
    ...mapState('measurements', {
      currentMeasurement: 'currentMeasurement',
      editMeasurementSignal: 'editMeasurementSignal'
    }),
    isDisabled() {
      return this.currentMeasurement.temperature === undefined || this.currentMeasurement.temperature === '' ;
    },
  },
  methods: {
    // В методах инициализируются мутации над state Vuex, тут прописывается название модуля и названия мутации, которые в дальнейшем будут использованы
    ...mapMutations('measurements', {
      initCurrentMeasurement: 'initCurrentMeasurement',
      updateCurrentMeasurementId: 'updateCurrentMeasurementId',
      clearCurrentMeasurement: 'clearCurrentMeasurement'
    }),
    addTemperatureReadings() {
      this.updateCurrentMeasurementId()
      this.$emit('addTemperature')
      this.clearCurrentMeasurement()
    },
  },
  mounted() {
    this.initCurrentMeasurement()
  }

}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
}

.btnGroup {
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
}

</style>