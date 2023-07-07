import counter from '../module/Meal_Counter.js';

describe('counter', () => {
  test('returns the correct count for an empty array', () => {
    const meals = [];
    const result = counter(meals);
    expect(result).toBe(0);
  });

  test('returns the correct count for an array with items', () => {
    const meals = ['breakfast', 'lunch', 'dinner'];
    const result = counter(meals);
    expect(result).toBe(3);
  });

  test('returns the correct count for a large array', () => {
    const meals = Array(1000).fill('meal');
    const result = counter(meals);
    expect(result).toBe(1000);
  });
});