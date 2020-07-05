<template>
  <div class="story">
    <div class="dl">
      <h1>Our Story</h1>
    </div>
    <div>
      <h2>"You, my friend, are an idiot."</h2>
      <p>
        So declared Marcus Hall when his business partner Alan Springate called him with an idea to create the first ever sushi burger bar. Yes, never-frozen, hand-prepared sushi and burgers under one roof.
        <br/>
        But Marcus, given to routine idiocy himself, embraced the idea. Soon after, these two knuckleheads had taken the idea and put meat on the bones, so to speak. Strangely enough, The Cowfish was born. And now it can be experienced in Charlotte, Raleigh, Orlando (Universal Studios) and Birmingham.
        <br/>
        Upon entering The Cowfish, you are exposed to the technicolor walls, original off-beat artwork, and the exotic fish (including real cowfish) darting around in larger-than-life aquariums. To pique the senses further, expect nostril nudging, taste bud tickling and visually vivid food—the likes of which you’ve never tasted.
        <br/>
        And oh, the sounds. Eclectic music (Vanilla Ice and Johnny Cash meet Bruno Mars out on a date with Britney Spears). Exuberant laughter. Animated conversation. Sizzling dishes. Silverware clanging. Chopsticks chopping. And Gongs. Yes, gongs. That is to say, don’t expect to blend in if it’s your birthday.
        <br/>
        But the best part about The Cowfish? The people. From the kitchen to entrance, we hire people who sparkle. You know the type. They just seem to ooze optimism, and it’s genuine. You’re not exactly sure why, but you kinda’ want to hang out with ‘em. Yeah, we know every restaurant claims to focus on service.
        <br/>
        Come meet the Cowfish folks. The proof is in the experience.
      </p>
    </div>
    <div class="story-images">
      <img class="crooked-image1" src="../assets/images/story/friend1.png" alt="">
      <img class="crooked-image2" src="../assets/images/story/friend2.png" alt="">
      <img class="crooked-image3" src="../assets/images/story/friend3.png" alt="">
    </div>

    <Footer />
  </div>
</template>


<script>
import Footer from './Footer'

export default {
  name: 'Story',
  components: {
    Footer
  },
  data() {
      return {
      }
    }
}
</script>

<style scoped>
.story {
  width: 100%;
}
.dl {
  display: grid;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background: url('../assets/images/story/cowfishstoryDL.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.dl h1 {
  color: #fff;
  font-size: 5rem;
  margin-top: -15%;
}

.crooked-image1 {
  transform: rotate(1.5deg);
}
.crooked-image2 {
  transform: rotate(2deg);
}
.crooked-image3 {
  transform: rotate(-1deg);
}

</style>