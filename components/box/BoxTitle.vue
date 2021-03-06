<template>
  <h3>
    <slot></slot>
  </h3>
</template>

<style scoped>
  @font-face {
    font-family: "Qanelas-Heavy";
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url("~assets/fonts/Qanelas-Heavy.ttf") format("truetype");
  }

  h3 {
    margin: 0 0 22px;
    font-family: "Qanelas-Heavy", sans-serif;
    font-size: 22px;
    font-weight: 900;
    text-transform: uppercase;
  }

  h3::after {
    content: "";
    display: block;
    max-width: 70px;
    margin-top: 12px;
    border: 1px solid #000;
  }
</style>