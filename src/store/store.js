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
    isFavorite: (state) => (beerId) => {
      return state.favoriteBeers.findIndex((beer) => beer.id === beerId) !== -1;
    },
  },

  mutations: {
    addLoadedBeers: (state, newBeers) => {
      state.loadedBeers.push(...newBeers);
    },

    toggleFavorite: (state, clickedBeer) => {
      const isFavorite = state.favoriteBeers.findIndex((beer) => beer.id === clickedBeer.id) !== -1;
      if (isFavorite) {
        state.favoriteBeers = state.favoriteBeers.filter((beer) => beer.id !== clickedBeer.id);
      } else {
        state.favoriteBeers.push(clickedBeer);
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
        const newBeers = res.data;
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
      commit('updateSearchResults', []);
      axios
        .get('https://api.punkapi.com/v2/beers?beer_name=' + query.replace(' ', '_'))
        .then((res) => {
          const beersFound = res.data;
          commit('updateSearchResults', beersFound);
        });
    },
  },
});
