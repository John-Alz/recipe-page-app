import React from 'react'

export const Search = () => {
    return (
        <form className='relative'>
            <input className='px-10 py-2 rounded-full border-2 border-card' type='text' placeholder='Search recipes and more...' />
            <img className='absolute top-2 left-3' src={'/Search.svg'} alt='searchIcon' />
        </form>
    )
}
