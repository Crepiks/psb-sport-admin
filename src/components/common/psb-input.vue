<template>
  <input :type="type" :placeholder="placeholder" class="input" />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.input {
  border: 1px solid $primary;
  box-sizing: border-box;
  padding: 10px 10px;
  border-radius: 4px;
  background-color: transparent;
  width: 100%;
  color: $white;
  outline: none;
  transition: 200ms ease-in-out;

  &:focus {
    padding-left: 13px;
  }
}
</style>
