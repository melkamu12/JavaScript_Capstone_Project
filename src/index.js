import './Style/style.css';

import fetchMeal from './module/fetchMeal.js';
import displayMeals from './module/displayMeals.js';

async function fetchedMeals() {
  const meals = await fetchMeal();
  return meals;
}
displayMeals(await fetchedMeals());
