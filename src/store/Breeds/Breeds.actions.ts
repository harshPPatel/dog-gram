import { ActionTree } from 'vuex';

import API from '@/lib/API';
import { BreedsState } from './Breeds.enums';

const actions: ActionTree<BreedsState, null> = {
  fetchBreeds(context) {
    if (localStorage.breeds && JSON.parse(localStorage.breeds)) {
      context.commit('setBreeds', JSON.parse(localStorage.breeds));
    } else {
      API.FetchAllBreeds()
        .then((data) => {
          localStorage.breeds = JSON.stringify(data.message);
          context.commit('setBreeds', data.message);
          console.log(data);
        })
        .catch((err: string) => {
          context.commit('setError', err);
        });
    }
  },
};

export default actions;
