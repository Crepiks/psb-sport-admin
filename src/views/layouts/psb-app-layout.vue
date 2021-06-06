<template>
  <div class="app-page">
    <sidebar />
    <div class="app-page-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import sidebar from "@/components/common/psb-sidebar";
export default {
  components: {
    sidebar,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.app-page {
  background-color: $black;
  max-height: 100vh;
  box-sizing: border-box;
  width: 100%;
  display: flex;

  &-content {
    width: calc(100% - 100px);
    padding: 40px 3%;
    box-sizing: border-box;
  }
}
</style>
