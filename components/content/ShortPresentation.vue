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
            <li>Poste visé : Développeur front-end</li>
            <li>Niveau : Junior</li>
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
            <span class="label">Contacter par</span>
            :
            <span>{{ media }}</span>
          </div>
          <div class="media-list">
            <div class="media-option mail" role="button" @click="setMedia('Mail')" :class="{active: media === 'Mail'}"></div>
            <div class="media-option linkedin" role="button" @click="setMedia('LinkedIn')" :class="{active: media === 'LinkedIn'}"></div>
            <div v-if="mobile" class="media-option phone" role="button" @click="setMedia('Téléphone')" :class="{active: media === 'Téléphone'}"></div>
          </div>
          <div class="mail-object" v-if="media === 'Mail'">
            <div class="object">
              <div>
                <span class="label">Objet</span>
                :
                <span>{{ object }}</span>
              </div>
              <div>
                <span class="guide">Guide des objets</span>
              </div>
            </div>
            <div class="object-list">
              <div class="object-option" role="button" @click="setObject('S')" :class="{active: object === 'S'}">
                <span>S</span>
              </div>
              <div class="object-option" role="button" @click="setObject('M')" :class="{active: object === 'M'}">
                <span>M</span>
              </div>
              <div class="object-option" role="button" @click="setObject('L')" :class="{active: object === 'L'}">
                <span>L</span>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" class="form-btn">
          <span>Contacter</span>
        </button>
      </div>
      <div class="form-footer">
        <div class="shipping">Prise de poste estimée : À partir du 29 mars</div>
        <div class="remaining-days">
          <div class="days">30 jours</div>
          <div class="info">restant avant d'être disponible</div>
        </div>
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
    },

    methods: {
      setMedia(media) {
        this.media = media
      },

      setObject(object) {
        this.object = object
      }
    }
  }
</script>

<style scoped>
  .contact-form {
    padding: 16px 24px 30px 24px;
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

  .media-list, .object-list {
    display: flex;
  }

  .media-list {
    margin-bottom: 24px;
  }

  .media-option {
    position: relative;
    width: 42px;
    height: 42px;
    margin-right: 10px;
    border-radius: 50%;
    border: 2px solid #e3e3e3;
    cursor: pointer;
    transition: all .25s;
  }

  .media-option.active {
    border: 2px solid #000;
  }

  .media-option.mail {
    background: center / 60% no-repeat url("~assets/img/mail.svg"),
                linear-gradient(rgb(0, 102, 255), rgb(0, 200, 255));
  }

  .media-option.linkedin {
    background: center / 90% no-repeat url("~assets/img/linkedin.svg");
  }

  .media-option.phone {
    background: center / 60% no-repeat url("~assets/img/call.svg"),
                linear-gradient(rgb(150, 255, 79), rgb(48, 212, 15));
  }

  .media-option::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 2px solid #fff;
  }

  .object {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .label {
    font-family: "Qanelas-Bold";
    font-weight: 700;
  }

  .guide {
    text-decoration: underline;
  }

  .object-list {
    margin-bottom: 16px;
  }

  .object-option {
    position: relative;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border: 2px solid #e3e3e3;
    cursor: pointer;
    transition: all .25s;
  }

  .object-option.active {
    font-family: "Qanelas-Bold";
    font-weight: 700;
    border: 2px solid #000;
  }

  .object-option > span {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .form-btn {
    width: 100%;
    margin: 12px 0 10px 0;
    padding: 12px 0;
    font-size: 18px;
    font-family: "Qanelas-Bold";
    font-weight: 700;
    color: #fff;
    background-color: #070e15;
    border: none;
    cursor: pointer;
  }

  .form-footer {
    display: flex;
    flex-flow: column;
    align-items: center;
    font-family: "Qanelas";
  }

  .shipping {
    margin-bottom: 24px;
    line-height: 1.2;
    text-align: center;
  }

  .days {
    margin-bottom: 8px;
    color: #192631;
    font-family: "Qanelas-Bold";
    font-size: 18px;
    font-weight: 700;
    line-height: 100%;
    text-align: center;
    text-shadow: 0 2px 15px rgba(0,0,0,.1);
  }

  .info {
    color: #192631;
    text-align: center;
    text-shadow: 0 2px 15px rgba(0,0,0,.1);
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