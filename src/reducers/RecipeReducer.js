
export const RecipeReducer = (state, action) => {

    switch (action.type) {
        case "SET-categories":
            return { ...state, categories: action.payload }
        case "SET-meals":
            return { ...state, meals: action.payload }
        default:
            return state;
    }
}