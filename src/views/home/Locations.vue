<template>
<b-container>
    <h1>Locations</h1>
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
</b-container>
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


    margin-bottom: 15%;
}
</style>