import React, { useState } from "react"
import "./tab.scss"

const Tab = React.forwardRef(({children, ref, ...props}) => {

    const [activeTab, setActiveTab] = useState(children[0].props.label);

    const handleClick = (e, clickedTab) => {
        e.preventDefault();
        setActiveTab(clickedTab)
    }

    return (
        <div>
            <ul className="tabs">
                {
                    children.map((tab) => {
                        return (
                            <li className={tab.props.label === activeTab ? "current" : ""} 
                                key={tab.props.label}
                                onClick={(e) => handleClick(e, tab.props.label)}
                            >
                                {tab.props.label}
                            </li>
                        )
                    })
                }
            </ul>
            <div className="content">
                { children.map((tabContent) => {
                    if(tabContent.props.label === activeTab) {
                        return (
                            <div key={tabContent.label} >{tabContent.props.children}</div>
                        )
                    }

                }) }
            </div>
        </div>
    )
})

export default Tab