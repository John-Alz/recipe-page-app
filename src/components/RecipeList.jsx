import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import { RecipeCard } from './RecipeCard'

export const RecipeList = () => {

    const [state] = useContext(RecipeContext);

    const { meals } = state;

    useFetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=italian");

    console.log(meals);


    return (
        <div className='grid grid-cols-3 gap-5 mt-5 '>
            {
                meals.map((item) => (
                    <RecipeCard key={item.idMeal} name={item.strMeal} img={item.strMealThumb} />
                ))
            }
        </div>
    )
}
