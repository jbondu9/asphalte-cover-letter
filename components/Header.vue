<template>
  <header class="header">

    <div class="drawer-toggle" role="button" @click="$store.dispatch('nav/toggleDrawer')">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>

    <div class="brand-logo">
      <nuxt-link to="/">
        Jimmy
      </nuxt-link>
    </div>

    <div class="trolley"></div>

    <div class="site-links">
      <SiteLinks />
    </div>
    
  </header>
</template>

<script>
  import SiteLinks from "~/components/SiteLinks"

  export default {
    components: { SiteLinks }
  }
</script>

<style scoped>
  .header {
    display: grid;
    grid-template: 67px / auto 1fr auto;
    align-items: center;
    background-color: #fff;
  }

  .site-links {
    justify-self: start;
  }

  .drawer-toggle {
    justify-self: start;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 40px;
    height: 30%;
    margin-left: 15px;
    cursor: pointer;
  }

  .drawer-toggle > .bar {
    width: 65%;
    height: 3px;
    background-color: #000;
    border-radius: 25px;
  }

  .site-links {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    .header {
      max-width: 1150px;
      margin: 0 auto;
    }

    .drawer-toggle {
      display: none;
    }
    
    .site-links {
      display: block;
    }
  }
</style>