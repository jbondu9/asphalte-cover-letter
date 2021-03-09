<template>
  <section class="reflexion-section">
    <div class="reflexion-box">
      <div class="reflexion-img">
        <!-- <img :src="require({{  }})"> -->
        <img src="https://picsum.photos/id/684/355/427">
      </div>
      <div class="reflexion-content">
        <Box>
          <BoxTitle>All-in</BoxTitle>
          <BoxContent>
            Pour commencer cette bonne candidature, j’ai voulu frapper fort d’entrée. Programmation sous Nuxt d’un web design que vous reconnaîtrez et phrasé qui je l’espère sera adapté, j’ai mis le paquet pour vous charmer.
          </BoxContent>
        </Box>
      </div>
    </div>
    <div class="reflexion-box">
      <div class="reflexion-img">
        <!-- <img :src="require({{  }})"> -->
        <img src="https://picsum.photos/id/81/355/427">
      </div>
      <div class="reflexion-content">
        <Box>
          <BoxTitle>De bon profil</BoxTitle>
          <BoxContent>
            Moins de six pieds de haut et doté d'une teinture vénitienne 100% naturelle, je suis Jimmy, ingénieur en Télécommunications diplômé de l'ENSEIRB-MATMECA depuis novembre 2019.
          </BoxContent>
        </Box>
      </div>
    </div>
  </section>
</template>

<script>
  import Box from "~/components/box/Box"
  import BoxTitle from "~/components/box/BoxTitle"
  import BoxContent from "~/components/box/BoxContent"

  export default {
    components: { Box, BoxTitle, BoxContent }
  }
</script>

<style scoped>
  .reflexion-section {
    margin: 22px 10px 0;
  }

  .reflexion-box:last-of-type {
    margin-top: 10px;
  }

  .reflexion-img {
    max-width: 530px;
    max-height: 570px;
    margin: 0 auto;
    overflow: hidden;
  }

  .reflexion-img > img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }

  .reflexion-content {
    max-width: 530px;
    margin: 0 auto;
  }

  @media only screen and (min-width: 768px) {
    .reflexion-section {
      margin: 30px 12.5px 0;
    }
  }

  @media only screen and (min-width: 1125px) {
    .reflexion-section {
      max-width: 1100px;
      margin: 40px auto 0;
    }

    .reflexion-box {
      display: flex;
      flex-flow: row-reverse;
      position: relative;
    }

    .reflexion-box:last-of-type {
      flex-flow: row;
      margin-top: 0;
    }

    .reflexion-img {
      width: 530px;
      margin: 0;
    }

    .reflexion-box:first-of-type > .reflexion-img {
      min-height: 615px;
    }

    .reflexion-box:last-of-type > .reflexion-img {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 570px;
    }

    .reflexion-content {
      margin: 0;
    }

    .reflexion-box:first-of-type > .reflexion-content {
      position: absolute;
      left: 0;
      top: 40px;
      min-width: 610px;
      min-height: 250px;
    }

    .reflexion-box:last-of-type > .reflexion-content {
      width: 530px;
      height: 320px;
      margin-left: auto;
    }
  }
</style>