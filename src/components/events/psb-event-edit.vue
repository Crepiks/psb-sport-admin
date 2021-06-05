<template>
  <div class="event">
    <div class="event-image">
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
    </div>
    <div class="event-info">
      <psbAppInput class="event-input" v-model="event.title" title="Название" />
      <psbAppTextarea
        class="event-input"
        v-model="event.description"
        title="Описание"
      />
      <div class="event-container">
        <psbAppInput
          class="event-input event-container-inner"
          v-model="event.start"
          title="Начало"
        />
        <psbAppInput
          class="event-input event-container-inner"
          v-model="event.end"
          title="Конец"
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
    <psbAppButton @click="handleClick" :isLoading="isLoading"
      >Сохранить</psbAppButton
    >
  </div>
</template>

<script>
import psbAppInput from "@/components/common/psb-app-input";
import psbAppTextarea from "@/components/common/psb-app-textarea";
import psbAppButton from "@/components/common/psb-app-button";

export default {
  components: {
    psbAppInput,
    psbAppTextarea,
    psbAppButton,
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
    handleClick() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.$emit("event-edited");
      }, 1500);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.event {
  max-height: 100%;
  overflow: auto;

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
}
</style>
