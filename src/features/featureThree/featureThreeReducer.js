import * as actionTypes from "../featureThree/featureThreeAction";

const initialState = {
    userData: [
        {name: "Prem", designation: "Senior Frontend Developer", email: "prem@one.com"},
        {name: "Divye", designation: "Senior Backened Developer", email: "divye@one.com"},
        {name: "Rishabh", designation: "Senior Product Manager", email: "rs@one.com"},
    ],
}

export default function (state = initialState, action) {

    switch (action.type) {

        case actionTypes.ADD_USER:
            return {
                ...state,
                userData: [...state.userData, action.data]
            }
        case actionTypes.DELETE_USER:
            return {
                ...state,
                userData: state.userData.filter((user) => {
                    return user.name !== action.val
                })
            }

        default:
            return state;
          
    }

}