import React from 'react'
import { useFetch, useForm } from '../hooks/index'
import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import { useState } from 'react';

export const Search = () => {

    const [state] = useContext(RecipeContext);

    const { word } = state;

    useFetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${word}`);

    const { handleChange, handleSubmit } = useForm()


    return (
        <form onSubmit={handleSubmit} className='relative '>
            <input onChange={handleChange} className='w-[400px] px-10 py-2 rounded-full border-2 border-card' type='text' placeholder='Search recipes and more...' />
            <img className='absolute top-2 left-3' src={'/Search.svg'} alt='searchIcon' />
        </form>
    )
}
