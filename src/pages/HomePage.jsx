import React from 'react'
import { Categories } from '../components/Categories'
import { RecipeList } from '../components/RecipeList'
import { Search } from '../components/Search'
import { FilterSort } from '../components/FilterSort'

export default function HomePage() {
    return (
        <div className='flex gap-8'>
            <div>
                <Categories />
            </div>
            <div className='w-full'>
                <div className='flex justify-between'>
                    <Search />
                    <FilterSort />
                </div>
                <RecipeList />
            </div>
        </div>
    )
}
