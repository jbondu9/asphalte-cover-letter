<template>
  <div class="form-header">
    <h1 class="name">La candidature spontanée</h1>
    <ul class="contact-info">
      <li>Jimmy Bondu</li>
      <li>Développeur front-end junior</li>
      <li>Data enthousiaste</li>
    </ul>
    <div class="quick-availability">
      <div class="availability" :class="{inactive: !isInactive()}">
        <div class="availability-moment">Disponible à partir</div>
        <div class="availability-date">
          <span>Du {{ availabilityDate.toLocaleDateString() }}</span>
        </div>
      </div>
      <div class="availability" :class="{inactive: isInactive()}">
        <div class="availability-moment">Disponible</div>
        <div class="availability-date">
          <span>Maintenant</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      "availabilityDate",
      "presentDate"
    ],

    mounted() {
      this.isInactive()
    },

    methods: {
      isInactive() {
        return this.availabilityDate - this.presentDate >= 0
      }
    }
  }
</script>

<style scoped>
  .form-header {
    display: grid;
    grid-template-columns: 60% auto;
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
    grid-column: 1;
    grid-row: 1;
  }

  .contact-info {
    margin: 18px 0 22px 0;
    padding: 0 0 0 18px;
    grid-column: 1;
    grid-row: 2/3;
  }

  .contact-info > li {
    margin: 0 0 4px 0;
    font-family: "Qanelas", sans-serif;
    font-weight: 400;
    line-height: 17px;
  }

  .quick-availability {
    display: flex;
    flex-flow: column;
    padding-top: 4px;
    grid-column: 2;
    grid-row: 1/3;
  }

  .availability {
    font-family: "Qanelas-Bold";
    font-weight: 700;
    color: #192631;
    text-align: right;
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

  @media only screen and (min-width: 1000px) {
    .form-header {
      display: flex;
      flex-flow: column;
      align-items: stretch;
    }

    .name {
      margin-bottom: 12px;
      font-size: 30px;
      text-align: center;
    }

    .contact-info {
      order: 3;
    }

    .quick-availability {
      flex-flow: row;
      justify-content: space-around;
      order: 2;
    }

    .availability {
      text-align: center;
    }
  }
</style>