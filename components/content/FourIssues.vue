<template>
  <section class="issues-section">
    <p class="issues-intro">
      En me retrouvant de nouveau sur le marché de l'emploi, il y a deux choses sur lesquelles j'étais sûr de plancher : mon CV et ma lettre de motivation. Alors, afin de ne pas reproduire d'anciennes erreurs et de sortir des sentiers battus, je me suis replongé sur des candidatures passées tout en prenant note des différents retours que j'avais eus.
      <span>Et voici les quatre grands points que j’en ai tirés :</span>
    </p>
    <div class="issues-items">
      <div class="issues-container">
        <div class="item" v-for="(item, i) in issues" :key="i">
          <div class="item-title">
            -
            <span>{{ i + 1 }}</span>
            -
          </div>
          <div class="item-text">
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        issues: [
          {
            text: "La mise en page doit être attractive "
          },
          {
            text: "Les motivations doivent être personnelles"
          },
          {
            text: "L’intérêt pour le poste et l’entreprise doit transparaître"
          },
          {
            text: "L’application des compétences doit être illustrée"
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .issues-section {
    margin: 22px 10px 0;
    text-align: center;
  }

  .issues-intro {
    margin: 0 15px;
    padding: 0 0 14px;
    font-size: 16px;
    line-height: 1.6;
  }

  .issues-intro > span {
    display: block;
    font-weight: 700;
  }

  .issues-items {
    display: flex;
    align-items: center;
    min-height: 350px;
    margin-top: 30px;
    background: center url("~assets/images/issues.jpg");
    color: #fff;
  }

  .issues-container {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
  }

  .item {
    width: 50%;
    padding: 0 0 20px;
  }

  .item-title {
    font-size: 40px;
  }

  .item-title > span {
    font-weight: 700;
  }

  .item-text {
    padding: 0 24px;
    font-size: 16px;
  }

  @media only screen and (min-width: 768px) {
    .issues-section {
      margin: 30px 12.5px 0;
    }

    .issues-intro {
      max-width: 760px;
      margin: 0 auto;
    }

    .item {
      width: 25%;
      padding: 0 40px;
    }

    .item-title {
      font-size: 50px;
    }

    .item-text {
      padding: 10px 0;
      font-size: 20px;
    }
  }

  @media only screen and (min-width: 1125px) {
    .issues-section {
      max-width: 1100px;
      margin: 40px auto 0;
    }
  }
</style>