import React from 'react'

export const FilterSort = () => {
    return (
        <div>
            <div className='flex bg-font text-black py-2 px-4 rounded-2xl'>
                <p>Sort by: </p>
                <select className='cursor-pointer'>
                    <option className='font-bold'>Name</option>
                    <option>A - Z</option>
                    <option>Z - A</option>
                </select>
            </div>
        </div>
    )
}
