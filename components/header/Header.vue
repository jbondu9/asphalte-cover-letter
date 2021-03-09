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

    <div class="github">
      <a href="https://github.com/jbondu9/asphalte-cover-letter" target="_blank" rel="noreferrer"></a>
    </div>

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
    border-bottom: 1px solid rgba(0,0,0,0.2);
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

  .github {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 50%;
    margin-right: 15px;
    background: center / contain no-repeat url("~assets/icons/github.svg");
    cursor: pointer;
    order: 3;
  }

  .github > a {
    display: block;
    width: 100%;
    height: 100%;
  }

  .site-links {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    .header {
      padding-left: calc(50% - 1150px / 2);
      padding-right: calc(50% - 1150px / 2);
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