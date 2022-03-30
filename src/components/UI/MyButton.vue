<template>
  <button
      class="btn"
      :class="{'btn__disable': isDisabled }"
      :disabled="isDisabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',
  props: {
    isDisabled: {
      type: Boolean,
      default: false
    },
  }
}
</script>

<style lang="scss" scoped>
.btn{
  padding: 10px 15px;
  background: none;
  color: #4682B4;
  border: 1px solid #4682B4;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  &__disable {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      background: none;
    }
  }
}
</style>