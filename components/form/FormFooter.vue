<template>
  <div class="form-footer">
    <div class="shipping">Prise de poste estimée : À partir du {{ availabilityDate.toLocaleDateString("fr", {month: "long", day: "numeric"}) }}</div>
    <div class="remaining-days">
      <div class="days">{{ daysLeft() }} jours</div>
      <div class="info">restants avant d'être disponible</div>
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
      this.daysLeft()
    },

    methods: {
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
</style>