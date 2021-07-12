import React from "react"
import "./chip.css"
import cross from "../../icons/x.svg"
import plus from "../../icons/plus.svg"

const Chip = React.forwardRef(({name, onClick, type, closable, ref, ...props}) => {

    const onTagClick = (e) => {
        onClick(e)
    }

    return (
        <div className={type === "primary" ? "chip-container chip-container-primary" : "chip-container chip-container-default"} >
            <div className="chip-box">
                <span>{name}</span>
                {
                    closable ? 
                    <img 
                        src={cross} 
                        className="chip-img" 
                        onClick={onTagClick}    
                    /> : 
                    <img 
                        src={plus} 
                        className="chip-img" 
                        onClick={onTagClick}    
                    />
                }
                
            </div>
        </div>
    )
})

export default Chip

// #d7dcff

// #3b4cb0