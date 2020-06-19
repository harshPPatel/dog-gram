import { BreedsResponse } from '@/enums/api.response';

export default class API {
  static API_URL = 'https://dog.ceo/api';

  // TODO - refactor this for better ts types, throw error in promise if res is not 200
  static FetchAllBreeds(): Promise<BreedsResponse> {
    const url = `${this.API_URL}/breeds/list/all`;
    localStorage.loadingBreeds = true;
    return fetch(url)
      .then((res) => res.json());
  }
}
