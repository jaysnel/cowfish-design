<template>
  <div class="story paper-bg">
    <!-- <div class="dl">
      <h1>Our Story</h1>
    </div> -->
    <div class="our-story-content">
      <div>
        <h1>Our Story</h1>
        <img class="our-story-main-image" src="../assets/images/story/cowfishstoryDL.jpg" alt="">
      </div>
      <br/>
      <h2>"You, my friend, are an idiot."</h2>
      <br/>
      <p>
        So declared Marcus Hall when his business partner Alan Springate called him with an idea to create the first ever sushi burger bar. Yes, never-frozen, hand-prepared sushi and burgers under one roof.
        <br/><br/>
        But Marcus, given to routine idiocy himself, embraced the idea. Soon after, these two knuckleheads had taken the idea and put meat on the bones, so to speak. Strangely enough, The Cowfish was born. And now it can be experienced in Charlotte, Raleigh, Orlando (Universal Studios) and Birmingham.
        <br/><br/>
        Upon entering The Cowfish, you are exposed to the technicolor walls, original off-beat artwork, and the exotic fish (including real cowfish) darting around in larger-than-life aquariums. To pique the senses further, expect nostril nudging, taste bud tickling and visually vivid food—the likes of which you’ve never tasted.
        <br/><br/>
        And oh, the sounds. Eclectic music (Vanilla Ice and Johnny Cash meet Bruno Mars out on a date with Britney Spears). Exuberant laughter. Animated conversation. Sizzling dishes. Silverware clanging. Chopsticks chopping. And Gongs. Yes, gongs. That is to say, don’t expect to blend in if it’s your birthday.
        <br/><br/>
        But the best part about The Cowfish? The people. From the kitchen to entrance, we hire people who sparkle. You know the type. They just seem to ooze optimism, and it’s genuine. You’re not exactly sure why, but you kinda’ want to hang out with ‘em. Yeah, we know every restaurant claims to focus on service.
        <br/><br/>
        <b>Come meet the Cowfish folks. The proof is in the experience.</b>
      </p>

      <div class="story-images">
        <img class="crooked-image1" src="../assets/images/story/friend1.png" alt="">
        <img class="crooked-image2" src="../assets/images/story/friend2.png" alt="">
        <img class="crooked-image3" src="../assets/images/story/friend3.png" alt="">
      </div>
  </div>
    </div>
</template>


<script>
export default {
  name: 'Story',
  components: {
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

.our-story-main-image {
  max-width: 100%;
  width: 1000px;
}

.our-story-content {
  padding: 15px;
  background: transparent;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
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


@media(min-width: 768px) {
  .our-story-content {
    width: 75%;
    margin: 15px auto;
  }
}

</style>