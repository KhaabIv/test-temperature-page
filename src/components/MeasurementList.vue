<template>
  <div v-if="measurements && measurements.length > 0">
    <h3>Список показаний темпереатуры</h3>
    <transition-group name="temperature-list"> <!-- Доабвляем анимацию на списки -->
    <MeasurementItem
        v-for="measurement in measurements"
        :key="measurement.id"
        :measurement="measurement"
        @remove="$emit('remove', measurement)"
        @change="$emit('change', measurement)"
    />
    </transition-group>
  </div>
  <h2 v-else>Показаний температуры нет</h2>
</template>

<script>
import MeasurementItem from "@/components/MeasurementItem";
export default {
  components: {
    MeasurementItem
  },

  props: {
    measurements: {
      type: Array,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
.temperature-list-enter-active,
.temperature-list-leave-active {
  transition: all 0.4s cubic-bezier(.5,.5,.5,1);
}

.temperature-list-enter-from,
.temperature-list-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
/* Анимация на измение в списке */
.temperature-list-move {
  transition: transform 0.2s linear;
}

</style>