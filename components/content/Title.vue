<template>
  <section class="title">
    <h2>{{ title }}</h2>
  </section>
</template>

<script>
  export default {
    props: [
      "title"
    ]
  }
</script>

<style scoped>
  .title {
    margin: 30px 10px 0;
  }

  .title > h2 {
    padding: 24px 0 14px;
    font-family: "Qanelas-Bold", sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.4;
    text-align: center;
  }

  @media only screen and (min-width: 768px) {
    .title {
      margin-left: 12.5px;
      margin-right: 12.5px;
    }

    .title > h2 {
      font-size: 37px;
    }
  }

  @media only screen and (min-width: 1125px) {
    .title {
      max-width: 1100px;
      margin: 40px auto 0;
    }
  }
</style>