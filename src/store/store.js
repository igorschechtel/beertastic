import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    searchField: '',
    loadedBeers: [],
    favoriteBeers: [],
    searchResults: [],
  },

  getters: {
    loadedBeers: (state) => state.loadedBeers,
    favoriteBeers: (state) => state.favoriteBeers,
    currentPage: (state) => Math.ceil(state.loadedBeers.length / 25),
    searchField: (state) => state.searchField,
    searchResults: (state) => state.searchResults,
  },

  mutations: {
    addLoadedBeers: (state, newBeers) => {
      state.loadedBeers.push(...newBeers);
    },

    toggleFavorite: (state, id) => {
      let beer = state.loadedBeers.find((beer) => beer.id === id);
      if (beer === undefined) {
        beer = state.searchResults.find((beer) => beer.id === id);
      }
      const wasFavorite = beer.isFavorite;
      beer.isFavorite = !wasFavorite;
      if (!wasFavorite) {
        state.favoriteBeers.push({ ...beer });
      } else {
        state.favoriteBeers = state.favoriteBeers.filter((beer) => beer.id !== id);
      }
    },

    updateSearchField: (state, text) => {
      state.searchField = text;
    },

    updateSearchResults: (state, beers) => {
      state.searchResults = beers;
    },
  },

  actions: {
    loadMoreBeers: (context) => {
      const page = context.getters.currentPage + 1;
      axios.get('https://api.punkapi.com/v2/beers?page=' + page).then((res) => {
        const newBeers = res.data.map((beer) => ({ ...beer, isFavorite: false }));
        context.commit('addLoadedBeers', newBeers);
      });
    },

    toggleFavorite: ({ commit }, id) => {
      commit('toggleFavorite', id);
    },

    updateSearchField: ({ commit }, text) => {
      commit('updateSearchField', text);
    },

    doSearch: ({ commit }, query) => {
      axios
        .get('https://api.punkapi.com/v2/beers?beer_name=' + query.replace(' ', '_'))
        .then((res) => {
          const beersFound = res.data.map((beer) => ({ ...beer, isFavorite: false }));
          commit('updateSearchResults', beersFound);
        });
    },
  },
});
