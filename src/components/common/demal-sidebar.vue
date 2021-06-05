<template>
  <div class="sidebar">
    <i class="fas fa-map-signs sidebar-logo"></i>
    <div class="sidebar-links">
      <router-link class="sidebar-link" to="/">
        <svg
          class="sidebar-link-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style="fill: #000000; transform: ; -ms-filter: "
        >
          <path
            d="M14.844 20H6.5C5.121 20 4 18.879 4 17.5S5.121 15 6.5 15h7c1.93 0 3.5-1.57 3.5-3.5S15.43 8 13.5 8H8.639c-.391.771-.868 1.443-1.354 2H13.5c.827 0 1.5.673 1.5 1.5S14.327 13 13.5 13h-7C4.019 13 2 15.019 2 17.5S4.019 22 6.5 22h9.593C15.636 21.422 15.2 20.753 14.844 20zM5 2C3.346 2 2 3.346 2 5c0 3.188 3 5 3 5s3-1.813 3-5C8 3.346 6.654 2 5 2zM5 6.5C4.172 6.5 3.5 5.828 3.5 5S4.172 3.5 5 3.5 6.5 4.172 6.5 5 5.828 6.5 5 6.5z"
          ></path>
          <path
            d="M19,14c-1.654,0-3,1.346-3,3c0,3.188,3,5,3,5s3-1.813,3-5C22,15.346,20.654,14,19,14z M19,18.5 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S19.828,18.5,19,18.5z"
          ></path>
        </svg>
      </router-link>
      <router-link class="sidebar-link" to="/admins">
        <svg
          class="sidebar-link-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style="fill: #000000; transform: ; -ms-filter: "
        >
          <circle fill="none" cx="12" cy="7" r="3"></circle>
          <path
            d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z"
          ></path>
        </svg>
      </router-link>
      <router-link class="sidebar-link" to="/users">
        <svg
          class="sidebar-link-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style="fill: #000000; transform: ; -ms-filter: "
        >
          <path
            d="M16.604,11.048c0.604-1.029,0.872-2.228,0.751-3.44c-0.179-1.784-1.175-3.361-2.803-4.44l-1.105,1.666 c1.119,0.742,1.8,1.799,1.918,2.974c0.11,1.105-0.28,2.194-1.072,2.986l-1.192,1.192l1.618,0.475C18.951,13.701,19,17.957,19,18h2 C21,16.211,20.044,12.715,16.604,11.048z"
          ></path>
          <path
            d="M9.5 12c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4S7.294 12 9.5 12zM9.5 6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2S8.397 6 9.5 6zM11 13H8c-3.309 0-6 2.691-6 6v1h2v-1c0-2.206 1.794-4 4-4h3c2.206 0 4 1.794 4 4v1h2v-1C17 15.691 14.309 13 11 13z"
          ></path>
        </svg>
      </router-link>
    </div>
    <router-link class="sidebar-link" to="/login">
      <svg
        class="sidebar-link-icon sidebar-link-icon-logout"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style="fill: #000000; transform: ; -ms-filter: "
      >
        <path d="M16 13L16 11 7 11 7 8 2 12 7 16 7 13z"></path>
        <path
          d="M20,3h-9C9.897,3,9,3.897,9,5v4h2V5h9v14h-9v-4H9v4c0,1.103,0.897,2,2,2h9c1.103,0,2-0.897,2-2V5C22,3.897,21.103,3,20,3z"
        ></path>
      </svg>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.sidebar {
  width: 100px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-logo {
    margin-top: 40px;
    color: $primary;
    font-size: 40px;
  }

  &-links {
    margin-top: 30px;
  }

  &-link {
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 70px;
    height: 70px;

    &-icon {
      color: $white;
      opacity: 0.7;
      font-size: 30px;

      &-logout {
        margin-top: 700px;
        transition: 200ms ease-in-out;
      }

      &-logout:hover {
        opacity: 0.5;
      }
    }

    &.router-link-exact-active {
      background-color: $dark-white;
    }
  }
}
</style>
