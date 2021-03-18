<template>
  <div class="experiences-list">
    <div v-for="(experience, i) in experiences" :key="i" class="experience-card">
      <div class="experience-glyph">
        <img :src="require(`~/assets/images/${experience.src}`)">
        <div class="experience-date">
          {{ experience.date }}
        </div>
      </div>
      <div class="experience-details">
        <h4 class="experience-title">{{ experience.title }}</h4>
        <span class="experience-localization"></span>
        <span class="experience-place">{{ experience.place }}</span>
        <p>
          {{ experience.details }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      "experiences"
    ]
  }
</script>

<style scoped>
  .experiences-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .experience-card {
    width: 100%;
    max-width: 350px;
    margin-bottom: 40px;
  }

  .experience-glyph {
    position: relative;
    width: 100%;
    text-align: center;
    overflow: hidden;
  }

  .experience-glyph::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .4);
    z-index: 1;
    transition: opacity .25s ease;
  }

  .experience-glyph:hover > img {
    transform: scale(1.1);
  }

  .experience-glyph:hover .experience-date {
    opacity: 0;
  }

  .experience-glyph:hover::after {
    opacity: 0;
  }

  .experience-glyph > img {
    width: auto;
    height: 100%;
    max-height: 380px;
    vertical-align: middle;
    transition: all .25s ease;
  }

  .experience-date {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-weight: 700;
    font-family: "Qanelas-Bold", sans-serif;
    font-size: 16px;
    opacity: 1;
    transition: opacity .25s ease;
    z-index: 2;
  }

  .experience-details {
    width: 100%;
    padding: 8px 0;
  }

  .experience-details > p {
    width: 100%;
    margin: 2px 0 0;
    font-size: 14px;
    color: rgba(0, 0, 0, .8);
  }

  .experience-title, .experience-place {
    display: inline-block;
    font-size: 16px;
    font-weight: 700;
    font-family: "Qanelas-Bold", sans-serif;
    margin: 0;
  }

  .experience-localization {
    display: inline-block;
    width: 16px;
    height: 2px;
    margin: 4px 8px;
    background-color: #000;
  }

  .experience-card:nth-of-type(2) img {
    position: relative;
    left: -30%;
  }

  .experience-card:nth-of-type(4) img {
    position: relative;
    left: -20%;
  }

  .experience-card:nth-of-type(5) img {
    position: relative;
    left: -30%;
  }

  @media only screen and (min-width: 721px) {
    .experience-card {
      width: 45%;
    }
    
    .experiences-list {
      justify-content: space-between;
    }
  }

  @media only screen and (min-width: 1081px) {
    .experience-card {
      width: 32%;
    }

    .experience-card:nth-child(3n+2) {
      margin-left: 2%;
      margin-right: 2%;
    }

    .experiences-list {
      justify-content: flex-start;
    }
  }
</style>