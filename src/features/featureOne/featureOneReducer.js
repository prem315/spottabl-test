import * as actionTypes from "../featureOne/featureOneActions";

const initialState = {
    individual_contributor: [
        {label: "Analyst", val: "analyst"},
        {label: "Senior Analyst", val: "senior_analyst"},
        {label: "Principal", val: "principal"},
        {label: "CXO/Founder level", val: "cxo"},
    ],
    selected_individual_contributor: "",
    people_lead: [
        {label: "Lead One", val: "lead1"},
        {label: "Lead Two", val: "lead2"},
        {label: "Lead Three", val: "lead3"},
        {label: "Lead Four", val: "lead4"},
    ],
    selected_people_lead: "" 
}

export default function (state = initialState, action) {

    switch (action.type) {
        case actionTypes.REQUEST_INDIVIDUAL_CONTRIBUTOR_RADIO_DATA:
            return {
                ...state,
                individual_contributor: state.individual_contributor
            }

        case actionTypes.SELECT_INDIVIDUAL_CONTRIBUTOR_RADIO:
            return {
                ...state,
                selected_individual_contributor: action.selectedVal
            }

        case actionTypes.SELECT_PEOPLE_LEAD_RADIO:
            return {
                ...state,
                selected_people_lead: action.selectedVal
            }

        case actionTypes.RESET_FEATURE_ONE_DATA:
            return {
                ...state,
                selected_individual_contributor: "",
                selected_people_lead: ""
            }

        default:
            return state;
          
    }

}