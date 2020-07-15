<template>
  <div class="paper-bg">
      <h1>The Cowfish menu is huge.</h1>
      <p>
        Huge as an elephant. Huger than a cruise ship. More huger than the Empire State Building! Well, maybe not that huge. But there’s so much to choose from that you can even find something cranky Aunt Mildred will eat.
        <br/>
        AND, we’re picky about our ingredients. Only the freshest and purest welcome here. 
      </p>

      <div class="menu-buttons">
          <a href="https://thecowfish.com/The_Cowfish_menu_Charlotte.pdf" target="_blank" rel="noopener noreferrer">
            <b-button variant="warning">Charlotte Menu</b-button>
          </a>

          <a href="https://thecowfish.com/The_Cowfish_menu_Raleigh.pdf" target="_blank" rel="noopener noreferrer">
            <b-button variant="warning">Raleigh Menu</b-button>
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <b-button variant="warning">Orlando Menu</b-button>
          </a>
      </div>

        <div class="food-information">
            <div class="food-item burger-chicken">
                <div>
                    <img src="../assets/menus/burger.png" alt="">
                </div>
                <div>
                    <h2>Burgers + Chicken</h2>
                    <p>
                        100% all-natural (not fake) chicken, Angus ground beef, turkey, lamb, or bison. Raised humanely--never spanked, only put in time-out.
                        <br/>
                        Never, ever given antibiotics or hormones.
                    </p>
                </div>
            </div>

            <div class="food-item sushi-fish">
                <div>
                    <img src="../assets/menus/sushifish.png" alt="">
                </div>
                <div>
                    <h2>Sushi & Fish</h2>
                    <p>
                        Sustainable, antibiotic-free and non-GMO. ‘Cause that’s just how we roll.
                        <br/>
                        Bigeye tuna is rod & reel caught in the US and Canada. Reely. No foolin’.
                    </p>
                </div>
            </div>

            <div class="food-item burger-chicken">
                <div>
                    <img src="../assets/menus/shellfish.png" alt="">
                </div>
                <div>
                    <h2>Shellfish</h2>
                    <p>
                        Chemical-free—passes the drug test every time.
                        <br/>
                        From the good ol’ U.S. of A. 
                    </p>
                </div>
            </div>

            <div class="food-item burger-chicken">
                <div>
                    <img src="../assets/menus/salad.png" alt="">
                </div>
                <div>
                    <h2>Salads & Produce</h2>
                    <p>
                        Locally sourced whenever possible, ‘cause we know how to pick ‘em.
                        <br/>
                        WARNING: Salads may exceed the size of your head. 
                    </p>
                </div>
            </div>
        </div>

        <div class="food-gallery">
            <img src="../assets/menus/food1.png">
            <img src="../assets/menus/food2.png">
            <img src="../assets/menus/food3.png">
            <img src="../assets/menus/food4.png">
            <img src="../assets/menus/food5.png">
            <img src="../assets/menus/food6.png">
        </div>
  </div>
</template>

<script>
export default {
    name: 'Menus'
}
</script>

<style scoped>

.menu-buttons .btn {
    margin: 10px;
}

.food-item {
    background: transparent;
    margin: 10px;
    padding: 10px;

    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
}

.food-information div img {
    max-width: 100%;
    width: 100px;
}

@media(min-width: 768px) {
    .food-information {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    .food-gallery {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-items: center;

        max-width: 100%;
        width: 85%;
        margin: auto;
    }
}
    
</style>