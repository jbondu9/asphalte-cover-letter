<template>
  <section class="issues-section">
    <h2 class="issues-title">Rock - Cover - Letter</h2>
    <p class="issues-intro">
      Quand on s’attaque au marché de l’emploi, il y a deux choses sur lesquelles on est quasi sûr de plancher : son CV et sa lettre de motivation. Alors afin de ne pas retomber dans de vieux travers, je me suis repenché sur d’anciennes candidatures, tout en prenant note de différents retours.
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

  .issues-title {
    margin: 0;
    padding: 24px 0 14px;
    font-family: "Qanelas-Bold", sans-serif;
    font-weight: 700;
    font-size: 30px;
    line-height: 1.4;
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
    min-height: 350px;
    margin-top: 30px;
    background: center url("~assets/images/issues.jpg");
    color: #fff;
  }

  .issues-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
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
    .issues-container {
      align-items: baseline;
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
</style>