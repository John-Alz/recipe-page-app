import { useContext } from "react"
import { RecipeContext } from "../context/RecipeContext"
import { useEffect } from "react";

export const useFetch = (url) => {

    const [state, dispatch] = useContext(RecipeContext);

    const fecthData = async () => {
        try {

            const resp = await fetch(url);

            const data = await resp.json();
            // console.log(data.categories);
            dispatch({
                type: "SET-categories",
                payload: data.categories
            });

        } catch (error) {
            throw new Error(`Error: ${error}`)
        }
    }

    useEffect(() => {
        fecthData();
    }, [])

}
