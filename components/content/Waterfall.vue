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
            Etiam vel vehicula lectus. Fusce et viverra sem. Duis quis felis elit. Aliquam eu venenatis turpis.
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
    margin: 30px 10px 0;
  }

  .waterfall-box:not(:first-of-type) {
    margin-top: 10px;
  }

  .waterfall-img {
    margin: 0 auto;
    overflow: hidden;
  }

  .waterfall-box:first-of-type > .waterfall-img {
    max-width: 465px;
    max-height: 400px;
  }

  .waterfall-box:nth-of-type(2) > .waterfall-img {
    max-width: 460px;
    max-height: 800px;
  }

  .waterfall-box:nth-of-type(3) > .waterfall-img {
    max-width: 530px;
    max-height: 645px;
  }

  .waterfall-box:nth-of-type(4) > .waterfall-img {
    max-width: 530px;
    max-height: 615px;
  }

  .waterfall-img > img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }

  .waterfall-content {
    margin: 0 auto;
  }

  @media only screen and (min-width: 768px) {
    .waterfall-section {
      margin-left: 12.5px;
      margin-right: 12.5px;
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
      margin-top: -50px;
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

    .waterfall-box:nth-of-type(3) > .waterfall-img {
      margin-top: -60px;
    }

    .waterfall-content {
      margin: 0;
    }

    .waterfall-box:nth-of-type(2) > .waterfall-content {
      position: absolute;
      top: 90px;
      right: 0;
    }

    .waterfall-box:nth-of-type(2) > .waterfall-content:last-of-type {
      bottom: 60px;
      top: auto;
    }

    .waterfall-box:nth-of-type(4) > .waterfall-content {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }

  @media only screen and (min-width: 1125px) {
    .waterfall-section {
      max-width: 1100px;
      margin-left: auto;
      margin-right: auto;
    }

    .waterfall-box:first-of-type > .waterfall-img {
      width: 465px;
      height: 400px;
    }

    .waterfall-box:nth-of-type(2) > .waterfall-img {
      width: 460px;
      height: 800px;
    }

    .waterfall-box:nth-of-type(3) > .waterfall-img {
      width: 530px;
      height: 645px;
    }

    .waterfall-box:nth-of-type(4) > .waterfall-img {
      width: 530px;
      height: 615px;
    }

    .waterfall-box:first-of-type > .waterfall-content {
      width: 595px;
      max-height: 300px;
    }

    .waterfall-box:nth-of-type(2) > .waterfall-content {
      width: 595px;
      height: 280px;
    }

    .waterfall-box:nth-of-type(2) > .waterfall-content:last-of-type {
      width: 690px;
    }

    .waterfall-box:nth-of-type(3) > .waterfall-content {
      width: 530px;
      max-height: 290px;
    }

    .waterfall-box:nth-of-type(4) > .waterfall-content {
      width: 530px;
      height: 320px;
    }
  }
</style>