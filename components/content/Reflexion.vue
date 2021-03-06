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
          <BonxContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id mollis nulla, id ultricies turpis. Mauris ac felis at ligula congue vestibulum.
          </BonxContent>
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
          <BonxContent>
            Nunc eget condimentum sem. Sed tincidunt nunc eu massa laoreet laoreet a vel nisi. Nunc ultrices, sapien quis scelerisque accumsan, sem nunc interdum odio, rhoncus commodo massa quam in ipsum.
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
  .reflexion-section {
    margin: 30px 10px 0;
  }

  .reflexion-box:not(:first-of-type) {
    margin-top: 10px;
  }

  .reflexion-img {
    max-width: 530px;
    max-height: 615px;
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
      margin-left: 12.5px;
      margin-right: 12.5px;
    }

    .reflexion-box {
      display: flex;
      position: relative;
    }

    .reflexion-box:first-of-type {
      flex-flow: row-reverse;
    }

    .reflexion-box:not(:first-of-type) {
      margin-top: 0;
    }

    .reflexion-img {
      width: 50%;
      margin: 0;
    }

    .reflexion-box:not(:first-of-type) > .reflexion-img {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 49%;
      max-height: 570px;
    }

    .reflexion-content {
      width: 55%;
      margin: 0;
    }

    .reflexion-box:first-of-type > .reflexion-content {
      position: absolute;
      left: 0;
      top: 40px;
      max-width: 610px;
    }

    .reflexion-box:not(:first-of-type) > .reflexion-content {
      width: 50%;
      margin-left: auto;
    }
  }

  @media only screen and (min-width: 1125px) {
    .reflexion-section {
      max-width: 1100px;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>