import React, { useState } from "react"
import "./Radio.css"

const Radio = React.forwardRef(({ options, onChange, ref, name, value, ...props }) => {
    const [selected, setSelected] = useState(value)

    const onRadioChange = (e) => {
        console.log(e.target.value)
        setSelected(e.target.value)
        onChange(e)
    }

    console.log("selected val", value)

    return(
        <>
            {
                options.map((option) => {
                    return (
                        <div key={option.val} 
                            ref={ref} 
                            className={selected === option.val ? "selected-radio" : "radio-select"}
                        >
                            <label className="radio-box">
                                <div className={selected === option.val ? "radio-selected" : "radio-non-selected"}>
                                    {
                                        selected === option.val ? <div className="inner-circle"></div> : null
                                    }
                                </div>
                                <input
                                    id={option.val}
                                    value={option.val}
                                    name={name}
                                    type="radio"
                                    onChange={onRadioChange}
                                    className="input-radio"
                                />
                                <span className="radio-label">{option.label}</span>
                            </label>
                        </div>
                    )
                })
            }
        </>
    )
    

});

export default Radio;
