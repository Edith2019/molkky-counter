<template>
  <div class="container">
    <Header />
    <h1>Teams' order</h1>
    <div v-if="!isOrderTeamVisible">
      <ul v-for="(team, index) in teamNames" :key="index">
        <li>
          {{ index + 1 }} : <strong>{{ team }} </strong>
        </li>
      </ul>
    </div>
    <b-button
      v-if="!isOrderTeamVisible"
      type="is-primary"
      outlined
      expanded
      class="container__buttons"
      @click="orderTeams()"
      >Change team order</b-button
    >
    <div v-if="isOrderTeamVisible">
      <div v-for="(team, index) in teamNames" :key="index">
        <b-field :label="(index + 1).toString()">
          <b-select placeholder="Select a name" v-model="newOrderTeam[index]">
            <option
              v-for="(option, index) in teamNames"
              :value="option"
              :key="index"
            >
              {{ option }}
            </option>
          </b-select>
        </b-field>
      </div>
    </div>
    <b-button class="container__buttons" expanded type="is-primary"
      >Start Game</b-button
    >

    <template>
      <div class="container__molkky">
        <img
          v-for="index in 12"
          :key="index"
          :class="`container__logo__${index}`"
          src="../assets/vibrator-sex-pngrepo-com.png"
          alt="Play Button"
          v-animate-css="'tada'"
        />
      </div>
    </template>
  </div>
</template>

<script>
import Header from "~/components/Header";
import { reactive, toRefs, onMounted } from "@nuxtjs/composition-api";

export default {
  name: "TeamReview",
  components: {
    Header,
  },
  setup() {
    const state = reactive({
      teamNames: [],
      orderTeams: [],
      newOrderTeam: [],
      isOrderTeamVisible: false,
    });
    const dildoAmount = {};
    const orderTeams = () =>
      (state.isOrderTeamVisible = !state.isOrderTeamVisible);

    onMounted(
      () => (state.teamNames = localStorage.getItem("teams").split(","))
    );

    return {
      ...toRefs(state),
      orderTeams,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  h1 {
    font-size: 25px;
    text-align: center;
    padding-bottom: 10px;
  }
  li {
    padding-bottom: 5px;
    font-size: 20px;
  }
  &__buttons {
    margin: 10px 0;
  }

  img {
    width: 70px;
    height: 70px;
    background-image: url("../assets/Yd66eUm-pink-clipart.png");
    transform: rotate(-45deg);
  }

  &__logo__1 {
    grid-area: logo__1;
  }
  &__logo__2 {
    grid-area: logo__2;
  }
  &__logo__3 {
    grid-area: logo__3;
  }
  &__logo__4 {
    grid-area: logo__4;
  }
  &__logo__5 {
    grid-area: logo__5;
  }
  &__logo__6 {
    grid-area: logo__6;
  }
  &__logo__7 {
    grid-area: logo__7;
  }
  &__logo__8 {
    grid-area: logo__8;
  }
  &__logo__9 {
    grid-area: logo__9;
  }
  &__logo__10 {
    grid-area: logo__10;
  }
  &__logo__11 {
    grid-area: logo__11;
  }
  &__logo__12 {
    grid-area: logo__12;
  }
  &__molkky {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(7, 2fr);
    grid-template-rows: auto;
    grid-template-areas:
      " .  logo__1 . logo__2  .logo__3 . "
      "logo__4 . logo__5 . logo__6 . logo__7 "
      " .logo__8 . logo__9 . logo__10 ."
      ". . logo__11 . logo__12 . .";
  }
}
</style>
