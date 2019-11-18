<template>
  <button class="square" @click="$emit('click-square', value)">
    {{ value }}
  </button>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    }
  }
};
</script>

<style></style>
