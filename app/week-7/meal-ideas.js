"use client";
import React, { useEffect, useState } from 'react';

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMealIdeas = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        setMeals(data.meals);
      } catch (error) {
        console.error('Error fetching meal ideas:', error);
      }
    };

    fetchMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas with {ingredient}</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {meals.map(meal => (
          <li key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '250px', height: '250px' }} />
            <p>{meal.strMeal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;