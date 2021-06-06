<template>
  <div class="modal" :class="{ 'modal-close': !isOpen }">
    <div class="modal-container">
      <div></div>
      <div class="modal-button" @click="$emit('close-modal')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style="fill: #ffffff; transform: ; -ms-filter: "
        >
          <path
            d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"
          ></path>
        </svg>
      </div>
    </div>
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=PT+Sans+Caption&display=swap");

.modal {
  min-width: 400px;
  min-height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: $dark-white;
  border-radius: 15px;

  &-content {
    padding: 30px 30px;
    padding-top: 10px;
    box-sizing: border-box;
  }

  &-close {
    display: none;
  }

  &-container {
    display: flex;
    justify-content: space-between;
  }

  &-button {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background-color: #4e4e4e;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    margin-right: -10px;
    margin-top: -10px;
    transition: 200ms ease-in-out;
  }

  &-button:hover {
    opacity: 0.8;
  }
}
</style>
