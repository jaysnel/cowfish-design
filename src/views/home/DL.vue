<template>
  <div class="dl-container">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="900"
      img-height="250"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      fade=true
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="../../assets/images/home/cowfishDL1.jpg"
      >
      <div class="carousel-body-text">
        <img src="../../assets/images/cowfishlogo.png" alt="">
        <h1>Welcome to Crazy Good!</h1>
      </div>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="../../assets/images/home/cowfishDL3.jpg">
      <div>
        <h1>Are those chopsticks,
        <br/>
        or are you just happy to sashimi?</h1>
      </div>
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide img-src="../../assets/images/home/cowfishDL4.jpg">
      <div>
        <h1>We double-burger-patty dare you.</h1>
      </div>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide img-src="../../assets/images/home/cowfishDL5.jpg">
      <div>
        <h1>
            Okay, we agree this is just
            <br/>
            plain weird... but delicious.</h1>
      </div>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    name: 'DL',
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>


<style scoped>
@media(max-width: 768px) {
    .carousel-caption img {
      max-width: 100%;
      width: 250px;
    }
    .carousel-caption div h1 {
      font-size: 1.5rem !important;
    }
  }
  @media(min-width: 768px) {
    .carousel-caption img {
      max-width: 100%;
    }
    .carousel-caption div {
      padding-bottom: 20% !important;
    }

    .carousel-caption div h1 {
      font-size: 3rem !important;
    }
  }
</style>
