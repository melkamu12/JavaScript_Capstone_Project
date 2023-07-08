import displayCommentModal from './popup.js';
import { setLikes, getLikes } from './set_getLikes.js';

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

const displayLikes = async (id) => {
  const dataLikes = await getLikes();
  const countOfLikes = document.querySelector(
    `#card[data-meal-id="${id}"] .likes-counter`,
  );

  // Find the item with the matching item_id and get its likes count
  const likesItem = dataLikes.find((item) => item.item_id === id);
  const likesCount = likesItem ? likesItem.likes : 0;

  countOfLikes.textContent = `${likesCount} likes`;
};

const displayMeals = async (MealData) => {
  const mealElement = document.getElementById('homepage');

  await Promise.all(
    MealData.map(async (meal) => {
      const card = getCard(meal);
      mealElement.insertAdjacentHTML('beforeend', card);
      await displayLikes(meal.idMeal);
    }),
  );
  // Like Button action Listener
  const likes = document.querySelectorAll('.like-btn');
  likes.forEach((like) => {
    like.addEventListener('click', async function handleLikeClick() {
      const { mealId } = this.dataset;
      // const meal = MealData.find((meal) => meal.idMeal === mealId);
      try {
        await setLikes(mealId);
        await displayLikes(mealId);
        const icon = this.querySelector('.far');
        if (icon) {
          icon.classList.toggle('fas');
          icon.classList.toggle('far');
          icon.style.color = 'red';
        } else {
          this.style.color = 'white';
        }
      } catch (error) {
        throw new Error('error');
      }
    });
  });
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
