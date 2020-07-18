<template>
  <div class="paper-bg location-container">
    <!-- <div class="dl">
      <h1>Locations</h1>
    </div> -->
    <h1>Locations</h1>
    <div class="locations">
        <div>
            <div id="location-image-btn" class="location-items">
                <div>
                    <h2>Charlotte</h2>
                    <img src="../assets/images/locations/charlottelocation.jpg" alt="">
                    <br/>
                    <b-button id="show-btn" @click="$bvModal.show('charlotte')">View Information</b-button>
                </div>
                
                <div>
                    <h2>Raleigh</h2>
                    <img src="../assets/images/locations/raleighlocation.jpg" alt="">
                    <br/>
                    <b-button id="show-btn" @click="$bvModal.show('raleigh')">View Information</b-button>
                </div>

                <div>
                    <h2>Orlando</h2>
                    <img src="../assets/images/locations/orlandolocation.jpg" alt="">
                    <br/>
                    <b-button id="show-btn" @click="$bvModal.show('orlando')">View Information</b-button>
                </div>
            </div>
            <!-- ///////////////////////////////////////////////
            CHARLOTTE LOCATION
            /////////////////////////////////////////////// -->
            <b-modal id="charlotte" hide-footer>
                <template v-slot:modal-title>
                The Cowfish at SouthPark Mall
                </template>
                <div class="d-block text-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13048.57025918818!2d-80.8280475!3d35.1530651!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbc7ff5cdc7e9eeb7!2sThe%20Cowfish%20Sushi%20Burger%20Bar!5e0!3m2!1sen!2sus!4v1593987463027!5m2!1sen!2sus" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>                </div>
                <p>
                4310 Sharon Road
                <br/>
                Charlotte, NC 28211 (directions)
                <br/>
                Tel: 704-365-1922
                </p>
                <div class="social-icons-location">
                    <a href="https://www.facebook.com/TheCowfish" target="_blank"><i class="fab fa-facebook"></i></a>
                    <a href="https://twitter.com/the_cowfish" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/thecowfishsbb/" target="_blank"><i class="fab fa-instagram"></i></a>
                </div>
                <div>
                    <i class="far fa-clock"></i> <b>Hours</b>
                    <br>
                    Everyday: 11am-9pm
                </div>
                <br>
                <div class="location-items-info">
                    <div>
                        <p>
                        <a href="https://thecowfish.com/The_Cowfish_menu_Charlotte.pdf" target="_blank" rel="noopener noreferrer">
                            <i class="fas fa-hamburger"></i> <b>View Menu</b>
                        </a>
                        <br/>
                        Check out our Charlotte menu.<br>It’s a mouthful.
                        </p>
                    </div>
                
                    <div>
                        <p>
                        <i class="far fa-envelope"></i> <b>Apply</b>
                        <br/>
                        Come work with our Charlotte team! Apply <a href="">here.</a>
                        </p>
                    </div>
                </div>
            </b-modal>

            <!-- ///////////////////////////////////////////////
            RALEIGH LOCATION
            /////////////////////////////////////////////// -->
           <b-modal id="raleigh" hide-footer>
                <template v-slot:modal-title>
                The Cowfish at North Hills
                </template>
                <div class="d-block text-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12937.95537235586!2d-78.640051!3d35.8370151!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7204ac2d5510d03f!2sThe%20Cowfish%20Sushi%20Burger%20Bar!5e0!3m2!1sen!2sus!4v1593998282960!5m2!1sen!2sus" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>                </div>
                <p>
                North Hills - CAPTRUST Tower
                <br/>
                4208 Six Forks Road, Suite 100
                <br/>
                Raleigh, NC 27609 (directions)
                <br/>
                Tel: 919-784-0400
                </p>
                <div class="social-icons-location">
                    <a href="https://www.facebook.com/TheCowfish" target="_blank"><i class="fab fa-facebook"></i></a>
                    <a href="https://twitter.com/the_cowfish" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/thecowfishsbb/" target="_blank"><i class="fab fa-instagram"></i></a>
                </div>
                <div>
                    <i class="far fa-clock"></i> <b>Hours</b>
                    <br>
                    Everyday: 11am-9pm
                </div>
                <br>
                <div class="location-items-info">
                    <div>
                        <p>
                        <a href="https://thecowfish.com/The_Cowfish_menu_Raleigh.pdf" target="_blank" rel="noopener noreferrer">
                            <i class="fas fa-hamburger"></i> <b>View Menu</b>
                        </a>
                        <br/>
                        Check out our Raleigh menu.<br>It’s a mouthful.
                        </p>
                    </div>

                    <div>
                        <p>
                        <i class="far fa-envelope"></i> <b>Apply</b>
                        <br/>
                        Come work with our Charlotte team! Apply <a href="">here.</a>
                        </p>
                    </div>
                </div>
            </b-modal>

            <!-- ///////////////////////////////////////////////
            ORLANDO LOCATION
            /////////////////////////////////////////////// -->
            <b-modal id="orlando" hide-footer>
                <template v-slot:modal-title>
                The Cowfish at Universal Orlando Resort
                </template>
                <div class="d-block text-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14028.868698930146!2d-81.4654681!3d28.4730056!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2777135cc55bf9e5!2sThe%20Cowfish%C2%AE%20Sushi%20Burger%20Bar!5e0!3m2!1sen!2sus!4v1593998923648!5m2!1sen!2sus" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>                </div>
                <p>
                6000 Universal Boulevard
                <br/>
                Orlando, FL 32819 (directions)
                <br/>
                Tel: 407-224-3663
                </p>
                <div class="social-icons-location">
                    <a href="https://www.facebook.com/TheCowfish" target="_blank"><i class="fab fa-facebook"></i></a>
                    <a href="https://twitter.com/the_cowfish" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/thecowfishsbb/" target="_blank"><i class="fab fa-instagram"></i></a>
                </div>

                <div class="location-items">
                    <div>
                        <p>For more information on this location, please click the link below.</p>
                        <a href="https://www.universalorlando.com/web/en/us/things-to-do/dining/the-cowfish" target="_blank"><b-button variant="success">Learn More</b-button></a>
                    </div>
                </div>
            </b-modal>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Locations"
}
</script>

<style scoped>
.paper-bg {
    height: 100vh;
}

.dl {
  display: grid;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background: url('../assets/images/locations/locationsDL.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.dl h1 {
  color: #fff;
  font-size: 5rem;
  margin-top: -15%;
}

#location-image-btn {
    max-width: 100%;
    width: 1100px;
}

.location-items div img {
    max-width: 100%;
    width: 225px;

    margin-bottom: 5px;
}
.location-items div .btn {
    max-width: 100%;
    width: 225px;

    margin-bottom: 5px;
}

@media (min-width: 768px) {
    .location-items {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        width: 100%;
        margin: auto;
    }

    .location-items-info {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>