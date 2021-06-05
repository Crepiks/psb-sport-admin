<template>
  <div class="events">
    <notification
      :isActive="isNotificationOpen"
      :heading="notificationHeading"
      :text="notificationText"
      @close-notification="isNotificationOpen = false"
      :status="notificationStatus"
    />
    <div class="events-list">
      <psbAppInputSearch placeholder="Искать" />
      <div class="events-title-container">
        <h2 class="events-title">
          События <span class="events-number">{{ events.length }}</span>
        </h2>
        <div class="events-add" @click="eventAddClicked">
          <svg
            class="events-add-icon"
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
      <div class="events-wrapper">
        <eventCard
          v-for="(event, index) in events"
          class="events-card"
          :event="event"
          :key="index"
          @click="eventCardClicked"
        />
      </div>
    </div>
    <div class="events-right">
      <eventEdit
        v-show="active == 'eventEdit'"
        ref="eventEdit"
        :event-id="eventId"
        :event="event"
        @event-edited="eventEdited"
        @toggle-map="isMapOpen = !isMapOpen"
      />
      <eventAdd
        v-show="active == 'eventAdd'"
        @close-event-add="closeeventAdd"
        @toggle-map="isMapOpen = !isMapOpen"
      />
      <div v-show="active == 'empty'" class="events-empty">
        <div class="events-empty-container">
          <i class="fas fa-campground events-empty-icon"></i>
          <div class="events-empty-text">
            Кликните на необходимый тур, чтобы просмотреть полную информацию
          </div>
        </div>
      </div>
    </div>
    <psbEventMap
      class="events-map"
      :eventCoords="coords"
      :isMapOpen="isMapOpen"
      @close-map="isMapOpen = false"
    />
  </div>
</template>

<script>
import psbAppInputSearch from "@/components/common/psb-app-input-search";
import eventCard from "@/components/events/psb-event-card";
import eventEdit from "@/components/events/psb-event-edit";
import eventAdd from "@/components/events/psb-event-add";
import notification from "@/components/common/psb-notification";
import psbEventMap from "@/components/events/psb-event-map.vue";

export default {
  components: {
    psbAppInputSearch,
    eventCard,
    eventEdit,
    eventAdd,
    notification,
    psbEventMap,
  },
  data() {
    return {
      active: "empty",
      eventId: null,
      isNotificationOpen: false,
      notificationHeading: "",
      notificationText: "",
      notificationStatus: "",
      event: {},
      isMapOpen: false,
      coords: [54.039777, 43.935073],
      events: [
        {
          id: 1,
          title: "Однодневный тур на озёра Кольсай - Каинды и Чёрный каньон",
          lat: 54.039777,
          lon: 43.935073,
          description:
            "Тренд этого года: озёра Кольсай и Каинды. Эти места заставят Вас в них влюбиться и возвращаться к ним снова и снова.\n Приглашаем Вас увидеть воочию озёра Кольсай и Каинды, а также посетить Чёрный каньон — идеальный вариант для релакса и единения с природой, так как на локациях Вы будете свободны от всемирной паутины интернета. Бери друзей, семью и любимых, чтобы провести с ними выходной в природной сказке.",
          images: [],
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
          images: [],
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
          images: [],
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
          images: [],
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
          images: [],
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
          images: [],
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
          images: [],
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
          images: [],
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
    eventAddClicked() {
      this.active = "eventAdd";
    },
    eventCardClicked(id) {
      this.active = "eventEdit";
      this.eventId = id;
      for (let i = 0; i < this.events.length; i++) {
        if (this.events[i].id == id) {
          this.event = this.events[i];
          // this.$refs.eventEdit.changeMainImage(this.events[i].images[0].path);
        }
      }
    },
    closeeventAdd() {
      this.active = "empty";
      this.isNotificationOpen = true;
      this.notificationStatus = "success";
      this.notificationHeading = "Тур успешно добавлен!";
    },
    eventEdited() {
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

.events {
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
    max-height: 80%;
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
