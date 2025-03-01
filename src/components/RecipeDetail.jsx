import React from 'react'
import { useFetch } from '../hooks'
import { useContext } from 'react'
import { RecipeContext } from '../context/RecipeContext'
import { Link, useParams } from 'react-router-dom'

let ingredients = {};

export const RecipeDetail = () => {

    const params = useParams();

    const [state] = useContext(RecipeContext);

    const { mealDetail } = state;

    useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)





    for (let i = 0; i <= mealDetail.length; i++) {

        console.log(mealDetail[i]?.strIngredient);
    }

    console.log(ingredients);




    return (
        <div>
            <div className='flex justify-between w-[90%] m-auto py-8'>
                <img src={'/logo-light.svg'} alt='logoHomeChef' />
                <Link to={'/'}>
                    <button className='bg-font text-black flex rounded-2xl py-2 px-2 cursor-pointer'><img src={'/public/Expand_left.svg'} alt='logoHomeChef' />Back to categories</button>
                </Link>
            </div>
            <section className='w-[50%] m-auto'>
                <img src={mealDetail[0]?.strMealThumb} />
                <h2 className='font-playFair text-4xl pt-8'>{mealDetail[0]?.strMeal}</h2>
                <div className='flex gap-3 pt-8'>
                    <p className='bg-card py-2 px-4 rounded-full'>category: <span className='font-bold'>{mealDetail[0]?.strCategory}</span></p>
                    <p className='bg-card py-2 px-4 rounded-full'>area: <span className='font-bold'>{mealDetail[0]?.strArea}</span></p>
                </div>
            </section>
        </div>
    )
}
