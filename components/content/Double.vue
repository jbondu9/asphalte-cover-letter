<template>
  <section class="double-section">
    <div class="double-box">
      <div class="double-img">
        <!-- <img :src="require({{  }})"> -->
        <img src="https://picsum.photos/id/221/355/427">
      </div>
      <div class="double-content">
        <Box>
          <BoxTitle>Classico</BoxTitle>
          <BoxContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id mollis nulla, id ultricies turpis. Mauris ac felis at ligula congue vestibulum.
          </BoxContent>
        </Box>
      </div>
    </div>
    <div class="double-box">
      <div class="double-img">
        <!-- <img :src="require({{  }})"> -->
        <img src="https://picsum.photos/id/19/355/427">
      </div>
      <div class="double-content">
        <Box>
          <BoxTitle>Parcourir le monde et voir ce que la vie propose</BoxTitle>
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
  .double-section {
    margin: 22px 10px 0;
  }

  .double-box:last-of-type {
    margin-top: 10px;
  }

  .double-img {
    max-width: 530px;
    max-height: 570px;
    margin: 0 auto;
    overflow: hidden;
  }

  .double-img > img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }

  .double-content {
    max-width: 530px;
    margin: 0 auto;
  }

  @media only screen and (min-width: 768px) {
    .double-section {
      margin: 30px 12.5px 0;
    }
  }

  @media only screen and (min-width: 1125px) {
    .double-section {
      max-width: 1100px;
      margin: 40px auto 0;
    }

    .double-box {
      display: flex;
      flex-flow: row-reverse;
      justify-content: space-between;
      position: relative;
    }

    .double-box:last-of-type {
      flex-flow: row;
      margin-top: -30px;
    }

    .double-img {
      margin: 0;
    }

    .double-box:first-of-type > .double-img {
      width: 545px;
      height: 400px;
    }

    .double-box:last-of-type > .double-img {
      width: 520px;
      height: 390px;
    }

    .double-content {
      margin: 0;
    }

    .double-box:first-of-type > .double-content {
      position: absolute;
      top: 0;
      left: 0;
      min-width: 600px;
      height: 280px;
    }

    .double-box:last-of-type > .double-content {
      position: absolute;
      bottom: 0;
      right: 0;
      top: auto;
      width: 530px;
      height: 280px;
      margin-left: auto;
    }
  }
</style>