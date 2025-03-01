import { useContext } from "react"
import { RecipeContext } from "../context/RecipeContext"
import { useEffect } from "react";

export const useFetch = (url, word) => {


    const [, dispatch] = useContext(RecipeContext);

    const fecthData = async () => {
        try {

            const resp = await fetch(url);
            const data = await resp.json();
            if (data.categories) {
                dispatch({
                    type: "SET-categories",
                    payload: data.categories
                });
            } else if (data.meals.length === 1) {
                dispatch({
                    type: "SET-meal",
                    payload: data.meals
                });
            } else if (data.meals) {
                dispatch({
                    type: "SET-meals",
                    payload: data.meals
                });
            }

            // dispatch({
            //     type: data.categories ? "SET-categories" : "SET-meals",
            //     payload: data.categories || data.meals
            // });


        } catch (error) {
            throw new Error(`Error: ${error}`)
        }
    }

    useEffect(() => {
        fecthData();
    }, [url, word])

}
