import Vue from 'vue';
import Component from 'vue-class-component';
import { mapState } from 'vuex';
import Breeds from '@/enums/Breeds';

@Component({
  computed: mapState('Breeds', ['breeds']),
})
export default class SearchBoxComponent extends Vue {
  public breeds!: Breeds;

  public breedsList: string[] = [];

  public searchTerm = '';

  public searchResults: string[] = [];

  searchBreeds() {
    this.searchResults = [];
    if (!this.breedsList || this.breedsList.length === 0) {
      this.breedsList = Object.keys(this.breeds);
      console.log(Object.keys(this.breeds));
    }
    this.breedsList.forEach((breed) => {
      if (breed.includes(this.searchTerm.toLowerCase()) && this.searchResults.length < 3) {
        this.searchResults.push(breed);
      }
    });
  }

  formatSearchResult(result: string): string {
    const regExp = new RegExp(this.searchTerm.toLowerCase(), 'gi');
    return result.replace(regExp, `<b class="text-primary">${this.searchTerm.toLowerCase()}</b>`);
  }
}
