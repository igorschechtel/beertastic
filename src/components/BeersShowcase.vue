<template>
  <div>
    <div class="d-flex flex-wrap justify-center" color="#f6f4e6">
      <v-card v-for="beer of beers" :key="beer.id" width="300px" class="ma-3" elevation="6">
        <v-icon
          :color="isFavorite(beer) ? '#fddb3a' : '#41444b'"
          style="position: absolute; top: 5px; right: 5px;"
          class="star-icon"
          @click="toggleFavorite(beer)"
        >{{ isFavorite(beer) ? 'mdi-star' : 'mdi-star-outline' }}</v-icon>

        <v-img :src="beer.image_url" height="200px" contain class="my-3"></v-img>

        <v-card-title class="dosis" style="font-weight: 600">{{ beer.name }}</v-card-title>

        <v-card-subtitle class="my-1">{{ beer.tagline }}</v-card-subtitle>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "BeersShowcase",

  data: () => ({
    hasMoreToLoad: true,
  }),

  props: {
    beers: Array,
    loadMoreOnPageEnd: Boolean,
  },

  methods: {
    ...mapActions(["loadMoreBeers", "toggleFavorite"]),

    isFavorite(beer) {
      return this.$store.getters.isFavorite(beer.id);
    },

    scroll() {
      if (this.loadMoreOnPageEnd) {
        window.onscroll = () => {
          let bottomOfWindow =
            document.documentElement.scrollTop + window.innerHeight ===
            document.documentElement.offsetHeight;

          if (bottomOfWindow) {
            this.loadMoreBeers();
          }
        };
      }
    },
  },

  mounted() {
    this.scroll();
  },
};
</script>

<style scoped>
.star-icon {
  z-index: 1;
}
.star-icon:hover {
  cursor: pointer;
}
</style>
