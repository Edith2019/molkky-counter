<template>
  <div>
    <Header />
    <LandingPage />
  </div>
</template>

<script>
import Layout from "~/layouts/default";
import Header from "~/components/Header";
import LandingPage from "~/components/LandingPage";

export default {
  name: "IndexPage",
  components: {
    Layout,
    Header,
    LandingPage,
  },
};
</script>
