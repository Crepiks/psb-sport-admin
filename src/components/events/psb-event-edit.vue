<template>
  <div class="event">
    <h2 class="event-title">Редактирование события</h2>
    <!-- <div class="event-image">
      <img
        :src="mainImage ? mainImage : null"
        class="event-image-inner"
        alt=""
      />
    </div>
    <div class="event-images">
      <div
        class="event-images-single"
        v-for="image in event.images"
        :key="image.id"
        @mouseover="changeImage(image)"
        @mouseout="mouseOut(image)"
      >
        <img
          :src="image.path ? image.path : null"
          class="event-images-single-inner"
          alt=""
        />
        <div
          class="event-images-single-cover"
          :class="{ 'event-images-single-cover-active': image.cover }"
        >
          <i class="far fa-trash-alt event-images-single-cover-icon"></i>
        </div>
      </div>
    </div> -->
    <div class="event-info">
      <div class="event-tags">
        <div
          class="event-tag"
          v-for="(sport, index) in event.sport"
          :key="index"
        >
          {{ sport.title }}
        </div>
        <div
          class="event-tag event-tag-add"
          @click="isModalOpen = !isModalOpen"
        >
          +
        </div>
      </div>
      <psbAppInput class="event-input" v-model="event.title" title="Название" />
      <psbAppTextarea
        class="event-input"
        v-model="event.description"
        title="Описание"
      />
      <div class="event-container">
        <psbAppInput
          class="event-input event-container-inner"
          v-model="event.date"
          title="Начало"
        />
      </div>
      <div class="event-container">
        <psbAppInput
          class="event-input event-container-inner"
          v-model="event.lon"
          title="Долгота"
        />
        <psbAppInput
          class="event-input event-container-inner"
          v-model="event.lat"
          title="Широта"
        />
      </div>
      <div class="event-map-toggle" @click="$emit('toggle-map')">
        Посмотреть на карте
      </div>
    </div>
    <psbAppButton :isLoading="isLoading" @click="editEvent"
      >Сохранить</psbAppButton
    >
    <psbModal :isOpen="isModalOpen" @close-modal="isModalOpen = false">
      <h2 class="admins-title">Добавление вида спорта</h2>
      <psbAppSelect title="Подписка" class="event-select" :options="options" />
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
import psbAppInput from "@/components/common/psb-app-input";
import psbAppTextarea from "@/components/common/psb-app-textarea";
import psbAppButton from "@/components/common/psb-app-button";
import psbAppSelect from "@/components/common/psb-app-select";
import psbModal from "@/components/common/psb-modal";

// import { getEvent, editEvent as editEventRequest } from "@/requests/events.js"

export default {
  components: {
    psbAppInput,
    psbAppTextarea,
    psbAppButton,
    psbModal,
    psbAppSelect,
  },
  props: {
    eventId: {
      type: Number,
    },
    event: {
      type: Object,
    },
  },
  data() {
    return {
      mainImage: null,
      isLoading: false,
      options: [
        "Футбол мини",
        "Футбол большой",
        "Хоккей",
        "Баскетбол",
        "Волейбол",
        "Настольный теннис",
      ],
      // event: {},
      sports: [
        "Футбол большой",
        "Футбол мини",
        "Баскетбол",
        "Волейбол",
        "Триатлон",
        "Хоккей",
        "Бег",
        "Гонки с препятствиями",
        "Настольный теннис",
        "Стретчинг",
      ],
      isModalOpen: false,
    };
  },
  methods: {
    changeImage(image) {
      this.mainImage = image.path;
      image.cover = true;
    },
    mouseOut(image) {
      image.cover = false;
    },
    changeMainImage(path) {
      this.mainImage = path;
    },
    editEvent() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.$emit("event-edited");
      }, 1000);
      // editEvent(this.eventId, this.event)
      //   .then((res) => {
      //     this.event = res.data.event;
      //     this.isLoading = false;
      //     this.$emit("event-edited");
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   });
    },
  },
  // mounted() {
  //   getEvent(this.eventId)
  //     .then((res) => {
  //       this.event = res.data.event;
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     });
  // }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.event {
  max-height: 100%;
  overflow: auto;

  &-title {
    font-family: "PT Sans Caption", sans-serif !important;
    font-size: 28px;
  }

  &-image {
    width: 100%;

    &-inner {
      width: 100%;
      max-height: 300px;
      border-radius: 15px;
    }
  }

  &-images {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;

    &-single {
      width: 90px;
      height: 80px;
      cursor: pointer;
      margin-right: 14px;
      margin-bottom: 20px;
      position: relative;

      &-inner {
        height: 100%;
        max-width: 90px;
        border-radius: 15px;
      }

      &-cover {
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        border-radius: 15px;
        background-color: #00000070;
        justify-content: space-around;
        align-items: center;
        display: none;

        &-icon {
          color: $white;
          font-size: 20px;
          transition: 200ms ease-in-out;
        }

        &-icon:hover {
          color: #e74c3c;
        }
      }

      &-cover-active {
        display: flex;
      }
    }
  }

  &-info {
    margin-top: 30px;
  }

  &-input {
    margin-bottom: 20px;
  }

  &-tags {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
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

    &-active {
      background-color: #b2b2b2;
      color: $black;
    }
  }

  &-tag-add:hover {
    background-color: #b2b2b2;
    color: $black;
  }

  &-container {
    display: flex;
    justify-content: space-between;

    &-inner {
      width: 46%;
    }
  }

  &-map-toggle {
    background-color: $dark-white;
    padding: 5px 15px;
    box-sizing: border-box;
    font-size: 14px;
    margin-bottom: 20px;
    border-radius: 12px;
    width: fit-content;
    cursor: pointer;
  }

  &-bubble {
    border: 1px solid transparent;
    box-sizing: border-box;
    padding: 14px 20px;
    font-size: 14px;
    border-radius: 12px;
    background-color: $dark-white;
    width: fit-content;
    color: $white;
    margin-bottom: 20px;
    margin-right: 20px;

    &-container {
      display: flex;
      flex-wrap: wrap;
    }

    &-title {
      font-size: 13px;
      color: $white;
      opacity: 0.7;
      margin-bottom: 10px;
    }
  }

  &-select {
    margin-top: 20px;
    width: 100%;
  }
}

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
