<template>
  <v-container>
    <v-row>
      <v-col>
        <Searchbar />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <BeersShowcase :beers="searchResults" :canLoadMore="false" :isSearch="true" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BeersShowcase from '../components/BeersShowcase';
import Searchbar from '../components/Searchbar';
import { mapGetters } from 'vuex';

export default {
  name: 'SearchResults',

  components: { BeersShowcase, Searchbar },

  data: () => ({
    query: '',
  }),

  mounted() {
    this.query = this.$route.params.query;
    this.$store.dispatch('doSearch', this.query);
  },

  computed: mapGetters(['searchResults']),

  watch: {
    $route(to) {
      this.query = to.params.query;
      this.$store.dispatch('doSearch', this.query);
    },
  },
};
</script>
