
export const RecipeReducer = (state, action) => {

    switch (action.type) {
        case "SET-categories":
            return { ...state, categories: action.payload }
        default:
            return state;
    }
}