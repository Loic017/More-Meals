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

let strMealList = [];

const searchBtn = document.getElementById("search");
searchBtn.addEventListener("click", () => {
    const ingreSearchField = document.getElementById("ingre-search");
    fetch(filterIngredient + ingreSearchField.value)
        .then((response) => response.json())
        .then((data) => {
            searchContent.innerHTML = "";

            if (data.meals === null) {
                document.getElementById("resultsquestion").innerHTML =
                    "No Results Found";
                return;
            }
            console.log("hello");
            for (let i = 0; i < 4; i++) {
                strMealList = [...strMealList, data.meals[i].strMeal];
                searchContent.innerHTML += `
                <div class="placeholder" id="${i}">
                <img src="${data.meals[i].strMealThumb}" alt="" />
                <h2 id="">${data.meals[i].strMeal}</h2>
                <button id="element-result-${i}" class="view-recipe-result">
                    View Recipe
                </button>
            </div>;`;
            }

            const buttonResult = document.getElementById("element-result-0");
            let buttonResultData;
            buttonResult.addEventListener("click", (event) => {
                console.log(event.target.parentElement.id);
                fetch(
                    "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
                        strMealList[event.target.parentElement.id]
                )
                    .then((response) => response.json())
                    .then((data) => {
                        buttonResultData = data;
                    })
                    .catch((error) => console.log("hi"));
                // ----------------

                document.getElementById("mealname-pop").innerText =
                    buttonResultData.meals[0].strMeal;
                document.getElementById("meal-img1").src =
                    buttonResultData.meals[0].strMealThumb;
                document.getElementById("recipe").innerText =
                    buttonResultData.meals[0].strInstructions;
                popUp.classList.remove("pop-up-close");

                const ingredients = [];
                for (let i = 1; i <= 20; i++) {
                    const ingredient =
                        buttonResultData.meals[0][`strIngredient${i}`];
                    const measure = buttonResultData.meals[0][`strMeasure${i}`];
                    if (ingredient && measure) {
                        ingredients.push(`${measure} ${ingredient}`);
                    }
                }
                document.getElementById("ingredients-pop").innerText =
                    ingredients.join("\n");
            });
            const buttonResult2 = document.getElementById("element-result-1");
            buttonResult2.addEventListener("click", (event) => {
                console.log(event.target.parentElement.id);
                fetch(
                    "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
                        strMealList[event.target.parentElement.id]
                )
                    .then((response) => response.json())
                    .then((data) => {
                        buttonResultData = data;
                    })
                    .catch((error) => console.log("hi"));
                // ----------------

                document.getElementById("mealname-pop").innerText =
                    buttonResultData.meals[0].strMeal;
                document.getElementById("meal-img1").src =
                    buttonResultData.meals[0].strMealThumb;
                document.getElementById("recipe").innerText =
                    buttonResultData.meals[0].strInstructions;
                popUp.classList.remove("pop-up-close");

                const ingredients = [];
                for (let i = 1; i <= 20; i++) {
                    const ingredient =
                        buttonResultData.meals[0][`strIngredient${i}`];
                    const measure = buttonResultData.meals[0][`strMeasure${i}`];
                    if (ingredient && measure) {
                        ingredients.push(`${measure} ${ingredient}`);
                    }
                }
                document.getElementById("ingredients-pop").innerText =
                    ingredients.join("\n");
            });
            const buttonResult3 = document.getElementById("element-result-2");
            buttonResult3.addEventListener("click", (event) => {
                console.log(event.target.parentElement.id);
                fetch(
                    "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
                        strMealList[event.target.parentElement.id]
                )
                    .then((response) => response.json())
                    .then((data) => {
                        buttonResultData = data;
                    })
                    .catch((error) => console.log("hi"));
                // ----------------

                document.getElementById("mealname-pop").innerText =
                    buttonResultData.meals[0].strMeal;
                document.getElementById("meal-img1").src =
                    buttonResultData.meals[0].strMealThumb;
                document.getElementById("recipe").innerText =
                    buttonResultData.meals[0].strInstructions;
                popUp.classList.remove("pop-up-close");

                const ingredients = [];
                for (let i = 1; i <= 20; i++) {
                    const ingredient =
                        buttonResultData.meals[0][`strIngredient${i}`];
                    const measure = buttonResultData.meals[0][`strMeasure${i}`];
                    if (ingredient && measure) {
                        ingredients.push(`${measure} ${ingredient}`);
                    }
                }
                document.getElementById("ingredients-pop").innerText =
                    ingredients.join("\n");
            });
            const buttonResult4 = document.getElementById("element-result-3");
            buttonResult4.addEventListener("click", (event) => {
                console.log(event.target.parentElement.id);
                fetch(
                    "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
                        strMealList[event.target.parentElement.id]
                )
                    .then((response) => response.json())
                    .then((data) => {
                        buttonResultData = data;
                    })
                    .catch((error) => console.log("hi"));
                // ----------------

                document.getElementById("mealname-pop").innerText =
                    buttonResultData.meals[0].strMeal;
                document.getElementById("meal-img1").src =
                    buttonResultData.meals[0].strMealThumb;
                document.getElementById("recipe").innerText =
                    buttonResultData.meals[0].strInstructions;
                popUp.classList.remove("pop-up-close");

                const ingredients = [];
                for (let i = 1; i <= 20; i++) {
                    const ingredient =
                        buttonResultData.meals[0][`strIngredient${i}`];
                    const measure = buttonResultData.meals[0][`strMeasure${i}`];
                    if (ingredient && measure) {
                        ingredients.push(`${measure} ${ingredient}`);
                    }
                }
                document.getElementById("ingredients-pop").innerText =
                    ingredients.join("\n");
            });
        })
        .catch((error) => console.log(error));
});

/// -------------------
const searchMealName = document.getElementById("search2");
searchMealName.addEventListener("click", () => {
    const mealSearchField = document.getElementById("meal-search-field");
    fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
            mealSearchField.value
    )
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            searchContent.innerHTML = "";

            if (data.meals === null) {
                document.getElementById("resultsquestion").innerHTML =
                    "No Results Found";
                return;
            }
            console.log("hello");
            for (let i = 0; i < 4; i++) {
                strMealList = [...strMealList, data.meals[i].strMeal];
                searchContent.innerHTML += `
                <div class="placeholder" id="${i}">
                <img src="${data.meals[i].strMealThumb}" alt="" />
                <h2 id="">${data.meals[i].strMeal}</h2>
                <button id="element-result-${i}" class="view-recipe-result">
                    View Recipe
                </button>
            </div>`;
            }

            const buttonResult = document.getElementById("element-result-0");
            let buttonResultData;
            buttonResult.addEventListener("click", (event) => {
                console.log(event.target.parentElement.id);
                fetch(
                    "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
                        strMealList[event.target.parentElement.id]
                )
                    .then((response) => response.json())
                    .then((data) => {
                        buttonResultData = data;
                    })
                    .catch((error) => console.log("hi"));
                // ----------------

                document.getElementById("mealname-pop").innerText =
                    buttonResultData.meals[0].strMeal;
                document.getElementById("meal-img1").src =
                    buttonResultData.meals[0].strMealThumb;
                document.getElementById("recipe").innerText =
                    buttonResultData.meals[0].strInstructions;
                popUp.classList.remove("pop-up-close");

                const ingredients = [];
                for (let i = 1; i <= 20; i++) {
                    const ingredient =
                        buttonResultData.meals[0][`strIngredient${i}`];
                    const measure = buttonResultData.meals[0][`strMeasure${i}`];
                    if (ingredient && measure) {
                        ingredients.push(`${measure} ${ingredient}`);
                    }
                }
                document.getElementById("ingredients-pop").innerText =
                    ingredients.join("\n");
            });
            const buttonResult2 = document.getElementById("element-result-1");
            buttonResult2.addEventListener("click", (event) => {
                console.log(event.target.parentElement.id);
                fetch(
                    "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
                        strMealList[event.target.parentElement.id]
                )
                    .then((response) => response.json())
                    .then((data) => {
                        buttonResultData = data;
                    })
                    .catch((error) => console.log("hi"));
                // ----------------

                document.getElementById("mealname-pop").innerText =
                    buttonResultData.meals[0].strMeal;
                document.getElementById("meal-img1").src =
                    buttonResultData.meals[0].strMealThumb;
                document.getElementById("recipe").innerText =
                    buttonResultData.meals[0].strInstructions;
                popUp.classList.remove("pop-up-close");

                const ingredients = [];
                for (let i = 1; i <= 20; i++) {
                    const ingredient =
                        buttonResultData.meals[0][`strIngredient${i}`];
                    const measure = buttonResultData.meals[0][`strMeasure${i}`];
                    if (ingredient && measure) {
                        ingredients.push(`${measure} ${ingredient}`);
                    }
                }
                document.getElementById("ingredients-pop").innerText =
                    ingredients.join("\n");
            });
            const buttonResult3 = document.getElementById("element-result-2");
            buttonResult3.addEventListener("click", (event) => {
                console.log(event.target.parentElement.id);
                fetch(
                    "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
                        strMealList[event.target.parentElement.id]
                )
                    .then((response) => response.json())
                    .then((data) => {
                        buttonResultData = data;
                    })
                    .catch((error) => console.log("hi"));
                // ----------------

                document.getElementById("mealname-pop").innerText =
                    buttonResultData.meals[0].strMeal;
                document.getElementById("meal-img1").src =
                    buttonResultData.meals[0].strMealThumb;
                document.getElementById("recipe").innerText =
                    buttonResultData.meals[0].strInstructions;
                popUp.classList.remove("pop-up-close");

                const ingredients = [];
                for (let i = 1; i <= 20; i++) {
                    const ingredient =
                        buttonResultData.meals[0][`strIngredient${i}`];
                    const measure = buttonResultData.meals[0][`strMeasure${i}`];
                    if (ingredient && measure) {
                        ingredients.push(`${measure} ${ingredient}`);
                    }
                }
                document.getElementById("ingredients-pop").innerText =
                    ingredients.join("\n");
            });
            const buttonResult4 = document.getElementById("element-result-3");
            buttonResult4.addEventListener("click", (event) => {
                console.log(event.target.parentElement.id);
                fetch(
                    "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
                        strMealList[event.target.parentElement.id]
                )
                    .then((response) => response.json())
                    .then((data) => {
                        buttonResultData = data;
                    })
                    .catch((error) => console.log("hi"));
                // ----------------

                document.getElementById("mealname-pop").innerText =
                    buttonResultData.meals[0].strMeal;
                document.getElementById("meal-img1").src =
                    buttonResultData.meals[0].strMealThumb;
                document.getElementById("recipe").innerText =
                    buttonResultData.meals[0].strInstructions;
                popUp.classList.remove("pop-up-close");

                const ingredients = [];
                for (let i = 1; i <= 20; i++) {
                    const ingredient =
                        buttonResultData.meals[0][`strIngredient${i}`];
                    const measure = buttonResultData.meals[0][`strMeasure${i}`];
                    if (ingredient && measure) {
                        ingredients.push(`${measure} ${ingredient}`);
                    }
                }
                document.getElementById("ingredients-pop").innerText =
                    ingredients.join("\n");
            });
        })
        .catch((error) => console.log(error));
});
