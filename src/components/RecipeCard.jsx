import React from 'react'

export const RecipeCard = ({ name, img }) => {
    return (
        <div className='bg-card rounded-2xl w-[320px]'>
            <img className=' rounded-2xl p-2' src={img} alt={name} />
            <p className='pb-2 pl-2'>{name}</p>
        </div>
    )
}
