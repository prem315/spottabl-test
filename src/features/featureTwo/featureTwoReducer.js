import * as actionTypes from "../featureTwo/featureTwoAction";

const initialState = {
    chipsData: [
        {name: "IIT"},
        {name: "NIRMA"},
        {name: "GANPAT"},
        {name: "MIT"},
        {name: "NIT"},
        {name: "GPA"},
        {name: "LPA"},
        {name: "BBA"},
        {name: "MBA"},
    ],
    selectedChipsData: [
        {name: "NIFT"},
        {name: "IIIT"},
    ],
    suggetions: [
        {name: "LNT"},
        {name: "GIT"},
    ] 
}

export default function (state = initialState, action) {

    switch (action.type) {
        case actionTypes.ADD_CHIP:
            return {
                ...state,
                selectedChipsData: [...state.selectedChipsData, { name: action.val } ],
                suggetions: state.suggetions.filter((suggetion) => {
                    return suggetion.name !== action.val
                }),
                chipsData: state.chipsData.filter((chip) => {
                    return chip.name !== action.val
                }),
            }

        case actionTypes.REMOVE_CHIP:
            return {
                ...state,
                selectedChipsData: state.selectedChipsData.filter((chip) => {
                    return chip.name !== action.val
                }),
                suggetions: [...state.suggetions, {name: action.val}]
            }

        case actionTypes.RESET_FEATURE_TWO_DATA:
            return initialState

        default:
            return state;
          
    }

}