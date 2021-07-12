import React from "react"
import { connect } from "react-redux";
import "./featureThree.scss"
import Initial from "../../commonComponents/initial/Initial"
import TableRow from "../../commonComponents/tableRow/TableRow"
import Dropdown from "../../commonComponents/dropdown/Dropdown"
import SearchableAdd from "../../commonComponents/searchableAdd/SearchableAdd"
import { deleteUser, addUser } from "./featureThreeAction";

class FeatureThree extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            people: [
                {name: "Prem Patel", designation: "software engineer", email: "prem@recro.io"},
                {name: "Divye Shah", designation: "UI Designer", email: "divye@one.io"},
                {name: "Rishabh Agnihotri", designation: "Project Manager", email: "rishabh@two.io"}
            ],
            selectedUser: {},
            selectedRole: {}
        }
    }

    onSearch = (data) => {
        console.log(data)
        this.setState({
            selectedUser: data,
        })
    }

    onAdd = () => {
        const { selectedUser } = this.state
        this.props.addUser(selectedUser)
    }

    onSelect = (data) => {
        console.log(data)
    }

    onTableSelect = (data) => {
        console.log(data)
    }

    deleteData = (data) => {
        console.log(data)
        this.props.deleteUser(data)
    }


    render() {

        const { userData } = this.props
        console.log(userData)
        return (
            <div className="feature-box">
               
                <SearchableAdd 
                    searchData={[
                        {name: "Suraj", designation: "Senior Engineer", email: "suraj@can.io"},
                        {name: "Adiba", designation: "Senior Designer", email: "adiba@can.io"},
                        {name: "Shivani", designation: "Senior Marketer", email: "SHivani@can.io"}
                    ]}
                    onSearch={this.onSearch}
                    onAdd={this.onAdd}
                    onSelect={this.onSelect}
                />

                <div className="table">
                {
                    userData.map((person) => {
                        return (
                            <TableRow 
                                name={person.name}
                                designation={person.designation} 
                                email={person.email}
                                onSelect={this.onTableSelect}  
                                onDelete={this.deleteData} 
                            />
                        )
                    })
                }
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    //   data: state.dataReducer,
        userData: state.featureThreeReducer.userData
    };
};
  
export default connect(mapStateToProps, {deleteUser, addUser} )(
    FeatureThree
);

// export default FeatureTwo