import { baseURl } from './api.js';

const fetchMeal = async () => {
  const response = await fetch(baseURl);
  const { meals } = await response.json();
  return meals;
};

export default fetchMeal;