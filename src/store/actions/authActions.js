export const loginAction = (token) => {
    return {
        type: 'LOGIN',
        payload: token
    }
}

export const logoutAction = () => {
    return {
        type: 'LOGOUT'
    }
}

export const setRoleAction = (role) => {
    return {
        type: 'SETROLE',
        payload: role
    }
}

export const setIdAction = (id) => {
    return {
        type: 'SETID',
        payload: id
    }

}
export const setRoleUsername = (username) => {
    return {
        type: 'SETUSERNAME',
        payload: username
    }
}
export const setRoleEmail = (email) => {
    return {
        type: 'SETEMAIL',
        payload: email
    }
}