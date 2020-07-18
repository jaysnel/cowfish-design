<template>
  <div class="feature-section-outer-container">
    <div class="feature-section feature-section-2">
      <div class="feature-section-content feature-section-2-content">
        <p>
         <span class="content-header">We double-burger-patty dare you.</span>
         <br/><br/>
          The Cowfish burgers are made from ½ pound of all-natural beef, turkey, lamb, or bison. And all our meats have been raised humanely—never spanked, only put in time-out—and never, ever given antibiotics or hormones.
          <br/><br/>
          These aren’t your drive-thru burgers, people. We double-dare you to try the Big Squeal, a half-pound beef burger topped with pulled pork, smoked gouda cheese, onion strings, bacon coleslaw, BBQ sauce, lettuce and pickles on a brioche bun.
          <br/><br/>
          <i><b>Holy cowfish! What a mouthful!</b></i>
        </p>
      </div>
      <div class="feature-section-img feature-section-2-img"></div>
    </div>
    <div class="feature-section feature-section-1">
      <div class="feature-section-img feature-section-1-img"></div>
      <div class="feature-section-content feature-section-1-content">
        <p>
          <span class="content-header">Is it a burger? Is it sushi?</span>
         <br/><br/>
          No, it’s Burgushi®, a cutting-edge fusion of sandwiches made with sushi stuff, and sushi crafted with burger stuff. Take the All-American Bacon Double CheeseBurgushi: seasoned all natural beef, yellow and white cheddar cheeses, applewood bacon, and red onion, wrapped in soy paper and potato strings then flash fried. Topped with ketchup, mustard, dill pickle and Roma tomato.
          <br/><br/>
          <i><b>Odd idea. Fab taste.</b></i>
        </p>
      </div>
    </div>
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
.feature-section-outer-container {
    height: 100%;
}

.feature-section-1-img {
  background: url('../../assets/images/home/cowfishDL5.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
}

.feature-section-2-img {
  background: url('../../assets/images/home/cowfishDL4.jpg');
  background-size: cover;
  background-position: center center;
  height: 100%;
}


@media(max-width: 768px) {
  .feature-section {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
      height: 80vh;
  }

  .feature-section-2 {
      display: flex;
      flex-direction: column-reverse;
      width: 100%;
  }
  .feature-section-1 {
      display: flex;
      flex-direction: column;
      width: 100%;
  }

  .feature-section-content  {
    display: grid;
    align-items: center;
    background: var(--feature-bg);
    color: var(--feature-text);
  }
}


@media(min-width: 768px) {
  .feature-section {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
      height: 90vh;
  }

  .feature-section-content  {
    display: grid;
    align-items: center;
    background: var(--feature-bg);
    color: var(--feature-text);
    padding: 70px;
    line-height: 30px;
  }
}
</style>