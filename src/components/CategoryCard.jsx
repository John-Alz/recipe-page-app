import React from 'react'

export const CategoryCard = ({ name, img }) => {


    return (
        <div className='h-[55px] z-100 border border-card rounded-2xl flex gap-4 items-center text-font hover:bg-hover hover:text-black cursor-pointer'>
            <div>
                <img className='h-[55px] ' src={img} alt={name} />
            </div>
            <p>{name}</p>
        </div>
    )
}
