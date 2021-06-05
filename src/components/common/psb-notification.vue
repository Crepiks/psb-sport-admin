<template>
  <div
    class="notification"
    :class="{
      'notification-top': position == 'top',
      'notification-bottom': position == 'bottom',
      'notification-active': isActive,
    }"
  >
    <div
      class="notification-mark"
      :class="{
        'notification-mark-success': status == 'success',
        'notification-mark-warning': status == 'warning',
        'notification-mark-error': status == 'error',
      }"
    ></div>
    <i
      class="notification-icon"
      :class="{
        'bx bxs-check-circle notification-icon-success': status == 'success',
        'bx bxs-alarm-exclamation notification-icon-warning':
          status == 'warning',
        'bx bxs-x-circle notification-icon-error': status == 'error',
      }"
    ></i>
    <div class="notification-text">
      <h2 class="notification-heading" v-if="heading != ''">{{ heading }}</h2>
      <p class="notification-paragraph">{{ text }}</p>
    </div>
    <i class="bx bx-x notification-close" @click="handleCloseButton"></i>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      default: "success",
    },

    heading: {
      type: String,
      default: "",
    },

    text: {
      type: String,
      default: "",
    },

    position: {
      type: String,
      default: "top",
    },

    isActive: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      setTimeoutId: null,
    };
  },

  watch: {
    isActive() {
      if (this.isActive) {
        this.setTimeoutId = setTimeout(() => {
          this.$emit("close-notification");
        }, 7000);
      }
    },
  },

  methods: {
    handleCloseButton() {
      if (this.setTimeoutId) {
        clearTimeout(this.setTimeoutId);
      }

      this.$emit("close-notification");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.notification {
  position: fixed;
  right: -550px;
  padding: 0 20px;
  max-width: 500px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  background-color: $black;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  transition: 350ms ease-in-out;
  z-index: 7;

  &-active {
    right: 20px;
  }

  &-top {
    top: 20px;
  }

  &-bottom {
    bottom: 20px;
  }

  &-mark {
    margin-right: 10px;
    height: 40px;
    width: 8px;
    border-radius: 10px;
    background-color: black;

    &-success {
      background-color: $primary;
    }

    &-warning {
      background-color: #f1c40f;
    }

    &-error {
      background-color: $error;
    }
  }

  &-icon {
    margin-right: 10px;
    font-size: 25px;

    &-success {
      color: $primary;
    }

    &-warning {
      color: #f1c40f;
    }

    &-error {
      color: $error;
    }
  }

  &-text {
    margin-right: 10px;
    display: flex;
    flex-direction: column;
  }

  &-heading {
    color: $white;
    font-size: 18px;
    font-weight: 500;
    opacity: 0.9;
    margin-top: 20px;
  }

  &-paragraph {
    color: $black;
    font-size: 16px;
    opacity: 0.8;
  }

  &-close {
    color: $white;
    font-size: 25px;
    opacity: 0.5;
    z-index: 5;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }
}

@media (max-width: 414px) {
  .notification {
    right: -100%;
    max-width: 95%;
    width: 95%;

    &-active {
      right: 2.5%;
    }

    &-heading {
      font-size: 16px;
    }

    &-paragraph {
      font-size: 14px;
    }
  }
}
</style>
