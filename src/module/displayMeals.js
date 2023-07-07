import displayCommentModal from './popup.js';

const getCard = (MealData) => {
  const card = `
    <div id="card" data-meal-id="${MealData.idMeal}">
      <img src="${MealData.strMealThumb}" alt="${MealData.strMeal}" class="feed"></img>  
      <div class="name_likes">
        <p>${MealData.strMeal}</p>
        <span class="like-btn"  data-meal-id="${MealData.idMeal}"><i class="far fa-heart"></i></span>
      </div>
      <p class="likes-counter">likes</p>
      <button class="comment" data-meal-id="${MealData.idMeal}">comment</button>
    </div>`;
  return card;
};

const displayMeals = async (MealData) => {
  const mealElement = document.getElementById('homepage');

  await Promise.all(
    MealData.map(async (meal) => {
      const card = getCard(meal);
      mealElement.insertAdjacentHTML('beforeend', card);
    }),
  );
  // Comment Button action Listener
  const commentButtons = document.querySelectorAll('.comment');
  commentButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const { mealId } = event.target.dataset;
      displayCommentModal(mealId);
    });
  });
};

export default displayMeals;
