<template>
  <div>
    <v-app-bar color="#41444b" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <router-link to="/" style="color: inherit; text-decoration: none">
        <v-toolbar-title style="font-weight: 500; font-size: 1.5rem;" class="dosis">
          <v-icon class="mr-2" style="font-size: 1.8rem; transform: translateY(-4px)">
            mdi-glass-mug-variant
          </v-icon>
          Beertastic
        </v-toolbar-title>
      </router-link>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary overlay-color="#52575d">
      <v-list nav>
        <v-list-item-group>
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/favorites">
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Favorites</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'Navbar',

  data: () => ({
    drawer: false,
  }),
};
</script>

<style></style>
