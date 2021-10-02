import { useState, useEffect } from "react"

export default function ReadOnlyduration(props) {
    let [hours, setHours] = useState('');

    const secondsToMinuteSecondString = () => {
        var convertedMinutes = Math.floor(props.Seconds / 60);
        setHours(Math.floor(convertedMinutes/60));
    }

    useEffect(() => secondsToMinuteSecondString());

    return (
        <div className="card">
            <div className="card-header">
                Fuel
            </div>
            <div className="card-body">
                <span className="result">
                    Hours : {hours} {props.Seconds}
                        <div>1.5L Water (300-400 per hour)</div>
                        <div>500 Carbs (40-60 grams per hour)</div>
                        <div>15 Percy Pigs</div> 
                    
                </span>
            </div>
        </div>
    )
}