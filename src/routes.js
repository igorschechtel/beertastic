import Home from './pages/Home.vue';
import SearchResults from './pages/SearchResults.vue';
import Favorites from './pages/Favorites.vue';

export const routes = [
  { path: '/', component: Home },
  { path: '/search/:query', component: SearchResults },
  { path: '/favorites', component: Favorites },
];
