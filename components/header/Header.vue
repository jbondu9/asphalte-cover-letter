<template>
  <header class="header">

    <div class="drawer-toggle" role="button" @click="$store.dispatch('nav/toggleDrawer')">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>

    <div class="brand-logo">
      <nuxt-link to="/">
        <Logo />
      </nuxt-link>
    </div>

    <div class="star"></div>

    <div class="site-links">
      <SiteLinks />
    </div>
    
  </header>
</template>

<script>
  import SiteLinks from "~/components/header/SiteLinks"
  import Logo from "~/components/header/Logo"

  export default {
    components: { SiteLinks, Logo }
  }
</script>

<style scoped>
  .header {
    display: grid;
    grid-template: 67px / auto 1fr auto;
    justify-items: center;
    align-items: center;
    background-color: #fff;
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

  .star {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40%;
    margin-right: 15px;
    background: center / contain no-repeat url("~assets/img/star-empty.svg");
    cursor: pointer;
    order: 3;
  }

  .star.active {
    background: center / contain no-repeat url("~assets/img/star-fill.svg");
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
    
    .brand-logo {
      order: 1;
    }

    .site-links {
      display: block;
      order: 2;
    }
  }
</style>