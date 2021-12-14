<template>
  <b-navbar class="header">
    <template #brand>
      <img
        class="header__logo"
        src="../assets/vibrator-sex-pngrepo-com.png"
        alt="Play Button"
        v-animate-css="'tada'"
      />
    </template>
    <template #start>
      <b-navbar-item href="#"> Home </b-navbar-item>
      <b-navbar-item href="#"> Documentation </b-navbar-item>
      <b-navbar-dropdown label="Info">
        <b-navbar-item href="#"> About </b-navbar-item>
        <b-navbar-item href="#"> Contact </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light"> Log in </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import Vue from "vue";
import VAnimateCss from "v-animate-css";

Vue.use(VAnimateCss);

export default {
  name: "Header",
  // setup() {
  //   Vue.use(VAnimateCss.default);
  // },
};
</script>

<style lang="scss" scoped>
.header {
  //   background: blue;
  &__logo {
    margin: 10px;
    width: 70px;
    height: 70px;
    background-image: url("../assets/Yd66eUm-pink-clipart.png");
  }
}
</style>
