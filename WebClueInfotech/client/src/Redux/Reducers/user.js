const initialState = {
    users: [],
    getUsersLoader: false,
    addUserLoader: false
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USERS":
            return {
                ...state,
                users: action.payload,
            }
        case "SET_USER":
            return {
                ...state,
                users: [action.payload, ...state.users]
            }
        case "GET_USERS_LOADER":
            return {
                ...state,
                getUsersLoader: action.payload
            }
        case "ADD_USER_LOADER":
            return {
                ...state,
                addUserLoader: action.payload
            }
        default:
            return state
    }
}


export default user