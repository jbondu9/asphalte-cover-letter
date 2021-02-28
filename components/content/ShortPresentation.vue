<template>
  <section>
    <Carousel>
    </Carousel>
    <ContactForm />
  </section>
</template>

<script>
  import Carousel from "~/components/carousel/Carousel"
  import CarouselSlide from "~/components/carousel/CarouselSlide"
  import ContactForm from "~/components/form/ContactForm"

  export default {
    components: { Carousel, CarouselSlide, ContactForm },
  }
</script>