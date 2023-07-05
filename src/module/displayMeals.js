const getCard = (MealData) => {
  const card = `
       <div id="card">
         <img src = ${MealData.strMealThumb} alt= ${MealData.strMeal} class="feed"></img>  
         <div class="name_likes">
         <p>${MealData.strMeal}</p>
         <p>&hearts;</p>
       </div>
       <p class="likes-counter">15 likes</p>
       <button class="comment">comment</button>
       </div>`;
  return card;
};
const displayMeals = (MealData) => {
  const mealElement = document.getElementById('homepage');
  MealData.forEach((meal) => {
    const card = getCard(meal);
    mealElement.insertAdjacentHTML('beforeend', card);
  });
};

export default displayMeals;