import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import { RecipeCard } from './RecipeCard'
import { Link } from 'react-router-dom';

export const RecipeList = () => {

    const [state] = useContext(RecipeContext);

    const { meals, categoryName } = state;

    useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);

    console.log(state);


    return (
        <div className='grid grid-cols-3 gap-5 mt-5 '>
            {
                meals.map((item) => (
                    <Link key={item.idMeal} to={`/detail/${item.idMeal}`}>
                        <RecipeCard name={item.strMeal} img={item.strMealThumb} />
                    </Link>
                ))
            }
        </div>
    )
}
