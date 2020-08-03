window.handleMealsRequest = async () => {
  document.body.innerHTML = `
  <header></header>
  <h1> Our Meals</h1>
  <div class="meals_list" id="mealList"><ul></ul></div>
  <h2>If you would like to share a meal, please fill this form!</h2>
  <div class="meals_adding_form">
  <form onsubmit='saveNewMeal(this)' class ="meals_form">
  <label for="title">Title:</label>
  <input type="text" id="title" name="title" placeholder="Meal name.." required><br><br>
  <label for="description">Description:</label>
  <input type="text" id="description" name="description" placeholder="Description of the meal.." required><br><br>
  <label for="location">Location:</label>
  <input type="text" id="location" name="location" placeholder="Meal location.." required><br><br>
  <label for="meeting-time">Choose a time for your appointment:</label>
  <input type="datetime-local" id="meal_time"
       name="meal_time" value="2018-06-12T19:30"
       min="2020-07-20T00:00" max="2020-010-31T00:00" required><br><br>
       <label for="quantity">Max Reservations(between 1 and 30):</label>
  <input type="number" id="quantity" name="quantity" min="1" max="30" required><br><br>
  <label for="quantity">Price:</label>
  <input type="number" required name="price" min="0" value="0" step=".01" required>
  <input type="submit" value="Submit">
</form>
</div>
<footer></footer>
`;
  $(document).ready(function () {
    $("header").load("pages/header.html");
    $("footer").load("pages/footer.html");
  });
  // make sure the backend api works before working with it here
  const mealsResponse = await fetch("/api/meals");
  const meals = await mealsResponse.json();

const ratings = fetchReviews();

  const ul = document.querySelector("#mealList").querySelector("ul");
  meals.forEach((meal) => {
    const li = document.createElement("li");
    const mealImageName = meal.title.toLowerCase();
    li.innerHTML = `<h3>${meal.title}</h3><br>
                  <img src= "pages/images/${mealImageName}.jpg" class="food_pictures"><br>
                  <p class ="meal_price">${meal.price} DKK</p>
                  <p class ="meal_location"><i class="fas fa-map-marker-alt"></i> ${meal.location}</p>
                  <a href= "/meal/${meal.id}" data-navigo><button type="button" class="button">Reserve</button><a>`;
    ul.appendChild(li);
  });
};

async function fetchReviews() {
  const reviewsResponse = await fetch("/api/reviews");
  return await reviewsResponse.json();
}

async function saveNewMeal(form) {
  const requestBody = getNewMealInputValuesAsJsonString(form);
  console.log(requestBody);
  const response = await fetch("/api/meals", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: requestBody,
  });
  if (response.ok) {
    alert("Your meal has been made!");
  } else {
    alert("Meal creation failed");
  }
}

function getNewMealInputValuesAsJsonString(form) {
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
  return JSON.stringify(formValues);
}
