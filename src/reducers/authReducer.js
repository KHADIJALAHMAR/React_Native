const authReducer = (state = false , action) => {
    switch (action.type) {
        case 'LOGIN':
            return !state

        case 'LOGOUT':
            return false;

        default:
            return state;
    }
}

export default authReducer;