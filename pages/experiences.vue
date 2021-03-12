<template>
  <div class="experiences-container">
    <div class="experiences-search" ref="searchBar">
      <input class="search-bar" type="text" v-model="search" placeholder="Vous cherchez une expérience ?">
    </div>
    <div class="experiences-section">
      <Title description="true">
        Ça a eu lieu tantôt
      </Title>
      <p>
        Un aperçu de mes précédentes expériences professionnelles
      </p>
      <ExperiencesList :experiences="filteredExperiences" />
    </div>
  </div>
</template>

<script>
  import Title from "~/components/content/Title"
  import ExperiencesList from "~/components/content/ExperiencesList"

  export default {
    components: {
      Title,
      ExperiencesList
    },

    data() {
      return {
        search: "",
        experiences: [
          {
            title: "Solinum",
            details: "Assistant au chargé de développement local",
            date: "Sept. 2020 - Mars 2021",
            place: "Bordeaux"
          },
          {
            title: "Thales",
            details: "Ingénieur CIFRE",
            date: "Sept. 2019 - Juin 2020",
            place: "Mérignac"
          },
          {
            title: "ENSEIRB-MATMECA",
            details: "Chargé de TD et TP",
            date: "Sept. 2019 - Mars 2020",
            place: "Talence"
          },
          {
            title: "Thales",
            details: "Stagiaire en algorithmie RADAR et IA",
            date: "Fév. 2019 - Juil. 2019",
            place: "Mérignac"
          },
          {
            title: "Zodiac Data Systems",
            details: "Stagiaire en développement logiciel",
            date: "Mai 2018 - Août 2018",
            place: "Les Ulis"
          },
          {
            title: "McDonald's",
            details: "Équipier",
            date: "Janv. 2018 - Avr. 2018",
            place: "Montréal"
          },
          {
            title: "Malaviya National Institute of Technology",
            details: "Assistant de recherche",
            date: "Juin 2017 - Août 2017",
            place: "Jaipur"
          }
        ],
        top: 0
      }
    },

    created() {
      if (process.client) {
        window.addEventListener("scroll", this.handleSearchbar)
      }
    },

    mounted() {
      this.top = this.$refs.searchBar.getBoundingClientRect().top + window.pageYOffset
    },

    destroyed() {
      window.removeEventListener("scroll", this.handleSearchbar)
    },

    computed: {
      filteredExperiences() {
        return this.experiences.filter(experience => {
          return experience.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        })
      }
    },

    methods: {
      handleSearchbar(e) {
        e.preventDefault()

        if (window.pageYOffset > this.top && !this.$refs.searchBar.classList.contains("fixed")) {
          this.$refs.searchBar.classList.add("fixed")
        }
        else if (window.pageYOffset <= this.top && this.$refs.searchBar.classList.contains("fixed")) {
          this.$refs.searchBar.classList.remove("fixed")
        }
      }
    }
  }
</script>

<style scoped>
  .experiences-search {
    display: none;
  }

  .experiences-section {
    margin: 22px 10px 0;
  }

  .experiences-section > p {
    margin: 14px 0 30px;
    padding: 0;
    font-size: 16px;
    text-align: center;
  }

  @media only screen and (min-width: 740px) {
    .experiences-section {
      max-width: calc(360px * 2);
      margin: 30px auto 0;
    }

    .experiences-section > p {
      margin-bottom: 40px;
      font-size: 17px;
    }
  }

  @media only screen and (min-width: 1081px) {
    .experiences-search {
      position: relative;
      display: block;
      max-width: 1080px;
      margin: 30px auto 0;
      padding: 20px 0;
      background-color: #f3f3f3;
      z-index: 50;
    }

    .search-bar {
      width: 100%;
      padding: 14px 50px;
      font-size: 16px;
      background: #fff 15px 15px no-repeat;
      background-image: url("~assets/icons/search.svg");
      background-size: 18px 18px;
      background-position: 16px 50%;
      border: 1px solid #e4e9ec;
      outline: 0;
    }

    .fixed {
      position: sticky;
      position: -webkit-sticky;
      padding: 20px 0;
      top: 0;
    }

    .experiences-section {
      max-width: 1080px;
      margin: 40px auto 0;
    }

    .experiences-section > p {
      margin-bottom: 50px;
      font-size: 18px;
    }
  }
</style>