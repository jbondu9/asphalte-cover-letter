<template>
  <transition :name="transition">
    <div v-show="visible">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        index: 0
      }
    },

    computed: {
      visible() {
        return this.index === this.$parent.index
      },

      transition() {
        if (this.$parent.direction) {
          return "slide-" + this.$parent.direction
        }
      }
    }
  }
</script>

<style scoped>
  .slide-right-enter-active {
    animation: slideRightIn .4s;
  }

  .slide-right-leave-to {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    animation: slideRightOut .4s;
  }

  @keyframes slideRightIn {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  }

  @keyframes slideRightOut {
    from { transform: translateX(0); }
    to { transform: translateX(-100%); }
  }

  .slide-left-enter-active {
    animation: slideLeftIn .4s;
  }

  .slide-left-leave-to {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    animation: slideLeftOut .4s;
  }

  @keyframes slideLeftIn {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
  }

  @keyframes slideLeftOut {
    from { transform: translateX(0); }
    to { transform: translateX(100%); }
  }
</style>