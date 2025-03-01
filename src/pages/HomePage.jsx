import React from 'react'
import { Categories } from '../components/Categories'
import { RecipeList } from '../components/RecipeList'
import { Search } from '../components/Search'
import { FilterSort } from '../components/FilterSort'
import { Header } from '../components/Header'

export default function HomePage() {
    return (
        <>
            <Header />
            <div className='w-[90%] m-auto flex gap-8 pt-8'>
                <div>
                    <Categories />
                </div>
                <div className='w-full'>
                    <div className='flex justify-between mb-12'>
                        <Search />
                        <FilterSort />
                    </div>
                    <RecipeList />
                </div>
            </div>
        </>

    )
}
