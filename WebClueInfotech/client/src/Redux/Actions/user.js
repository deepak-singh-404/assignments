import axios from 'axios'

const url = 'https://asg-webcluesinfotech.herokuapp.com'

export const setUsers = (data) => {
    return {
        type: "SET_USERS",
        payload: data
    }
}

export const setUser = (data) => {
    return {
        type: "SET_USER",
        payload: data
    }
}

const getUserloader = (data) => {
    return {
        type: "GET_USERS_LOADER",
        payload: data
    }
}

const addUserloader = (data) => {
    return {
        type: "ADD_USER_LOADER",
        payload: data
    }
}

export const addUser = (_data, cb) => {
    return async (dispatch) => {
        try {
            dispatch(addUserloader(true))
            const { data } = await axios({
                method: "Post",
                url: url + "/dev/api/v1/user",
                data: _data,
            })
            dispatch(addUserloader(false))
            if (data.success) {
                dispatch(setUser(data.response))
                cb()
            }
            else {
                alert(data.message)
            }
        }
        catch (err) {
            dispatch(addUserloader(false))
            alert(err.message)
        }
    }
}


export const getUser = () => {
    return async (dispatch) => {
        try {
            dispatch(getUserloader(true))
            const { data } = await axios({
                method: "Get",
                url: url + `/dev/api/v1/user`,
            })
            dispatch(getUserloader(false))
            if (data.success) {
                dispatch(setUsers(data.response))
            }
            else {
                alert(data.message)
            }
        }
        catch (err) {
            dispatch(addUserloader(false))
            alert(err.message)
        }
    }
}