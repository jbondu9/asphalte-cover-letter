<template>
  <section class="reflexion-section">
    <div class="reflexion-box">
      <div class="reflexion-img">
        <!-- <img :src="require({{  }})"> -->
        <img src="https://picsum.photos/id/684/355/427">
      </div>
      <div class="reflexion-content">
        <Box>
          <BoxTitle>Attiré au premier coup d'œil</BoxTitle>
          <BoxContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id mollis nulla, id ultricies turpis. Mauris ac felis at ligula congue vestibulum.
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
            Nunc eget condimentum sem. Sed tincidunt nunc eu massa laoreet laoreet a vel nisi. Nunc ultrices, sapien quis scelerisque accumsan, sem nunc interdum odio, rhoncus commodo massa quam in ipsum.
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
    margin: 30px 10px 0;
  }

  .reflexion-box:last-of-type {
    margin-top: 10px;
  }

  .reflexion-img {
    max-width: 530px;
    margin: 0 auto;
    overflow: hidden;
  }

  .reflexion-box:first-of-type > .reflexion-img {
    max-height: 615px;
  }

  .reflexion-box:last-of-type > .reflexion-img {
    max-height: 570px;
  }

  .reflexion-img > img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }

  .reflexion-content {
    margin: 0 auto;
  }

  .reflexion-box:first-of-type > .reflexion-content {
    max-width: 610px;
  }

  .reflexion-box:last-of-type > .reflexion-content {
    max-width: 530px;
  }

  @media only screen and (min-width: 768px) {
    .reflexion-section {
      margin-left: 12.5px;
      margin-right: 12.5px;
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
      margin: 0;
    }

    .reflexion-box:last-of-type > .reflexion-img {
      position: absolute;
      left: 0;
      bottom: 0;
    }

    .reflexion-content {
      margin: 0;
    }

    .reflexion-box:first-of-type > .reflexion-content {
      position: absolute;
      left: 0;
      top: 40px;
    }

    .reflexion-box:last-of-type > .reflexion-content {
      margin-left: auto;
    }
  }

  @media only screen and (min-width: 1125px) {
    .reflexion-section {
      max-width: 1100px;
      margin-left: auto;
      margin-right: auto;
    }

    .reflexion-img {
      width: 530px;
    }

    .reflexion-box:first-of-type > .reflexion-img {
      height: 615px;
    }

    .reflexion-box:last-of-type > .reflexion-img {
      height: 570px;
    }

    .reflexion-box:first-of-type > .reflexion-content {
      width: 610px;
      min-height: 250px;
    }

    .reflexion-box:last-of-type > .reflexion-content {
      width: 530px;
      min-height: 320px;
    }
  }
</style>