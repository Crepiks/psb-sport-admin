<template>
  <div class="input-wrapper">
    <div class="input-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style="fill: #000000; transform: ; -ms-filter: "
      >
        <path
          d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"
        ></path>
        <path
          d="M11.412,8.586C11.791,8.966,12,9.468,12,10h2c0-1.065-0.416-2.069-1.174-2.828c-1.514-1.512-4.139-1.512-5.652,0 l1.412,1.416C9.346,7.83,10.656,7.832,11.412,8.586z"
        ></path>
      </svg>
    </div>
    <input :type="type" :placeholder="placeholder" class="input" />
  </div>
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
  border: 1px solid transparent;
  box-sizing: border-box;
  padding: 14px 20px;
  padding-left: 50px;
  font-size: 14px;
  border-radius: 12px;
  background-color: $dark-white;
  width: 100%;
  color: $white;
  outline: none;
  transition: 200ms ease-in-out;

  &-wrapper {
    width: 100%;
    position: relative;
  }

  &-icon {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translate(0, -50%);
    opacity: 0.7;
    margin-top: 3px;
  }

  &:focus {
    padding-left: 55px;
  }
}
</style>
