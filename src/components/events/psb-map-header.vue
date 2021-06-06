<template>
  <header class="map-header">
    <div @click="$emit('close-map')" class="back">
      <i class="bx bx-arrow-back back-icon"></i>
      <span class="back-label">Назад</span>
    </div>
    <div class="map-modes">
      <span
        class="map-mode"
        :class="{ 'map-mode-active': mapMode == 1 }"
        @click="$emit('change-map-mode')"
        >Спутниковая карта</span
      >
      <span
        class="map-mode"
        :class="{ 'map-mode-active': mapMode == 2 }"
        @click="$emit('change-map-mode')"
        >Схематичная карта</span
      >
    </div>
  </header>
</template>

<script>
export default {
  props: {
    mapMode: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.map {
  &-header {
    padding: 20px 40px;
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    margin: auto;
    width: 90vw;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    background-color: $black;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
    z-index: 5;
  }

  &-modes {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-mode {
    padding: 7px 15px;
    margin-right: 10px;
    color: $white;
    font-size: 16px;
    border: 1px solid transparent;
    border-radius: 10px;
    transition: 200ms ease-in-out;
    opacity: 0.7;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
    &-active {
      border-color: $primary;
      opacity: 1;
    }
  }
}

.back {
  display: flex;
  justify-content: center;
  align-items: center;
  color: $primary;
  text-decoration: none;
  border: none !important;
  cursor: pointer;
  transition: 200ms ease-in-out;
  z-index: 5;

  &:hover {
    opacity: 0.6;
  }

  &-icon {
    margin-right: 10px;
    font-size: 24px;
  }

  &-label {
    font-size: 18px;
  }
}
</style>
