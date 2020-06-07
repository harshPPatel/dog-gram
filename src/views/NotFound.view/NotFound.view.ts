import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class NotFoundView extends Vue {
  goBack(): void {
    this.$router.back();
  }
}
