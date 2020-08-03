window.handleAboutRequest = async() => {
    document.body.innerHTML = `
    <header></header>
    <div class="about"><h2>About Meal-Sharing</h2>
    <p>Meal Sharing is a website where you can book your favourite cuisine and also create your own meals for others to get a taste of your culinary skills.<br>
    We help you make healthy eating choices at fair prices.<br>
    Our mission is to revolutionize food and make healthy eating fun.<br>
    So, go ahead and buy your favorite meal or share some love by creating a meal!</p>
    <p>Contact Us:</p>
    <ul>
     <li>Phone: +45 12 34 56 78</li>
     <li>Email: info@mealsharing.com</li>
     </ul>
     </div>
    <footer> 
		</footer>
  `;
  $(document).ready(function(){
    $('header').load("pages/header.html");
   $('footer').load("pages/footer.html");
});
};
