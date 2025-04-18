export const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case "REMOVE_ITEM":
            return {
                ...state,
                items: state.items.filter(
                    (item) => item.id !== action.payload.id
                ),
            };
        case "CLEAR_CART":
            return {
                ...state,
                items: [],
            };
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
};
