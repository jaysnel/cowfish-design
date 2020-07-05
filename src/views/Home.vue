<template>
  <div class="home">
    <DL/>

    <p>A kaleidoscope of ingredients that come together to craft one-of-a-kind fresh sushi and burger dishes to die for. Then they collide to form a crazy but delicious new food called “burgushi”. And a lovable, responsive wait staff, original pop art, and larger-than-life fish tanks –with actual cowfish—top it all off to make The Cowfish a crazy good experience.</p>
    <Feature1 />

    <p>
      The Cowfish burgers are made from ½ pound of all-natural beef, turkey, lamb, or bison. And all our meats have been raised humanely—never spanked, only put in time-out—and never, ever given antibiotics or hormones.
      <br/>
      These aren’t your drive-thru burgers, people. We double-dare you to try the Big Squeal, a half-pound beef burger topped with pulled pork, smoked gouda cheese, onion strings, bacon coleslaw, BBQ sauce, lettuce and pickles on a brioche bun.
      <br/>
      <i>Holy cowfish! What a mouthful!</i>
      </p>

    <p>
      Is it a burger? Is it sushi?
      <br/>
      No, it’s Burgushi®, a cutting-edge fusion of sandwiches made with sushi stuff, and sushi crafted with burger stuff. Take the All-American Bacon Double CheeseBurgushi: seasoned all natural beef, yellow and white cheddar cheeses, applewood bacon, and red onion, wrapped in soy paper and potato strings then flash fried. Topped with ketchup, mustard, dill pickle and Roma tomato.
      <br/>
      Odd idea. Fab taste.
    </p>

    <p>
      The Cowfish bar is really no joke. Yeah, it’s fun to sit there, eat your meal and watch the game on TV or get mesmerized by the big-honkin’ aquariums. But the drink menu is serious. Craft beers from local breweries; everything but ordinary cocktails and martinis; affordably delicious wines; premium sakes; spiked, hand-spun milkshakes.
      <br/>
      Cheers!
    </p>

    <Locations />
  </div>
</template>

<script>
import DL from './home/DL'
import Feature1 from './home/Feature1'
import Locations from './home/Locations'

export default {
  name: 'Home',
  components: {
    DL,
    Feature1,
    Locations
  }
}
</script>
