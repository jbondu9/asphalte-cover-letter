<template>
  <section>
    <Carousel>
    </Carousel>
    <form class="contact-form" action="">
      <div class="form-header">
        <div class="short-bio">
          <h1 class="name">La candidatue spontanée</h1>
          <ul class="contact-info">
            <li>Identité : Jimmy Bondu</li>
            <li>Poste visé : développeur front-end</li>
            <li>Niveau : Junior mais motivé</li>
          </ul>
        </div>
        <div class="quick-availability">
          <div class="availability">
            <div class="availability-moment">Disponible à partir</div>
            <div class="availability-date">
              <span>Du 05/04/2021</span>
            </div>
          </div>
          <div class="availability inactive">
            <div class="availability-moment">Disponible</div>
            <div class="availability-date">
              <span>Maintenant</span>
            </div>
          </div>
        </div>
      </div>
      <div class="form-content">
        <div class="contact-mode">
          <div class="media">
            <span class="label">Contacter via</span>
            :
            <span>{{ media }}</span>
          </div>
          <div class="media-list">
            <select v-model="media">
              <option>Mail</option>
              <option>LinkedIn</option>
              <option v-if="mobile">Téléphone</option>
            </select>
          </div>
          <div class="mail-object" v-if="media === 'Mail'">
            <div class="object">
              <span class="label">Objet</span>
              :
              <span>{{ object }}</span>
            </div>
            <div class="object-list">
              <select v-model="object">
                <option>S</option>
                <option>M</option>
                <option>L</option>
              </select>
            </div>
          </div>
        </div>
        <button type="submit">
          <span>Contacter</span>
        </button>
      </div>
    </form>
  </section>
</template>

<script>
  import Carousel from "~/components/carousel/Carousel"
  import CarouselSlide from "~/components/carousel/CarouselSlide"

  export default {
    components: { Carousel, CarouselSlide },

    data() {
      return {
        media: "Mail",
        mobile: null,
        object: "S"
      }
    },

    mounted() {
      if (/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        this.mobile = true
      }
      else {
        this.mobile = false
      }
    }
  }
</script>

<style scoped>
  .contact-form {
    padding: 16px 24px 0 24px;
  }

  .form-header {
    display: flex;
    width: 100%;
  }

  .name {
    margin: 0;
    padding: 0;
    font-family: "Qanelas-Bold", sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2em;
    text-transform: capitalize;
  }

  .contact-info {
    margin: 18px 0 22px 0;
    padding: 0 0 0 18px;
  }

  .contact-info > li {
    margin: 0 0 4px 0;
    font-family: "Qanelas", sans-serif;
    font-weight: 400;
    line-height: 17px;
  }

  .quick-availability {
    display: flex;
  }

  .availability {
    font-family: "Qanelas-Bold";
    font-weight: 700;
    color: #192631;
    text-shadow: 0 2px 15px rgba(0,0,0,.1);
    text-transform: uppercase;
  }

  .availability.inactive {
    opacity: .6;
  }

  .availability-moment {
    font-size: 10px;
  }

  .availability-date {
    margin-bottom: 12px;
    font-size: 16px;
    line-height: 21px;
  }

  .availability.inactive > .availability-date > span {
    position: relative;
  }

  .availability.inactive > .availability-date > span::before {
    content: "";
    position: absolute;
    top: 50%;
    width: calc(100% + 4px);
    height: 1px;
    transform: translate(-2px, -50%);
    background-color: #192631;
  }

  .form-content {
    margin-top: 5px;
    font-family: "Qanelas";
  }

  .media, .object {
    margin-bottom: 10px;
  }

  .label {
    font-family: "Qanelas-Bold";
    font-weight: 700;
  }

  .media-list {
    display: flex;
    margin-bottom: 24px;
  }

  @media only screen and (max-width: 767px) {
    .quick-availability {
      width: 45%;
      flex-flow: column;
    }

    .availability {
      text-align: right;
    }
  }

  @media only screen and (min-width: 768px) {
    .availability {
      text-align: center;
    }
  }
</style>