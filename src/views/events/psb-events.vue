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
        v-if="active == 'eventEdit'"
        ref="eventEdit"
        :event-id="eventId"
        :event="event"
        @event-edited="eventEdited"
        @toggle-map="isMapOpen = !isMapOpen"
      />
      <eventAdd
        v-if="active == 'eventAdd'"
        @close-event-add="closeeventAdd"
        @toggle-map="isMapOpen = !isMapOpen"
      />
      <div v-if="active == 'empty'" class="events-empty">
        <div class="events-empty-container">
          <i class="fas fa-volleyball-ball events-empty-icon"></i>
          <div class="events-empty-text">
            Кликните на необходимое событие, чтобы просмотреть полную информацию
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

// import { getEvents } from "@/requests/events.js"

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
          title: "Соревнования по футболу",
          lat: 54.039777,
          lon: 43.935073,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in viverra leo. Sed porta mauris ut nisi rhoncus ullamcorper. Integer pharetra cursus viverra. Aenean orci tortor, volutpat id iaculis vel, consequat quis mauris. Phasellus ut felis lectus. Aenean enim risus, tempor ac sem quis, fringilla auctor purus. Proin vitae enim sit amet purus viverra eleifend in sed lacus.",
          images: [],
          date: "2021-05-05T14:24:01.000Z",
          duration: 3,
          sport: [
            {
              title: "Футбол мини",
            },
          ],
        },
        {
          id: 2,
          title: "Соревнования по футболу",
          lat: 54.039777,
          lon: 43.935073,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in viverra leo. Sed porta mauris ut nisi rhoncus ullamcorper. Integer pharetra cursus viverra. Aenean orci tortor, volutpat id iaculis vel, consequat quis mauris. Phasellus ut felis lectus. Aenean enim risus, tempor ac sem quis, fringilla auctor purus. Proin vitae enim sit amet purus viverra eleifend in sed lacus.",
          images: [],
          date: "2021-05-05T14:24:01.000Z",
          duration: 3,
          sport: [
            {
              title: "Футбол большой",
            },
          ],
        },
        {
          id: 3,
          title: "Соревнования по футболу",
          lat: 54.039777,
          lon: 43.935073,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in viverra leo. Sed porta mauris ut nisi rhoncus ullamcorper. Integer pharetra cursus viverra. Aenean orci tortor, volutpat id iaculis vel, consequat quis mauris. Phasellus ut felis lectus. Aenean enim risus, tempor ac sem quis, fringilla auctor purus. Proin vitae enim sit amet purus viverra eleifend in sed lacus.",
          images: [],
          date: "2021-05-05T14:24:01.000Z",
          duration: 3,
          sport: [
            {
              title: "Триатлон",
            },
          ],
        },
        {
          id: 4,
          title: "Соревнования по футболу",
          lat: 54.039777,
          lon: 43.935073,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in viverra leo. Sed porta mauris ut nisi rhoncus ullamcorper. Integer pharetra cursus viverra. Aenean orci tortor, volutpat id iaculis vel, consequat quis mauris. Phasellus ut felis lectus. Aenean enim risus, tempor ac sem quis, fringilla auctor purus. Proin vitae enim sit amet purus viverra eleifend in sed lacus.",
          images: [],
          date: "2021-05-05T14:24:01.000Z",
          duration: 3,
          sport: [
            {
              title: "Волейбол",
            },
          ],
        },
        {
          id: 5,
          title: "Соревнования по футболу",
          lat: 54.039777,
          lon: 43.935073,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in viverra leo. Sed porta mauris ut nisi rhoncus ullamcorper. Integer pharetra cursus viverra. Aenean orci tortor, volutpat id iaculis vel, consequat quis mauris. Phasellus ut felis lectus. Aenean enim risus, tempor ac sem quis, fringilla auctor purus. Proin vitae enim sit amet purus viverra eleifend in sed lacus.",
          images: [],
          date: "2021-05-05T14:24:01.000Z",
          duration: 3,
          sport: [
            {
              title: "Баскетбол",
            },
          ],
        },
        {
          id: 6,
          title: "Соревнования по футболу",
          lat: 54.039777,
          lon: 43.935073,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in viverra leo. Sed porta mauris ut nisi rhoncus ullamcorper. Integer pharetra cursus viverra. Aenean orci tortor, volutpat id iaculis vel, consequat quis mauris. Phasellus ut felis lectus. Aenean enim risus, tempor ac sem quis, fringilla auctor purus. Proin vitae enim sit amet purus viverra eleifend in sed lacus.",
          images: [],
          date: "2021-05-05T14:24:01.000Z",
          duration: 3,
          sport: [
            {
              title: "Настольный теннис",
            },
          ],
        },
        {
          id: 7,
          title: "Соревнования по футболу",
          lat: 54.039777,
          lon: 43.935073,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in viverra leo. Sed porta mauris ut nisi rhoncus ullamcorper. Integer pharetra cursus viverra. Aenean orci tortor, volutpat id iaculis vel, consequat quis mauris. Phasellus ut felis lectus. Aenean enim risus, tempor ac sem quis, fringilla auctor purus. Proin vitae enim sit amet purus viverra eleifend in sed lacus.",
          images: [],
          date: "2021-05-05T14:24:01.000Z",
          duration: 3,
          sport: [
            {
              title: "Хоккей",
            },
          ],
        },
        {
          id: 8,
          title: "Соревнования по футболу",
          lat: 54.039777,
          lon: 43.935073,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in viverra leo. Sed porta mauris ut nisi rhoncus ullamcorper. Integer pharetra cursus viverra. Aenean orci tortor, volutpat id iaculis vel, consequat quis mauris. Phasellus ut felis lectus. Aenean enim risus, tempor ac sem quis, fringilla auctor purus. Proin vitae enim sit amet purus viverra eleifend in sed lacus.",
          images: [],
          date: "2021-05-05T14:24:01.000Z",
          duration: 3,
          sport: [
            {
              title: "Бег",
            },
          ],
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
  // mounted() {
  //   getEvents()
  //     .then((res) => {
  //       this.events = res.data.events;
  //     })
  //     .catch(() => {
  //       this.notificationHeading = "Что-то пошло не так";
  //       this.isNotificationOpen = true;
  //     });
  // }
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
