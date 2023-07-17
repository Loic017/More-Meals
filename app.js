let meal1;
let meal2;
let meal3;

fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("meal-name1").innerText = data.meals[0].strMeal;
        meal1 = data;
    })
    .catch((error) => console.log("hi"));

fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("meal-name2").innerText = data.meals[0].strMeal;
        meal2 = data;
    })
    .catch((error) => console.log("hi"));

fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("meal-name3").innerText = data.meals[0].strMeal;
        meal3 = data;
    })
    .catch((error) => console.log("hi"));

const randMeal1 = document.getElementById("randmeal1");
const randMeal2 = document.getElementById("randmeal2");
const randMea13 = document.getElementById("randmeal3");
const popUp = document.getElementById("popUp");

randMeal1.addEventListener("click", () => {
    document.getElementById("mealname-pop").innerText = meal1.meals[0].strMeal;
    document.getElementById("meal-img1").src = meal1.meals[0].strMealThumb;
    document.getElementById("recipe").innerText =
        meal1.meals[0].strInstructions;
    popUp.classList.remove("pop-up-close");

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal1.meals[0][`strIngredient${i}`];
        const measure = meal1.meals[0][`strMeasure${i}`];
        if (ingredient && measure) {
            ingredients.push(`${measure} ${ingredient}`);
        }
    }
    document.getElementById("ingredients-pop").innerText =
        ingredients.join("\n");
});

randMeal2.addEventListener("click", () => {
    document.getElementById("mealname-pop").innerText = meal2.meals[0].strMeal;
    document.getElementById("meal-img1").src = meal2.meals[0].strMealThumb;
    document.getElementById("recipe").innerText =
        meal2.meals[0].strInstructions;
    popUp.classList.remove("pop-up-close");

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal2.meals[0][`strIngredient${i}`];
        const measure = meal2.meals[0][`strMeasure${i}`];
        if (ingredient && measure) {
            ingredients.push(`${measure} ${ingredient}`);
        }
    }
    document.getElementById("ingredients-pop").innerText =
        ingredients.join("\n");
});

randMea13.addEventListener("click", () => {
    document.getElementById("mealname-pop").innerText = meal3.meals[0].strMeal;
    document.getElementById("meal-img1").src = meal3.meals[0].strMealThumb;
    document.getElementById("recipe").innerText =
        meal3.meals[0].strInstructions;
    popUp.classList.remove("pop-up-close");

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal3.meals[0][`strIngredient${i}`];
        const measure = meal3.meals[0][`strMeasure${i}`];
        if (ingredient && measure) {
            ingredients.push(`${measure} ${ingredient}`);
        }
    }
    document.getElementById("ingredients-pop").innerText =
        ingredients.join("\n");
});

const closeBtn = document.getElementById("close");

closeBtn.addEventListener("click", () => {
    popUp.classList.add("pop-up-close");
});

const resultTemplate = `
  <div class="placeholder">
    <img src="img/Rectangle 10.png" alt="" />
    <h2>Meal Name</h2>
    <a href="" class="view">View Recipe</a>
  </div>
`;

const filterIngredient =
    "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

const searchContent = document.getElementById("search-content");

const searchBtn = document.getElementById("search");
searchBtn.addEventListener("click", () => {
    const ingreSearchField = document.getElementById("ingre-search");
    fetch(filterIngredient + ingreSearchField.value)
        .then((response) => response.json())
        .then((data) => {
            searchContent.innerHTML = "";
            console.log("hello");
            for (let i = 0; i < 4; i++) {
                searchContent.innerHTML += `
                <div class="placeholder">
                <img src="img/Rectangle 10.png" alt="" />
                <h2>${data.meals[i].strMeal}</h2>
                <a href="" class="view">
                    View Recipe
                </a>
            </div>;`;
            }
        })
        .catch((error) => console.log(error));
});
