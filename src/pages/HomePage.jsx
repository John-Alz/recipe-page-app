import React from 'react'
import { Categories } from '../components/Categories'
import { RecipeList } from '../components/RecipeList'
import { Search } from '../components/Search'

export default function HomePage() {
    return (
        <div className='flex'>
            <div>
                <Categories />
            </div>
            <div>
                <div className='flex justify-between'>
                    <Search />
                    <h2>Sort by name</h2>
                </div>
                <RecipeList />
            </div>
        </div>
    )
}
