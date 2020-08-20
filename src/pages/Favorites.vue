<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="dosis text-center" id="heading">Favorite Beers</h1>
      </v-col>
    </v-row>
    <BeersShowcase :beers="favoriteBeers" :loadMoreOnPageEnd="false" />
  </v-container>
</template>

<script>
import BeersShowcase from "../components/BeersShowcase";
import { mapGetters } from "vuex";

export default {
  name: "Favorites",

  components: { BeersShowcase },

  computed: mapGetters(["favoriteBeers"]),
};
</script>

<style scoped>
#heading {
  position: relative;
  display: block;
  font-size: 2.75rem;
  margin: 15px 0 25px 0;
}
#heading::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 90%;
  margin: 10px auto;
  width: 120px;
  height: 2px;
  background: #fddb3a;
}
</style>
