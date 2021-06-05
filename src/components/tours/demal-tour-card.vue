<template>
  <div class="tour" @click="$emit('click', tour.id)">
    <div class="tour-image">
      <img class="tour-image-inner" :src="tour.images[0].path" alt="" />
    </div>
    <div class="tour-info">
      <div class="tour-container">
        <div class="tour-tag">Тур на один день</div>
        <i class="far fa-edit tour-edit"></i>
      </div>
      <div class="tour-name">{{ tour.title }}</div>
      <div class="tour-date">Начало: {{ tour.start }}</div>
      <div class="tour-container">
        <div class="tour-rating">
          <i class="fas fa-star tour-rating-star"></i> 4.8
        </div>
        <div class="tour-people">{{ tour.participants.length }} человек</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tour: {
      type: [Array, Object],
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.tour {
  display: flex;
  justify-content: space-between;
  color: $white;
  width: 100%;
  cursor: pointer;

  &-image {
    width: 34%;
    height: 100%;
    display: flex;
    align-items: flex-start;

    &-inner {
      width: 100%;
      border-radius: 12px;
    }
  }

  &-info {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &-container {
    display: flex;
    justify-content: space-between;
  }

  &-tag {
    border: 1px solid $white;
    border-radius: 10px;
    padding: 5px 10px;
    font-size: 15px;
    opacity: 0.8;
  }

  &-edit {
    opacity: 0.8;
    transition: 200ms ease-in-out;
    cursor: pointer;
  }

  &-edit:hover {
    opacity: 0.6;
  }

  &-name {
    font-size: 15px;
  }

  &-date {
    opacity: 0.6;
    font-size: 13px;
  }

  &-rating {
    font-size: 10px;

    &-star {
      color: #ddda26;
    }
  }

  &-people {
    opacity: 0.8;
    font-size: 10px;
  }
}
</style>
