<template>
  <div>
    <h1>Страница с показаниями температуры</h1>
    <my-button
        @click="$router.push('/temperatureRecording')"
        style="margin: 10px 0"
    >
      Добавить показание температуры
    </my-button>
    <my-modal
        v-model:show="modalVisible"
        @clearChangeMeasurement="onClearChangeMeasurement"
    >
      <MeasurementForm
          @addTemperature="addTemperature"
          @editCurrentMeasurement="editCurrentMeasurement"
      />
    </my-modal>
    <MeasurementList
        :measurements="measurements"
        @remove="removeMeasurementInComponent"
        @change="changeIndication"
    />
  </div>
</template>

<script>
import MeasurementList from "@/components/MeasurementList";
import MeasurementForm from "@/components/MeasurementForm";
import MyModal from "@/components/UI/MyModal";
import MyButton from "@/components/UI/MyButton";
import {mapMutations, mapState} from "vuex";


export default  {
  components: {
    MyButton,
    MyModal,
    MeasurementList,
    MeasurementForm
  },
  data() {
    return {
      modalVisible: false,
    }
  },
  computed: {
    ...mapState('measurements', {
      measurements: 'measurements',
      editMeasurement: 'editMeasurement',
      editMeasurementSignal: 'editMeasurementSignal'
    })
  },
  methods: {
    ...mapMutations('measurements', {
      addMeasurement: 'addMeasurement',
      updateMeasurements: 'updateMeasurements',
      removeMeasurement: 'removeMeasurement',
      updateEditMeasurement: 'updateEditMeasurement',
      clearEditMeasurement: 'clearEditMeasurement',
      changeEditMeasurementSignal: 'changeEditMeasurementSignal'
    }),
    addTemperature() {
      this.addMeasurement()
      this.modalVisible = false;
      this.changeEditMeasurementSignal(false)
      this.clearEditMeasurement()
    },

    removeMeasurementInComponent(measurement) {
      this.removeMeasurement(measurement)
    },

    changeIndication(measurement) {
      this.modalVisible = true
      this.changeEditMeasurementSignal(true)
      this.updateEditMeasurement(measurement)
    },

    editCurrentMeasurement() {
      this.updateMeasurements()
      this.clearEditMeasurement()
      this.changeEditMeasurementSignal(false)
      this.modalVisible = false;
    },

    showModal() {
      this.modalVisible = true;
    },

    onClearChangeMeasurement() {
      this.clearEditMeasurement()
      this.changeEditMeasurementSignal(false)
    },
  },
}
</script>

<style lang="scss" scoped>


</style>