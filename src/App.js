import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.scss';
import FeatureOne from "./features/featureOne/featureOne";
import FeatureTwo from "./features/featureTwo/featureTwo";
import FeatureThree from './features/featureThree/featureThree';

function App() {
  return (
    <div className="app">
      <div className="first-row-container">
        <div className="feature-one">
          <FeatureOne />
        </div>
        {/* <div className="feature-two">
          <FeatureTwo />
        </div> */}
      </div>

      <div className="first-row-container">
        <div className="feature-two">
          <FeatureTwo />
        </div>
      </div>

      <div className="first-row-container">
        <div className="feature-two">
          <FeatureThree />
        </div>
      </div>
    </div>
  )
}

export default App;
