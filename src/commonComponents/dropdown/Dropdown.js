import React from "react"
import "./Dropdown.css"
import arrowdown from "../../icons/down.svg"

const Dropdown = React.forwardRef(({title, data, onSelect, ref, ...props}) => {

    const [isListOpen, setIsListOpen] = React.useState(false)
    const [selected, setSelected] = React.useState("")

    const toggleList = () => {
        setIsListOpen(!isListOpen)
    }

    const changeData = (item) => {
        console.log(item.val)
        setSelected(item.label)
        onSelect(item)
        setIsListOpen(false)
    }


    return (
        <div className="dropdown-container">
            <button
                type="button"
                className="dropdown-button"
                onClick={toggleList}
            >
                <div className="dropdown-name">
                    <div>{selected !== "" ? selected : title}</div>
                    <img src={arrowdown} />
                </div>
            </button>
            
            {
                isListOpen === true && (
                    <div className="dropdown-list">
                        {
                            data.map((item) => {
                                return (
                                    <div className="dropdown-item" onClick={() => changeData(item)} >
                                        <p className="dropdown-label">{item.label}</p>
                                        <p className="dropdown-status">{item.status}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                ) 
            }
        </div>
    )
})

export default Dropdown