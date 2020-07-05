<template>
  <div class="feature-section">
      <img src="../../assets/images/home/fish.png">
      <img src="../../assets/images/home/burger.png">
      <img src="../../assets/images/home/sushi.png">
      <img src="../../assets/images/home/wave.png">
  </div>
</template>

<script>
export default {
    name: "Feature1",
    data() {
      return {
      }
    }
}
</script>

<style scoped>
.feature-section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.feature-section img {
    max-width: 100%;
    width: 100px;
    margin: auto;
}

</style>