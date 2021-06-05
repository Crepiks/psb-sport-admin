<template>
  <div class="event" @click="$emit('click', event.id)">
    <div class="event-image">
      <img
        class="event-image-inner"
        :src="event.images.length ? null : null"
        alt=""
      />
    </div>
    <div class="event-info">
      <div class="event-container">
        <div class="event-tag">Тур на один день</div>
        <i class="far fa-edit event-edit"></i>
      </div>
      <div class="event-name">{{ event.title }}</div>
      <div class="event-date">Начало: {{ event.start }}</div>
      <div class="event-container">
        <div class="event-rating">
          <i class="fas fa-star event-rating-star"></i> 4.8
        </div>
        <div class="event-people">{{ event.participants.length }} человек</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.event {
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
