<template>
  <div class="site-container" :class="{'drawer-active': isDrawer}">

    <Drawer />
    
    <div class="site-content" :class="{'drawer-active': isDrawer}">
      <div v-if="isDrawer" class="backdrop" @click="$store.dispatch('nav/toggleDrawer')"></div>
      <Header />
      <Nuxt />
      <Footer />
    </div>

  </div>
</template>

<script>
  export default {

    created() {
      if (process.client) {
        window.addEventListener("resize", this.handleDrawer)
      }
    },

    destroyed() {
      window.removeEventListener("resize", this.handleDrawer)
    },

    methods: {
      handleDrawer(e) {
        e.preventDefault()

        if (this.isDrawer && window.innerWidth >= 768) {
          this.$store.dispatch("nav/toggleDrawer")
        }
      }
    },

    computed: {
      isDrawer() {
        return this.$store.getters["nav/toggleDrawer"]
      }
    },

    watch: {
      "$route": function() {
        if (process.client && this.isDrawer && window.innerWidth < 768) {
          this.$store.dispatch("nav/toggleDrawer")
        }
      }
    }

  }
</script>

<style>
  @font-face {
    font-family: "Qanelas";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("~assets/fonts/Qanelas-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "Qanelas-Bold";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url("~assets/fonts/Qanelas-Bold.ttf") format("truetype");
  }

  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("~assets/fonts/Roboto-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "Roboto-Bold";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url("~assets/fonts/Roboto-Bold.ttf") format("truetype");
  }

  * {
    box-sizing: border-box;  
  }

  html, body {
    margin: 0;
    
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6;

    color: #000;
    background-color: #f3f3f3;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .site-container.drawer-active {
    height: 100vh;
    overflow: hidden;
  }

  .site-content {
    transform: translateX(0);
    transition: transform .4s cubic-bezier(.46, .01, .32, 1);
  }

  .site-content.drawer-active {
    transform: translateX(280px);
  }

  .backdrop {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1000;
  }
</style>