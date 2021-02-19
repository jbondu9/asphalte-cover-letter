<template>
  <div class="carousel">
    <slot></slot>
    <div class="carousel__nav carousel__next" role="button" title="suivant" @click="next"></div>
    <div class="carousel__nav carousel__prev" role="button" title="précédent" @click="prev"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        index: 0,
        slides: [],
        direction: null
      }
    },

    mounted() {
      this.slides = this.$children

      this.slides.forEach((slide, i) => {
        slide.index = i
      });
    },

    computed: {
      slidesCount() {
        return this.slides.length
      }
    },

    methods: {
      next() {
        this.index++
        this.direction = "right"

        if (this.index >= this.slidesCount) {
          this.index = 0
        }
      },

      prev() {
        this.index--
        this.direction = "left"

        if (this.index < 0) {
          this.index = this.slidesCount - 1
        }
      }
    }
  }
</script>

<style scoped>
  .carousel {
    position: relative;
  }

  .carousel__nav {
    position: absolute;
    top: 50%;
    left: 10px;
    width: 26px;
    height: 26px;
    background-image: url("~assets/img/left-arrow.svg");
    transform: translateY(-50%);
  }

  .carousel__nav.carousel__next {
    right: 10px;
    left: auto;
    background-image: url("~assets/img/right-arrow.svg");
  }
</style>