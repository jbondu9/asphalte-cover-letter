<template>
  <section class="title" :class="{'description': description}">
    <h2>
      <slot></slot>
    </h2>
  </section>
</template>

<script>
  export default {
    props: [
      "description"
    ]
  }
</script>

<style scoped>
  .title {
    margin: 22px 10px 0;
  }

  .title > h2 {
    margin: 0;
    padding: 24px 0 14px;
    font-family: "Qanelas-Bold", sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.4;
    text-align: center;
  }

  .title.description > h2 {
    padding: 0;
    font-size: 20px;
  }

  @media only screen and (min-width: 768px) {
    .title {
      margin: 30px 12.5px 0;
    }

    .title > h2 {
      font-size: 37px;
    }

    .title.description > h2 {
      font-size: 30px;
    }
  }

  @media only screen and (min-width: 1125px) {
    .title {
      max-width: 1100px;
      margin: 40px auto 0;
    }

    .title.description > h2 {
      font-size: 37px;
    }
  }
</style>