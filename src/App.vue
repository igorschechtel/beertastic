<template>
  <v-app>
    <Navbar />
    <router-view></router-view>
  </v-app>
</template>

<script>
import axios from "axios";
import Navbar from "./components/Navbar";

export default {
  name: "App",

  components: { Navbar },

  data: () => ({}),

  beforeCreate() {
    axios.get("https://api.punkapi.com/v2/beers").then((res) => {
      this.$store.state.loadedBeers = res.data;
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@400;500;600&display=swap");

a {
  color: inherit;
}

#app {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
}

.dosis {
  font-family: "Dosis", sans-serif !important;
}
</style>
