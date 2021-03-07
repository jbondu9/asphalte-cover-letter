<template>
  <Carousel :pagination="false" class="presentation-carousel">
    <div v-if="media === 'Mail'">
      <CarouselSlide v-for="(item, i) in emailItems" :key="i" class="presentation-slide">
        <picture class="slide">
          <source media="(max-width: 640px)" :srcset="require(`~/assets/images/${item.small}`)">
          <source media="(min-width: 641px)" :srcset="require(`~/assets/images/${item.medium}`)">
          <img :src="require(`~/assets/images/${item.medium}`)">
        </picture>
      </CarouselSlide>
    </div>
    <div v-if="media === 'LinkedIn'">
      <CarouselSlide v-for="(item, i) in linkedinItems" :key="i" class="presentation-slide">
        <picture class="slide">
          <source media="(max-width: 640px)" :srcset="require(`~/assets/images/${item.small}`)">
          <source media="(min-width: 641px)" :srcset="require(`~/assets/images/${item.medium}`)">
          <img :src="require(`~/assets/images/${item.medium}`)">
        </picture>
      </CarouselSlide>
    </div>
    <div v-if="media === 'Téléphone'">
      <CarouselSlide v-for="(item, i) in phoneItems" :key="i" class="presentation-slide">
        <picture class="slide">
          <source media="(max-width: 640px)" :srcset="require(`~/assets/images/${item.small}`)">
          <source media="(min-width: 641px)" :srcset="require(`~/assets/images/${item.medium}`)">
          <img :src="require(`~/assets/images/${item.medium}`)">
        </picture>
      </CarouselSlide>
    </div>
  </Carousel>
</template>

<script>
  import Carousel from "~/components/carousel/Carousel"
  import CarouselSlide from "~/components/carousel/CarouselSlide"

  const emailImages = require.context("~/assets/images/", false, /email([a-zA-Z\-0-9]+)\.jpg$/)
  const linkedinImages = require.context("~/assets/images/", false, /linkedin([a-zA-Z\-0-9]+)\.jpg$/)
  const phoneImages = require.context("~/assets/images/", false, /phone([a-zA-Z\-0-9]+)\.jpg$/)

  const emailImagesArray = Array.from(emailImages.keys())
  const linkedinImagesArray = Array.from(linkedinImages.keys())
  const phoneImagesArray = Array.from(phoneImages.keys())

  let emailConstructed = []
  let linkedinConstructed = []
  let phoneConstructed = []

  function constructItems(fileNames, constructed) {
    let indexList = []

    fileNames.forEach(fileName => {
      const fileNameString = fileName.substr(2)
      const fileNameArray = fileNameString.split("-")
      const dim = fileNameArray[1]
      const num = parseInt(fileNameArray[2], 10)
      const index = indexList.indexOf(num)

      if (index === -1) {
        indexList.push(num)
        
        if (dim === "small") {
          constructed.push({
            small: fileNameString
          })
        }
        else {
          constructed.push({
            medium: fileNameString
          })
        }
      }
      else {
        if (dim === "small") {
          constructed[index].small = fileNameString
        }
        else {
          constructed[index].medium = fileNameString
        }
      }
    })

    return constructed;
  }

  const emailRes = constructItems(emailImagesArray, emailConstructed)
  const linkedinRes = constructItems(linkedinImagesArray, linkedinConstructed)
  const phoneRes = constructItems(phoneImagesArray, phoneConstructed)

  export default {
    components: { Carousel, CarouselSlide },

    props: [
      "media"
    ],

    data() {
      return {
        emailItems: emailRes,
        linkedinItems: linkedinRes,
        phoneItems: phoneRes
      }
    }
  }
</script>

<style scoped>
  .presentation-carousel {
    width: 100%;
    max-height: 800px;
  }

  .presentation-slide {
    width: 100%;
    overflow: hidden;
    text-align: center;
  }

  .presentation-slide img {
    width: 100%;
    height: auto;
    vertical-align: middle;
  }
</style>