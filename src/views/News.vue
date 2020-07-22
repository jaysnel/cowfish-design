<template>
  <div class="paper-bg">
      <div class="news-header-section">
        <h1>News</h1>
        <h3>For media inquiries, contact Jen Brantley at <a class="email-link" href="mailto:jennifer.brantley@thecowfish.com">jennifer.brantley@thecowfish.com.</a></h3>
      </div>
        <br>
      <div class="blogs-section">
          <div>
              <div>
                <h3>ABC11 Highlights The Cowfish as one of the Five Best Japanese spots in Raleigh</h3>
                <p>May 4, 2018</p>
                <a href="http://abc11.com/food/here-are-the-5-best-japanese-spots-in-raleigh/3430451/" target="_blank"><b-button>Read Full Post</b-button></a>
              </div>
          </div>

          <div>
              <h3>John Peterson is back for a repeat win at the Well's Fargo Championship...and back for dinner</h3>
              <p>May 3, 2018</p>
              <a href="https://golfweek.com/2018/05/03/its-win-or-retire-for-the-29-year-old-wells-fargo-championship-leader/" target="_blank"><b-button>Read Full Post</b-button></a>
          </div>

      </div>
      <br>
      <br>
      <br>
      <br>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h3 {
    font-size: 1.3rem;
}

.news-header-section {
    max-width: 100%;
    width: 100%;
}

.blogs-section {
    display: grid;
    grid-template-columns: repeat(1,1fr);
}

.blogs-section > div {
    background: transparent;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);

    width: 60%;
    margin: 15px auto;
    padding: 10px;
}

.blogs-section h3 {
    font-size: 1.5rem;
}

@media(max-width: 768px) {
    h2 {
        font-size: 1.5rem;
    }
    
    .paper-bg * {
        max-width: 100%;
        width: 100%;
    }

    .blogs-section > div {
        width: 90%;
    }
}
</style>