import React from 'react'
import { Header } from './components/Header'
import { RecipeProvider } from './context/RecipeProvider'
import { Categories } from './components/Categories'
import { Footer } from './components/Footer'
import HomePage from './pages/HomePage'

export const RecipePageApp = () => {
    return (
        <div className='font-Outfit text-font'>
            <RecipeProvider>
                <Header />
                <div className='w-[90%] m-auto'>
                    <HomePage />
                    <Footer />
                </div>

            </RecipeProvider>
        </div>
    )
}
