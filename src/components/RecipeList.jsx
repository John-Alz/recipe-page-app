import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import { RecipeCard } from './RecipeCard'

export const RecipeList = () => {

    const [state] = useContext(RecipeContext);

    const { meals, meal } = state;

    useFetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=italian");

    //Chequear validacion

    return (
        <div className='grid grid-cols-3 gap-5 mt-5 '>
            {
                meal.length > 0 && meal.length < 2 ? meal.map((item) => (
                    <RecipeCard key={item.idMeal} name={item.strMeal} img={item.strMealThumb} />
                )) : meals.map((item) => (
                    <RecipeCard key={item.idMeal} name={item.strMeal} img={item.strMealThumb} />
                ))
            }
        </div>
    )
}
