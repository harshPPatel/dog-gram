import Vue from 'vue';
import Component from 'vue-class-component';
import SideBarComponent from '../../components/side-bar.component/index.vue';
import GalleryComponent from '../../components/gallery.component/index.vue';

@Component({
  components: {
    SideBarComponent,
    GalleryComponent,
  },
})
export default class BreedView extends Vue {

}
