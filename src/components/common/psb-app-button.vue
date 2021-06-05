<template>
  <button
    class="button"
    @click="$emit('click')"
    :class="{ 'loading-button': isLoading }"
  >
    <transition name="fade" mode="out-in">
      <div class="loader loader-arc" v-if="isLoading"></div>
      <div v-else><slot></slot></div>
    </transition>
  </button>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.button {
  border: 1px solid $primary;
  padding: 10px 30px;
  border-radius: 12px;
  background-color: $primary;
  color: $black;
  text-align: center;
  outline: none;
  cursor: pointer;
  min-width: 120px;
  transition: 200ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }
}

.loading-button {
  position: relative;
  height: 39px;
  cursor: default;

  &:hover {
    opacity: 1;
  }
}

.loader {
  position: relative;
  width: 18px;
  height: 18px;
  display: inline-block;
  border-radius: 50%;
}

.loader:after {
  content: "";
  position: absolute;
  left: 3px;
  top: 3px;
  height: 12px;
  width: 12px;
  display: block;
  border-radius: 50%;
  background: $primary;
}

.loader-arc {
  animation-name: spin;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background-image: linear-gradient(270deg, $white 20%, transparent 50%),
    linear-gradient(180deg, $primary 50%, $white 50%);
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
