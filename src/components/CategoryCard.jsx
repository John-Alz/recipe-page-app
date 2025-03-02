import React from 'react'
import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';

export const CategoryCard = ({ name, img }) => {

    const [, dispatch] = useContext(RecipeContext);

    const handleCategory = (nameCategory) => {
        dispatch({
            type: "SET-nameCategory",
            payload: nameCategory
        })
    }

    return (
        <div onClick={() => handleCategory(name)} className='h-[55px] z-100 border border-card rounded-2xl flex gap-4 items-center text-font hover:bg-hover hover:text-black cursor-pointer'>
            <div>
                <img className='h-[55px] ' src={img} alt={name} />
            </div>
            <p>{name}</p>
        </div>
    )
}
