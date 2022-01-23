<template>
  <div class="layout">
    <!-- <Header /> -->
    <!-- <div class="layout__content">
      <LandingPage />
    </div> -->
    <Nuxt />
  </div>
</template>

<script>
// import Header from "~/components/Header";
// import LandingPage from "~/components/LandingPage";

export default {
  name: "layout",
  // components: { Header },
};
</script>

<style lang="scss">
.layout {
  height: auto;
  // &__content {
  padding: 30px;
  // }
}
</style>
