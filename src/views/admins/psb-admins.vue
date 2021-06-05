<template>
  <div class="admins">
    <notification
      :isActive="isNotificationOpen"
      :heading="notificationHeading"
      :text="notificationText"
      @close-notification="isNotificationOpen = false"
      :status="notificationStatus"
    />
    <psbAppInputSearch class="admins-search" placeholder="Искать" />
    <div class="admins-container">
      <h2 class="admins-title">
        Админы <span class="admins-number">{{ admins.length }}</span>
      </h2>
      <div class="admins-add" @click="isModalOpen = !isModalOpen">
        <svg
          class="admins-add-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style="fill: #000000; transform: ; -ms-filter: "
        >
          <path
            d="M19 11L13 11 13 5 11 5 11 11 5 11 5 13 11 13 11 19 13 19 13 13 19 13z"
          ></path>
        </svg>
      </div>
    </div>
    <psbAdminsTable :heads="tableHeads" :items="admins" />
    <psbModal :isOpen="isModalOpen" @close-modal="isModalOpen = false">
      <h2 class="admins-title">Добавление админа</h2>
      <psbAppInput
        class="admins-input"
        :unsolid="true"
        placeholder="Введите имя"
        title="Имя"
      />
      <psbAppInput
        class="admins-input"
        :unsolid="true"
        placeholder="Введите фамилию"
        title="Фамилия"
      />
      <psbAppInput
        class="admins-input"
        :unsolid="true"
        placeholder="Введите почту"
        title="Почта"
      />
      <psbAppInput
        class="admins-input"
        :unsolid="true"
        placeholder="Введите пароль"
        title="Пароль"
        type="password"
      />
      <psbAppButton
        class="admins-button"
        @click="handleClick"
        :isLoading="isLoading"
        >Добавить</psbAppButton
      >
    </psbModal>
  </div>
</template>

<script>
import psbAppInputSearch from "@/components/common/psb-app-input-search";
import psbAppInput from "@/components/common/psb-app-input";
import psbAdminsTable from "@/components/admins/psb-admins-table";
import psbModal from "@/components/common/psb-modal";
import psbAppButton from "@/components/common/psb-app-button";
import notification from "@/components/common/psb-notification";

export default {
  components: {
    psbAppInputSearch,
    psbAppInput,
    psbAdminsTable,
    psbModal,
    psbAppButton,
    notification,
  },
  data() {
    return {
      tableHeads: [
        "Имя",
        "Фамилия",
        "Почта",
        "Дата подтверждения",
        "Дата создания",
      ],
      isLoading: false,
      admins: [
        {
          id: 0,
          firstName: "Данияр",
          lastName: "Егеубай",
          email: "donchik020202@gmail.com",
          emailVerifiedAt: "23.04.2021",
          createdAt: "23.04.2021",
        },
        {
          id: 1,
          firstName: "Данияр",
          lastName: "Егеубай",
          email: "donchik020202@gmail.com",
          emailVerifiedAt: "23.04.2021",
          createdAt: "23.04.2021",
        },
        {
          id: 2,
          firstName: "Данияр",
          lastName: "Егеубай",
          email: "donchik020202@gmail.com",
          emailVerifiedAt: "23.04.2021",
          createdAt: "23.04.2021",
        },
        {
          id: 3,
          firstName: "Данияр",
          lastName: "Егеубай",
          email: "donchik020202@gmail.com",
          emailVerifiedAt: "23.04.2021",
          createdAt: "23.04.2021",
        },
        {
          id: 4,
          firstName: "Данияр",
          lastName: "Егеубай",
          email: "donchik020202@gmail.com",
          emailVerifiedAt: "23.04.2021",
          createdAt: "23.04.2021",
        },
        {
          id: 5,
          firstName: "Данияр",
          lastName: "Егеубай",
          email: "donchik020202@gmail.com",
          emailVerifiedAt: "23.04.2021",
          createdAt: "23.04.2021",
        },
        {
          id: 6,
          firstName: "Данияр",
          lastName: "Егеубай",
          email: "donchik020202@gmail.com",
          emailVerifiedAt: "23.04.2021",
          createdAt: "23.04.2021",
        },
        {
          id: 7,
          firstName: "Данияр",
          lastName: "Егеубай",
          email: "donchik020202@gmail.com",
          emailVerifiedAt: "23.04.2021",
          createdAt: "23.04.2021",
        },
        {
          id: 8,
          firstName: "Данияр",
          lastName: "Егеубай",
          email: "donchik020202@gmail.com",
          emailVerifiedAt: "23.04.2021",
          createdAt: "23.04.2021",
        },
        {
          id: 9,
          firstName: "Данияр",
          lastName: "Егеубай",
          email: "donchik020202@gmail.com",
          emailVerifiedAt: "23.04.2021",
          createdAt: "23.04.2021",
        },
        {
          id: 10,
          firstName: "Данияр",
          lastName: "Егеубай",
          email: "donchik020202@gmail.com",
          emailVerifiedAt: "23.04.2021",
          createdAt: "23.04.2021",
        },
        {
          id: 11,
          firstName: "Данияр",
          lastName: "Егеубай",
          email: "donchik020202@gmail.com",
          emailVerifiedAt: "23.04.2021",
          createdAt: "23.04.2021",
        },
      ],
      isModalOpen: false,
      isNotificationOpen: false,
      notificationHeading: "",
      notificationText: "",
      notificationStatus: "",
    };
  },
  methods: {
    handleClick() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.isModalOpen = false;
        this.isNotificationOpen = true;
        this.notificationStatus = "success";
        this.notificationHeading = "Администратор успешно добавлен!";
      }, 1500);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=PT+Sans+Caption&display=swap");

.admins {
  color: $white;

  &-container {
    display: flex;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  &-search {
    width: 500px;
  }

  &-title {
    font-family: "PT Sans Caption", sans-serif !important;
    color: $white;
    opacity: 0.9;
    margin-right: 30px;
  }

  &-add {
    border-radius: 5px;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: $dark-white;
    margin-bottom: 10px;
    cursor: pointer;
    transition: 200ms ease-in-out;
  }

  &-add:hover {
    opacity: 0.8;
  }

  &-input {
    margin-top: 20px;
  }

  &-button {
    margin-top: 30px;
    width: 100%;
    color: $black;
  }

  &-number {
    font-size: 12px;
    color: $white;
    opacity: 0.7;
  }
}
</style>
