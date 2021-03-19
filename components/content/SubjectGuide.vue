<template>
  <transition name="fade">
    <div class="modal" v-if="isModal">
      <div class="backdrop-modal" @click="$store.dispatch('modal/toggleModal')"></div>
      <div class="container">
        <div class="header">
          <div class="close">
            <span role="button" @click="$store.dispatch('modal/toggleModal')"></span>
          </div>
          <h1>Guide des objets</h1>
        </div>
        <div class="content">
          <div class="content-text">
            <h2>La candidature spontanée</h2>
            <p>
              La candidature spontanée se veut originale et plaisante à parcourir. Elle doit mettre en avant les connaissances apprises pour la construire et doit traduire le degré de motivation.
            </p>
            <p>
                Si celle-ci vous plaît n'hésitez pas à me contacter.
            </p>
          </div>
          <div class="content-table">
            <table>
              <thead>
                <tr>
                  <td>Objet</td>
                  <td>S</td>
                  <td>M</td>
                  <td>L</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Niveau d'appréciation</td>
                  <td>Sympa</td>
                  <td>Molto Bene</td>
                  <td>Lourd</td>
                </tr>
                <tr>
                  <td>Retour du type</td>
                  <td>Nous n'avons pas d'offre présentement, mais nous saluons ton travail.</td>
                  <td>Candidature intéressante, des disponibilités pour un premier échange ?</td>
                  <td>Ton profil nous intéresse, quand serais-tu disponible pour commencer ?</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    computed: {
      isModal() {
        return this.$store.getters["modal/toggleModal"]
      }
    }
  }
</script>

<style scoped>
  @font-face {
    font-family: "Qanelas-Heavy";
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url("~assets/fonts/Qanelas-Heavy.ttf") format("truetype");
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s;
  }
  
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    min-height: 100vh;
    width: 100%;
    z-index: 10;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .backdrop-modal {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, .2);
    z-index: 1;
  }

  .container {
    position: relative;
    z-index: 2;
    display: flex;
    flex-flow: column;
    width: 800px;
    max-width: 100vw;
    height: 100%;
    padding: 40px 24px;
    margin: 0 auto;
    background-color: #fff;
    overflow: auto;
  }

  .close {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: -20px;
  }

  .close > span {
    display: block;
    position: relative;
    top: 50%;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  .close > span::before, .close > span::after {
    position: absolute;
    top: 50%;
    content: "";
    width: 100%;
    height: 3px;
    background-color: #000;
    border-radius: 25px;
  }

  .close > span::before {
    transform: translateY(-50%) rotate(45deg);
  }

  .close > span::after {
    transform: translateY(-50%) rotate(-45deg);
  }

  .header > h1 {
    font-family: "Qanelas-Heavy", sans-serif;
    font-size: 1.875rem;
    font-weight: 900;
    text-align: center;
    margin: 0 0 42px;
  }

  .content-text > h2 {
    font-family: "Qanelas-Bold", sans-serif;
    font-weight: 700;
    text-align: center;
    text-transform: capitalize;
    margin: 0 0 14px;
  }

  .content-text > p {
    margin: 0 auto 10px;
    padding: 0 0 10px;
    font-size: 16px;
    text-align: left;
  }

  .content-text > p:last-of-type {
    margin-bottom: 20px;
  }

  .content-table {
    max-width: 100%;
    overflow: auto;
  }

  .content-table > table {
    width: 100%;
    border-collapse: collapse;
  }

  tr:nth-child(2n+1) {
    background-color: #ebebeb;
  }

  thead tr:first-child {
    background-color: inherit;
  }

  td {
    padding: 16px;
    text-align: center;
  }

  td:first-child {
    display: table-cell;
    width: 100%;
    text-align: left;
  }

  @media only screen and (min-width: 768px) {
    .container {
      padding: 40px 60px;
    }

    .content-text > h2 {
      font-size: 30px;
    }

    .content-text > p {
      font-size: 16px;
    }

    td {
      padding: 16px 8px;
    }

    td:first-child {
      width: 180px;
      padding-left: 16px;
    }
  }

</style>