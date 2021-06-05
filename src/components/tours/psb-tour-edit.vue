<template>
  <div class="tour">
    <div class="tour-image">
      <img :src="mainImage" class="tour-image-inner" alt="" />
    </div>
    <div class="tour-images">
      <div
        class="tour-images-single"
        v-for="image in tour.images"
        :key="image.id"
        @mouseover="changeImage(image)"
        @mouseout="mouseOut(image)"
      >
        <img :src="image.path" class="tour-images-single-inner" alt="" />
        <div
          class="tour-images-single-cover"
          :class="{ 'tour-images-single-cover-active': image.cover }"
        >
          <i class="far fa-trash-alt tour-images-single-cover-icon"></i>
        </div>
      </div>
    </div>
    <div class="tour-info">
      <div class="tour-tags">
        <div
          class="tour-tag"
          :class="{ 'tour-tag-active': tour.tag == 'На этой неделе' }"
        >
          На этой неделе
        </div>
        <div class="tour-tag" :class="{ 'tour-tag-active': tour.tag == null }">
          Тур на один день
        </div>
        <div
          class="tour-tag"
          :class="{ 'tour-tag-active': tour.tag == 'Экстремальный тур' }"
        >
          Экстремальный тур
        </div>
        <div
          class="tour-tag"
          :class="{ 'tour-tag-active': tour.tag == 'Без спец оборудования' }"
        >
          Без спец оборудования
        </div>
      </div>
      <psbAppInput class="tour-input" v-model="tour.title" title="Название" />
      <psbAppTextarea
        class="tour-input"
        v-model="tour.description"
        title="Описание"
      />
      <div class="tour-container">
        <psbAppInput
          class="tour-input tour-container-inner"
          v-model="tour.start"
          title="Начало"
        />
        <psbAppInput
          class="tour-input tour-container-inner"
          v-model="tour.end"
          title="Конец"
        />
      </div>
      <div class="tour-container">
        <psbAppInput
          class="tour-input tour-container-inner"
          v-model="tour.lon"
          title="Долгота"
        />
        <psbAppInput
          class="tour-input tour-container-inner"
          v-model="tour.lat"
          title="Широта"
        />
      </div>
      <psbAppInput class="tour-input" v-model="tour.price" title="Цена" />
      <div>
        <div class="tour-bubble-title">Участники</div>
        <div class="tour-bubble-container">
          <div
            class="tour-bubble"
            v-for="participant in tour.participants"
            :key="participant.id"
          >
            {{ participant.firstName }} {{ participant.email }}
          </div>
        </div>
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
    tourId: {
      type: Number,
    },
    tour: {
      type: [Array, Object],
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
        this.$emit("tour-edited");
      }, 1500);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.tour {
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
