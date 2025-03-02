import React from 'react'
import { useFetch } from '../hooks'
import { useContext } from 'react'
import { RecipeContext } from '../context/RecipeContext'
import { Link, useParams } from 'react-router-dom'


export const RecipeDetail = () => {

    const params = useParams();

    const [state] = useContext(RecipeContext);

    const { mealDetail } = state;

    useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)

    let ingredients = [];

    for (let i = 0; i < mealDetail.length; i++) {
        for (let j = 1; j <= 20; j++) {
            let ingredientKey = `strIngredient${j}`;
            let measureKey = `strMeasure${j}`;

            let name = mealDetail[i][ingredientKey]?.trim();
            let cant = mealDetail[i][measureKey]?.trim();

            if (name) {
                ingredients.push({
                    name: name,
                    cant: cant || ""
                });
            }
        }
    }

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
                <div>
                    <div className='flex items-center gap-2 mt-6 mb-4'>
                        <div className='bg-hover w-[20px] h-[40px] rounded-2xl'></div>
                        <h2 className='font-bold'>Ingredients</h2>
                    </div>
                    <ul className='list-disc ml-5'>
                        {
                            ingredients.map((ingredient) => (
                                <li>{ingredient.cant} {ingredient.name}</li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <div className='flex items-center gap-2 mt-6 mb-4'>
                        <div className='bg-azul w-[20px] h-[40px] rounded-2xl'></div>
                        <h2 className='font-bold'>Instructions</h2>

                    </div>
                    <p>{mealDetail[0]?.strInstructions}</p>
                </div>
            </section>
        </div>
    )
}
