<template>
  <section class="presentation-section" id="top">
    <PresentationCarousel :media="media" />
    <div class="presentation-form">
      <ContactForm @changeCarousel="changeCarousel" />
    </div>
  </section>
</template>

<script>
  import PresentationCarousel from "~/components/carousel/PresentationCarousel"
  import ContactForm from "~/components/form/ContactForm"

  export default {
    components: { PresentationCarousel, ContactForm },

    data() {
      return {
        media: "Mail"
      }
    },

    methods: {
      changeCarousel(media) {
        this.media = media
      }
    }
  }
</script>

<style scoped>
  .presentation-section {
    position: relative;
    border-top: 1px solid rgba(0,0,0,0.2);
  }

  .presentation-form {
    background-color: #fff;
  }

  @media only screen and (min-width: 1000px) {
    .presentation-form {
      position: absolute;
      top: 50%;
      right: 95px;
      width: 340px;
      transform: translateY(-50%);
      box-shadow: inset 0 0 1px 1px rgba(190, 190, 190, .3);
    }
  }
</style>