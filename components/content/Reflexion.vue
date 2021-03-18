<template>
  <section class="reflexion-section">
    <div class="reflexion-box">
      <div class="reflexion-img">
        <img src="~/assets/images/sailor.jpg">
      </div>
      <div class="reflexion-content">
        <Box>
          <BoxTitle>Marin d'eau douce</BoxTitle>
          <BoxContent>
            Salut, moi c'est Jimmy, ingénieur en Télécommunications. Je navigue entre les projets techniques du monde de l'entreprise et ceux plus engageants de l'associatif. 
          </BoxContent>
        </Box>
      </div>
    </div>
    <div class="reflexion-box">
      <div class="reflexion-img">
        <img src="~/assets/images/soccer.jpg">
      </div>
      <div class="reflexion-content">
        <Box>
          <BoxTitle>What else</BoxTitle>
          <BoxContent>
            Touche à tout au premier abord, j'aime découvrir de nouvelles choses et les partager par la suite. Pour moi tout ça, c'est comme une bonne passe dé, si elle est bien ajustée, c'est toute l'équipe qui en profite.
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
    components: {
      Box,
      BoxTitle,
      BoxContent
    }
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
    width: auto;
    height: 100%;
    vertical-align: middle;
  }

  .reflexion-content {
    max-width: 530px;
    margin: 0 auto;
  }

  @media only screen and (max-width: 420px) {
    .reflexion-box:last-of-type img {
      position: relative;
      left: -60%;
    }
  }

  @media only screen and (max-width: 444px) {
    .reflexion-box:first-of-type img {
      position: relative;
      left: -50%;
    }
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