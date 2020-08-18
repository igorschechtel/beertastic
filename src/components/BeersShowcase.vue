<template>
  <div>
    <div class="d-flex flex-wrap justify-center" color="#f6f4e6">
      <v-card v-for="beer of beers" :key="beer.id" width="300px" class="ma-3" elevation="6">
        <v-icon
          :color="beer.isFavorite ? '#fddb3a' : '#41444b'"
          style="position: absolute; top: 5px; right: 5px;"
          class="star-icon"
          @click="toggleFavorite(beer.id)"
        >
          {{ beer.isFavorite ? 'mdi-star' : 'mdi-star-outline' }}
        </v-icon>

        <v-img :src="beer.image_url" height="200px" contain class="my-3"></v-img>

        <v-card-title class="dosis" style="font-weight: 600">
          {{ beer.name }}
        </v-card-title>

        <v-card-subtitle class="my-1">
          {{ beer.tagline }}
        </v-card-subtitle>
      </v-card>
    </div>
    <v-row v-if="canLoadMore">
      <v-col cols="auto" class="mx-auto my-5">
        <v-btn large color="#fddb3a" rounded :loading="loading" @click="loadMoreBeers()">
          Load more
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'BeersShowcase',

  data: () => ({
    loading: false,
  }),

  props: {
    beers: Array,
    canLoadMore: Boolean,
  },

  methods: {
    ...mapActions(['loadMoreBeers', 'toggleFavorite']),
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
