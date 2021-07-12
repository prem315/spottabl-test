export const ADD_CHIP = "ADD_CHIP";
export const REMOVE_CHIP = "REMOVE_CHIP";
export const RESET_FEATURE_TWO_DATA = "RESET_FEATURE_TWO_DATA"

export const addChip = (val) => {
    return {
        type: ADD_CHIP,
        val: val
    };
};

export const removeChip = (val) => {
    return {
        type: REMOVE_CHIP,
        val: val
    }
}

export const resetFeatureTwo = () => {
    return {
        type: RESET_FEATURE_TWO_DATA,
    }
}


