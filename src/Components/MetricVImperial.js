import Switch from "./Switch"
import "./MetricVImperial.css"
import {setState} from "react"


const MetricVImperial = (props) => {
    return (
        <div className = "flexContainer">
            <div className = "midContainer">
                <h2 className = "metric">Metric</h2>
                <Switch status = {props.status} statusChange = {props.statusChange}></Switch>
                <h2 className = "imperial">Imperial</h2>
            </div>
        </div>
    )
}


export default MetricVImperial