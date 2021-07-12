import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import featureOneReducer from "../features/featureOne/featureOneReducer";
import featureTwoReducer from "../features/featureTwo/featureTwoReducer";
import featureThreeReducer from "../features/featureThree/featureThreeReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    featureOneReducer: featureOneReducer,
    featureTwoReducer: featureTwoReducer,
    featureThreeReducer: featureThreeReducer
  },
});
