<template>
  <div class="login">
    <div class="login-container">
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <h2 class="login-form-title">Вход</h2>
        <a-form-item label="Email">
          <a-input
            v-decorator="[
              'userName',
              {
                rules: [
                  { required: true, message: 'Please input your email!' },
                ],
              },
            ]"
            placeholder="email"
          >
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item label="Password">
          <a-input
            v-decorator="[
              'password',
              {
                rules: [
                  { required: true, message: 'Please input your Password!' },
                ],
              },
            ]"
            type="password"
            placeholder="Password"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            html-type="submit"
            class="login-form-button"
            :loading="isLoading"
          >
            Log in
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
// import { login } from "@/requests/auth.js";

export default {
  data() {
    return {
      isLsoading: false,
      isNotificationOpen: false,
      notificationHeading: "",
      notificationText: "",
      notificationStatus: "",
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          // this.isLoading = true;
          // login(values)
          //   .then((res) => {
          //     const user = {
          //       id: res.data.user.id,
          //       email: res.data.user.email,
          //       token: res.data.auth.token,
          //     };
          //     localStorage.setItem("user", JSON.stringify(user));
          //     this.$router.push("/");
          //   })
          //   .catch(() => {
          //     this.notificationHeading = "Неверная почта или пароль";
          //     this.isNotificationOpen = true;
          //     this.notificationStatus = "error";
          //   })
          //   .finally(() => {
          //     this.isLoading = false;
          //   });
          console.log(values);
          this.$router.push("/");
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=PT+Sans+Caption&display=swap");

.login {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: $dark-white;

  &-container {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    background-color: $black;
    padding: 40px 35px;
    padding-bottom: 25px;
    border-radius: 10px;
    box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.04);
  }

  &-form {
    width: 300px;
    box-sizing: border-box;
    border-radius: 4px;

    &-title {
      font-size: 25px;
      font-weight: 500;
    }

    &-button {
      background-color: $primary;
      border-color: $primary;
      margin-bottom: 0;
    }

    &-button:hover {
      background-color: $primary;
      border-color: $primary;
      opacity: 0.8;
    }
  }
}
</style>
