<template>
  <div class="event">
    <div class="event-title">Добавление события</div>
    <div class="event-info">
      <div class="event-tags">
        <div
          class="event-tag"
          v-for="(sport, index) in sports"
          :key="index"
          @click="sportClicked(sport.id)"
          :class="{ 'event-tag-highlight': sport.active }"
        >
          {{ sport.title }}
        </div>
        <div class="event-tag">+</div>
      </div>
      <psbAppInput
        class="event-input"
        v-model="event.title"
        title="Название"
        placeholder="Введите название"
      />
      <psbAppTextarea
        class="event-input"
        v-model="event.description"
        title="Описание"
        placeholder="Введите описание"
      />
      <div class="event-container">
        <psbAppInput
          class="event-input event-container-inner"
          v-model="event.date"
          title="Начало"
          placeholder="Введите дату начала"
        />
      </div>
      <div class="event-container">
        <psbAppInput
          class="event-input event-container-inner"
          v-model="event.lon"
          title="Долгота"
          placeholder="Введите долготу"
        />
        <psbAppInput
          class="event-input event-container-inner"
          v-model="event.lat"
          title="Широта"
          placeholder="Введите широту"
        />
      </div>
      <div class="event-map-toggle" @click="$emit('toggle-map')">
        Указать на карте
      </div>
    </div>
    <psbAppButton @click="handleClick" :isLoading="isLoading"
      >Добавить</psbAppButton
    >
  </div>
</template>

<script>
import psbAppInput from "@/components/common/psb-app-input";
import psbAppTextarea from "@/components/common/psb-app-textarea";
import psbAppButton from "@/components/common/psb-app-button";

// import { addEvent } from "@/requests/events.js";

export default {
  components: {
    psbAppInput,
    psbAppTextarea,
    psbAppButton,
  },
  data() {
    return {
      event: {
        title: "",
        description: "",
        date: "",
        lon: "",
        lat: "",
        sports: [
          {
            title: "Футбол большой",
          },
        ],
      },
      isLoading: false,
      selected: undefined,
      sports: [
        {
          id: "0",
          title: "Футбол большой",
          active: false,
        },
        {
          id: "1",
          title: "Баскетбол",
          active: false,
        },
        {
          id: "2",
          title: "Футбол мини",
          active: false,
        },
        {
          id: "3",
          title: "Волейбол",
          active: false,
        },
        {
          id: "4",
          title: "Триатлон",
          active: false,
        },
        {
          id: "5",
          title: "Хоккей",
          active: false,
        },
        {
          id: "6",
          title: "Бег",
          active: false,
        },
        {
          id: "7",
          title: "Гонки с препятствиями",
          active: false,
        },
        {
          id: "8",
          title: "Настольный теннис",
          active: false,
        },
        {
          id: "9",
          title: "Стретчинг",
          active: false,
        },
      ],
      newSports: [],
    };
  },
  methods: {
    handleClick() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.$emit("close-event-add");
      }, 1000);
      // addEvent(this.event)
      //   .then(() => {
      //     this.isLoading = false;
      //     this.$emit("close-event-add");
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     this.isLoading = false;
      //   });
    },
    sportClicked(sportId) {
      console.log(this.sports[sportId].active);
      if (this.sports[sportId].active == true) {
        this.sports[sportId].active = false;
      } else {
        this.sports[sportId].active = true;
      }
    },
    mounted() {},
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=PT+Sans+Caption&display=swap");

.event {
  max-height: 100%;
  overflow: auto;

  &-title {
    font-family: "PT Sans Caption", sans-serif !important;
    font-size: 28px;
    margin-bottom: 30px;
  }

  &-upload {
    margin-top: 30px;
  }

  &-info {
    margin-top: 30px;
  }

  &-input {
    margin-bottom: 20px;
  }

  &-input {
    &-title {
      font-size: 13px;
      color: $white;
      opacity: 0.8;
      margin-bottom: 10px;
    }
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

    &-add {
      font-size: 20px;
    }

    &-highlight {
      background-color: #b2b2b2;
      color: $black;
    }
  }

  &-tag:hover {
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
}
</style>

<style lang="scss">
@import "@/assets/styles/variables.scss";

.ant-upload {
  background-color: transparent !important;
}

.ant-upload-text {
  color: $white !important;
}

.ant-upload-hint {
  color: $white !important;
  opacity: 0.7;
}

.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}

.ant-tooltip .ant-tooltip-placement-top .ant-tooltip-inner {
  opacity: 0 !important;
  color: transparent !important;
}

.ant-upload-list-item-error {
  border-color: #2f4d6a !important;
}

.ant-modal-content {
  background-color: #1f1f1f !important;
}
</style>
