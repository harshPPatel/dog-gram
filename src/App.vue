<template>
  <div id="app">
    <p class="bg-text">
      bow <br> wow.
    </p>
    <div class="router-container">
      <navbar-ui-component />
      <router-view />
    </div>
  </div>
</template>

<script>
import NavbarUiComponent from '@/components/ui/navbar.ui.component/index.vue';

export default {
  name: 'app',
  components: {
    NavbarUiComponent,
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
  .bg-text {
    font-size: 350px;
    color: rgba(#000, 0.05);
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
