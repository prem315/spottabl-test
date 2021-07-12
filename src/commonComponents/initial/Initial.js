import React from "react"
import "./Initial.scss"

const Initial = ({name}) => {
    return (
        <div className="circle">
            <p>{name.substring(0,2).toUpperCase()}</p>
        </div>
    )
}

export default Initial