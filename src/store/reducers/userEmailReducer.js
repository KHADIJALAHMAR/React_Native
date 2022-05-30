const EmailReducer = (state = false , action) => {
    switch (action.type) {
        case 'SETEMAIL':
            return action.payload

        default:
            return state;
    }
}

export default EmailReducer;