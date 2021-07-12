import React from "react"
import { connect } from "react-redux";
import SearchWithChips from "../../commonComponents/searchWIthChips/searchWIthChiips"
import Chip from "../../commonComponents/chip/chip"
import { addChip, removeChip, resetFeatureTwo } from "./featureTwoAction";
import "./featureTwo.scss"

class FeatureTwo extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
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
    }

    onKeyDown = (val) => {
        this.props.addChip(val)
    }

    addSuggestedChip = (val) => {
        this.props.addChip(val)
    }

    removeChip = (val) => {
        this.props.removeChip(val)
    }

    resetData = () => {
        this.props.resetFeatureTwo()
    }

    render() {
        const { chipsData, selectedChipsData, suggetions } = this.props
        console.log(suggetions)
        return (
            <div className="feature-box">
                <div className="feature-header-box">
                    <p className="feature-header">School/College/Univerity</p>
                    <p className="reset" onClick={this.resetData}>Reset</p>
                </div>

                <SearchWithChips 
                    selectedChips={selectedChipsData}
                    chips={chipsData}
                    onKeyDown={this.onKeyDown}
                    onRemoveChip={this.removeChip}
                />

                <div className="suggetions">
                    <p>Suggetions</p>
                    <div className="suggetions-list">
                    {
                        suggetions.map((suggetion) => {
                            return(
                                <Chip 
                                    name={suggetion.name}
                                    type={"default"}
                                    closable={false}
                                    onClick={() => this.addSuggestedChip(suggetion.name)}
                                />
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    //   data: state.dataReducer,
        chipsData: state.featureTwoReducer.chipsData,
        selectedChipsData: state.featureTwoReducer.selectedChipsData,
        suggetions: state.featureTwoReducer.suggetions
    };
};
  
export default connect(mapStateToProps, { addChip, removeChip, resetFeatureTwo } )(
    FeatureTwo
);

// export default FeatureTwo