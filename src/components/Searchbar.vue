<template>
  <div style="max-width: 500px" class="mx-auto">
    <v-row>
      <v-col>
        <v-text-field
          outlined
          rounded
          solo
          clearable
          single-line
          color="#fddb3a"
          placeholder="Search for beers..."
          v-model="searchField"
          @keyup.enter="doSearch"
          @click:clear="clearInput"
        ></v-text-field>
      </v-col>
      <v-col cols="auto" class="px-0">
        <v-btn rounded color="#fddb3a" x-large @click="doSearch">Search</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Searchbar',

  data: () => ({}),

  computed: {
    searchField: {
      get() {
        return this.$store.getters.searchField;
      },
      set(input) {
        this.$store.dispatch('updateSearchField', input);
      },
    },
  },

  methods: {
    doSearch() {
      this.$router.push('/search/' + this.$store.getters.searchField);
    },

    clearInput() {
      this.searchField = '';
      this.$router.push('/');
    },
  },
};
</script>
