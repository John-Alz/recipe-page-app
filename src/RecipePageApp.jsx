import React from 'react'
import { Header } from './components/Header'
import { RecipeProvider } from './context/RecipeProvider'
import { Categories } from './components/Categories'
import { Footer } from './components/Footer'
import HomePage from './pages/HomePage'
import { RecipeDetail } from './components/RecipeDetail'
import { Navigate, Route, Routes } from 'react-router-dom'

export const RecipePageApp = () => {
    return (
        <div className='font-Outfit text-font'>
            <RecipeProvider>
                <div >
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/detail/:id' element={<RecipeDetail />} />
                    </Routes>

                    <Footer />
                </div>

            </RecipeProvider >
        </div >
    )
}
