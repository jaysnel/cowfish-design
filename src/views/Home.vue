<template>
<div class="home-container">
      <div class="home">
        <!-- hero image section -->
        <div id="hero-image">
          <div class="hero-content">
            <img class="cowfish-logo" src="../assets/images/cowfishlogo.png" alt="">
          </div>
        </div>
        <!-- end hero image section -->
        <div class="content-section-black">
            <p>
              <span class="content-header">Welcome to Crazy Good!</span>
              <br/>
              A kaleidoscope of ingredients that come together to craft one-of-a-kind fresh sushi and burger dishes to die for. Then they collide to form a crazy but delicious new food called “burgushi”. And a lovable, responsive wait staff, original pop art, and larger-than-life fish tanks – <b>with actual cowfish</b> — top it all off to make The Cowfish a crazy good experience.
            </p>
        </div>
        <Locations />
        <!-- feature section -->
        <Feature1 id="feature-section" />
        <!-- end feature section -->
        <div class="content-section-black">
          <p>
            <span class="content-header">Think you're ready?</span>
            <br/>
            The Cowfish bar is really no joke. Yeah, it’s fun to sit there, eat your meal and watch the game on TV or get mesmerized by the big-honkin’ aquariums. But the drink menu is serious. Craft beers from local breweries; everything but ordinary cocktails and martinis; affordably delicious wines; premium sakes; spiked, hand-spun milkshakes.
            <br/>
            <b>Cheers!</b>
          </p>
        </div>
      </div>
  </div>
</template>

<script>
// import DL from './home/DL'
import Feature1 from './home/Feature1'
import Locations from './home/Locations'

export default {
  name: 'Home',
  components: {
    Feature1,
    Locations
  }
}
</script>

<style scoped>
  .home {
    margin: 0 5px;
  }

  #hero-image {
    background: url("../assets/images/home/cowfishDLExtra2.jpg");
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 100vh;
  }

  #hero-image .hero-content {
    display: grid;
    grid-template-columns: repeat(1,1fr);
    align-items: center;
    justify-items: center;
    width: 100%;
    height: 100%;
  }

  .hero-content .cowfish-logo {
    max-width: 100%;
  }
  
  @media(max-width: 768px) {
    .home {
      margin: 0;
    }

    #hero-image {
      margin-top: -85px;
    }
  }
</style>