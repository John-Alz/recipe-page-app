import React from 'react'
import { useContext } from 'react'
import { RecipeContext } from '../context/RecipeContext'
import { useFetch } from '../hooks/useFetch'
import { CategoryCard } from './CategoryCard'


export const Categories = () => {

    const [state] = useContext(RecipeContext)
    const { categories } = state;

    useFetch('https://www.themealdb.com/api/json/v1/1/categories.php');

    console.log(categories);



    return (
        <div className='w-[260px] flex flex-col gap-8'>
            <h2 className='text-3xl text-font font-playFair'>Categories</h2>
            <div className='flex flex-col gap-4'>
                {
                    categories.slice(0, 6).map((item) => (
                        <CategoryCard key={item.idCategory} name={item.strCategory} img={item.strCategoryThumb} />
                    ))
                }
            </div>
        </div>
    )
}
