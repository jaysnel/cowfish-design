<template>
  <div class="paper-bg">
      <div class="career-body">
        <h1>Careers</h1>
        <h2>FACT: Although the adults are generally quite square in shape, young cowfish* are more rounded and often exhibit brighter colors.</h2>
        <p>
            We’re looking for fabulously fun and friendly cowfish to join our team—regardless of age, shape, color or fish breath (we have mints for that).
            <br><br>
            <b>Wanna’ swim with us?</b>
            <br><br>
            <b-button variant="warning">Apply Here ></b-button>
        </p>
        <br>
      </div>
      <img class="career-image-main" src="../assets/images/careers/cowfish-fish.jpg" alt="">
  </div>
</template>
<style scoped>
    .career-body {
        padding: 15px;
    }

    .career-body h2 {
        font-size: 1.5rem;
    }

    .career-image-main {
        max-width: 100%;
        width: 800px;
    }

    @media(min-width: 768px) {
        .career-body {
            width: 80%;
            margin: auto;
        }
    }
</style>