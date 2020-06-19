import { Module } from 'vuex';

import { BreedsState } from './Breeds.enums';
import actions from './Breeds.actions';
import mutations from './Breeds.mutations';

const state: BreedsState = {
  breeds: {},
  error: '',
};

const namespaced = true;

const breeds: Module<BreedsState, null> = {
  namespaced,
  state,
  actions,
  mutations,
};

export default breeds;
