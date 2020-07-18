<template>
<b-container class="home-locations-section">
    <!-- <h1>Menu</h1> -->
    <div class="cities">
        <div class="home-location charlottelocation">
            <div @click="goToMenu('charlotte')">
                <h2>Charlotte<br/>Menu</h2>
            </div>
        </div>
        <div class="home-location raleighlocation">
            <div @click="goToMenu('raleigh')">
                <h2>Raleigh<br/>Menu</h2>
            </div>
        </div>
        <div class="home-location orlandolocation">
            <div @click="goToMenu('orlando')">
                <h2>Orlando<br/>Menu</h2>
            </div>
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
    },
    methods: {
        goToMenu: function(city) {
            if(city == 'charlotte') window.open('https://thecowfish.com/The_Cowfish_menu_Charlotte.pdf', '_blank');
            if(city == 'raleigh') window.open('https://thecowfish.com/The_Cowfish_menu_Raleigh.pdf', '_blank');
            if(city == 'orlando') window.open('https://www.universalorlando.com/web/en/us/things-to-do/dining/the-cowfish', '_blank');
        }
    }
}
</script>

<style scoped>
.home-locations-section {
    background: var(--main-red);
    width: 100%;
    max-width: 100%;
    padding: 0;
}

.home-locations-section h1 {
    color: var(--main-white);
    padding: 10px 0;
}

.home-location h2 {
    /* background: rgba(255,255,255,.7); */
    background: rgba(172, 19, 28, .7);
    /* background: rgba(0, 0, 0, .7); */
    width: 100%;
    color: #fff;
}

.home-location div {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    justify-items: center;

    background: rgba(255,255,255,.3);
    height: 100%;

    transition: background .7s ease-in-out;
}
.home-location div:hover {
    cursor: pointer;
    background: rgba(255,255,255,.5);

    transition: background .7s ease-in-out;
}

.charlottelocation {
    background: url('../../assets/images/locations/charlottelocationlarge.jpg');
}

.raleighlocation {
    background: url('../../assets/images/locations/raleighlocationsmall.jpg');
}

.orlandolocation {
    background: url('../../assets/images/locations/orlandolocationmedium.jpg');
}

.home-location {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}


@media(max-width: 768px) {
    .cities div {
        width: 100%;
        height: 400px;
    }
}

@media(min-width: 768px) {
    .cities {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        height: 400px;
    }
}

</style>