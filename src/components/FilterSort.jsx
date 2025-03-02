import React from 'react'
import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';

export const FilterSort = () => {


    return (
        <div>
            <div className='flex bg-font text-black py-2 px-4 rounded-2xl'>
                <p>Sort by: </p>
                <select className='cursor-pointer'>
                    <option value='all' className='font-bold'>Name</option>
                    <option value='az'>A - Z</option>
                    <option value='za'>Z - A</option>
                </select>
            </div>
        </div>
    )
}
