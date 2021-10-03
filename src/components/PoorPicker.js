import React, { useState } from "react"

const PoorPicker = () => {

    const [state, setstate] = useState('')

    return (
        <div>
            <input value={state} type='text'/> 
        </div>
    )
}

export default PoorPicker
