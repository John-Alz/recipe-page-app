import React from 'react'
import { RecipeContext } from './RecipeContext'
import { useReducer } from 'react'
import { RecipeReducer } from '../reducers/RecipeReducer'

const initialState = {
    word: "",
    categories: [],
    meals: [],
    mealDetail: []
}

export const RecipeProvider = ({ children }) => {


    const [state, dispatch] = useReducer(RecipeReducer, initialState);


    return (
        <RecipeContext.Provider value={[state, dispatch]}>
            {children}
        </RecipeContext.Provider>
    )
}
