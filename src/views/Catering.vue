<template>
  <div class="paper-bg">
      <h1>Catering</h1>
      <h2>Can we crash your party? (We promise to be good.)</h2>
    <div class="catering-body-content text-left">
      <p>
          <b>In fact, we'll be delicious!</b> We offer full catering set-ups and party platters to-go, suitable for any event—from small gatherings to jumbo-sized extravaganzas! Choose from a variety of sushi, burgers, salads and sides. 
      </p>
      <p>
          <b><i>Kindly give us advance notice—our magic wand is in the shop for repairs!</i></b>
      </p>


        <div class="text-center catering-items">
            <div class="top-1">
                <div class="transparent-bg catering-sushi">
                    <br/>
                    <h5>Sushi Platters</h5>
                    <ul>
                        <li><b>Small</b><br/>Fiery Dragon Roll, Georgia Roll and Firecracker Roll, 2 California Rolls and 4 Nigiri (feeds up to 8 people) - $69</li><br/>
                        <li><b>Medium</b><br/>Boss roll, Doug’s Filet, Mark’s Roll, Georgia Roll, 2 California Rolls, Tuna Hosomaki and 6 Nigiri (feeds up to 12 people) - $99</li><br/>
                        <li><b>Large</b><br/>Boss Roll, Doug’s Filet, Mark’s Roll, Georgia Roll, Firecracker Roll, 2 California Rolls, Tuna Hosomaki and 12 Nigiri (feeds up to 18 people) - $129</li>				  		
                    </ul>
                </div>
                        
                <div class="transparent-bg catering-burger">
                    <br/>
                    <h5>Mini Burger Platters (served with condiments and American cheese*)</h5>
                    <ul>
                        <li><b>Small</b><br/>20 minis (feeds 10) - $70</li><br/>
                        <li><b>Medium</b><br/>30 minis (feeds 15) - $90</li><br/>
                        <li><b>Large</b><br/>40 minis (feeds 20) - $120</li>				  		
                    </ul>
                    <small><b><i>*Additional toppings and specialty burgers available upon request (additional charges may apply)</i></b></small><br><br>
                </div>
                

                <div class="transparent-bg catering-sides">
                    <br/>
                    <h5>Sides ($10 - feeds 3)</h5>
                    <ul>
                        <li>Bacon Cole Slaw</li>
                        <li>Seaweed Salad</li>
                        <li>Thai cucumbers</li>
                        <li>Edamame</li>				  		
                    </ul>	
                </div>
            </div>	
                
            <div class="transparent-bg catering-salad">
                <br/>
                <h5>Salads</h5>
                <ul class="inner-salad-items">
                    <li><b>Cobb Salad</b><br/>Grilled all-natural chicken, eggs, avocado, cheddar cheese, kalamata olives, cucumbers, bacon, cherry tomatoes and smoked blue cheese with choice of dressing
                        <ul><li>Small (feeds 10) - $65</li></ul>
                        <ul><li>Medium (feeds 15) - $90</li></ul>
                        <ul><li>Large (feeds 20) - $120</li></ul>
                    </li>
                    <li><b>Mixed Greens</b><br/>Cucumber, tomato and crisp wonton strips with choice of dressing
                        <ul><li>Small (feeds 10) - $30</li></ul>
                        <ul><li>Medium (feeds 15) - $40</li></ul>
                        <ul><li>Large (feeds 20) - $50</li></ul>
                    </li>
                    <li><b>Chinese Chicken Salad</b><br/>Grilled all-natural chicken, mixed greens, Asian slaw, snow peas, red peppers, cilantro, green onion and fresh tangerine with peanut ranch dressing
                        <ul><li>Small (feeds 10) - $55</li></ul>
                        <ul><li>Medium (feeds 15) - $80</li></ul>
                        <ul><li>Large (feeds 20) - $95</li></ul>				  		
                    </li>				  		
                </ul>
            </div>
                        
            <small><b><i>*Desserts and beverages available upon request.</i></b></small> 
            <br><br>
            <b>To order, contact us at <a href='mailto:feedback@thecowfish.com'>feedback@thecowfish.com.</a></b>
            </div>
    </div>
				
  </div>
</template>

<script>
export default {
    name: "Catering"
}
</script>

<style scoped>
    ul {
        margin: 10px;
        padding: 0;
    }

    .catering-body-content {
        padding: 15px;
    }

    .catering-items div h5 {
        font-weight: bold;
    }

    .catering-items div li {
        list-style-type: none;
    }

    .inner-salad-items > li {
        margin: 15px auto;
        margin: 0;
        padding: 0;
    }

    @media(max-width: 768px) {
        .top-1 div {
            margin: 10px auto;
        }
    }

    @media(min-width: 768px) {
        .catering-body-content {
            width: 65%;
            margin: auto;
        }

        .top-1 {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 15px;

            margin-bottom: 15px;
        }

        .inner-salad-items {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 15px;
        }
    }
</style>