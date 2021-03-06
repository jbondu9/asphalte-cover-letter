<template>
  <div class="box">
    <slot></slot>
  </div>
</template>

<style scoped>
  .box {
    padding: 40px;
    background-color: #fff;
  }

  @media only screen and (min-width: 768px) {
    .box {
      padding: 40px 80px;
    }
  }
</style>