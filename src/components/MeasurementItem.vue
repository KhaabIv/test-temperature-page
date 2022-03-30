<template>
  <div class="measurement">
    <div>
      <div><strong>Температура: </strong> {{ measurement.temperature }} &#8451;</div>
      <div><strong>Дата: </strong>{{ dateNow }}</div>
      <div><strong>ID: </strong>{{ this.measurement.id }}</div>
    </div>
    <div>
      <my-button
          @click="$emit('change', measurement)"
      >Изменить</my-button>
      <my-button
          class="delete"
          :style="'margin-left: 10px'"
          @click="$emit('remove', measurement)"
      >Удалить</my-button>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    measurement: {
      type: Object,
      required: true
    }
  },
  computed: {
    dateNow() {
     return  new Date(this.measurement.id).toLocaleString()
    }
  }

}
</script>

<style lang="scss" scoped>
.measurement {
  padding: 15px;
  border: 2px solid #87CEFA;
  border-radius: 10px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.delete {
  margin-left: 10px;
  &:hover {
    color: white;
    background: rgba(220, 20, 60, .6);
    border: 1px solid rgba(220, 20, 60, .6)
  }
}
</style>