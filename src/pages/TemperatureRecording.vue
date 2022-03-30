<template>
  <div @click.stop>
    <my-modal
        v-model:show="modalVisible"
        :isPage="true"
    >
      <MeasurementForm
          @addTemperature="addTemperature"
          :isPage="true"
      />
    </my-modal>
  </div>
</template>

<script>
import MyModal from "@/components/UI/MyModal";
import MeasurementForm from "@/components/MeasurementForm";
import {mapMutations} from "vuex";

export default {
  data() {
    return {
      modalVisible: true,
    }
  },
  components: {
    MyModal,
    MeasurementForm
  },
  methods: {
    ...mapMutations('measurements', {
      addMeasurement: 'addMeasurement',
      clearEditMeasurement: 'clearEditMeasurement',
      changeEditMeasurementSignal: 'changeEditMeasurementSignal'
    }),
    addTemperature() {
      this.addMeasurement()
      this.changeEditMeasurementSignal(false)
      this.clearEditMeasurement()
      this.$router.push('/')
    },
  }
}
</script>

<style scoped>

</style>