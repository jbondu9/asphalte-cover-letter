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
          <BonxContent>
            Etiam vel vehicula lectus. Fusce et viverra sem. Duis quis felis elit. Aliquam eu venenatis turpis.
          </BonxContent>
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
          <BonxContent>
            Fusce tincidunt risus risus, aliquam rhoncus risus sagittis quis. Mauris leo odio, blandit id nisl sed, iaculis cursus urna. Integer rutrum nulla id mi bibendum, non ultricies orci rhoncus. Nullam sollicitudin dui arcu.
          </BonxContent>
        </Box>
      </div>
      <div class="waterfall-content">
        <Box>
          <BoxTitle>Un autre titre</BoxTitle>
          <BonxContent>
            Fusce tincidunt risus risus, aliquam rhoncus risus sagittis quis. Mauris leo odio, blandit id nisl sed, iaculis cursus urna. Integer rutrum nulla id mi bibendum, non ultricies orci rhoncus. Nullam sollicitudin dui arcu.
          </BonxContent>
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
          <BonxContent>
            Integer sodales lectus lectus, in scelerisque tellus sollicitudin nec. Proin tortor ante, consequat sed leo ut, placerat malesuada enim. Aliquam sed nibh commodo diam iaculis aliquam.
          </BonxContent>
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
          <BonxContent>
            Duis vel tempor sem. Donec euismod, odio ut cursus blandit, arcu leo imperdiet erat, at semper massa orci vitae est. Cras vehicula accumsan felis.
          </BonxContent>
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
    max-width: 530px;
    max-height: 615px;
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
      margin-left: 12.5px;
      margin-right: 12.5px;
    }

    .waterfall-box {
      display: flex;
      position: relative;
    }

    .waterfall-box:nth-of-type(2n+1) {
      flex-flow: row-reverse;
      justify-content: space-between;
    }

    .waterfall-box:nth-of-type(2) {
      margin-top: -50px;
    }

    .waterfall-img {
      width: 45%;
      margin: 0;
    }

    .waterfall-box:first-of-type > .waterfall-img {
      max-width: 465px;
      max-height: 400px;
    }

    .waterfall-box:nth-of-type(2) > .waterfall-img {
      max-width: 460px;
      max-height: 800px;
    }

    .waterfall-content {
      width: 55%;
      max-width: 595px;
      margin: 0;
    }

    .waterfall-box:first-of-type > .waterfall-content {
      max-height: 300px;
    }

    .waterfall-box:nth-of-type(2) > .waterfall-content {
      position: absolute;
      right: 0;
      max-height: 280px;
    }

    .waterfall-box:nth-of-type(2) > .waterfall-content:first-of-type {
      top: 90px;
    }

    .waterfall-box:nth-of-type(2) > .waterfall-content:last-of-type {
      bottom: 60px;
      width: 65%;
      max-width: 690px;
    }
  }

  @media only screen and (min-width: 1125px) {
    .waterfall-section {
      max-width: 1100px;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>