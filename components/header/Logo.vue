<template>
  <div class="logo">
    <h1>jbondu9</h1>
  </div>
</template>

<style scoped>
  @font-face {
    font-family: "Qanelas-ExtraBold";
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url("~assets/fonts/Qanelas-ExtraBold.ttf") format("truetype");
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    margin: 0 calc(.6vw + 6px);
    padding: 0;
    font-family: "Qanelas-ExtraBold", sans-serif;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: transparent;
    background-image: url("~assets/textures/concrete.jpg");
    background-size: contain;
    background-clip: text;
    -webkit-background-clip: text;
    filter: saturate(200%) invert(100%);
  }

  @media only screen and (max-width: 767px) {
    h1 {
      font-size: 28px;
    }
  }

  @media only screen and (min-width: 768px) {
    h1 {
      font-size: 36px;
    }
  }
</style>