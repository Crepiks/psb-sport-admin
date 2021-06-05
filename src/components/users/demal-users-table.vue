<template>
  <div class="table-wrapper">
    <table class="table">
      <tr>
        <th class="table-head" v-for="(head, index) in heads" :key="index">
          {{ head }}
        </th>
      </tr>
      <tr
        v-for="item in items"
        :key="item.id"
        class="table-row"
        @click="$emit('click', item.id)"
      >
        <td class="table-data">{{ item.firstName }}</td>
        <td class="table-data">{{ item.lastName }}</td>
        <td class="table-data">{{ item.email }}</td>
        <td class="table-data">{{ item.subscription }}</td>
        <td class="table-data">{{ item.createdAt }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    heads: {
      type: Array,
    },
    items: {
      type: Array,
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=PT+Sans+Caption&display=swap");

.table {
  width: 100%;
  font-family: "PT Sans Caption", sans-serif !important;

  &-wrapper {
    width: 100%;
    max-height: 70vh;
    overflow: scroll;
  }

  &-head {
    opacity: 0.6;
    padding: 15px 15px;
    box-sizing: border-box;
  }

  &-row {
    border-bottom: 1px solid #ffffff30;
    cursor: pointer;
    transition: 200ms ease-in-out;
  }

  &-row:hover {
    background-color: #ffffff30;
  }

  &-data {
    padding: 20px 15px;
    box-sizing: border-box;
    opacity: 0.9;
  }
}
</style>
