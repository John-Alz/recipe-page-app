import React from 'react'
import { Header } from './components/Header'
import { RecipeProvider } from './context/RecipeProvider'
import { Categories } from './components/Categories'
import { Footer } from './components/Footer'

export const RecipePageApp = () => {
    return (
        <div className='font-Outfit'>
            <RecipeProvider>
                <Header />
                <div className='w-[90%] m-auto'>
                    <Categories />
                    <Footer />
                </div>

            </RecipeProvider>
        </div>
    )
}
