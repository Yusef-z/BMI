import React from "react"
import "./Switch.css"
import {setState} from "react"


const Switch = (props) => {
    const changeHandler = () => {
        props.statusChange(!(props.status));
        console.log(props.status)
    }
    return (
        <label className = "switch">
            <input type="checkbox" onChange = {changeHandler} />
            <span className = "slider"></span>
        </label>
    )
}


export default Switch