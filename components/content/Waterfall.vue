<template>
  <section class="waterfall-section">
    <div class="waterfall-box">
      <div class="waterfall-img">
        <!-- <img :src="require({{  }})"> -->
        <img src="https://picsum.photos/id/781/355/427">
      </div>
      <div class="waterfall-content">
        <Box>
          <BoxTitle>Pourquoi Asphalte</BoxTitle>
          <BoxContent>
            Bien que je passe rarement plus 15 minutes devant mes fringues à me demander comment je vais pouvoir les accorder, j'aime porter de beaux vêtements. Encore mieux quand ils sont confortables, bien coupés et qu'ils durent dans le temps. Et oui, étant quelque peu minimaliste et pas très grand, j'ai commencé, il y a peu, à vouloir consommer du vêtement autrement.
          </BoxContent>
        </Box>
      </div>
    </div>
    <div class="waterfall-box">
      <div class="waterfall-img">
        <!-- <img :src="require({{  }})"> -->
        <img src="https://picsum.photos/id/354/355/427">
      </div>
      <div class="waterfall-content">
        <Box>
          <BoxTitle>Un beau camion sur une belle route</BoxTitle>
          <BoxContent>
            Fusce tincidunt risus risus, aliquam rhoncus risus sagittis quis. Mauris leo odio, blandit id nisl sed, iaculis cursus urna. Integer rutrum nulla id mi bibendum, non ultricies orci rhoncus. Nullam sollicitudin dui arcu.
          </BoxContent>
        </Box>
      </div>
      <div class="waterfall-content">
        <Box>
          <BoxTitle>Un autre titre</BoxTitle>
          <BoxContent>
            Fusce tincidunt risus risus, aliquam rhoncus risus sagittis quis. Mauris leo odio, blandit id nisl sed, iaculis cursus urna. Integer rutrum nulla id mi bibendum, non ultricies orci rhoncus. Nullam sollicitudin dui arcu.
          </BoxContent>
        </Box>
      </div>
    </div>
    <div class="waterfall-box">
      <div class="waterfall-img">
        <!-- <img :src="require({{  }})"> -->
        <img src="https://picsum.photos/id/16/355/427">
      </div>
      <div class="waterfall-content">
        <Box>
          <BoxTitle>Un quatrième</BoxTitle>
          <BoxContent>
            Integer sodales lectus lectus, in scelerisque tellus sollicitudin nec. Proin tortor ante, consequat sed leo ut, placerat malesuada enim. Aliquam sed nibh commodo diam iaculis aliquam.
          </BoxContent>
        </Box>
      </div>
    </div>
    <div class="waterfall-box">
      <div class="waterfall-img">
        <!-- <img :src="require({{  }})"> -->
        <img src="https://picsum.photos/id/375/355/427">
      </div>
      <div class="waterfall-content">
        <Box>
          <BoxTitle>Un dernier</BoxTitle>
          <BoxContent>
            Duis vel tempor sem. Donec euismod, odio ut cursus blandit, arcu leo imperdiet erat, at semper massa orci vitae est. Cras vehicula accumsan felis.
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
  .waterfall-section {
    margin: 22px 10px 0;
  }

  .waterfall-box:not(:first-of-type) {
    margin-top: 10px;
  }

  .waterfall-img {
    max-width: 530px;
    max-height: 570px;
    margin: 0 auto;
    overflow: hidden;
  }

  .waterfall-img > img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }

  .waterfall-content {
    max-width: 530px;
    margin: 0 auto;
  }

  @media only screen and (min-width: 768px) {
    .waterfall-section {
      margin: 30px 12.5px 0;
    }
  }

  @media only screen and (min-width: 1125px) {
    .waterfall-section {
      max-width: 1100px;
      margin: 40px auto 0;
    }

    .waterfall-box {
      display: flex;
      justify-content: space-between;
      position: relative;
    }

    .waterfall-box:nth-of-type(2n+1) {
      flex-flow: row-reverse;
    }

    .waterfall-box:nth-of-type(2) {
      margin-top: -20px;
    }

    .waterfall-box:nth-of-type(3) {
      margin-top: 40px;
    }

    .waterfall-box:nth-of-type(4) {
      margin-top: -240px;
    }

    .waterfall-img {
      margin: 0;
    }

    .waterfall-box:first-of-type > .waterfall-img {
      width: 465px;
      height: 400px;
    }

    .waterfall-box:nth-of-type(2) > .waterfall-img {
      width: 460px;
      min-height: 800px;
    }

    .waterfall-box:nth-of-type(3) > .waterfall-img {
      width: 530px;
      min-height: 645px;
      margin-top: -60px;
    }

    .waterfall-box:nth-of-type(4) > .waterfall-img {
      width: 530px;
      min-height: 615px;
    }

    .waterfall-content {
      margin: 0;
    }

    .waterfall-box:first-of-type > .waterfall-content {
      min-width: 595px;
      height: 335px;
    }

    .waterfall-box:nth-of-type(2) > .waterfall-content {
      position: absolute;
      top: 90px;
      right: 0;
      min-width: 595px;
      height: 280px;
    }

    .waterfall-box:nth-of-type(2) > .waterfall-content:last-of-type {
      bottom: 60px;
      top: auto;
      min-width: 690px;
    }

    .waterfall-box:nth-of-type(3) > .waterfall-content {
      width: 530px;
      max-height: 290px;
    }

    .waterfall-box:nth-of-type(4) > .waterfall-content {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 530px;
      height: 375px;
    }
  }
</style>