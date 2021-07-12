import React from "react"
import Initial from "../initial/Initial"
import user from "../../icons/user-check.svg"
import trash from "../../icons/trash.svg"
import Dropdown from "../dropdown/Dropdown"
import "./TableRow.scss"

const TableRow = React.forwardRef(({name, designation, email, onSelect, onDelete, ref, ...props}) => {

    const deleteData = (name) => {
        onDelete(name)
    }
    return (
        <div className="table-row-container">
            <div className="table-row">
                <Initial name={name} />
                <div className="personal-details">
                    <p className="name">{name}</p>
                    <div className="other-details">
                        <div className="designation-box"><img src={user} /><p className="designation">{designation}</p></div>
                        <div className="email-box"><div className="dot"></div><p className="email">{email}</p></div>
                    </div>
                </div>
                <div className="dropdown-box">
                <Dropdown 
                    title={"View"}
                    data={[
                        {label: "Admin Role", status: "Given full access to the job and candidates", val: "abc"},
                        {label: "Edit Access", status: "Gives access to edit the job and view the candidates", val: "def"},
                        {label: "View Access", status: "Gives access to only view the job and add comments", val: "xyz"}
                    ]}
                    onSelect={onSelect}
                /> 
                </div>
                <img src={trash} className="trash-img" onClick={() => deleteData(name)}/>
            </div>
            
        </div>
    )
})

export default TableRow