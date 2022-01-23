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
          <b-select placeholder="Select a name">
            <option
              v-for="(option, index) in teamNames"
              :value="option"
              :key="index"
              @input="getSelectedOption(option)"
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

    const orderTeams = () =>
      (state.isOrderTeamVisible = !state.isOrderTeamVisible);

    onMounted(
      () => (state.teamNames = localStorage.getItem("teams").split(","))
    );

    function getSelectedOption(option) {
      console.log("selected option", option);
    }

    return {
      ...toRefs(state),
      orderTeams,
      getSelectedOption,
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
}
</style>
