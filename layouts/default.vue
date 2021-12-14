<template>
  <div class="layout">
    <Header />
  </div>
</template>

<script>
import Header from "~/components/Header";
export default {
  name: "layout",
  components: { Header },
};
</script>

<style lang="scss">
.layout {
  height: auto;
}
</style>
