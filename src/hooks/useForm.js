import { useContext } from "react"
import { RecipeContext } from "../context/RecipeContext"

export const useForm = () => {

    const [, dispatch] = useContext(RecipeContext)

    const handleChange = (e) => {
        e.preventDefault();
        let keyWord = e.target.value;
        dispatch({
            type: "SET-word",
            payload: keyWord
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return {
        handleChange,
        handleSubmit
    }

}