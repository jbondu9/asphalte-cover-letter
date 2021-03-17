<template>
  <div class="available-section">
    <Title description="true">
      <span v-if="isAvailable()">
        Disponible
      </span>
      <span v-else>
        Bientôt disponible
      </span>
    </Title>
    <p>
      Au plaisir de peut-être un jour vous rencontrer.
    </p>
    <div class="available-panel">
      <div class="available-panel-content">
        <h3>La candidature spontanée</h3>
        <div class="available-info">
          <p v-if="isAvailable()">
            Disponible
          </p>
          <p v-else>
            Plus que <span>{{ daysLeft() }} jours</span>
          </p>
        </div>
        <div class="available-btn">
          <nuxt-link to="/">La candidature spontanée <span>⟩</span></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Title from "~/components/content/Title"

  export default {
    components: {
      Title
    },

    data() {
      return {
        availabilityDate: new Date(2021, 3, 5),
        presentDate: new Date()
      }
    },

    created() {
      this.updatePresentDate()
    },

    mounted() {
      this.isAvailable()
      this.daysLeft()
    },

    methods: {
      isAvailable() {
        return this.presentDate - this.availabilityDate >= 0
      },

      updatePresentDate() {
        this.presentDate = new Date()
      },

      daysLeft() {
        let daysLeft = this.availabilityDate > this.presentDate ? this.availabilityDate - this.presentDate : 0

        if (daysLeft > 0) {
          daysLeft = Math.floor(daysLeft / (1000 * 60 * 60 * 24))
        }

        return daysLeft
      }
    }
  }
</script>

<style scoped>
  .available-section {
    margin: 22px 10px 0;
  }

  .available-section > p {
    margin: 14px 0 30px;
    padding: 0;
    font-size: 16px;
    text-align: center;
  }

  .available-panel {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vw;
    max-height: 480px;
    margin-bottom: 36px;
    padding: 0 20px;
    background: center / cover url("~assets/images/issues.jpg");
    color: #fff;
  }

  .available-panel-content > h3 {
    display: inline-block;
    margin: 0;
    font-family: "Qanelas-Bold", sans-serif;
    font-weight: 700;
    font-size: 42px;
    line-height: 54px;
    text-transform: capitalize;
  }

  .available-info > p {
    display: inline-block;
    font-family: "Qanelas", sans-serif;
    font-size: 16px;
    margin: 10px 0 20px;
  }

  .available-info span {
    font-family: "Qanelas-Bold", sans-serif;
    font-weight: 700;
  }

  .available-btn {
    display: inline-block;
    position: relative;
    width: auto;
    padding: 12px 35px 12px 20px;
    font-family: "Qanelas-Bold", sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    text-transform: capitalize;
    background-color: #000;
    border: 3px solid #000;
    cursor: pointer;
  }

  .available-btn span {
    position: absolute;
    right: 20px;
    top: 50%;
    padding-left: 15px;
    font-size: 10px;
    font-weight: 800;
    transform: translateY(-41%);
    transition: all .3s ease;
  }

  .available-btn:hover span {
    right: 15px;
  }

  @media only screen and (min-width: 768px) {
    .available-section {
      margin: 30px 12.5px 0;
    }

    .available-panel {
      padding: 0 40px;
    }

    .available-panel-content {
      width: 50%;
      margin-left: auto;
    }

    .available-info > p {
      font-size: 20px;
    }

    .available-btn span {
      transform: translateY(-46%);
    }
  }

  @media only screen and (min-width: 1081px) {
    .available-section {
      max-width: 1080px;
      margin: 40px auto 0;
    }

    .available-section > p {
      margin-bottom: 50px;
      font-size: 18px;
    }

    .available-info > p {
      font-size: 26px;
    }

    .available-btn span {
      transform: translateY(-50%);
    }
  }
</style>