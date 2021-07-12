export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";

export const addUser = (data) => {
    return {
        type: ADD_USER,
        data: data
    };
}

export const deleteUser = (val) => {
    return {
        type: DELETE_USER,
        val: val
    };
};