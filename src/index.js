import './Style/style.css';
import fetchMeal from './module/fetchMeal.js';
import displayMeals from './module/displayMeals.js';
import counter from './module/Meal_Counter.js';

const noMealCounter1 = document.getElementById('CountMeals');
async function fetchedMeals() {
  const meals = await fetchMeal();
  return meals;
}
const noMealCounter2 = counter(await fetchedMeals());
noMealCounter1.innerText = noMealCounter2;
displayMeals(await fetchedMeals());
