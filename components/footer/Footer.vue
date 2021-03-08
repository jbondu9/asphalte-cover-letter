<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h4>Me suivre</h4>
        <ul class="img-link">
          <li>
            <a class="footer-link" href="https://www.linkedin.com/in/jbondu" target="_blank" rel="noreferrer">
              <img src="~/assets/icons/linkedin-white.svg">
            </a>
          </li>
          <li>
            <a class="footer-link" href="https://github.com/jbondu9" target="_blank" rel="noreferrer">
              <img src="~/assets/icons/github-white.svg">
            </a>
          </li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Photos &amp; icons</h4>
        <ul>
          <li>
            <a class="footer-link" href="https://unsplash.com" target="_blank" rel="noreferrer">Unsplash</a>
          </li>
          <li>
            <a class="footer-link" href="https://www.flaticon.com/" target="_blank" rel="noreferrer">Flaticon</a>
          </li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Documentation</h4>
        <ul>
          <li>
            <a class="footer-link" href="https://fr.nuxtjs.org" target="_blank" rel="noreferrer">Nuxt</a>
          </li>
          <li>
            <a class="footer-link" href="https://fr.vuejs.org" target="_blank" rel="noreferrer">Vue</a>
          </li>
          <li>
            <a class="footer-link" href="https://grafikart.fr" target="_blank" rel="noreferrer">Grafikart</a>
          </li>
          <li>
            <a class="footer-link" href="https://stackoverflow.com" target="_blank" rel="noreferrer">Stackoverflow</a>
          </li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Passé par</h4>
        <div class="img-link column">
          <img src="~/assets/icons/solinum.svg" style="width: 46px">
          <img src="~/assets/icons/thales.svg" style="max-width: 100px; height: 46px">
        </div>
      </div>
    </div>
    <div class="footer-logo">
      <span>jbondu9</span>
    </div>
  </footer>
</template>

<style scoped>
  @font-face {
    font-family: "Qanelas-ExtraBold";
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url("~assets/fonts/Qanelas-ExtraBold.ttf") format("truetype");
  }

  .footer {
    padding: 50px 20px 0;
    color: #fff;
    background-color: #000;
  }

  .footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .footer-section {
    width: 100%;
    padding: 0 20px 30px;
  }

  h4 {
    margin: 0 0 .5em;
    font-family: "Qanelas-Bold", sans-serif;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-align: center;
    text-transform: uppercase;
  }

  h4::after {
    content: "";
    display: block;
    width: 50px;
    margin: 10px auto 20px;
    border: 1px solid #fff;
  }

  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
  }

  .img-link {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img-link.column {
    flex-flow: column;
  }

  .img-link li {
    margin: 5px;
  }

  .img-link img {
    display: block;
    max-width: 46px;
    max-height: 46px;
  }

  li {
    line-height: 1.35;
  }

  li > a {
    transition: all .2s;
  }

  li > a:hover {
    color: rgba(255, 255, 255, .6);
  }

  .footer-logo {
    min-height: 140px;
    text-align: center;
  }

  .footer-logo > span {
    font-family: "Qanelas-ExtraBold", sans-serif;
    font-weight: 800;
    text-transform: uppercase;
    color: transparent;
    background-image: url("~assets/textures/concrete.jpg");
    background-size: contain;
    background-clip: text;
    -webkit-background-clip: text;
    filter: saturate(200%);
  }

  @media only screen and (max-width: 767px) {
    .footer-logo > span {
      font-size: 52px;
    }
  }

  @media only screen and (min-width: 768px) {
    .footer-section {
      width: 25%;
    }

    .footer-logo > span {
      font-size: 64px;
    }
  }
</style>