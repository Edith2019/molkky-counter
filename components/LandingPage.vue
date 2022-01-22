<template>
  <section class="container">
    <div class="container__text">
      <h1>Welcome to dildo molkky counter!</h1>
      <p>
        Enter a maximum of four teams and keep track of the points along the way
      </p>
    </div>
    <div v-for="(input, index) in inputs" :key="index">
      <b-field label="Team Name">
        <b-input></b-input>
      </b-field>
    </div>
    <b-button type="is-primary" outlined @click="addInput()"
      >Add a team</b-button
    >
    <div v-if="inputs.length >= 4">Max team bitches</div>
  </section>
</template>

<script>
import { reactive, toRefs, computed } from "@nuxtjs/composition-api";

export default {
  name: "LandingPage",
  setup() {
    // debugger;
    console.log("gnegnegnge");
    const state = reactive({
      teamNames: [],
      inputs: [
        {
          value: "",
        },
      ],
    });

    const addInput = (key) => {
      // return state.inputs.push({
      //   value: "",
      // });
      if (state.inputs.length > 3) return "create another game";
      console.log("key", key);
      return state.inputs.push({ value: "" });
    };
    return {
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
}
</style>
