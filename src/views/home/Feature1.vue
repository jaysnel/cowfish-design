<template>
  <div class="feature-section">
    <div>
      <img src="../../assets/images/home/fish.png">
      <img src="../../assets/images/home/burger.png">
      <p>
          The Cowfish burgers are made from ½ pound of all-natural beef, turkey, lamb, or bison. And all our meats have been raised humanely—never spanked, only put in time-out—and never, ever given antibiotics or hormones.
          <br/>
          These aren’t your drive-thru burgers, people. We double-dare you to try the Big Squeal, a half-pound beef burger topped with pulled pork, smoked gouda cheese, onion strings, bacon coleslaw, BBQ sauce, lettuce and pickles on a brioche bun.
          <br/>
          <i>Holy cowfish! What a mouthful!</i>
          </p>
    </div>
    <div>
      <img src="../../assets/images/home/sushi.png">
      <img src="../../assets/images/home/wave.png">
      <p>
          Is it a burger? Is it sushi?
          <br/>
          No, it’s Burgushi®, a cutting-edge fusion of sandwiches made with sushi stuff, and sushi crafted with burger stuff. Take the All-American Bacon Double CheeseBurgushi: seasoned all natural beef, yellow and white cheddar cheeses, applewood bacon, and red onion, wrapped in soy paper and potato strings then flash fried. Topped with ketchup, mustard, dill pickle and Roma tomato.
          <br/>
          Odd idea. Fab taste.
        </p>
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
.feature-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.feature-section div {
  border: 2px solid #000;
  margin: 5px;
}

.feature-section img {
    max-width: 100%;
    width: 100px;
    margin: auto;
}

</style>