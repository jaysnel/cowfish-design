<template>
  <div class="cities">
      <div>
          <img src="../../assets/images/home/charlotte.jpg" alt="">
      </div>
      <div>
          <img src="../../assets/images/home/raleigh.jpg" alt="">
      </div>
      <div>
          <img src="../../assets/images/home/orlando.jpg" alt="">
      </div>
  </div>
</template>

<script>
export default {
    name: "Locations",
    data() {
      return {
      }
    }
}
</script>

<style scoped>
.cities {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.cities img {
    max-width: 100%;
    width: 200px;
    border-radius: 50%;
    margin: 5%;
}
</style>