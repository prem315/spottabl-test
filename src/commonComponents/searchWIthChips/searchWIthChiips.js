import React from "react"
import Chip from "../chip/chip"
import "./searchWithChips.css"
import search from "../../icons/search.svg"
import { removeChip } from "../../features/featureTwo/featureTwoAction"


const SearchWithChips = React.forwardRef(({onRemoveChip, selectedChips, onKeyDown, chips, options, ref, ...props}) => {

    const [value, setValue] = React.useState("");
    const [filteredData, setFilteredData] = React.useState([])

    const onKeyDownSearch = (e) => {
        if (["Enter", "Tab", ","].includes(e.key)) { 
            e.preventDefault();
            let val = value
            if(val !== "") {
                onKeyDown(val)
            } 
            setValue("")
        }
    }

    const handleChange = (e) => {
        setValue(e.target.value)
        const searchWord = e.target.value
        const newFilter = chips.filter((chip) => {
            return chip.name.toLowerCase().includes(searchWord)
        })
        setFilteredData(newFilter)
    }

    const addToChips = (chip) => {
        onKeyDown(chip.name)
        setValue("")
    }

    const removeChip = (chip) => {
        onRemoveChip(chip)
    }

    return (
        <div className="container">
        <div className="search-with-chips-container">
            <img src={search} className="search-img" />
            <div className="search-chips-box">
            {
                selectedChips.map((chip) => {
                    return (
                        <Chip 
                            name={chip.name}
                            type={"primary"}
                            closable={true}
                            onClick={() => {removeChip(chip.name)}}

                        />
                    )
                })
            }
            </div>
            <input 
                className="chips-input"
                onChange={handleChange}
                onKeyDown={onKeyDownSearch}
                value={value}
            />
        </div>
            {
                (filteredData.length !== 0 && value !== "") && (
                    <div className="auto-suggetions-box">
                    {
                        filteredData.map((chip) => {
                            return (
                                <div 
                                    onClick={() => addToChips(chip)} 
                                    className="suggested-chip">
                                    {chip.name}
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

export default SearchWithChips


// 1E30A1
// D7Dcff