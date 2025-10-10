import { useState } from "react"

function Filter() {

    const [selectedPriority, Setpriority] = useState("All")

    const handleChangefilter = (e) => {
        Setpriority(e.target.value)
    }

    return(
        <div className="border border-gray-300 mx-auto max-w-lg mt-6">
            <h3 className="text-2xl m-2">Filter</h3>
            <input
                className="m-4"
            type="radio" value={"All"} name="filter" checked={selectedPriority === "All"} onChange={handleChangefilter}/><label>All</label>
            <input
                className="m-4"
            type="radio" value={"Low"} name="filter" checked={selectedPriority === "Low"} onChange={handleChangefilter}/> <label>Low</label>
            <input 
                className="m-4"
            type="radio" value={"Medium"} name="filter" checked={selectedPriority === "Medium"} onChange={handleChangefilter}/> <label>/Medium</label>
            <input 
                className="m-4"
            type="radio" value={"High"} name="filter" checked={selectedPriority === "High"} onChange={handleChangefilter}/><label>High</label>

            
        </div>
    )
}

export default Filter 