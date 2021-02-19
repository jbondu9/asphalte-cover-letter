<template>
  <div class="application-container">
    <!-- <h1>Hello Asphalte !</h1> -->
    <Carousel>
      <CarouselSlide>
        <img class="slide-content" src="https://loremflickr.com/640/360" alt="Moi avec une tenue stylée">
      </CarouselSlide>
      <CarouselSlide>
        <img class="slide-content" src="https://www.fillmurray.com/640/360" alt="Et encore moi avec une tenue pépite">
      </CarouselSlide>
    </Carousel>
  </div>
</template>

<script>
  import Carousel from "~/components/carousel/Carousel"
  import CarouselSlide from "~/components/carousel/CarouselSlide"

  export default {
    components: { Carousel, CarouselSlide }
  }
</script>

<style scoped>
  .application-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 1150px;
  }

  .slide-content {
    width: 100%;
  }
</style>