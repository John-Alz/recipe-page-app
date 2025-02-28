import { useContext } from "react"
import { RecipeContext } from "../context/RecipeContext"
import { useEffect } from "react";

export const useFetch = (url) => {


    const [, dispatch] = useContext(RecipeContext);

    const fecthData = async () => {
        try {

            const resp = await fetch(url);
            const data = await resp.json();
            dispatch({
                type: data.categories ? "SET-categories" : "SET-meals",
                payload: data.categories || data.meals
            });

        } catch (error) {
            throw new Error(`Error: ${error}`)
        }
    }

    useEffect(() => {
        fecthData();
    }, [])

}
