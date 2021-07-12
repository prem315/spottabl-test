import React from "react"
import Dropdown from "../dropdown/Dropdown"
import "./SearchableAdd.scss"

const SearchableAdd = React.forwardRef(({searchData, onSearch, onAdd, onSelect, ref, ...props}) => {

    const [value, setValue] = React.useState("");
    const [inputVal, setInputVal] = React.useState("");
    const [filteredData, setFilteredData] = React.useState([])

    const handleChange = (e) => {
        setValue(e.target.value)
        const searchWord = e.target.value
        const newFilter = searchData.filter((chip) => {
            return chip.name.toLowerCase().includes(searchWord)
        })
        setFilteredData(newFilter)
    }

    const addToInput = (data) => {
        console.log(data)
        setValue(data.name)
        onSearch(data)
        setInputVal("")
        setFilteredData([])
    }

    const addClick = () => {
        console.log("clicked")
        onAdd()
    }

    return(
        <div className="seachable-container">
            <div className="seachable-box">
                <input 
                    onChange={handleChange}
                    value={value}
                />
                {
                (filteredData.length !== 0 && value !== "") && (
                    <div className="auto-suggetions-box">
                    {
                        filteredData.map((chip) => {
                            return (
                                <div 
                                    onClick={() => addToInput(chip)} 
                                    className="suggested-chip">
                                    {chip.name}
                                </div>
                            )
                        })
                    }
                    </div>   
                )
                }
                <div className="right-box">
                    <Dropdown 
                        title={"View"}
                        data={[
                            {label: "Admin Role", status: "Given full access to the job and candidates", val: "abc"},
                            {label: "Edit Access", status: "Gives access to edit the job and view the candidates", val: "def"},
                            {label: "View Access", status: "Gives access to only view the job and add comments", val: "xyz"}
                        ]}
                        onSelect={onSelect}
                    />
                    <button className="search-add-btn" onClick={addClick}>Add People</button>
                </div>
            </div>
        </div>
    )
})

export default SearchableAdd