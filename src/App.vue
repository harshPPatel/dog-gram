<template>
  <div id="app">
    <p class="bg-text">
      bow <br> wow!
    </p>
    <div class="router-container">
      <navbar-ui-component />
      <router-view />
    </div>
    <footer-ui-component />
  </div>
</template>

<script>
import NavbarUiComponent from '@/components/ui/navbar.ui.component/index.vue';
import FooterUiComponent from '@/components/ui/footer.ui.component/index.vue';

export default {
  name: 'app',
  components: {
    NavbarUiComponent,
    FooterUiComponent,
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Anonymous Pro', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1280px;
  width: 95%;
  margin: 0 auto;
  padding: 36px 0;
  .bg-text {
    font-size: 350px;
    color: rgba(#000, 0.03);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    pointer-events: none;
  }
  .router-container {
    position: relative;
    z-index: 1;
  }
}
</style>
