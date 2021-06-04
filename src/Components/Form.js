import "./Form.css"
import { useState } from 'react'



const Form = (props) => {

    const [BMIString, setBMIString] = useState("")

    const units = () => {
        let result = {}
        if (props.status){
            result = {height: ["feet", "inches"],
        weight: ["lbs"]}
        }
        else {
            result = {height: "cm",
        weight: "kg"}
        }
        return result
    }

    var heightFeet = 0
    var heightInches = 0
    var weightLbs = 0
    var heightCm = 0
    var weightKg = 0
    var BMI = 0
    var BMIStatus = ""

    const setHeightCm = (e) => {
        heightCm = e.target.value
    }

    const setWeightKg = (e) => {
        weightKg = e.target.value
    }
    const setHeightFeet = (e) => {
        heightFeet = e.target.value
    }
    const setHeightInches = (e) => {
        heightInches = e.target.value
    }
    const setWeightLbs = (e) => {
        weightLbs = e.target.value
    }

    const metricSubmitHandler = (e) => {
        e.preventDefault()
        e.target.children[0].children[1].value = ""
        e.target.children[1].children[1].value = ""
        BMI = parseFloat(weightKg) / ((heightCm/100.0) ** 2)
        BMI = BMI.toFixed(2)
        if (BMI > 40) {
            BMIStatus = "Extremely Obese"
        }
        else if (BMI >= 30) {
            BMIStatus = "Obese"
        }
        else if (BMI >= 25) {
            BMIStatus = "Overweight"
        }
        else if (BMI >= 18.5) {
            BMIStatus = "Normal"
        }
        else {
            BMIStatus = "Underweight"
        }
        setBMIString(`Your Body Mass Index is ${BMI}, This is Considered ${BMIStatus}`)
    }

    const imperialSubmitHandler = (e) => {
        e.preventDefault()
        e.target.children[0].children[1].value = ""
        e.target.children[0].children[2].value = ""
        e.target.children[1].children[1].value = ""
        heightInches = parseFloat(heightInches) + (parseFloat(heightFeet) * 12)
        console.log(heightInches)
        weightLbs = parseFloat(weightLbs) * 703 
        console.log(weightLbs)
        BMI = weightLbs / (heightInches ** 2)
        BMI = BMI.toFixed(2)
        if (BMI > 40) {
            BMIStatus = "Extremely Obese"
        }
        else if (BMI >= 30) {
            BMIStatus = "Obese"
        }
        else if (BMI >= 25) {
            BMIStatus = "Overweight"
        }
        else if (BMI >= 18.5) {
            BMIStatus = "Normal"
        }
        else {
            BMIStatus = "Underweight"
        }
        setBMIString(`Your Body Mass Index is ${BMI}, This is Considered ${BMIStatus}`)
    }


    if (!props.status) {
    return (
        <div className="mainContainer">
            <form onSubmit = {metricSubmitHandler}>
                <div className = "heightInput">
                    <label>Enter Your Height: </label>
                    <input type = "number" min = "0" max = "999" maxLength = "3" placeholder = "cm" required onChange={setHeightCm}></input>
                </div>
                <div className = "weightInput">
                    <label>Enter Your Weight: </label>
                    <input type = "number" min = "0" max = "999" maxLength = "3" placeholder = "kg" required onChange={setWeightKg}></input>
                </div>
                <button type = "submit" className ="submitButton">CALCULATE</button>
            </form>
            <div className = "resultContainer">{BMIString}</div>
        </div>
    )
}
else {
    return (
        <div className="mainContainer">
            <form onSubmit = {imperialSubmitHandler}>
                <div className = "heightInput">
                    <label>Enter Your Height: </label>
                    <input type = "number" min = "0" max = "999" maxLength = "3" placeholder = "feet" required onChange={setHeightFeet}></input>
                    <input type = "number" min = "0" max = "999" maxLength = "3" placeholder = "inches" required onChange={setHeightInches}></input>
                </div>
                <div className = "weightInput">
                    <label>Enter Your Weight: </label>
                    <input type = "number" min = "0" max = "999" maxLength = "3" placeholder = "lbs" required onChange={setWeightLbs}></input>
                </div>
                <button type = "submit" className ="submitButton">CALCULATE</button>
            </form>
            <div className = "resultContainer">{BMIString}</div>
        </div>
    )
}
}

export default Form