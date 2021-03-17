<template>
  <transition name="fade">
    <div class="modal" v-if="isModal">
      <div class="backdrop" @click="$store.dispatch('modal/toggleModal')"></div>
      <div class="container">
        <div class="header">
          <div class="close">
            <span role="button" @click="$store.dispatch('modal/toggleModal')"></span>
          </div>
          <h1>Guide des objets</h1>
        </div>
        <div class="content">
          <div>
            <h2>La candidature spontanée</h2>
            <p>
              La candidature spontanée se veut originale et plaisante à parcourir. Elle doit mettre en avant les connaissances apprises pour la construire et doit traduire le degré de motivation.
            </p>
            <span>
              Si celle-ci vous plaît n'hésitez pas à me contacter.
            </span>
          </div>
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
                <td>Niveau d'appréciation'</td>
                <td>Sympa</td>
                <td>Molto Bene</td>
                <td>Lourd</td>
              </tr>
              <tr>
                <td>Retour du type</td>
                <td>Nous n'avons pas d'offres ou de disponibilités pour le moment, mais nous saluons ton travail.</td>
                <td>Candidature intéressante, des disponibilités pour un premier échange ?</td>
                <td>Ton profil nous intéresse, quand serais-tu disponible pour commencer ?</td>
              </tr>
            </tbody>
          </table>
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
    right: 0;
    bottom: 0;
    z-index: 10;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
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
    padding: 40px 24px;
    margin: 0 auto;
    background-color: #fff;
  }

  .close {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
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
  }

</style>