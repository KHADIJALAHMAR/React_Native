const UsernameReducer = (state = false , action) => {
    switch (action.type) {
        case 'SETUSERNAME':
            return action.payload

        default:
            return state;
    }
}

export default UsernameReducer;