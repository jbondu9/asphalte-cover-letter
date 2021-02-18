<template>
  <div class="drawer" :class="{'active': isDrawer}">

    <div class="drawer-header">
      <div class="cancel">
        <span @click="$store.dispatch('nav/toggleDrawer')"></span>
      </div>
    </div>
    
    <div class="drawer-content">
      <SiteLinks />
    </div>

  </div>
</template>

<script>
  import SiteLinks from "~/components/SiteLinks"

  export default {
    components: { SiteLinks },

    computed: {
      isDrawer() {
        return this.$store.getters["nav/toggleDrawer"]
      }
    } 
  }
</script>

<style scoped>
  .drawer {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 280px;

    color: #fff;
    background-color: #000;

    transform: translateX(-100%);
    transition: transform .4s cubic-bezier(.46, .01, .32, 1);
  }

  .drawer.active {
    transform: translateX(0%);
  }

  .drawer-header {
    width: 100%;
    height: 68px;
    border-bottom: 1px solid rgba(255, 255, 255, .3);
  }

  .cancel {
    width: 100%;
    height: 100%;
  }

  .cancel > span {
    display: block;
    position: relative;
    top: 50%;
    width: 40px;
    height: 30%;
    margin-left: 15px;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .cancel > span::before, .cancel > span::after {
    position: absolute;
    top: 50%;
    content: "";
    width: 65%;
    height: 3px;
    background-color: #fff;
    border-radius: 25px;
  }

  .cancel > span::before {
    transform: translateY(-50%) rotate(45deg);
  }

  .cancel > span::after {
    transform: translateY(-50%) rotate(-45deg);
  }

</style>