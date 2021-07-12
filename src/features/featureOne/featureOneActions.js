export const REQUEST_INDIVIDUAL_CONTRIBUTOR_RADIO_DATA = "REQUEST_INDIVIDUAL_CONTRIBUTOR_RADIO_DATA";
export const SELECT_INDIVIDUAL_CONTRIBUTOR_RADIO = "SELECT_INDIVIDUAL_CONTRIBUTOR_RADIO";

export const REQUEST_PEOPLE_LEAD_RADIO_DATA = "REQUEST_PEOPLE_LEAD_RADIO_DATA";
export const SELECT_PEOPLE_LEAD_RADIO = "SELECT_PEOPLE_LEAD_RADIO";

export const RESET_FEATURE_ONE_DATA = "RESET_FEATURE_ONE_DATA"

export const requestIndividualContributorData = () => {
    return {
        type: REQUEST_INDIVIDUAL_CONTRIBUTOR_RADIO_DATA,
    };
};

export const selectIndividualContributorRadio = (selectedVal) => {
    return {
        type: SELECT_INDIVIDUAL_CONTRIBUTOR_RADIO,
        selectedVal: selectedVal
    }
}


export const selectPeopleLeadRadio = (selectedVal) => {
    return {
        type: SELECT_PEOPLE_LEAD_RADIO,
        selectedVal: selectedVal
    }
}

export const resetFeatureOneData = () => {
    return {
        type: RESET_FEATURE_ONE_DATA,
    };
};

