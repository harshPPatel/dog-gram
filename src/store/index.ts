import Vue from 'vue';
import Vuex from 'vuex';

import Breeds from './Breeds/Breeds.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Breeds,
  },
});
