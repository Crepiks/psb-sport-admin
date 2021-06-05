<template>
  <div class="users">
    <notification
      :isActive="isNotificationOpen"
      :heading="notificationHeading"
      :text="notificationText"
      @close-notification="isNotificationOpen = false"
      :status="notificationStatus"
    />
    <demalAppInputSearch class="users-search" placeholder="Искать" />
    <div class="users-container">
      <h2 class="users-title">
        Пользователи <span class="users-number">{{ users.length }}</span>
      </h2>
    </div>
    <demalUsersTable :heads="tableHeads" :items="users" @click="userCLicked" />
    <demalModal :isOpen="isModalOpen" @close-modal="isModalOpen = false">
      <h2 class="users-title">Редактирование пользователя</h2>
      <demalAppInput
        class="users-input"
        :unsolid="true"
        placeholder="Введите имя"
        title="Имя"
        v-model="user.firstName"
      />
      <demalAppInput
        class="users-input"
        :unsolid="true"
        placeholder="Введите фамилию"
        title="Фамилия"
        v-model="user.lastName"
      />
      <demalAppInput
        class="users-input"
        :unsolid="true"
        placeholder="Введите почту"
        title="Почта"
        v-model="user.email"
      />
      <demalAppSelect
        title="Подписка"
        class="users-select"
        :options="options"
      />
      <demalAppButton
        class="users-button"
        @click="handleClick"
        :isLoading="isLoading"
        >Сохранить</demalAppButton
      >
    </demalModal>
  </div>
</template>

<script>
import demalAppInputSearch from "@/components/common/demal-app-input-search";
import demalAppInput from "@/components/common/demal-app-input";
import demalUsersTable from "@/components/users/demal-users-table";
import demalModal from "@/components/common/demal-modal";
import demalAppButton from "@/components/common/demal-app-button";
import demalAppSelect from "@/components/common/demal-app-select";
import notification from "@/components/common/demal-notification";

export default {
  components: {
    demalAppInputSearch,
    demalAppInput,
    demalUsersTable,
    demalModal,
    demalAppButton,
    demalAppSelect,
    notification,
  },
  data() {
    return {
      tableHeads: ["Имя", "Фамилия", "Почта", "Подписка", "Дата создания"],
      options: ["Нет подписки", "Новичок", "Любитель", "Экстремал"],
      isLoading: false,
      user: {
        id: "",
        firstName: "Данияр",
        lastName: "Егеубай",
        email: "donchik020202@gmail.com",
        subscription: "-",
      },
      users: [
        {
          id: 0,
          firstName: "Данияр",
          lastName: "Егеубай",
          email: "donchik020202@gmail.com",
          subscription: "-",
          createdAt: "23.04.2021",
        },
        {
          id: 1,
          firstName: "Данияр",
          lastName: "Егеубай",
          email: "donchik020202@gmail.com",
          subscription: "-",
          createdAt: "23.04.2021",
        },
        {
          id: 2,
          firstName: "Данияр",
          lastName: "Егеубай",
          email: "donchik020202@gmail.com",
          subscription: "-",
          createdAt: "23.04.2021",
        },
        {
          id: 3,
          firstName: "Данияр",
          lastName: "Егеубай",
          email: "donchik020202@gmail.com",
          subscription: "-",
          createdAt: "23.04.2021",
        },
        {
          id: 4,
          firstName: "Данияр",
          lastName: "Егеубай",
          email: "donchik020202@gmail.com",
          subscription: "-",
          createdAt: "23.04.2021",
        },
        {
          id: 5,
          firstName: "Данияр",
          lastName: "Егеубай",
          email: "donchik020202@gmail.com",
          subscription: "-",
          createdAt: "23.04.2021",
        },
        {
          id: 6,
          firstName: "Данияр",
          lastName: "Егеубай",
          email: "donchik020202@gmail.com",
          subscription: "-",
          createdAt: "23.04.2021",
        },
        {
          id: 7,
          firstName: "Данияр",
          lastName: "Егеубай",
          email: "donchik020202@gmail.com",
          subscription: "-",
          createdAt: "23.04.2021",
        },
        {
          id: 8,
          firstName: "Данияр",
          lastName: "Егеубай",
          email: "donchik020202@gmail.com",
          subscription: "-",
          createdAt: "23.04.2021",
        },
        {
          id: 9,
          firstName: "Данияр",
          lastName: "Егеубай",
          email: "donchik020202@gmail.com",
          subscription: "-",
          createdAt: "23.04.2021",
        },
        {
          id: 10,
          firstName: "Данияр",
          lastName: "Егеубай",
          email: "donchik020202@gmail.com",
          subscription: "-",
          createdAt: "23.04.2021",
        },
        {
          id: 11,
          firstName: "Данияр",
          lastName: "Егеубай",
          email: "donchik020202@gmail.com",
          subscription: "-",
          createdAt: "23.04.2021",
        },
      ],
      isModalOpen: false,
    };
  },
  methods: {
    userCLicked(id) {
      this.isModalOpen = true;
      this.user.id = id;
    },
    handleClick() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.isModalOpen = false;
        this.isNotificationOpen = true;
        this.notificationStatus = "success";
        this.notificationHeading = "Изменения успешно сохранены!";
      }, 1500);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=PT+Sans+Caption&display=swap");

.users {
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
    background-color: #4f4b64;
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

  &-select {
    margin-top: 20px;
    width: 100%;
  }

  &-button {
    margin-top: 30px;
    width: 100%;
  }

  &-number {
    font-size: 12px;
    color: $white;
    opacity: 0.7;
  }
}
</style>
