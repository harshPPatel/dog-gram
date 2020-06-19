import { MutationTree } from 'vuex';

import Breeds from '@/enums/Breeds';
import { BreedsState } from './Breeds.enums';

const mutations: MutationTree<BreedsState> = {
  setBreeds(state, payload: Breeds) {
    state.breeds = payload;
  },
  setError(state, error: string) {
    state.error = error;
  },
};

export default mutations;
