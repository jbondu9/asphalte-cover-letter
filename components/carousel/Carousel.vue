<template>
  <div class="carousel">
    <slot></slot>
    <div class="carousel-nav carousel-next" role="button" title="suivant" @click="next"></div>
    <div class="carousel-nav carousel-prev" role="button" title="précédent" @click="prev"></div>
    <div v-if="pagination" class="carousel-pagination">
      <button class="carousel-button" v-for="n in slidesCount" :key="n" @click="goto(n-1)" :class="{active: n - 1 === index }"></button>
    </div>
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

    props: [
      "pagination"
    ],

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
      },

      goto(index) {
        this.direction = index > this.index ? "right" : "left"
        this.index = index
      }
    }
  }
</script>

<style scoped>
  .carousel {
    position: relative;
    overflow: hidden;
  }

  .carousel-nav {
    position: absolute;
    top: 50%;
    left: 10px;
    width: 26px;
    height: 26px;
    background-image: url("~assets/icons/left-arrow.svg");
    transform: translateY(-50%);
    opacity: .4;
    transition: opacity .25s;
    cursor: pointer;
  }

  .carousel-nav:hover {
    opacity: .8;
  }

  .carousel-nav.carousel-next {
    right: 10px;
    left: auto;
    background-image: url("~assets/icons/right-arrow.svg");
  }

  .carousel-pagination {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    text-align: center;
  }

  .carousel-pagination > button {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin: 6px;
    padding: 0;
    background-color: #fff;
    border: none;
    border-radius: 100px;
    opacity: .4;
    cursor: pointer;
    transition: opacity .25s;
  }

  .carousel-pagination > button.active {
    opacity: .8;
  }

</style>