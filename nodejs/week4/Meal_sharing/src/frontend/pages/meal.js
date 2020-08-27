window.handleMealRequest = (params) => {
  let mealName='';
  fetch("/api/meals/" + `${params.id}`)
    .then((response) => response.json())
    .then((result) => {
      mealName = result.map((meal) => meal.title);
    });

  fetch("/api/reservations")
    .then((response) => response.json())
    .then((result) => {
      const mealReservationsId = result.map((reservation) => reservation.id);
      const mealId = `${params.id}`;
      if (mealReservationsId.includes(parseInt(mealId))) {
        document.body.innerHTML = `
  <header><div class="container">
  <div class="logo-box">
      <a href="/">
          <img src="${window.location.origin}/pages/mealsharing_logo.png">
      </a>
  </div>
  <nav>
      <ul>
          <li><a href="/" data-navigo>home</a></li>
          <li><a href="/meals" data-navigo>meals</a></li>
          <li><a href="/about" data-navigo>about</a></li>
      </ul>
  </nav>
</div></header>
  <h1>${mealName}</h1>
  <h2>Make a reservation</h2>
  <div class="reservation_form">
  </div>
  <footer><div class="footer-distributed">
  <div class="footer-right">
    <a href="#"><i class="fab fa-facebook-square"></i></a>
    <a href="#"><i class="fab fa-twitter-square"></i></a>
    <a href="#"><i class="fab fa-linkedin"></i></a>
    <a href="#"><i class="fab fa-github-square"></i></a>
  </div>

  <div class="footer-left">
    <p class="footer-links">
      <a class="link-1" href="#">Blog</a>
      <a href="#">Pricing</a>
      <a href="#">Faq</a>
    </p>
    <p>Fauzia Siddique &copy; 2020</p>
  </div>
</div></footer>`;
       
        const div = document.querySelector("div.reservation_form");
        div.innerHTML = `
  <form onsubmit='saveReservation(this,${params.id})' class="meals_form">
    <label for="firstName">FirstName:</label>
    <input type="text" id="firstName" name="fname" placeholder="Your name.." required><br><br>
    <label for="lname">LastName:</label>
    <input type="text" id="lastName" name="lname" placeholder="Your last name.." required><br><br>
    <label for="phone">Phone number:</label>
    <input type="tel" id="phone" name="phone"
      placeholder="123-456-7890"
       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
       required><br><br>
       <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="example@domain.com" required><br><br>
    <label for="quantity">Quantity (between 1 and 30):</label>
    <input type="number" id="quantity" name="quantity" min="1" max="30" required>
    <input type="submit" value="Submit">
  </form>`;
  
  $(document).ready(function() {
    console.log("ready!");
});
      } else {
        alert("Sorry no available reservations");
        window.history.back();
      }
    });
};
async function saveReservation(form, mealId) {
  const requestBody = getNewMealInputValuesAsJsonString(form, mealId);
  console.log(requestBody);
  const response = await fetch("/api/reservations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: requestBody,
  });
  if (response.ok) {
    alert("Your reservation has been made!");
  } else {
    alert("Reservation Failed");
  }
}

function getNewMealInputValuesAsJsonString(form, mealId) {
  var formValues = {};
  var elements = form.querySelectorAll("input");
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var name = element.name;
    var value = element.value;
    if (name) {
      formValues[name] = value;
    }
  }
  formValues["mealId"] = mealId;
  return JSON.stringify(formValues);
}
