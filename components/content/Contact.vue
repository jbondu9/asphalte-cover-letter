<template>
  <section class="contact-btn-section">
    <nuxt-link to="#top" class="contact-btn">
      Je contacte
      <span>⟩</span>
    </nuxt-link>
  </section>
</template>

<style scoped>
  .contact-btn-section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 280px;
    margin: 30px 0 0;
    background: center / cover url("~assets/images/contact.jpg");
  }

  .contact-btn {
    position: relative;
    padding: 12px 35px 12px 20px;
    font-family: "Qanelas-Bold", sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    background-color: #000;
    border: 3px solid #000;
    cursor: pointer;
  }

  .contact-btn > span {
    position: absolute;
    right: 20px;
    top: 50%;
    padding-left: 15px;
    font-size: 10px;
    font-weight: 800;
    transform: translateY(-41%);
    transition: all .3s ease;
  }

  .contact-btn:hover > span {
    right: 15px;
  }

  @media only screen and (min-width: 768px) {
    .contact-btn-section {
      margin-top: 45px;
      background: center / cover url("~assets/images/contact.jpg");
    }

    .contact-btn > span {
      transform: translateY(-46%);
    }
  }

  @media only screen and (min-width: 1125px) {
    .contact-btn-section {
      margin-top: 60px;
      height: 470px;
    }

    .contact-btn > span {
      transform: translateY(-50%);
    }
  }
</style>