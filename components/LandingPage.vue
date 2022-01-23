<template>
  <section class="container">
    <div class="container__text">
      <h1>Welcome to dildo molkky counter!</h1>
      <p>
        Enter a maximum of four teams and keep track of the points along the way
      </p>
    </div>
    <div
      class="container__inputs"
      v-for="(input, index) in inputs"
      :key="index"
    >
      <b-field :label="'Team Name' + ' ' + (index + 1)" :key="index">
        <b-input
          type="is-success"
          :id="index"
          :key="index"
          v-model="teamNames[index]"
        ></b-input>
      </b-field>
    </div>
    <b-button
      v-if="inputs.length < 4"
      type="is-primary"
      outlined
      @click="addInput()"
      >Add a team</b-button
    >

    <div v-if="inputs.length >= 4">Max team bitches</div>

    <b-button
      :disabled="teamNames.length < 2"
      type="is-primary"
      @click="saveTeamNames()"
    >
      <NuxtLink to="/team-review">Next</NuxtLink>
    </b-button>
  </section>
</template>

<script>
import { reactive, toRefs, computed } from "@nuxtjs/composition-api";

export default {
  name: "LandingPage",
  setup() {
    const state = reactive({
      teamNames: [],
      inputs: [{ value: "" }],
    });

    const addInput = () => {
      if (state.inputs.length > 3) return;
      return state.inputs.push({ value: "" });
    };

    const saveTeamNames = () => {
      localStorage.setItem("teams", state.teamNames);
    };

    return {
      saveTeamNames,
      addInput,
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss">
.container {
  &__text {
    padding: 50px 0;
    text-align: center;
    border: 1px;
  }
  &__inputs {
    margin-bottom: 10px;
  }
}
</style>
