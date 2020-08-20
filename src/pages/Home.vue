<template>
  <v-container>
    <v-row>
      <v-col>
        <Searchbar />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <BeersShowcase :beers="loadedBeers" :loadMoreOnPageEnd="true" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BeersShowcase from "../components/BeersShowcase";
import Searchbar from "../components/Searchbar";
import { mapGetters } from "vuex";

export default {
  name: "Home",

  components: { BeersShowcase, Searchbar },

  data: () => ({}),

  computed: mapGetters(["loadedBeers"]),

  beforeMount() {
    this.$store.dispatch("updateSearchField", "");
  },
};
</script>
