<template>
  <form class="contact-form" action="">
    <FormHeader :availabilityDate="availabilityDate" :present-date="presentDate" />
    <FormContent />
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
        presentDate: new Date()
      }
    },

    created() {
      this.updatePresentDate()
    },

    methods: {
      updatePresentDate() {
        this.presentDate = new Date()
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