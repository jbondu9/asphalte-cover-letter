<template>
  <section class="waterfall-section">
    <div class="waterfall-box">
      <div class="waterfall-img">
        <img src="https://picsum.photos/id/946/355/427">
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
        <img src="https://picsum.photos/id/412/355/427">
      </div>
      <div class="waterfall-content">
        <Box>
          <BoxTitle>Un beau camion sur une belle route</BoxTitle>
          <BoxContent>
            D'abord lecteur d'articles sur Bonne Gueule, en me balandant un jour ici et là sur le net pour trouver de bons conseils pour refaire ma garde-robe, je suis tombé sur <a href="https://www.commeuncamion.com/2019/10/27/comment-shabiller-quand-on-est-petit-mince/" style="text-decoration: underline">cet article</a> de Comme un Camion. La révélation : un blouson épuré, solide et soigné, j'étais conquis, Asphalte venait d'entrer dans mon carnet de marques à consulter.
          </BoxContent>
        </Box>
      </div>
      <div class="waterfall-content">
        <Box>
          <BoxTitle>En route Marcel</BoxTitle>
          <BoxContent>
            Des mois se sont écoulés et l'idée de vouloir faire plus que porter les vêtements d'une marque que je trouve inspirante est arrivée. Je me suis dit que je voulais rejoindre l'aventure, alors j'ai utilisé mon attrait pour la Tech pour m'initier au développement front-end.
          </BoxContent>
        </Box>
      </div>
    </div>
    <div class="waterfall-box">
      <div class="waterfall-img">
        <img src="https://picsum.photos/id/161/355/427">
      </div>
      <div class="waterfall-content">
        <Box>
          <BoxTitle>Kōhai fraîche</BoxTitle>
          <BoxContent>
            Côté formation, j'ai mis la data de côté pour me tourner vers le monde du web. De fait, depuis le début de mon service civique, je développe mes connaisssances en front avec la crème de la crème : Mathieu Nebra (Openclassrooms), Jonathan Boyer (Grafikart) et Benjamin Debon (Benjamin Code) sont mes senseis. 
          </BoxContent>
        </Box>
      </div>
    </div>
    <div class="waterfall-box">
      <div class="waterfall-img">
        <img src="https://picsum.photos/id/370/355/427">
      </div>
      <div class="waterfall-content">
        <Box>
          <BoxTitle>Viser la lune</BoxTitle>
          <BoxContent>
            En rejoignant Asphalte, je souhaite donc prendre part à un projet auquel j'adhère déjà, mais pas seulement. En effet, je viens de découvrir l'univers du dévelopement front et son côté créatif me plaît beaucoup. J'espère donc pouvoir continuer à faire mes gammes en contribuant à la vision d'Asphalte.
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
    text-align: center;
    overflow: hidden;
  }

  .waterfall-img > img {
    /* width: 100%;
    height: 100%; */
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
      align-items: flex-start;
      margin-top: 40px;
    }

    .waterfall-box:nth-of-type(4) {
      margin-top: -200px;
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
      min-height: 280px;
    }

    .waterfall-box:nth-of-type(2) > .waterfall-content:last-of-type {
      bottom: 60px;
      top: auto;
      min-width: 690px;
    }

    .waterfall-box:nth-of-type(3) > .waterfall-content {
      width: 530px;
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