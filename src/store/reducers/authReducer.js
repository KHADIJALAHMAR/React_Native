let initialState = {};
const authReducer = (state = initialState , action) => {
    initialState = action.payload
    ? { isLoggedIn: true, user: action.payload }
    : { isLoggedIn: false, user: null };
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
        isLoggedIn: true,
        user: action.payload,
            }
        case 'LOGOUT':
            return {
                ...state,
        isLoggedIn: false,
        user: null,
            }
        default:
            return state;
    }
}

export default authReducer;