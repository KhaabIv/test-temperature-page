<template>
  <input
      :value="modelValue"
      @input="updateInput"
      class="input"
      type="number">
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value) // Метод для двустороннего связывания
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  border: 1px solid #87CEFA;
  border-radius: 10px;
  padding: 10px 15px;
  margin-top: 15px;
}

</style>