import React from "react"
import { connect } from "react-redux";
import Tab from "../../commonComponents/tab/Tab"
import Radio from "../../commonComponents/radio/Radio"
import { selectIndividualContributorRadio, resetFeatureOneData, selectPeopleLeadRadio } from "./featureOneActions";
import "./featureone.scss"
import user from "../../icons/user.svg"

class FeatureOne extends React.Component {

    resetData = () => {
        console.log("clicked")
        this.props.resetFeatureOneData()
    }

    selectIndividualContributorData = (e) => {
        this.props.selectIndividualContributorRadio(e.target.value)
    }

    selectLeadData = (e) => {
        this.props.selectPeopleLeadRadio(e.target.value)
    }

    
    render() {

        const { individualContributorData, peopleLead, selected_individual_contributor, selected_people_lead } = this.props 
        return (
            <div className="feature-one-container">
                <div className="header-one">
                    <p className="header-one-text">Experience Preferences</p>
                    <img src={user} className="heading-icon" />
                </div>
                <p className="header-two">Select Preferences you are looking for in a candidate</p>

                <div className="feature-box">

                    <div className="feature-header-box">
                        <p className="feature-header">Previous job positions/levels held</p>
                        <p className="reset" onClick={this.resetData}>Reset</p>
                    </div>

                    <Tab>
                        <div label="Individual Contributor">
                        <Radio 
                            options={individualContributorData}
                            onChange={(e) => this.selectIndividualContributorData(e)}
                            name={"individual contributor"}
                            value={selected_individual_contributor}
                        />
                        </div>
                        <div label="People Lead">
                        <Radio 
                            options={peopleLead}
                            onChange={(e) => this.selectLeadData(e)}
                            name={"people lead"}
                            value={selected_people_lead}
                        />
                        </div>
                    </Tab>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    //   data: state.dataReducer,
        individualContributorData: state.featureOneReducer.individual_contributor,
        peopleLead: state.featureOneReducer.people_lead,
        selected_individual_contributor: state.featureOneReducer.selected_individual_contributor,
        selected_people_lead: state.featureOneReducer.selected_people_lead
    };
};
  
export default connect(mapStateToProps, { selectIndividualContributorRadio, selectPeopleLeadRadio, resetFeatureOneData })(
    FeatureOne
);
  

// export default FeatureOne