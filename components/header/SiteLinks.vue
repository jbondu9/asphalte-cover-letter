<template>
  <ul class="nav-list">
    <li class="nav-item"><nuxt-link to="/experience">Expérience</nuxt-link></li>
    <li class="nav-item"><nuxt-link to="/agenda">Bientôt disponible</nuxt-link></li>
  </ul>
</template>

<style scoped>
  .nav-list {
    list-style: none;
  }

  .nav-item > a {
    position: relative;
    font-family: "Qanelas-Bold", sans-serif;
    font-weight: 700;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 767px) {
    .nav-list {
      margin: 0;
      padding: 20px 30px;
    }

    .nav-item > a {
      display: block;
      padding: 10px;
      font-size: 18px;
    }
  }

  @media only screen and (min-width: 768px) {
    .nav-list {
      display: flex;
      padding: 0;
    }

    .nav-item {
      margin: 0 calc(.6vw + 6px);
    }

    .nav-item > a {
      padding: 3px 0;
      font-size: 13px;
      letter-spacing: 2px;
    }

    .nav-item > a::before {
      content: "";
      position: absolute;
      bottom: 0px;
      left: 50%;
      height: 2px;
      width: 70%;
      background-color: #000;
      transform: translateX(-51%);
      opacity: 0;
      transition: opacity .25s;
    }

    .nav-item:hover > a::before {
      opacity: 1;
    }
  }
</style>