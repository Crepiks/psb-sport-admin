<template>
  <div class="select" @focusout="handleFocusOut" tabindex="0">
    <div class="select-title">{{ title }}</div>
    <div class="select-inner" @click="handleSelectClick">
      {{ optionValue }} <i class="fas fa-chevron-down select-down-arrow"></i>
    </div>
    <div class="select-options" v-if="isOptionsOpen">
      <div
        class="select-option"
        v-for="(option, index) in options"
        :key="index"
        @click="handleOptionClick(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
    },
    title: {
      type: String,
    },
  },
  data() {
    return {
      isOptionsOpen: false,
      optionValue: "",
    };
  },
  methods: {
    handleSelectClick() {
      if (this.isOptionsOpen) {
        this.isOptionsOpen = false;
      } else {
        this.isOptionsOpen = true;
      }
    },
    handleOptionClick(option) {
      this.optionValue = option;
      this.isOptionsOpen = false;
      this.$emit("option-changed", option);
    },
    handleFocusOut() {
      this.isOptionsOpen = false;
    },
  },
  mounted() {
    this.optionValue = this.options[0];
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.select {
  width: 150px;
  height: 60px;
  border-radius: 10px;
  outline: none;
  position: relative;

  &-title {
    font-size: 13px;
    color: $white;
    opacity: 0.7;
    margin-bottom: 10px;
  }

  &-inner {
    position: absolute;
    left: 0;
    width: 100%;
    height: 40px;
    border: 1px solid $primary;
    border-radius: 10px;
    background-color: #1f1f1f;
    display: flex;
    align-items: center;
    padding-left: 20px;
    z-index: 2;
    cursor: pointer;
    user-select: none;
  }

  &-down-arrow {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translate(0, -50%);
    opacity: 0.6;
    font-size: 13px;
    z-index: 2;
  }

  &-options {
    position: absolute;
    width: 100%;
    top: 60px;
    left: 0;
    border-top: 0;
    box-sizing: border-box;
    padding-top: 10px;
    border-radius: 0 0 10px 10px;
    background-color: #292929;
    z-index: 1;
    opacity: 1;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);
  }

  &-option {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    cursor: pointer;
  }

  &-option:last-child {
    border-radius: 0 0 10px 10px;
  }

  &-option:hover {
    background-color: #353535;
  }
}
</style>
