<template>
  <div class="tours">
    <notification
      :isActive="isNotificationOpen"
      :heading="notificationHeading"
      :text="notificationText"
      @close-notification="isNotificationOpen = false"
      :status="notificationStatus"
    />
    <div class="tours-list">
      <demalAppInputSearch placeholder="Искать" />
      <div class="tours-tags">
        <div class="tours-tag">На этой неделе</div>
        <div class="tours-tag">Тур на один день</div>
        <div class="tours-tag">Экстремальный тур</div>
        <div class="tours-tag">Без спец оборудования</div>
      </div>
      <div class="tours-title-container">
        <h2 class="tours-title">
          Туры <span class="tours-number">{{ tours.length }}</span>
        </h2>
        <div class="tours-add" @click="tourAddClicked">
          <svg
            class="tours-add-icon"
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
      <div class="tours-wrapper">
        <tourCard
          class="tours-card"
          :tour="tour"
          v-for="tour in tours"
          :key="tour.id"
          @click="tourCardClicked"
        />
      </div>
    </div>
    <div class="tours-right">
      <tourEdit
        v-show="active == 'tourEdit'"
        ref="tourEdit"
        :tourId="tourId"
        :tour="tour"
        @tour-edited="tourEdited"
      />
      <tourAdd v-show="active == 'tourAdd'" @close-tour-add="closeTourAdd" />
      <div v-show="active == 'empty'" class="tours-empty">
        <div class="tours-empty-container">
          <i class="fas fa-campground tours-empty-icon"></i>
          <div class="tours-empty-text">
            Кликните на необходимый тур, чтобы просмотреть полную информацию
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import demalAppInputSearch from "@/components/common/demal-app-input-search";
import tourCard from "@/components/tours/demal-tour-card";
import tourEdit from "@/components/tours/demal-tour-edit";
import tourAdd from "@/components/tours/demal-tour-add";
import notification from "@/components/common/demal-notification";

export default {
  components: {
    demalAppInputSearch,
    tourCard,
    tourEdit,
    tourAdd,
    notification,
  },
  data() {
    return {
      active: "empty",
      tourId: null,
      isNotificationOpen: false,
      notificationHeading: "",
      notificationText: "",
      notificationStatus: "",
      tour: {},
      tours: [
        {
          id: 1,
          title: "Однодневный тур на озёра Кольсай - Каинды и Чёрный каньон",
          lat: 54.039777,
          lon: 43.935073,
          description:
            "Тренд этого года: озёра Кольсай и Каинды. Эти места заставят Вас в них влюбиться и возвращаться к ним снова и снова.\n Приглашаем Вас увидеть воочию озёра Кольсай и Каинды, а также посетить Чёрный каньон — идеальный вариант для релакса и единения с природой, так как на локациях Вы будете свободны от всемирной паутины интернета. Бери друзей, семью и любимых, чтобы провести с ними выходной в природной сказке.",
          images: [
            {
              id: 1,
              path: "https://static.demal.space/1-1.jpeg",
            },
            {
              id: 2,
              path: "https://static.demal.space/1-2.jpeg",
            },
            {
              id: 3,
              path: "https://static.demal.space/1-3.jpeg",
            },
            {
              id: 4,
              path: "https://static.demal.space/1-4.jpeg",
            },
            {
              id: 5,
              path: "https://static.demal.space/1-5.jpeg",
            },
          ],
          participants: [
            {
              id: 1,
              firstName: "Амир",
              lastName: "Албеков",
              email: "amir@mail.ru",
            },
            {
              id: 2,
              firstName: "Аружан",
              lastName: "Бесекова",
              email: "aryka2003@mail.ru",
            },
            {
              id: 3,
              firstName: "Айлара",
              lastName: "Светланова",
              email: "ailara12345@mail.ru",
            },
          ],
          creator: {
            firstName: "Оксана",
            lastName: "Иванова",
            email: "oksana1975@mail.ru",
          },
          start: "2021-05-05T14:24:01.000Z",
          end: "2021-05-06T14:24:01.000Z",
          price: 3000,
        },
        {
          id: 2,
          title: "Плато Ассы и Тургенский водопад",
          lat: 54.039777,
          lon: 43.935073,
          description:
            "Плато Ассы и Тургеньский водопад . Сезон поездок на самый красивый жайлау открыт.\n Прекрасный уголок природы - Платто Ассы. Где открывается красивый до невозможности вид. Чистейший воздух, легкий ветерок и величественные горы. Душевная и атмосферная обстановка , интересные люди и душевные рассказы. Сделаем красивые фото и крутые видео . Это тот самый отдых, который нужен тебе. Долго думать не нужно, поехали с нами!",
          images: [
            {
              id: 1,
              path: "https://static.demal.space/2-1.jpeg",
            },
            {
              id: 2,
              path: "https://static.demal.space/2-2.jpeg",
            },
            {
              id: 3,
              path: "https://static.demal.space/2-3.jpeg",
            },
            {
              id: 4,
              path: "https://static.demal.space/2-4.jpeg",
            },
            {
              id: 5,
              path: "https://static.demal.space/2-5.jpeg",
            },
          ],
          participants: [
            {
              id: 1,
              firstName: "Амир",
              lastName: "Албеков",
              email: "amir@mail.ru",
            },
            {
              id: 2,
              firstName: "Аружан",
              lastName: "Бесекова",
              email: "aryka2003@mail.ru",
            },
            {
              id: 3,
              firstName: "Айлара",
              lastName: "Светланова",
              email: "ailara12345@mail.ru",
            },
          ],
          creator: {
            firstName: "Оксана",
            lastName: "Иванова",
            email: "oksana1975@mail.ru",
          },
          start: "2021-05-05T14:24:01.000Z",
          end: "2021-05-06T14:24:01.000Z",
          price: 6000,
        },
        {
          id: 3,
          title: "Сплав по реке Или",
          lat: 54.039777,
          lon: 43.935073,
          description:
            "ДЛИТЕЛЬНОСТЬ СПЛАВА 3,5 часа на воде. РАССТОЯНИЕ СПЛАВА 23км. Остановка на Чертовом пальце и на Крепости КОЧЕВНИКИ. Финиш ниже Тамгалы-Тас 1км.",
          images: [
            {
              id: 1,
              path: "https://static.demal.space/3-1.jpeg",
            },
            {
              id: 2,
              path: "https://static.demal.space/3-2.jpeg",
            },
            {
              id: 3,
              path: "https://static.demal.space/3-3.jpeg",
            },
            {
              id: 4,
              path: "https://static.demal.space/3-4.jpeg",
            },
            {
              id: 5,
              path: "https://static.demal.space/3-5.jpeg",
            },
          ],
          participants: [
            {
              id: 1,
              firstName: "Амир",
              lastName: "Албеков",
              email: "amir@mail.ru",
            },
            {
              id: 2,
              firstName: "Аружан",
              lastName: "Бесекова",
              email: "aryka2003@mail.ru",
            },
            {
              id: 3,
              firstName: "Айлара",
              lastName: "Светланова",
              email: "ailara12345@mail.ru",
            },
          ],
          creator: {
            firstName: "Оксана",
            lastName: "Иванова",
            email: "oksana1975@mail.ru",
          },
          start: "2021-05-05T14:24:01.000Z",
          end: "2021-05-06T14:24:01.000Z",
          price: 2000,
        },
        {
          id: 4,
          title: "Чарынский каньон + Бартогайское водохранилище",
          lat: 54.039777,
          lon: 43.935073,
          description:
            "Предлагаем Вам вместе с нами насладиться великолепным видами на каньоны и Бартогайское водохранилище. Мы успеем прогуляться по Долине Замков, сделать кучу крутых фото на обзорных площадках и понаблюдаем за бурной рекой Чарын, у которой остановимся на пикник. Это место заставит Вас в него влюбиться и возвращаться к нему снова и снова. Бери друзей, семью и любимых, чтобы провести с ними выходной в природной сказке. Чарынский каньон протянулся на 154 км вдоль реки Чарын. Удивительный памятник природы сложен из осадочных пород, возраст которых составляет порядка 12 миллионов лет. Высота достигает от 150 до 300 метров. Интересный факт: Чарынский каньон называют младшим братом Гранд-Каньона за счёт своей уникальной флоры и образования. Поэтому Вам обязательно стоит увидеть каньоны своими глазами",
          images: [
            {
              id: 1,
              path: "https://static.demal.space/4-1.jpeg",
            },
            {
              id: 2,
              path: "https://static.demal.space/4-2.jpeg",
            },
            {
              id: 3,
              path: "https://static.demal.space/4-3.jpeg",
            },
            {
              id: 4,
              path: "https://static.demal.space/4-4.jpeg",
            },
            {
              id: 5,
              path: "https://static.demal.space/4-5.jpeg",
            },
            {
              id: 5,
              path: "https://static.demal.space/4-6.jpeg",
            },
          ],
          participants: [
            {
              id: 1,
              firstName: "Амир",
              lastName: "Албеков",
              email: "amir@mail.ru",
            },
            {
              id: 2,
              firstName: "Аружан",
              lastName: "Бесекова",
              email: "aryka2003@mail.ru",
            },
            {
              id: 3,
              firstName: "Айлара",
              lastName: "Светланова",
              email: "ailara12345@mail.ru",
            },
          ],
          creator: {
            firstName: "Оксана",
            lastName: "Иванова",
            email: "oksana1975@mail.ru",
          },
          start: "2021-05-05T14:24:01.000Z",
          end: "2021-05-06T14:24:01.000Z",
          price: 5000,
        },
        {
          id: 5,
          title: "Однодневный тур на озёра Кольсай - Каинды и Чёрный каньон",
          lat: 54.039777,
          lon: 43.935073,
          description:
            "Тренд этого года: озёра Кольсай и Каинды. Эти места заставят Вас в них влюбиться и возвращаться к ним снова и снова.\n Приглашаем Вас увидеть воочию озёра Кольсай и Каинды, а также посетить Чёрный каньон — идеальный вариант для релакса и единения с природой, так как на локациях Вы будете свободны от всемирной паутины интернета. Бери друзей, семью и любимых, чтобы провести с ними выходной в природной сказке.",
          images: [
            {
              id: 1,
              path: "https://static.demal.space/1-1.jpeg",
            },
            {
              id: 2,
              path: "https://static.demal.space/1-2.jpeg",
            },
            {
              id: 3,
              path: "https://static.demal.space/1-3.jpeg",
            },
            {
              id: 4,
              path: "https://static.demal.space/1-4.jpeg",
            },
            {
              id: 5,
              path: "https://static.demal.space/1-5.jpeg",
            },
          ],
          participants: [
            {
              id: 1,
              firstName: "Амир",
              lastName: "Албеков",
              email: "amir@mail.ru",
            },
            {
              id: 2,
              firstName: "Аружан",
              lastName: "Бесекова",
              email: "aryka2003@mail.ru",
            },
            {
              id: 3,
              firstName: "Айлара",
              lastName: "Светланова",
              email: "ailara12345@mail.ru",
            },
          ],
          creator: {
            firstName: "Оксана",
            lastName: "Иванова",
            email: "oksana1975@mail.ru",
          },
          start: "2021-05-05T14:24:01.000Z",
          end: "2021-05-06T14:24:01.000Z",
          price: 3000,
        },
        {
          id: 6,
          title: "Плато Ассы и Тургенский водопад",
          lat: 54.039777,
          lon: 43.935073,
          description:
            "Плато Ассы и Тургеньский водопад . Сезон поездок на самый красивый жайлау открыт.\n Прекрасный уголок природы - Платто Ассы. Где открывается красивый до невозможности вид. Чистейший воздух, легкий ветерок и величественные горы. Душевная и атмосферная обстановка , интересные люди и душевные рассказы. Сделаем красивые фото и крутые видео . Это тот самый отдых, который нужен тебе. Долго думать не нужно, поехали с нами!",
          images: [
            {
              id: 1,
              path: "https://static.demal.space/2-1.jpeg",
            },
            {
              id: 2,
              path: "https://static.demal.space/2-2.jpeg",
            },
            {
              id: 3,
              path: "https://static.demal.space/2-3.jpeg",
            },
            {
              id: 4,
              path: "https://static.demal.space/2-4.jpeg",
            },
            {
              id: 5,
              path: "https://static.demal.space/2-5.jpeg",
            },
          ],
          participants: [
            {
              id: 1,
              firstName: "Амир",
              lastName: "Албеков",
              email: "amir@mail.ru",
            },
            {
              id: 2,
              firstName: "Аружан",
              lastName: "Бесекова",
              email: "aryka2003@mail.ru",
            },
            {
              id: 3,
              firstName: "Айлара",
              lastName: "Светланова",
              email: "ailara12345@mail.ru",
            },
          ],
          creator: {
            firstName: "Оксана",
            lastName: "Иванова",
            email: "oksana1975@mail.ru",
          },
          start: "2021-05-05T14:24:01.000Z",
          end: "2021-05-06T14:24:01.000Z",
          price: 6000,
        },
        {
          id: 7,
          title: "Сплав по реке Или",
          lat: 54.039777,
          lon: 43.935073,
          description:
            "ДЛИТЕЛЬНОСТЬ СПЛАВА 3,5 часа на воде. РАССТОЯНИЕ СПЛАВА 23км. Остановка на Чертовом пальце и на Крепости КОЧЕВНИКИ. Финиш ниже Тамгалы-Тас 1км.",
          images: [
            {
              id: 1,
              path: "https://static.demal.space/3-1.jpeg",
            },
            {
              id: 2,
              path: "https://static.demal.space/3-2.jpeg",
            },
            {
              id: 3,
              path: "https://static.demal.space/3-3.jpeg",
            },
            {
              id: 4,
              path: "https://static.demal.space/3-4.jpeg",
            },
            {
              id: 5,
              path: "https://static.demal.space/3-5.jpeg",
            },
          ],
          participants: [
            {
              id: 1,
              firstName: "Амир",
              lastName: "Албеков",
              email: "amir@mail.ru",
            },
            {
              id: 2,
              firstName: "Аружан",
              lastName: "Бесекова",
              email: "aryka2003@mail.ru",
            },
            {
              id: 3,
              firstName: "Айлара",
              lastName: "Светланова",
              email: "ailara12345@mail.ru",
            },
          ],
          creator: {
            firstName: "Оксана",
            lastName: "Иванова",
            email: "oksana1975@mail.ru",
          },
          start: "2021-05-05T14:24:01.000Z",
          end: "2021-05-06T14:24:01.000Z",
          price: 2000,
        },
        {
          id: 8,
          title: "Чарынский каньон + Бартогайское водохранилище",
          lat: 54.039777,
          lon: 43.935073,
          description:
            "Предлагаем Вам вместе с нами насладиться великолепным видами на каньоны и Бартогайское водохранилище. Мы успеем прогуляться по Долине Замков, сделать кучу крутых фото на обзорных площадках и понаблюдаем за бурной рекой Чарын, у которой остановимся на пикник. Это место заставит Вас в него влюбиться и возвращаться к нему снова и снова. Бери друзей, семью и любимых, чтобы провести с ними выходной в природной сказке. Чарынский каньон протянулся на 154 км вдоль реки Чарын. Удивительный памятник природы сложен из осадочных пород, возраст которых составляет порядка 12 миллионов лет. Высота достигает от 150 до 300 метров. Интересный факт: Чарынский каньон называют младшим братом Гранд-Каньона за счёт своей уникальной флоры и образования. Поэтому Вам обязательно стоит увидеть каньоны своими глазами",
          images: [
            {
              id: 1,
              path: "https://static.demal.space/4-1.jpeg",
            },
            {
              id: 2,
              path: "https://static.demal.space/4-2.jpeg",
            },
            {
              id: 3,
              path: "https://static.demal.space/4-3.jpeg",
            },
            {
              id: 4,
              path: "https://static.demal.space/4-4.jpeg",
            },
            {
              id: 5,
              path: "https://static.demal.space/4-5.jpeg",
            },
            {
              id: 5,
              path: "https://static.demal.space/4-6.jpeg",
            },
          ],
          participants: [
            {
              id: 1,
              firstName: "Амир",
              lastName: "Албеков",
              email: "amir@mail.ru",
            },
            {
              id: 2,
              firstName: "Аружан",
              lastName: "Бесекова",
              email: "aryka2003@mail.ru",
            },
            {
              id: 3,
              firstName: "Айлара",
              lastName: "Светланова",
              email: "ailara12345@mail.ru",
            },
          ],
          creator: {
            firstName: "Оксана",
            lastName: "Иванова",
            email: "oksana1975@mail.ru",
          },
          start: "2021-05-05T14:24:01.000Z",
          end: "2021-05-06T14:24:01.000Z",
          price: 5000,
        },
      ],
    };
  },
  methods: {
    tourAddClicked() {
      this.active = "tourAdd";
    },
    tourCardClicked(id) {
      this.active = "tourEdit";
      this.tourId = id;
      for (let i = 0; i < this.tours.length; i++) {
        if (this.tours[i].id == id) {
          this.tour = this.tours[i];
          this.$refs.tourEdit.changeMainImage(this.tours[i].images[0].path);
        }
      }
    },
    closeTourAdd() {
      this.active = "empty";
      this.isNotificationOpen = true;
      this.notificationStatus = "success";
      this.notificationHeading = "Тур успешно добавлен!";
    },
    tourEdited() {
      this.isNotificationOpen = true;
      this.notificationStatus = "success";
      this.notificationHeading = "Изменения сохранены!";
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=PT+Sans+Caption&display=swap");

.tours {
  color: $white;
  display: flex;
  justify-content: space-between;
  max-height: 100%;
  box-sizing: border-box;

  &-list {
    width: 40%;
    box-sizing: border-box;
  }

  &-title {
    opacity: 0.9;
    font-family: "PT Sans Caption", sans-serif !important;
    font-size: 28px;
    color: $white;
    margin: 0;

    &-container {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
  }

  &-add {
    border-radius: 5px;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: $dark-white;
    margin-bottom: 4px;
    cursor: pointer;
    transition: 200ms ease-in-out;
  }

  &-add:hover {
    opacity: 0.8;
  }

  &-number {
    font-size: 12px;
    color: $white;
    opacity: 0.7;
  }

  &-wrapper {
    margin-top: 40px;
    max-height: 60%;
    overflow: auto;
  }

  &-card {
    margin-bottom: 30px;
  }

  &-tags {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
  }

  &-tag {
    border-radius: 50px;
    width: fit-content;
    border: 1px solid #b2b2b2;
    color: #b2b2b2;
    padding: 10px 20px;
    font-size: 15px;
    margin-right: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: 200ms ease-in-out;
  }

  &-tag:hover {
    background-color: #b2b2b2;
    color: $black;
  }

  &-right {
    width: 50%;
  }

  &-empty {
    width: 100%;
    max-height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    &-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 70%;
      margin-top: 40%;
    }

    &-icon {
      color: $primary;
      font-size: 100px;
      margin-bottom: 30px;
    }

    &-text {
      color: $white;
      text-align: center;
      line-height: 30px;
    }
  }
}
</style>
