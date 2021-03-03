<template>
  <form class="contact-form" @submit="adaptAction" :action="action" :target="target">
    <FormHeader :availabilityDate="availabilityDate" :presentDate="presentDate" />
    <FormContent @getFormData="getFormData" :mobile="mobile" />
    <button type="submit" class="form-btn">
      <span>Contacter</span>
    </button>
    <FormFooter :availabilityDate="availabilityDate" :present-date="presentDate" />
  </form>
</template>

<script>
  import FormHeader from "~/components/form/FormHeader"
  import FormContent from "~/components/form/FormContent"
  import FormFooter from "~/components/form/FormFooter"

  export default {
    components: { FormHeader, FormContent, FormFooter },

    data() {
      return {
        availabilityDate: new Date(2021, 3, 5),
        presentDate: new Date(),
        media: "Mail",
        mobile: null,
        object: "S",
        action: "/contact",
        target: "_self"
      }
    },

    created() {
      this.updatePresentDate()
    },

    mounted() {
      if (/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        this.mobile = true
      }
      else {
        this.mobile = false
      }
    },

    methods: {
      updatePresentDate() {
        this.presentDate = new Date()
      },

      getFormData(media, object) {
        this.media = media
        this.object = object
        this.$emit('changeCarousel', media)
      },

      adaptAction(e) {
        switch (this.media) {
          case "Mail":
            this.action = "/contact"
            this.target = "_self"
            break
          case "LinkedIn":
            this.action = "https://www.linkedin.com/in/jbondu"
            this.target = "_blank"
            break
          case "Téléphone":
            this.action = "tel:+33767370346"
            this.target = "_self"
            break
          default:
            e.preventDefault()
        }
      }
    }
  }
</script>

<style scoped>
  .contact-form {
    padding: 16px 24px 30px 24px;
  }

  .form-btn {
    width: 100%;
    margin: 12px 0 10px 0;
    padding: 12px 0;
    font-size: 18px;
    font-family: "Qanelas-Bold";
    font-weight: 700;
    color: #fff;
    background-color: #070e15;
    border: none;
    cursor: pointer;
  }
</style>