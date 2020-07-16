<template>
  <div class="paper-bg gallery-body">
      <h1>Gallery</h1>

      <!-- <b-carousel
        id="carousel-fade"
        :interval="6000"
        controls
        fade
        indicators
        img-width="800"
        img-height="480"
        >

        <b-carousel-slide
        caption=""
        img-src="../assets/images/gallery/gallery1.jpg"
        ></b-carousel-slide>

        <b-carousel-slide
        caption=""
        img-src="../assets/images/gallery/gallery2.jpg"
        ></b-carousel-slide>

        <b-carousel-slide
        caption=""
        img-src="../assets/images/gallery/gallery3.jpg"
        ></b-carousel-slide>

        <b-carousel-slide
        caption=""
        img-src="../assets/images/gallery/gallery4.jpg"
        ></b-carousel-slide>

        <b-carousel-slide
        caption=""
        img-src="../assets/images/gallery/gallery5.jpg"
        ></b-carousel-slide>

        <b-carousel-slide
        caption=""
        img-src="../assets/images/gallery/gallery6.jpg"
        ></b-carousel-slide>

    </b-carousel> -->
    <br>
    <div class="gallery-image-individual">
        <img src="../assets/images/gallery/gallery1.jpg" alt="">
        <img src="../assets/images/gallery/gallery2.jpg" alt="">
        <img src="../assets/images/gallery/gallery3.jpg" alt="">
        <img src="../assets/images/gallery/gallery4.jpg" alt="">
        <img src="../assets/images/gallery/gallery5.jpg" alt="">
        <img src="../assets/images/gallery/gallery6.jpg" alt="">
    </div>


  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

@media(max-width: 768px) {
    .gallery-image-individual img {
        max-width: 100%;
        width: 500px;
        margin: 15px auto;
    }
}

@media(min-width: 768px) {
    #carousel-fade  {
        width: 800px;
        margin: auto;
    }

    .gallery-image-individual {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 15px;
        width: 90%;
        margin: auto;
        padding-bottom: 100px;
    }

    .gallery-image-individual img {
        max-width: 100%;
        width: 500px;
        margin: auto;
    }
}

</style>